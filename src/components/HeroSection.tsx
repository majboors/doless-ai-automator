import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] bg-background relative">      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft border border-primary/20 rounded-full text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Now in public beta
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] tracking-tight">
                <span className="text-primary font-medium">Work Smarter</span>,{" "}
                Not Harder.
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                The Browser That <span className="text-primary font-medium">Works For You</span>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                DoLess.Work is a <span className="text-primary font-medium">multi-agent AI browser</span> that automates web tasks. 
                <span className="text-primary font-medium">Search, analyze, and execute</span> actions across the internet while you focus on what matters.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-3 rounded-minimal group"
              >
                Try DoLessWork
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Free • No signup required • Available worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Visual Element */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-minimal p-1 shadow-minimal">
            <div className="bg-background rounded-minimal p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-sm font-medium text-foreground"><span className="text-primary">Multi-Agent</span> System</p>
                  <p className="text-xs text-muted-foreground">Collaborative AI agents working in sync</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-sm font-medium text-foreground"><span className="text-primary">Web</span> Automation</p>
                  <p className="text-xs text-muted-foreground">Execute tasks across any website</p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-sm font-medium text-foreground"><span className="text-primary">Natural</span> Language</p>
                  <p className="text-xs text-muted-foreground">Simple commands, powerful results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};