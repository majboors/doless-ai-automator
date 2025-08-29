import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  <Bot className="w-4 h-4 mr-2" />
                  Multi-Agent Automation
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Productivity
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  <Shield className="w-4 h-4 mr-2" />
                  Enterprise-Ready Security
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                🚀 The Browser That 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Works For You</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                DoLess.Work is not just an AI chatbot — it's a multi-agent AI browser that can search, 
                analyze, and take actions across the web. From automating workflows to executing tasks, 
                it's your digital workforce in a browser tab.
              </p>

              <p className="text-lg font-medium text-foreground">
                "Work Smarter, Not Harder."
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-4 text-lg shadow-glow transition-all duration-300 hover:scale-105"
              >
                👉 Try DoLessWork Now
              </Button>
              <p className="text-sm text-muted-foreground">
                Free beta testing available worldwide
              </p>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-3xl p-1 shadow-elegant">
              <div className="bg-background rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-glow rounded-full"></div>
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">AI Agent Status</div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <span className="text-foreground font-medium">🤖 Researcher Agent</span>
                        <span className="text-primary font-semibold">Active</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <span className="text-foreground font-medium">✍️ Writer Agent</span>
                        <span className="text-primary font-semibold">Active</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <span className="text-foreground font-medium">⚡ Executor Agent</span>
                        <span className="text-primary font-semibold">Processing</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        💼 <strong>Current Task:</strong> "Find 10 trending e-commerce products and create a Google Sheet with pricing analysis..."
                      </p>
                    </div>
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