import { Check } from "lucide-react";
import ciaDashboardOffice from "@/assets/cia-dashboard-office.png";

const benefits = [
  "Dados operacionais centralizados em uma única interface",
  "Visualização por região, bandeira ou período",
  "Informação do campo em tempo real",
  "Controle granular por perfil de acesso",
  "Workspaces isolados por cliente",
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - System Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={ciaDashboardOffice}
                alt="CIA - Console Integrado de Análise"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
              A solução
            </p>
            <h2 className="text-heading md:text-display-sm text-foreground mb-6">
              Um console para quem{" "}
              <span className="text-secondary">decide</span> com base no campo.
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              O CIA organiza toda a informação operacional em uma interface pensada para 
              análise e ação. Não é um dashboard genérico — é uma ferramenta construída 
              por quem entende a rotina de quem vive trade marketing.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-secondary" />
                    </div>
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
