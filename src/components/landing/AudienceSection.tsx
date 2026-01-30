import { Building2, Megaphone, Sparkles, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Agências de Trade Marketing",
  },
  {
    icon: Megaphone,
    title: "Agências de Field Marketing",
  },
  {
    icon: Sparkles,
    title: "Agências de Live Marketing e Eventos",
  },
  {
    icon: Users,
    title: "Times Internos de Execução e Operação",
  },
];

const AudienceSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            Para quem é
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Criado para quem{" "}
            <span className="text-secondary">vive a operação.</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            O CIA é usado por:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-muted/50 border border-border hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">{audience.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-body-lg text-muted-foreground font-medium">
          Se sua operação acontece no campo, o CIA foi feito para ela.
        </p>
      </div>
    </section>
  );
};

export default AudienceSection;
