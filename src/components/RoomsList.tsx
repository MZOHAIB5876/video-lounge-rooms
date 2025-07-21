import { RoomCard } from "./RoomCard";
import { CreateRoomModal } from "./CreateRoomModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Tv } from "lucide-react";

// Mock data - will be replaced with Supabase data
const mockRooms = [
  {
    id: "1",
    name: "Lofi Hip Hop & Chill",
    currentVideo: "Lofi Hip Hop Radio - Beats to Study/Relax",
    platform: "YouTube",
    participants: 8,
    maxParticipants: 20,
    isPrivate: false,
    owner: "ChillMaster",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop"
  },
  {
    id: "2", 
    name: "Anime Night",
    currentVideo: "Attack on Titan - Final Season",
    platform: "Crunchyroll",
    participants: 15,
    maxParticipants: 25,
    isPrivate: false,
    owner: "AnimeKing",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
  },
  {
    id: "3",
    name: "Study Session",
    currentVideo: "Classical Music for Studying",
    platform: "Spotify",
    participants: 5,
    maxParticipants: 10,
    isPrivate: true,
    owner: "StudyBuddy",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
  },
  {
    id: "4",
    name: "Gaming Highlights",
    currentVideo: "Best Gaming Moments 2024",
    platform: "YouTube",
    participants: 12,
    maxParticipants: 30,
    isPrivate: false,
    owner: "GameMaster",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"
  }
];

export const RoomsList = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Active Rooms</h2>
            <p className="text-muted-foreground">Join a room or create your own video lounge</p>
          </div>
          <CreateRoomModal />
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search rooms..."
              className="pl-10 bg-lounge-surface border-lounge-primary/30"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-lounge-primary/30">
              <Filter className="w-4 h-4 mr-2" />
              All Platforms
            </Button>
            <Button variant="outline" size="sm" className="border-lounge-primary/30">
              <Tv className="w-4 h-4 mr-2" />
              Public Only
            </Button>
          </div>
        </div>

        {/* Platform filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="secondary" className="cursor-pointer hover:bg-red-500/20 transition-colors">
            YouTube
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-green-500/20 transition-colors">
            Spotify
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-orange-500/20 transition-colors">
            Crunchyroll
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-purple-500/20 transition-colors">
            Twitch
          </Badge>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockRooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>

        {/* Empty state or load more */}
        {mockRooms.length === 0 && (
          <div className="text-center py-12">
            <Tv className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No active rooms</h3>
            <p className="text-muted-foreground mb-6">Be the first to create a room and start watching!</p>
            <CreateRoomModal />
          </div>
        )}
      </div>
    </section>
  );
};