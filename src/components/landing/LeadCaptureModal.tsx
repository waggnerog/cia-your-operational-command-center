import { useState } from "react";
import { MessageCircle, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "5511952855141";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, gostaria de avaliar minha operação com o CIA – Console Integrado de Análise. Podem entrar em contato?"
);

const leadSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  company: z.string().trim().max(100, "Nome da empresa muito longo").optional(),
  message: z.string().trim().max(1000, "Mensagem muito longa").optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureModal = ({ open, onOpenChange }: LeadCaptureModalProps) => {
  const [step, setStep] = useState<"choice" | "form" | "success">("choice");
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank",
      "noopener,noreferrer"
    );
    onOpenChange(false);
  };

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = leadSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof LeadFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Save lead to database
    const { error } = await supabase.from("leads").insert({
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      company: result.data.company || null,
      message: result.data.message || null,
      source: "website",
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
      return;
    }

    setStep("success");

    toast({
      title: "Dados enviados com sucesso!",
      description: "Entraremos em contato em breve.",
    });
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setStep("choice");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setErrors({});
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === "choice" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Como prefere falar conosco?</DialogTitle>
              <DialogDescription>
                Escolha a forma mais conveniente para você
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <Button
                size="lg"
                className="w-full h-auto py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white group"
                onClick={handleWhatsApp}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-xs opacity-90">Resposta imediata</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                </div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full h-auto py-4 group"
                onClick={() => setStep("form")}
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Preencher formulário</div>
                    <div className="text-xs text-muted-foreground">Entraremos em contato</div>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </div>
          </>
        )}

        {step === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Deixe seus dados</DialogTitle>
              <DialogDescription>
                Preencha o formulário e entraremos em contato
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className={errors.company ? "border-destructive" : ""}
                />
                {errors.company && (
                  <p className="text-xs text-destructive">{errors.company}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={errors.message ? "border-destructive" : ""}
                  rows={3}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("choice")}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
          </>
        )}

        {step === "success" && (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-xl">Obrigado pelo contato!</DialogTitle>
              <DialogDescription className="mt-2">
                Recebemos seus dados e entraremos em contato em breve.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={handleClose}
              className="mt-6 bg-primary hover:bg-primary/90"
            >
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
