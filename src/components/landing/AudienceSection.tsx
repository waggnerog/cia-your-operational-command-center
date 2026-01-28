import { Building2, Factory, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Agências de Trade Marketing",
    description: "Gerencie múltiplas operações com workspaces dedicados. Controle de acesso por cliente, dados isolados, relatórios personalizados.",
  },
  {
    icon: Factory,
    title: "Indústrias",
    description: "Visibilidade real da execução em campo. Acompanhe a operação que você contrata ou executa internamente.",
  },
  {
    icon: Users,
    title: "Times Internos de Execução",
    description: "Centralize a gestão operacional da sua equipe. Uma ferramenta só, para toda a cadeia de decisão.",
  },
];

const AudienceSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            Para quem é
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Feito para quem <span className="text-secondary">opera</span> de verdade.
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            O CIA foi construído em cima de demandas reais de quem precisa 
            tomar decisões rápidas sobre execução no ponto de venda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-muted/50 border border-border hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <audience.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">{audience.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
