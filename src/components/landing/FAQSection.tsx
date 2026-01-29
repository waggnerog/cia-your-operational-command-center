import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o CIA – Console Integrado de Análise?",
    answer: "O CIA é um console operacional B2B desenvolvido para centralizar e organizar dados de trade marketing. Ele reúne informações de PDV, campanhas, indicadores de performance e relatórios em um único ambiente, permitindo decisões mais rápidas e baseadas em dados reais."
  },
  {
    question: "Para quem o CIA é indicado?",
    answer: "O CIA foi projetado para agências de trade marketing, indústrias com operação em campo e times internos que precisam gerenciar múltiplas campanhas, clientes e pontos de venda simultaneamente. É ideal para quem precisa de visibilidade operacional em tempo real."
  },
  {
    question: "O CIA substitui ferramentas de BI como Power BI ou Tableau?",
    answer: "O CIA não é uma ferramenta de BI genérica. Ele é um console operacional focado em trade marketing, com módulos específicos para gestão de PDV, campanhas e indicadores. Pode ser usado em conjunto com ferramentas de BI ou como solução independente para operações de campo."
  },
  {
    question: "Como funciona o controle de acesso multi-tenant?",
    answer: "O CIA permite criar ambientes isolados para diferentes clientes ou operações, com controle granular de permissões. Cada usuário visualiza apenas os dados e módulos aos quais tem acesso, garantindo segurança e organização em operações complexas."
  },
  {
    question: "É possível fazer upload massivo de dados?",
    answer: "Sim. O CIA suporta upload global de dados via planilhas e integrações, permitindo atualizar informações de múltiplos PDVs, campanhas ou indicadores de forma centralizada e eficiente."
  },
  {
    question: "Quanto tempo leva para implementar o CIA?",
    answer: "O tempo de implementação varia conforme a complexidade da operação, mas a estrutura modular do CIA permite começar com os módulos essenciais e expandir gradualmente. Oferecemos acompanhamento durante todo o processo de onboarding."
  },
  {
    question: "Como solicito uma demonstração?",
    answer: "Basta clicar no botão 'Solicitar Acesso' em qualquer parte da página. Você será direcionado para nosso WhatsApp, onde um especialista entrará em contato para agendar uma demonstração personalizada."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium text-sm tracking-wide uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="text-display-sm md:text-display mt-3 text-foreground">
            Perguntas & Respostas
          </h2>
          <p className="text-body-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre o CIA e como ele pode transformar sua operação de trade marketing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
