import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Play, 
  Search, 
  Music,
  X
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  preview_url: string | null;
  external_urls: { spotify: string };
  album: {
    images: { url: string }[];
  };
}

const SpotifyMusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'playlist' | 'search'>('playlist');
  const { toast } = useToast();

  // Playlist incorporata
  const playlistId = '0OEou4QJ18fRQEd8yrc2jq';

  const searchTracks = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('spotify-search', {
        body: { query: searchQuery }
      });

      if (error) throw error;
      
      setTracks(data.tracks?.items || []);
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Errore",
        description: "Impossibile cercare la musica",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const playTrack = (track: Track) => {
    // Apri la canzone completa su Spotify
    window.open(track.external_urls.spotify, '_blank');
    toast({
      title: "Canzone aperta su Spotify! 🎵",
      description: `${track.name} - ${track.artists.map(a => a.name).join(', ')}`,
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#1DB954] via-[#1ed760] to-[#1DB954] hover:from-[#1ed760] hover:via-[#1DB954] hover:to-[#1ed760] text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-110 border border-green-400/30 backdrop-blur-sm"
          size="lg"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Music className="h-5 w-5 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-bold tracking-wide">🎵 SPOTIFY</span>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed top-4 right-4 z-50 w-[420px] h-[600px] bg-gradient-to-br from-black via-gray-900 to-black border-2 border-[#1DB954] shadow-2xl shadow-green-500/20 text-white backdrop-blur-sm">
      <div className="h-full flex flex-col relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5"></div>
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-green-500/30 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Music className="h-6 w-6 text-[#1DB954]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="font-bold text-[#1DB954] text-lg">Spotify Player</span>
              <p className="text-xs text-green-300/60">Premium Music Experience</p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-red-500/20 hover:text-red-300 transition-colors duration-300"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content container con tabs */}
        <div className="relative flex-1 flex flex-col">
          {/* Tab buttons */}
          <div className="flex border-b border-green-500/20 bg-black/30">
            <button 
              onClick={() => setActiveTab('playlist')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'playlist' 
                  ? 'text-green-300 border-green-500 bg-green-500/10' 
                  : 'text-white/60 border-transparent hover:bg-green-500/10 hover:border-green-500/50'
              }`}
            >
              🎵 Playlist
            </button>
            <button 
              onClick={() => setActiveTab('search')} 
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'search' 
                  ? 'text-green-300 border-green-500 bg-green-500/10' 
                  : 'text-white/60 border-transparent hover:bg-green-500/10 hover:border-green-500/50'
              }`}
            >
              🔍 Cerca
            </button>
          </div>

          {/* Playlist incorporata */}
          {activeTab === 'playlist' && (
            <div className="flex-1 p-4">
              <iframe
                title="Spotify Embed: Recommendation Playlist"
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: '420px', borderRadius: '12px', border: '1px solid rgba(29, 185, 84, 0.3)' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          )}

          {/* Search section */}
          {activeTab === 'search' && (
            <div className="flex-1 flex flex-col p-4 space-y-4">
              {/* Search input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Cerca brani, artisti, album..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && searchTracks()}
                  className="bg-white/10 border-green-500/30 text-white placeholder:text-white/50 focus:border-green-400"
                />
                <Button 
                  onClick={searchTracks} 
                  disabled={loading}
                  className="bg-[#1DB954] hover:bg-[#1ed760] transition-colors duration-300"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                {tracks.map((track) => (
                  <div 
                    key={track.id}
                    className="flex items-center gap-3 p-3 hover:bg-green-500/10 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-green-500/30"
                    onClick={() => playTrack(track)}
                  >
                    <img 
                      src={track.album.images[0]?.url} 
                      alt={track.name}
                      className="w-12 h-12 rounded-lg shadow-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-white">{track.name}</p>
                      <p className="text-xs text-green-300/70 truncate">
                        {track.artists.map(a => a.name).join(', ')}
                      </p>
                    </div>
                    <Play className="h-5 w-5 text-[#1DB954] flex-shrink-0 hover:scale-110 transition-transform" />
                  </div>
                ))}
                
                {tracks.length === 0 && searchQuery && !loading && (
                  <div className="text-center text-white/60 py-8">
                    <Music className="h-12 w-12 mx-auto mb-2 opacity-30" />
                    <p>Nessun risultato trovato</p>
                  </div>
                )}
              </div>

              {/* Info footer */}
              <div className="text-center text-xs text-green-300/60 border-t border-green-500/20 pt-3">
                🎵 Clicca sui brani per aprirli in Spotify
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SpotifyMusicPlayer;