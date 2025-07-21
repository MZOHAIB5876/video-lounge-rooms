import { Button } from "@/components/ui/button";
import { Video, User, Home, Tv } from "lucide-react";

interface NavigationProps {
  currentView: 'home' | 'rooms' | 'login';
  onViewChange: (view: 'home' | 'rooms' | 'login') => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-lounge-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <div className="p-2 bg-lounge-primary rounded-lg">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-lounge-primary to-lounge-accent bg-clip-text text-transparent">
              Video Lounge
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant={currentView === 'home' ? 'lounge' : 'ghost'}
              onClick={() => onViewChange('home')}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button
              variant={currentView === 'rooms' ? 'lounge' : 'ghost'}
              onClick={() => onViewChange('rooms')}
              className="gap-2"
            >
              <Tv className="w-4 h-4" />
              Rooms
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant={currentView === 'login' ? 'lounge' : 'lounge-outline'}
              onClick={() => onViewChange('login')}
              className="gap-2"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-4 pt-4 border-t border-lounge-primary/20">
          <Button
            variant={currentView === 'home' ? 'lounge' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('home')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
          <Button
            variant={currentView === 'rooms' ? 'lounge' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('rooms')}
            className="gap-2"
          >
            <Tv className="w-4 h-4" />
            Rooms
          </Button>
        </div>
      </div>
    </nav>
  );
};