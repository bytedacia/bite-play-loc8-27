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

  // Playlist predefinita
  const playlistUrl = "https://open.spotify.com/playlist/0OEou4QJ18fRQEd8yrc2jq";

  const openPlaylist = () => {
    window.open(playlistUrl, '_blank');
    toast({
      title: "Playlist aperta! 🎵",
      description: "La tua playlist è stata aperta in Spotify",
    });
  };

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
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <Button 
          onClick={openPlaylist}
          className="bg-gradient-to-r from-[#1DB954] to-[#1ed760] hover:from-[#1ed760] hover:to-[#1DB954] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="sm"
        >
          <Music className="h-4 w-4 mr-2" />
          🎵 Playlist
        </Button>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="outline"
          className="border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white shadow-lg"
          size="sm"
        >
          <Search className="h-4 w-4 mr-2" />
          Cerca
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed top-4 right-4 z-50 w-80 bg-black/90 border-[#1DB954] text-white">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-[#1DB954]" />
            <span className="font-bold text-[#1DB954]">Spotify Search</span>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={openPlaylist}
              size="sm"
              className="bg-[#1DB954] hover:bg-[#1ed760] text-white"
            >
              🎵 Playlist
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
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