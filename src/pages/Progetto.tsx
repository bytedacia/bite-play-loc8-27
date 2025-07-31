import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Code, Sparkles, Globe, Trophy, Heart, Zap, Lightbulb, Star, Award, Rocket } from "lucide-react";

const Progetto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-brand-primary/5 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--brand-primary)/0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--brand-secondary)/0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      
      <div className="relative container mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-all duration-300 hover:scale-105 mb-16 group bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-primary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </Link>
        
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Professionale */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="relative inline-block mb-12">
              <div className="relative">
                <img 
                  src="/lovable-uploads/c797b669-1094-4e0e-bc36-6faef0818cd5.png" 
                  alt="Loc8ABite Logo" 
                  className="w-56 h-auto mx-auto drop-shadow-2xl hover:scale-105 transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(120,119,198,0.4)]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
              </div>
            </div>
            
            <div className="space-y-6 mb-12">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent leading-tight">
                Loc8ABite
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-foreground/90 max-w-4xl mx-auto leading-relaxed">
                Rivoluzionare l'esperienza culinaria attraverso<br />
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-bold">
                  Social Gaming e Tecnologia
                </span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-card/40 backdrop-blur-sm p-6 rounded-2xl border border-brand-primary/20">
                <Star className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                <p className="font-semibold text-brand-primary">Innovazione</p>
                <p className="text-sm text-foreground/70 mt-1">Tecnologia all'avanguardia</p>
              </div>
              <div className="bg-card/40 backdrop-blur-sm p-6 rounded-2xl border border-brand-secondary/20">
                <Award className="h-8 w-8 text-brand-secondary mx-auto mb-3" />
                <p className="font-semibold text-brand-secondary">Qualità</p>
                <p className="text-sm text-foreground/70 mt-1">Standard professionali</p>
              </div>
              <div className="bg-card/40 backdrop-blur-sm p-6 rounded-2xl border border-brand-accent/20">
                <Rocket className="h-8 w-8 text-brand-accent mx-auto mb-3" />
                <p className="font-semibold text-brand-accent">Performance</p>
                <p className="text-sm text-foreground/70 mt-1">Ottimizzazione continua</p>
              </div>
            </div>
          </div>
          
          {/* Sezione Vision Professionale */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                La Nostra Vision
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Trasformare il modo in cui le persone scoprono, condividono e vivono 
                l'esperienza culinaria attraverso tecnologie innovative e social gaming.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/30 hover:border-brand-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-primary/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-t-3xl"></div>
                <div className="bg-gradient-to-br from-brand-primary to-brand-primary/80 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-brand-primary">Missione</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Democratizzare la scoperta culinaria globale attraverso un'esperienza 
                  di gioco coinvolgente che unisce cultura, tecnologia e community.
                </p>
              </div>
              
              <div className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm p-8 rounded-3xl border border-brand-secondary/30 hover:border-brand-secondary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-secondary/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-t-3xl"></div>
                <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary/80 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-brand-secondary">Community</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Costruire una rete globale di appassionati gastronomici che 
                  condividono, scoprono e celebrano la diversità culinaria mondiale.
                </p>
              </div>
              
              <div className="group relative bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm p-8 rounded-3xl border border-brand-accent/30 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-accent/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-t-3xl"></div>
                <div className="bg-gradient-to-br from-brand-accent to-brand-accent/80 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-brand-accent">Innovazione</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Sviluppare soluzioni tecnologiche all'avanguardia che rendano 
                  l'apprendimento culinario accessibile, divertente e significativo.
                </p>
              </div>
            </div>
          </div>

          {/* Caratteristiche Principali */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Caratteristiche Innovative
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Un ecosistema completo di funzionalità progettate per offrire 
                un'esperienza culinaria senza precedenti.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-brand-primary/15 to-brand-primary/5 p-8 rounded-2xl border border-brand-primary/25 text-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-brand-primary to-brand-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-brand-primary mb-3">Esplorazione Globale</h4>
                <p className="text-foreground/75">Scopri autentiche ricette e tradizioni culinarie da ogni continente</p>
              </div>
              
              <div className="bg-gradient-to-br from-brand-secondary/15 to-brand-secondary/5 p-8 rounded-2xl border border-brand-secondary/25 text-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-brand-secondary to-brand-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-brand-secondary mb-3">Sistema Competitivo</h4>
                <p className="text-foreground/75">Classifiche dinamiche, sfide personalizzate e riconoscimenti</p>
              </div>
              
              <div className="bg-gradient-to-br from-brand-accent/15 to-brand-accent/5 p-8 rounded-2xl border border-brand-accent/25 text-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-brand-accent to-brand-accent/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-brand-accent mb-3">Social Gaming</h4>
                <p className="text-foreground/75">Condividi, commenta e collabora con altri food enthusiast</p>
              </div>
              
              <div className="bg-gradient-to-br from-brand-primary/15 to-brand-accent/5 p-8 rounded-2xl border border-brand-primary/25 text-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-brand-primary to-brand-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-brand-primary mb-3">AI Avanzata</h4>
                <p className="text-foreground/75">Algoritmi intelligenti per personalizzazione e raccomandazioni</p>
              </div>
            </div>
          </div>

          {/* Sezione Tecnologia Professionale */}
          <div className="bg-gradient-to-br from-card/70 to-card/50 backdrop-blur-lg p-12 rounded-3xl border border-brand-primary/30 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-secondary/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-4 rounded-2xl mr-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    Architettura Tecnologica
                  </h2>
                </div>
                <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                  Una piattaforma costruita con tecnologie enterprise-grade per garantire 
                  scalabilità, sicurezza e performance ottimali nell'ecosistema digitale moderno.
                </p>
              </div>
              
              {/* Stack Tecnologico Avanzato */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="group bg-gradient-to-br from-brand-primary/10 to-transparent p-8 rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">Frontend</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="font-medium text-foreground/90">React 18+ & TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-primary/70 rounded-full"></div>
                      <span className="text-foreground/80">Vite & ESBuild</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-primary/50 rounded-full"></div>
                      <span className="text-foreground/80">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-brand-secondary/10 to-transparent p-8 rounded-2xl border border-brand-secondary/20 hover:border-brand-secondary/40 transition-all duration-300">
                  <div className="bg-gradient-to-r from-brand-secondary to-brand-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-secondary mb-4">Core</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                      <span className="font-medium text-foreground/90">JavaScript ES2024</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-secondary/70 rounded-full"></div>
                      <span className="text-foreground/80">PWA Ready</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-secondary/50 rounded-full"></div>
                      <span className="text-foreground/80">Responsive Design</span>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-brand-accent/10 to-transparent p-8 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300">
                  <div className="bg-gradient-to-r from-brand-accent to-brand-accent/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-accent mb-4">Cloud</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="font-medium text-foreground/90">Scalable Infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent/70 rounded-full"></div>
                      <span className="text-foreground/80">Global CDN</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent/50 rounded-full"></div>
                      <span className="text-foreground/80">Real-time Sync</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5 rounded-2xl p-8 border border-brand-primary/15">
                <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                  Performance & Qualità
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-primary mb-2">99.9%</div>
                    <p className="text-foreground/70">Uptime</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-secondary mb-2">&lt;100ms</div>
                    <p className="text-foreground/70">Response Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-accent mb-2">A+</div>
                    <p className="text-foreground/70">Security Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-primary mb-2">98/100</div>
                    <p className="text-foreground/70">Performance Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progetto;