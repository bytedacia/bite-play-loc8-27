import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Twitter, Facebook, Youtube, Mail, Share2, Sparkles, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Social = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 text-foreground relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-secondary transition-all duration-300 mb-12 group bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Torna alla Home
        </Link>
        
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-70"></div>
                <div className="relative p-4 bg-gradient-to-r from-primary to-secondary rounded-3xl">
                  <Share2 className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Social Hub
              </h1>
              <div className="relative">
                <Sparkles className="h-8 w-8 text-accent animate-pulse" />
              </div>
            </div>
            <p className="text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Unisciti alla nostra <span className="text-primary font-bold">community globale</span> e 
              vivi l'esperienza culinaria più coinvolgente del web
            </p>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/30">
              <Play className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">Scopri la magia del food gaming</span>
            </div>
          </div>

          {/* Social Platform Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-3 border-primary/20 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Instagram</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Foto spettacolari dei piatti più belli, stories esclusive e dietro le quinte del progetto
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-primary font-semibold">@loc8abite_official</div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/30 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-700 hover:-translate-y-3 border-secondary/20 hover:border-secondary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Twitter className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">Twitter</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Aggiornamenti in tempo reale, news del progetto e interazioni dirette con la community
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-secondary font-semibold">@loc8abite</div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/30 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:-translate-y-3 border-accent/20 hover:border-accent/50">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">Facebook</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Community attiva, eventi culinari dal vivo e discussioni approfondite sui piatti
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-accent font-semibold">Loc8abite Community</div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/30 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-700 hover:-translate-y-3 border-red-500/20 hover:border-red-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-red-500/20 to-red-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Youtube className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-red-500 transition-colors">YouTube</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Tutorial esclusivi, gameplay commentati e contenuti video premium per i veri appassionati
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-red-500 font-semibold">Loc8abite Gaming</div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/30 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 hover:-translate-y-3 border-emerald-500/20 hover:border-emerald-500/50 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-emerald-500 transition-colors">Email</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Contatto diretto per partnership, collaborazioni e proposte commerciali
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-emerald-500 font-semibold">info@loc8abite.com</div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Hashtag Section */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-2xl"></div>
            <Card className="relative bg-gradient-to-r from-card/90 to-card/70 backdrop-blur-xl border-primary/30">
              <CardContent className="p-16 text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Sparkles className="h-8 w-8 text-primary animate-spin" />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Hashtag Ufficiali
                  </h2>
                  <Sparkles className="h-8 w-8 text-secondary animate-spin" style={{ animationDirection: 'reverse' }} />
                </div>
                <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Usa questi hashtag per far parte della community e condividere le tue esperienze culinarie con il mondo
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { tag: '#loc8abite', color: 'primary' },
                    { tag: '#foodguess', color: 'secondary' },
                    { tag: '#foodgaming', color: 'accent' },
                    { tag: '#culinarygame', color: 'primary' }
                  ].map((item, index) => (
                    <div
                      key={item.tag}
                      className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}/20 to-${item.color}/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                      <div className={`relative bg-gradient-to-r from-${item.color}/20 to-${item.color}/10 text-${item.color} px-8 py-4 rounded-2xl text-xl font-bold border border-${item.color}/30 group-hover:border-${item.color}/60 backdrop-blur-sm`}>
                        {item.tag}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse"></div>
            <CardContent className="relative p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Play className="h-8 w-8 text-primary animate-bounce" />
                <h3 className="text-3xl font-bold text-primary">
                  Non perdere nemmeno un aggiornamento!
                </h3>
                <Play className="h-8 w-8 text-secondary animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Seguici su tutte le piattaforme per rimanere sempre connesso con la community più appassionata di 
                <span className="text-primary font-bold"> food gaming</span> al mondo
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Social;