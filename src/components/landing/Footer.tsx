import logoCia from "@/assets/logo-cia.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoCia} alt="CIA Logo" className="h-11 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight leading-none">CIA</span>
              <span className="text-[10px] text-primary-foreground/60 leading-tight mt-0.5">
                Console Integrado de Análise
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#problema" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              O Problema
            </a>
            <a href="#solucao" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Solução
            </a>
            <a href="#modulos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Módulos
            </a>
            <a href="#diferenciais" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Diferenciais
            </a>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 CIA — Console Integrado de Análise. Todos os direitos reservados.</p>
            <p>Programa de computador de propriedade da PJ 63.315.445/0001-80.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
