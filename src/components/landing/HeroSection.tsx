import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import retailStore from "@/assets/retail-store.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      {/* Background banner image */}
      <div className="absolute inset-0">
        <img
          src={retailStore}
          alt="Operação no ponto de venda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>
      
      <div className="container-wide section-padding relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-secondary/20 border border-secondary/30">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-medium text-secondary">Trade Marketing & Execução</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 text-balance leading-tight">
            Execução em campo é cara demais para{" "}
            <span className="text-secondary">virar planilha solta.</span>
          </h1>
          
          <p className="text-body-lg text-primary-foreground/80 mb-8 max-w-xl">
            O CIA é um console operacional criado a partir da rotina real de agências de trade, field, live marketing e eventos, para transformar ações físicas em dados confiáveis e decisões rápidas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group"
              asChild
            >
              <a 
                href="https://wa.me/5511952855141?text=Ol%C3%A1%2C%20gostaria%20de%20avaliar%20minha%20opera%C3%A7%C3%A3o%20com%20o%20CIA%20%E2%80%93%20Console%20Integrado%20de%20An%C3%A1lise.%20Podem%20entrar%20em%20contato%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avaliar minha operação
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a 
                href="https://wa.me/5511952855141?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20o%20CIA.%20Podem%20entrar%20em%20contato%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar com especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
