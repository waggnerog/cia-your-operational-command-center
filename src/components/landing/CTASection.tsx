import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadCaptureModal from "./LeadCaptureModal";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="relative rounded-3xl bg-primary p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl" />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-heading md:text-display-sm text-primary-foreground mb-4">
              Menos achismo. Mais decisão.
            </h2>
            <p className="text-body-lg text-primary-foreground/70 mb-8">
              Quando a execução precisa virar dado confiável — e não apenas relatório — 
              o CIA deixa de ser opção e passa a ser estrutura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-teal-dark group"
                onClick={() => setIsModalOpen(true)}
              >
                Avaliar minha operação
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setIsModalOpen(true)}
              >
                Conversar com especialista
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LeadCaptureModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default CTASection;
