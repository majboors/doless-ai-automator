import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight tracking-tight">
            <span className="text-primary font-medium">Work Smarter</span>, Not Harder.
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every wasted click is a <span className="text-primary font-medium">wasted opportunity</span>. Transform your workflow 
            and unlock new potential with <span className="text-primary font-medium">intelligent automation</span>.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 rounded-minimal group"
            >
              Try DoLessWork
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Transform your productivity in minutes, not months
          </p>
        </div>
      </div>
    </section>
  );
};