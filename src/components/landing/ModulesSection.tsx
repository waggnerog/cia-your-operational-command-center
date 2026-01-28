import { Map, Camera, Target, Navigation, Calendar, Phone } from "lucide-react";

const modules = [
  {
    icon: Map,
    name: "Mapa da Operação",
    description: "Visão consolidada por região, bandeira e período. Entenda onde sua equipe está atuando.",
  },
  {
    icon: Camera,
    name: "Fotos de Campo",
    description: "Todas as fotos do PDV organizadas, com filtros e navegação rápida por loja ou data.",
  },
  {
    icon: Target,
    name: "Efetividade",
    description: "Acompanhamento da execução planejada vs. realizada. Métricas claras, sem interpretação.",
  },
  {
    icon: Navigation,
    name: "Tracking de Pesquisa",
    description: "Evolução semanal dos indicadores de pesquisa, comparativos por região e tendência.",
  },
  {
    icon: Calendar,
    name: "Data Crítica",
    description: "Controle de validade e ruptura. Alertas automáticos para ação preventiva.",
  },
  {
    icon: Phone,
    name: "Base de Telefones",
    description: "Módulo core com contatos da operação. Atualização centralizada, acesso controlado.",
  },
];

const ModulesSection = () => {
  return (
    <section id="modulos" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            Módulos
          </p>
          <h2 className="text-heading md:text-display-sm mb-4">
            Tudo que a operação precisa.{" "}
            <span className="text-secondary">Nada que não precisa.</span>
          </h2>
          <p className="text-body-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Cada módulo foi desenhado para resolver um problema real do dia a dia 
            de quem gerencia execução no varejo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 
                         hover:bg-primary-foreground/10 hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <module.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{module.name}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
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
