import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

export const BetaTestingSection = () => {
  return (
    <section id="testing" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg bg-card/90 backdrop-blur-sm">
            <CardContent className="p-16 text-center">
              <div className="space-y-12">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-soft border border-primary/20 rounded-full text-primary font-semibold">
                  <Sparkles className="w-5 h-5" />
                  Public Beta Available
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                    Now Available for <span className="text-primary font-semibold">Testing</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                    Experience the <span className="text-primary font-medium">future of agentic AI</span>. Open to enterprises, professionals, 
                    and power users <span className="text-primary font-medium">worldwide</span>.
                  </p>
                </div>

                {/* Enhanced Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="space-y-4 p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
                    <p className="text-sm text-foreground font-semibold"><span className="text-primary">Free</span> Access</p>
                    <p className="text-xs text-muted-foreground">No payment required</p>
                  </div>
                  
                  <div className="space-y-4 p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
                    <p className="text-sm text-foreground font-semibold">No Signup</p>
                    <p className="text-xs text-muted-foreground">Start immediately</p>
                  </div>
                  
                  <div className="space-y-4 p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
                    <p className="text-sm text-foreground font-semibold">Global Access</p>
                    <p className="text-xs text-muted-foreground">Available worldwide</p>
                  </div>
                  
                  <div className="space-y-4 p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto" />
                    <p className="text-sm text-foreground font-semibold"><span className="text-primary">Enterprise</span> Ready</p>
                    <p className="text-xs text-muted-foreground">Production quality</p>
                  </div>
                </div>

                {/* Enhanced CTA */}
                <div className="space-y-6">
                  <Button 
                    size="lg" 
                    className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-12 py-4 text-lg rounded-minimal group shadow-soft"
                  >
                    Try DoLessWork Free
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground font-medium">
                    Join <span className="text-primary font-semibold">10,000+</span> professionals testing the future of work automation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};