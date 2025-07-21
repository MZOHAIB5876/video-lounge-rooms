import { Button } from "@/components/ui/button";
import { Play, Users, Video } from "lucide-react";
import heroImage from "@/assets/hero-video-lounge.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-lounge-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-lounge-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-lounge-surface rounded-full shadow-2xl">
            <Video className="w-12 h-12 text-lounge-primary" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-lounge-primary to-lounge-accent bg-clip-text text-transparent">
          Video Lounge
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Watch videos together from YouTube, Spotify, Crunchyroll and more.
          <br />
          Create your own room and enjoy content with friends in real-time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="lounge" size="lg" className="min-w-[200px]">
            <Play className="w-5 h-5 mr-2" />
            Start Watching
          </Button>
          <Button variant="lounge-outline" size="lg" className="min-w-[200px]">
            <Users className="w-5 h-5 mr-2" />
            Create Room
          </Button>
        </div>
        
        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-lounge-surface/50 backdrop-blur-sm rounded-xl border border-lounge-primary/20">
            <Video className="w-8 h-8 text-lounge-accent mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Multi-Platform</h3>
            <p className="text-sm text-muted-foreground">Support for YouTube, Spotify, Crunchyroll and more</p>
          </div>
          <div className="p-6 bg-lounge-surface/50 backdrop-blur-sm rounded-xl border border-lounge-primary/20">
            <Users className="w-8 h-8 text-lounge-accent mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Private Rooms</h3>
            <p className="text-sm text-muted-foreground">Create custom rooms with your friends</p>
          </div>
          <div className="p-6 bg-lounge-surface/50 backdrop-blur-sm rounded-xl border border-lounge-primary/20">
            <Play className="w-8 h-8 text-lounge-accent mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Sync Playback</h3>
            <p className="text-sm text-muted-foreground">Perfectly synchronized viewing experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};