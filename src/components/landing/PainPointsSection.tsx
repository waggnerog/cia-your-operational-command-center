const PainPointsSection = () => {
  return (
    <section id="problema" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
            A dor real do mercado
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            O problema não é executar.{" "}
            <span className="text-secondary">É não enxergar.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8 md:p-10">
            <p className="text-body-lg text-foreground mb-6">
              Agências de trade marketing, field marketing, live marketing e eventos executam operações complexas todos os dias.
            </p>
            <p className="text-body-lg text-foreground font-semibold mb-6">
              O problema começa depois da ação.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">Fotos ficam soltas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">Planilhas não conversam entre si.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">Relatórios são montados sob pressão.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">E a visibilidade real da operação se perde.</span>
              </li>
            </ul>

            <p className="text-body text-muted-foreground border-t border-border pt-6">
              No live marketing e em eventos, essa dor é ainda mais crítica: ações caras, equipes grandes, múltiplos pontos de contato e pouca rastreabilidade do que realmente aconteceu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
