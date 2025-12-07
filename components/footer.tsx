export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold">柔</span>
              </div>
              <span className="font-serif font-bold text-lg">Club de Judo</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Formando campeones. Tradición, disciplina y excelencia en cada clase.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#historia" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Clases</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Infantil (5-12 años)</li>
              <li>Juvenil (13-17 años)</li>
              <li>Adultos</li>
              <li>Competición</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Síguenos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/club_judo_ikikata/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Club de Judo Ikikata. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
