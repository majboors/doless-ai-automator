import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, Users, Zap } from "lucide-react";

export const BetaTestingSection = () => {
  return (
    <section id="testing" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 shadow-elegant border-2 border-primary/20 bg-gradient-to-br from-background to-secondary/30">
            <CardContent className="pt-0">
              <div className="space-y-8">
                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    <Globe2 className="w-4 h-4 mr-2" />
                    Global Access
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    <Users className="w-4 h-4 mr-2" />
                    Enterprise Ready
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                    <Zap className="w-4 h-4 mr-2" />
                    Instant Setup
                  </Badge>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Now Available for Public Testing
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    We're opening testing access worldwide for enterprises, professionals, 
                    and power users who want to experience the future of agentic AI.
                  </p>
                </div>

                {/* Features List */}
                <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Free beta access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">No credit card required</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">24/7 support included</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Enterprise features</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Secure sandboxed environment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Multi-language support</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-12 py-4 text-xl shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    👉 Try DoLessWork Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Join thousands of professionals already testing the future of work
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