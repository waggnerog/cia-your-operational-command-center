import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ciaMockup from "@/assets/cia-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="text-xs font-medium text-secondary">Trade Marketing & Execução</span>
            </div>
            
            <h1 className="text-display-sm md:text-display text-foreground mb-6 text-balance">
              A operação de campo,{" "}
              <span className="text-secondary">sob controle.</span>
            </h1>
            
            <p className="text-body-lg text-muted-foreground mb-8 max-w-lg">
              Um console criado para quem precisa decidir com base no que realmente 
              acontece no ponto de venda. Sem ruído. Sem achismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-navy-light group"
              >
                Solicitar Acesso
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-muted"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                Operação ativa em
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-foreground">300+</p>
                  <p className="text-xs text-muted-foreground">Lojas</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-semibold text-foreground">6</p>
                  <p className="text-xs text-muted-foreground">Estados</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-semibold text-foreground">20+</p>
                  <p className="text-xs text-muted-foreground">Bandeiras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={ciaMockup}
                alt="CIA - Console Integrado de Análise em funcionamento"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
