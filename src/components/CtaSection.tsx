import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight tracking-tight">
              <span className="text-primary font-semibold">Work Smarter</span>, Not Harder.
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Every wasted click is a <span className="text-primary font-medium">wasted opportunity</span>. Transform your workflow 
              and unlock new potential with <span className="text-primary font-medium">intelligent automation</span>.
            </p>
          </div>
          
          <div className="space-y-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-12 py-4 text-lg rounded-minimal group shadow-soft"
            >
              Try DoLessWork Free
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground font-medium">
              Transform your productivity in <span className="text-primary font-semibold">minutes</span>, not months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};