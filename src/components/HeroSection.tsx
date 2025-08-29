import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] bg-background relative">      
      {/* Content */}
      <div className="container mx-auto px-4 pt-40 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft border border-primary/20 rounded-full text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Now in public beta
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-tight">
                <span className="text-primary font-medium">Work Smarter</span>,{" "}
                Not Harder.
              </h1>

              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                The Browser That <span className="text-primary font-medium">Works For You</span>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                <span className="text-primary font-semibold">Multi-agent AI browser</span> that automates web tasks. 
                <span className="text-primary font-medium">Search, analyze, execute</span> — while you focus on what matters.
              </p>
            </div>

            <div className="space-y-6">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-10 py-4 text-lg rounded-minimal group shadow-soft"
              >
                Try DoLessWork Free
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground font-medium">
                <span className="text-primary">Free</span> • <span className="text-primary">No signup</span> • <span className="text-primary">Available worldwide</span>
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-2 shadow-soft">
            <div className="bg-background rounded-xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-center space-y-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-foreground"><span className="text-primary">Multi-Agent</span> System</p>
                    <p className="text-sm text-muted-foreground">AI agents collaborating seamlessly</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-foreground"><span className="text-primary">Web</span> Automation</p>
                    <p className="text-sm text-muted-foreground">Execute tasks across any platform</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-foreground"><span className="text-primary">Natural</span> Language</p>
                    <p className="text-sm text-muted-foreground">Simple commands, powerful results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};