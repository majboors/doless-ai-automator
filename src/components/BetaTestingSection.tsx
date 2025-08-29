import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

export const BetaTestingSection = () => {
  return (
    <section id="testing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft border border-primary/20 rounded-full text-primary text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Public Beta Available
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                    Now Available for <span className="text-primary font-medium">Testing</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Experience the <span className="text-primary font-medium">future of agentic AI</span>. Open to enterprises, professionals, 
                    and power users <span className="text-primary font-medium">worldwide</span>.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-left">
                  <div className="space-y-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <p className="text-sm text-foreground font-medium"><span className="text-primary">Free</span> access</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <p className="text-sm text-foreground font-medium">No signup required</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <p className="text-sm text-foreground font-medium">Global availability</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <p className="text-sm text-foreground font-medium"><span className="text-primary">Enterprise</span> ready</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-3 rounded-minimal group"
                  >
                    Try DoLessWork
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Join professionals testing the future of work automation
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