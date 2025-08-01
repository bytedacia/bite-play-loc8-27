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
    if (!track.preview_url) {
      toast({
        title: "Anteprima non disponibile",
        description: "Questo brano non ha un'anteprima",
        variant: "destructive"
      });
      return;
    }

    // Stop current track if playing
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Create new audio element
    audioRef.current = new Audio(track.preview_url);
    audioRef.current.volume = 0.3; // Start with lower volume
    
    audioRef.current.onended = () => {
      setIsPlaying(false);
      setCurrentTrack(null);
    };

    audioRef.current.play();
    setCurrentTrack(track);
    setIsPlaying(true);
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
        className="fixed top-4 right-4 z-50 bg-[#1DB954] hover:bg-[#1ed760] text-white"
        size="sm"
      >
        <Music className="h-4 w-4 mr-2" />
        🎵 Spotify
      </Button>
    );
  }

  return (
    <Card className="fixed top-4 right-4 z-50 w-80 bg-black/90 border-[#1DB954] text-white">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
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

        {/* Current Track */}
        {currentTrack && (
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <img 
                src={currentTrack.album.images[0]?.url} 
                alt={currentTrack.name}
                className="w-12 h-12 rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{currentTrack.name}</p>
                <p className="text-xs text-white/60 truncate">
                  {currentTrack.artists.map(a => a.name).join(', ')}
                </p>
              </div>
              <Button
                onClick={isPlaying ? pauseTrack : () => playTrack(currentTrack)}
                size="sm"
                className="bg-[#1DB954] hover:bg-[#1ed760]"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        )}

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
              {track.preview_url && (
                <Play className="h-4 w-4 text-[#1DB954] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <Button
            onClick={stopTrack}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
            disabled={!currentTrack}
          >
            Stop
          </Button>
          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1"
              defaultValue="0.3"
              onChange={(e) => {
                if (audioRef.current) {
                  audioRef.current.volume = parseFloat(e.target.value);
                }
              }}
              className="w-20"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SpotifyMusicPlayer;