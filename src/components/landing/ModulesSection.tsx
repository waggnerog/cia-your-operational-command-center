import { Map, Camera, Target, Navigation, Calendar, Phone } from "lucide-react";

const modules = [
  {
    icon: Map,
    name: "Mapa da Operação",
    description: "Visão clara da cobertura, lojas, rotas e execução real.",
  },
  {
    icon: Camera,
    name: "Fotos de Campo",
    description: "Registro visual contextualizado, rastreável e auditável.",
  },
  {
    icon: Target,
    name: "Efetividade",
    description: "Planejado versus realizado, sem ruído ou interpretação subjetiva.",
  },
  {
    icon: Navigation,
    name: "Tracking",
    description: "Acompanhamento contínuo da execução ao longo do tempo.",
  },
  {
    icon: Calendar,
    name: "Data Crítica",
    description: "Controle ativo de validade, ruptura e riscos operacionais.",
  },
  {
    icon: Phone,
    name: "Base de Telefones",
    description: "O núcleo do sistema. Comunicação direta com quem executa.",
  },
];

const ModulesSection = () => {
  return (
    <section id="modulos" className="section-padding bg-primary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            Principais Módulos
          </p>
          <h2 className="text-heading md:text-display-sm text-primary-foreground mb-4">
            Tudo o que acontece em campo,{" "}
            <span className="text-secondary">organizado para decisão.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-navy-light/50 border border-primary-foreground/10 
                         hover:bg-navy-light hover:border-secondary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                <module.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-primary-foreground mb-3">
                {module.name}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
