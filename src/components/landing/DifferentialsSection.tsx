import { Layers, Lock, Upload, Gauge, Database, TrendingUp } from "lucide-react";

const differentials = [
  {
    icon: Layers,
    title: "Workspaces por cliente",
  },
  {
    icon: Lock,
    title: "Controle de acesso por perfil",
  },
  {
    icon: Upload,
    title: "Upload único global",
  },
  {
    icon: Gauge,
    title: "Operação centralizada",
  },
  {
    icon: Database,
    title: "Sem dependência de BI externo",
  },
  {
    icon: TrendingUp,
    title: "Estrutura pensada para escala e múltiplas operações",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            Diferenciais reais
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Controle operacional,{" "}
            <span className="text-secondary">não narrativa.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-md hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <diff.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="font-medium text-foreground">{diff.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
