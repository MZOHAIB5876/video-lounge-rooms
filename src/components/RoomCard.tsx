import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Play, Lock, Globe } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  currentVideo: string;
  platform: string;
  participants: number;
  maxParticipants: number;
  isPrivate: boolean;
  owner: string;
  thumbnail: string;
}

export const RoomCard = ({
  name,
  currentVideo,
  platform,
  participants,
  maxParticipants,
  isPrivate,
  owner,
  thumbnail
}: RoomCardProps) => {
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'youtube': return 'bg-red-500';
      case 'spotify': return 'bg-green-500';
      case 'crunchyroll': return 'bg-orange-500';
      default: return 'bg-lounge-accent';
    }
  };

  return (
    <Card className="bg-lounge-surface/70 backdrop-blur-sm border-lounge-primary/20 hover:border-lounge-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-lounge-glow/10">
      <CardHeader className="p-0">
        <div className="relative">
          <div 
            className="h-32 bg-cover bg-center rounded-t-lg"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%), url(${thumbnail})`,
              backgroundColor: '#1a1a2e'
            }}
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <Badge className={`${getPlatformColor(platform)} text-white`}>
              {platform}
            </Badge>
            <Badge variant="secondary" className="bg-black/50 text-white">
              {isPrivate ? <Lock className="w-3 h-3 mr-1" /> : <Globe className="w-3 h-3 mr-1" />}
              {isPrivate ? 'Private' : 'Public'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
          Now playing: {currentVideo}
        </p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">by {owner}</span>
          <div className="flex items-center gap-1 text-lounge-accent">
            <Users className="w-4 h-4" />
            <span>{participants}/{maxParticipants}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="lounge" 
          className="w-full"
          disabled={participants >= maxParticipants}
        >
          <Play className="w-4 h-4 mr-2" />
          {participants >= maxParticipants ? 'Room Full' : 'Join Room'}
        </Button>
      </CardFooter>
    </Card>
  );
};