import { useState } from "react";
import { Hero } from "@/components/Hero";
import { RoomsList } from "@/components/RoomsList";
import { LoginForm } from "@/components/LoginForm";
import { Navigation } from "@/components/Navigation";

type ViewType = 'home' | 'rooms' | 'login';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="pt-20">
            <Hero />
            <RoomsList />
          </div>
        );
      case 'rooms':
        return (
          <div className="pt-32">
            <RoomsList />
          </div>
        );
      case 'login':
        return <LoginForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      {renderContent()}
    </div>
  );
};

export default Index;
