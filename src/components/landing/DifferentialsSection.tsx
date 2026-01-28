import { Layers, Lock, Upload, Gauge, Database, Shield } from "lucide-react";

const differentials = [
  {
    icon: Layers,
    title: "Multi-tenant nativo",
    description: "Workspaces isolados por cliente. Dados nunca se misturam.",
  },
  {
    icon: Lock,
    title: "Controle de acesso granular",
    description: "Perfis de visualização por módulo, região ou cliente.",
  },
  {
    icon: Upload,
    title: "Upload único global",
    description: "Carregue uma vez, distribua para todos os workspaces.",
  },
  {
    icon: Gauge,
    title: "Operação centralizada",
    description: "Uma interface para gerenciar toda a cadeia de execução.",
  },
  {
    icon: Database,
    title: "Sem dependência de BI externo",
    description: "Análises prontas, sem precisar exportar para outra ferramenta.",
  },
  {
    icon: Shield,
    title: "Dados protegidos",
    description: "Infraestrutura segura, backups automáticos, conformidade.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            Diferenciais
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Não é mais uma ferramenta.{" "}
            <span className="text-secondary">É a ferramenta.</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Construído com a expertise de quem conhece os desafios reais 
            da execução no varejo brasileiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <diff.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{diff.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
