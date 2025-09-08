import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="w-full bg-primary py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-center text-primary-foreground text-sm font-medium">
          <Phone className="w-4 h-4 mr-2" />
          Call us: (+1) 734 336-2695
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/only_icon.png" 
              alt="DoLessWork Icon" 
              className="h-14 w-auto"
            />
            <Link to="/" className="text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors">DoLessWork</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Why DoLessWork
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </a>
            <Link to="/automation-tool" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Automation Tool
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              About
            </Link>
            <Link to="/gesture-control" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Gesture Control
            </Link>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Testimonials
            </a>
            <a href="#testing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Beta Testing
            </a>
          </div>

          <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6 rounded-minimal">
            Try DoLessWork
          </Button>
        </div>
      </nav>
    </header>
  );
};