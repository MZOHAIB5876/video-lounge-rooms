import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Users, Globe, Lock } from "lucide-react";

export const CreateRoomModal = () => {
  const [roomData, setRoomData] = useState({
    name: "",
    description: "",
    maxParticipants: "10",
    isPrivate: false,
    platform: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement room creation with Supabase
    console.log("Creating room:", roomData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="lounge-accent" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Create Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-lounge-surface border-lounge-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Room</DialogTitle>
          <DialogDescription>
            Set up your video lounge room. You can change these settings later.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="room-name">Room Name</Label>
              <Input
                id="room-name"
                placeholder="My Awesome Room"
                className="bg-background border-lounge-primary/30"
                value={roomData.name}
                onChange={(e) => setRoomData({ ...roomData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="room-description">Description (optional)</Label>
              <Textarea
                id="room-description"
                placeholder="What will you be watching?"
                className="bg-background border-lounge-primary/30 resize-none"
                rows={3}
                value={roomData.description}
                onChange={(e) => setRoomData({ ...roomData, description: e.target.value })}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="max-participants">Max Participants</Label>
                <Select value={roomData.maxParticipants} onValueChange={(value) => setRoomData({ ...roomData, maxParticipants: value })}>
                  <SelectTrigger className="bg-background border-lounge-primary/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 people</SelectItem>
                    <SelectItem value="10">10 people</SelectItem>
                    <SelectItem value="20">20 people</SelectItem>
                    <SelectItem value="50">50 people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="platform">Default Platform</Label>
                <Select value={roomData.platform} onValueChange={(value) => setRoomData({ ...roomData, platform: value })}>
                  <SelectTrigger className="bg-background border-lounge-primary/30">
                    <SelectValue placeholder="Choose..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="spotify">Spotify</SelectItem>
                    <SelectItem value="crunchyroll">Crunchyroll</SelectItem>
                    <SelectItem value="twitch">Twitch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-lounge-surface/50 rounded-lg border border-lounge-primary/20">
              <div className="flex items-center space-x-3">
                {roomData.isPrivate ? (
                  <Lock className="w-5 h-5 text-lounge-accent" />
                ) : (
                  <Globe className="w-5 h-5 text-lounge-primary" />
                )}
                <div>
                  <Label htmlFor="private-toggle" className="font-medium">
                    {roomData.isPrivate ? 'Private Room' : 'Public Room'}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {roomData.isPrivate 
                      ? 'Only invited users can join' 
                      : 'Anyone can discover and join'
                    }
                  </p>
                </div>
              </div>
              <Switch
                id="private-toggle"
                checked={roomData.isPrivate}
                onCheckedChange={(checked) => setRoomData({ ...roomData, isPrivate: checked })}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="submit" variant="lounge" className="w-full">
              <Users className="w-4 h-4 mr-2" />
              Create Room
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};