import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Twitter, Facebook, Youtube, Mail, Share2, Users, Globe, Star, Gamepad2, ChefHat, TrendingUp, MessageCircle } from "lucide-react";

const Social = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Modern professional background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-brand-secondary/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-brand-secondary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-brand-primary rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10 max-w-7xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-white/70 hover:text-brand-primary transition-all duration-300 mb-12 group backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-brand-primary/30"
        >
          <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Torna alla Home</span>
        </Link>
        
        <div className="max-w-6xl mx-auto">
          {/* Hero Section - Ultra Professional */}
          <div className="text-center mb-32">
            <div className="relative inline-block mb-16">
              <div className="absolute -inset-8 bg-gradient-to-r from-brand-primary/30 via-brand-secondary/30 to-brand-accent/30 opacity-20 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative">
                <div className="flex items-center justify-center gap-8 mb-12">
                  <div className="group p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-brand-primary/30 transition-all duration-500 hover:scale-110">
                    <Share2 className="h-16 w-16 text-brand-primary group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-brand-secondary/30 transition-all duration-500 hover:scale-110">
                    <Gamepad2 className="h-16 w-16 text-brand-secondary group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-brand-accent/30 transition-all duration-500 hover:scale-110">
                    <ChefHat className="h-16 w-16 text-brand-accent group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
                <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-brand-primary to-brand-secondary bg-clip-text text-transparent leading-none tracking-tight">
                  CONNECT
                </h1>
                <div className="text-2xl md:text-3xl font-light text-white/60 tracking-[0.3em] mt-6 uppercase">
                  with food guess
                </div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed font-light">
              Entra nella <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-semibold">community più innovativa</span> del food gaming. 
              <br className="hidden md:block" />
              Condividi, compete e conquista con chef digitali da tutto il mondo.
            </p>
          </div>

          {/* Premium Social Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
            {/* Instagram - Premium Design */}
            <a 
              href="https://instagram.com/loc8abite_official" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 hover:border-gradient-to-r hover:border-brand-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2 backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <Instagram className="h-16 w-16 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  <div className="p-3 rounded-full bg-brand-primary/20 group-hover:bg-brand-primary/30 transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 text-brand-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-primary transition-colors duration-300">Instagram</h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-brand-primary font-bold bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 px-6 py-3 rounded-full border border-brand-primary/30">
                    @loc8abite_official
                  </div>
                </div>
              </div>
            </a>
            
            {/* YouTube - Premium Design */}
            <a 
              href="https://youtube.com/@loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <Youtube className="h-16 w-16 text-red-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  <div className="p-3 rounded-full bg-red-500/20 group-hover:bg-red-500/30 transition-colors duration-300">
                    <Star className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-red-500 transition-colors duration-300">YouTube</h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-red-500 font-bold bg-gradient-to-r from-red-500/20 to-red-500/10 px-6 py-3 rounded-full border border-red-500/30">
                    Loc8abite Gaming
                  </div>
                </div>
              </div>
            </a>

            {/* Discord - Premium Design */}
            <a 
              href="https://discord.gg/loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 backdrop-blur-lg md:col-span-2 xl:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <svg className="h-16 w-16 text-indigo-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <div className="p-3 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <MessageCircle className="h-6 w-6 text-indigo-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-indigo-500 transition-colors duration-300">Discord</h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-indigo-500 font-bold bg-gradient-to-r from-indigo-500/20 to-indigo-500/10 px-6 py-3 rounded-full border border-indigo-500/30">
                    discord.gg/loc8abite
                  </div>
                </div>
              </div>
            </a>

            {/* Twitter/X */}
            <a 
              href="https://twitter.com/loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2 backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <Twitter className="h-16 w-16 text-white group-hover:scale-125 transition-all duration-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4">X (Twitter)</h3>
                <div className="text-sm text-white font-bold bg-white/10 px-6 py-3 rounded-full border border-white/20">
                  @loc8abite
                </div>
              </div>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com/loc8abite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <Facebook className="h-16 w-16 text-blue-500 group-hover:scale-125 transition-all duration-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-500 transition-colors duration-300">Facebook</h3>
                <div className="text-sm text-blue-500 font-bold bg-blue-500/10 px-6 py-3 rounded-full border border-blue-500/30">
                  Loc8abite Community
                </div>
              </div>
            </a>

            {/* Email Contact */}
            <a 
              href="mailto:info@loc8abite.com" 
              className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 hover:border-brand-secondary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-secondary/20 hover:-translate-y-2 backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <Mail className="h-16 w-16 text-brand-secondary group-hover:scale-125 transition-all duration-500" />
                  <div className="p-3 rounded-full bg-brand-secondary/20">
                    <Users className="h-6 w-6 text-brand-secondary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-secondary transition-colors duration-300">Email</h3>
                <div className="text-sm text-brand-secondary font-bold bg-brand-secondary/10 px-6 py-3 rounded-full border border-brand-secondary/30">
                  info@loc8abite.com
                </div>
              </div>
            </a>
          </div>
          
          {/* Premium Hashtag Section */}
          <div className="relative mb-32">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-3xl blur-3xl opacity-60"></div>
            <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-16 rounded-3xl border border-white/20 text-center">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  #FOODGUESS
                </h2>
                <p className="text-white/70 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
                  Usa i nostri hashtag ufficiali per entrare nella community globale e partecipare ai contest più esclusivi
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <span className="bg-gradient-to-r from-brand-primary/30 to-brand-primary/20 text-brand-primary px-10 py-5 rounded-full text-2xl font-bold border border-brand-primary/40 hover:scale-110 hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  #loc8abite
                </span>
                <span className="bg-gradient-to-r from-brand-secondary/30 to-brand-secondary/20 text-brand-secondary px-10 py-5 rounded-full text-2xl font-bold border border-brand-secondary/40 hover:scale-110 hover:shadow-xl hover:shadow-brand-secondary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  #foodguess
                </span>
                <span className="bg-gradient-to-r from-brand-accent/30 to-brand-accent/20 text-brand-accent px-10 py-5 rounded-full text-2xl font-bold border border-brand-accent/40 hover:scale-110 hover:shadow-xl hover:shadow-brand-accent/30 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  #foodgaming
                </span>
                <span className="bg-gradient-to-r from-white/20 to-white/10 text-white px-10 py-5 rounded-full text-2xl font-bold border border-white/30 hover:scale-110 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  #culinarygame
                </span>
              </div>
            </div>
          </div>

          {/* Premium Call to Action */}
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-16 rounded-3xl border border-white/20">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-white via-brand-primary to-brand-secondary bg-clip-text text-transparent leading-tight">
                  DIVENTA PARTE DELLA RIVOLUZIONE
                </h3>
                <p className="text-white/70 text-xl md:text-2xl leading-relaxed mb-12 font-light">
                  Unisciti alla community più appassionata e professionale del food gaming. 
                  <br className="hidden md:block" />
                  Il futuro della cucina digitale inizia qui, con te.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 rounded-full text-white font-bold text-lg border border-brand-primary/30 backdrop-blur-sm">
                    🏆 Community Globale
                  </div>
                  <div className="bg-gradient-to-r from-white/10 to-white/5 px-8 py-4 rounded-full text-white font-bold text-lg border border-white/20 backdrop-blur-sm">
                    🌍 Available Worldwide
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

export default Social;