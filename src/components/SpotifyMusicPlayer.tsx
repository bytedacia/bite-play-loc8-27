import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Play, 
  Pause, 
  Search, 
  Volume2, 
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
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Playlist incorporata
  const playlistId = '00MkJXy8tP0FCgUrNXYecI';

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

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTrack(null);
  };

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-[#1DB954] to-[#1ed760] hover:from-[#1ed760] hover:to-[#1DB954] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        size="sm"
      >
        <Music className="h-4 w-4 mr-2" />
        🎵 Spotify
      </Button>
    );
  }

  return (
    <Card className="fixed top-4 right-4 z-50 w-96 h-[500px] bg-black/90 border-[#1DB954] text-white">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-[#1DB954]" />
            <span className="font-bold text-[#1DB954]">Spotify Player</span>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Playlist incorporata */}
        <div className="flex-1 p-4">
          <iframe
            title="Spotify Embed: Recommendation Playlist"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ minHeight: '360px', borderRadius: '8px' }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <Input
            placeholder="Cerca musica..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && searchTracks()}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button 
            onClick={searchTracks} 
            disabled={loading}
            className="bg-[#1DB954] hover:bg-[#1ed760]"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>


        {/* Track List */}
        <div className="max-h-60 overflow-y-auto space-y-2">
          {tracks.map((track) => (
            <div 
              key={track.id}
              className="flex items-center gap-3 p-2 hover:bg-white/10 rounded cursor-pointer"
              onClick={() => playTrack(track)}
            >
              <img 
                src={track.album.images[0]?.url} 
                alt={track.name}
                className="w-10 h-10 rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{track.name}</p>
                <p className="text-xs text-white/60 truncate">
                  {track.artists.map(a => a.name).join(', ')}
                </p>
              </div>
              <Play className="h-4 w-4 text-[#1DB954] flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="text-center text-xs text-white/60 border-t border-white/10 pt-3">
          🎵 Clicca sui brani per aprirli in Spotify
        </div>
      </div>
    </Card>
  );
};

export default SpotifyMusicPlayer;