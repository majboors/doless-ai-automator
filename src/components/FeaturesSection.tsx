import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, MessageSquare, Globe, Shield, Search, Workflow, Zap, FileText, ArrowRight } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Web Automation",
      description: "Auto-fill forms, book flights, scrape data across any website",
      highlights: ["Auto-fill forms", "Book flights", "Scrape data", "Cross-platform"]
    },
    {
      icon: Bot,
      title: "Multi-Agent System", 
      description: "Researcher, Writer, Executor agents working in perfect sync",
      highlights: ["Researcher AI", "Writer AI", "Executor AI", "Perfect sync"]
    },
    {
      icon: MessageSquare,
      title: "Natural Commands",
      description: "Simple instructions like 'Find 20 suppliers in Europe'",
      highlights: ["Natural language", "Simple commands", "Complex tasks", "Easy to use"]
    },
    {
      icon: Globe,
      title: "Enterprise Ready",
      description: "Google Workspace, Microsoft 365, Slack, Notion, SAP",
      highlights: ["Google Workspace", "Microsoft 365", "Slack integration", "Enterprise scale"]
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "GDPR, HIPAA, enterprise-grade security built-in",
      highlights: ["GDPR compliant", "HIPAA ready", "Enterprise security", "Safe operations"]
    },
    {
      icon: Search,
      title: "Research Copilot",
      description: "Market research, academic work, competitor analysis",
      highlights: ["Market research", "Academic support", "Competitor analysis", "Data insights"]
    },
    {
      icon: Brain,
      title: "Smart Memory",
      description: "Remembers processes and repeats them automatically",
      highlights: ["Process memory", "Auto-repeat", "Learning system", "Workflow optimization"]
    },
    {
      icon: Workflow,
      title: "System Control",
      description: "Dashboards, logistics, cloud services automation",
      highlights: ["Dashboard control", "Logistics", "Cloud services", "System automation"]
    },
    {
      icon: FileText,
      title: "Content Generation",
      description: "Proposals, reports, presentations from web actions",
      highlights: ["Document creation", "Report generation", "Presentations", "Automated content"]
    }
  ];

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            <span className="text-primary font-semibold">Core</span> Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Comprehensive <span className="text-primary font-medium">AI automation</span> for modern workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft bg-card hover:shadow-lg transition-all duration-300 group p-2">
              <div className="bg-background rounded-xl p-8 h-full">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-xs text-muted-foreground font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="text-sm text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2 group/btn">
                      Learn More
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};