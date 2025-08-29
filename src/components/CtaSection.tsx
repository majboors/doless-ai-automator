import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Don't Work Harder, Work Smarter.
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Every wasted click is a wasted opportunity.
          </p>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            DoLess.Work helps you automate tasks, scale productivity, and unlock new potential — globally.
          </p>
          
          <div className="pt-6">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-12 py-6 text-xl shadow-2xl transition-all duration-300 hover:scale-105"
            >
              👉 Try DoLessWork Now
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70">
            Transform your workflow in minutes, not months
          </p>
        </div>
      </div>
    </section>
  );
};