import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <div className="w-full bg-primary py-3">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground text-sm font-medium">
          📞 Call us: (+1) 734 336-2695
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="bg-background border border-border rounded-2xl mx-4 mt-4 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-foreground">DoLessWork</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#why" className="text-foreground hover:text-primary transition-colors">
              Why DoLessWork
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#testing" className="text-foreground hover:text-primary transition-colors">
              Beta Testing
            </a>
          </div>

          <Button variant="default" className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-6">
            Try DoLessWork Now
          </Button>
        </div>
      </nav>
    </header>
  );
};