import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoCia from "@/assets/logo-cia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoCia} alt="CIA Logo" className="h-8 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground tracking-tight">CIA</span>
              <span className="text-[10px] text-muted-foreground leading-none">Console Integrado de Análise</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              O Problema
            </a>
            <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solução
            </a>
            <a href="#modulos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Módulos
            </a>
            <a href="#diferenciais" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Diferenciais
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Entrar
            </Button>
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-navy-light"
              asChild
            >
              <a 
                href="https://wa.me/5511952855141?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20representante%20sobre%20o%20CIA%20%E2%80%93%20Console%20Integrado%20de%20An%C3%A1lise.%20Podem%20entrar%20em%20contato%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Acesso
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                O Problema
              </a>
              <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solução
              </a>
              <a href="#modulos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Módulos
              </a>
              <a href="#diferenciais" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Diferenciais
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                  Entrar
                </Button>
                <Button 
                  size="sm" 
                  className="bg-primary text-primary-foreground hover:bg-navy-light"
                  asChild
                >
                  <a 
                    href="https://wa.me/5511952855141?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20representante%20sobre%20o%20CIA%20%E2%80%93%20Console%20Integrado%20de%20An%C3%A1lise.%20Podem%20entrar%20em%20contato%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Acesso
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
