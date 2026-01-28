import { Check } from "lucide-react";
import retailStore from "@/assets/retail-store.jpg";

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
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={retailStore}
                alt="Ponto de venda com operação em execução"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-muted-foreground">Lojas atualizadas hoje</p>
                  <p className="text-xl font-semibold text-foreground">332</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-muted-foreground">Fotos processadas</p>
                  <p className="text-xl font-semibold text-foreground">2.371</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-muted-foreground">Efetividade</p>
                  <p className="text-xl font-semibold text-secondary">94%</p>
                </div>
              </div>
            </div>
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
