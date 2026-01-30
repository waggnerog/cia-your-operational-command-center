import ciaDashboardOffice from "@/assets/cia-dashboard-office.png";

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - System Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src={ciaDashboardOffice}
                alt="CIA - Console Integrado de Análise"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
              O que é o CIA
            </p>
            <h2 className="text-heading md:text-display-sm text-foreground mb-6">
              Um console operacional para decidir com base no que{" "}
              <span className="text-secondary">realmente aconteceu.</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              O CIA — Console Integrado de Análise — centraliza toda a execução operacional em um único ambiente.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-foreground">
                <span className="font-semibold">Não é um BI genérico.</span>
              </p>
              <p className="text-foreground">
                <span className="font-semibold">Não é um dashboard engessado.</span>
              </p>
            </div>

            <p className="text-body text-muted-foreground border-l-2 border-secondary pl-4">
              É um console usado diariamente por analistas e gestores que precisam transformar execução física em evidência clara, organizada e confiável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
