import { AlertCircle, FileSpreadsheet, Clock, Eye } from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Dados fragmentados",
    description: "Planilhas em drives diferentes, sistemas que não conversam, informação duplicada.",
  },
  {
    icon: AlertCircle,
    title: "Relatórios desconectados",
    description: "Cada área com sua versão da verdade. Ninguém sabe qual número confiar.",
  },
  {
    icon: Clock,
    title: "Decisões tardias",
    description: "Quando o problema aparece no relatório, já virou prejuízo.",
  },
  {
    icon: Eye,
    title: "Execução sem visibilidade",
    description: "A operação acontece, mas ninguém consegue enxergar o que está funcionando.",
  },
];

const PainPointsSection = () => {
  return (
    <section id="problema" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            O cenário que você conhece
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Você já sabe que o problema existe.
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            O trade marketing opera com urgência, mas as ferramentas disponíveis não acompanham 
            a realidade do campo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card-elevated p-6 transition-all duration-300 hover:border-secondary/30"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <point.icon className="h-5 w-5 text-destructive" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
