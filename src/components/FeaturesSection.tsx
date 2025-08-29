import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, MessageSquare, Globe, Shield, Search, Workflow, Zap, FileText } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Web Automation",
      description: "Auto-fill forms, book flights, scrape data, and run reports automatically across any website."
    },
    {
      icon: Bot,
      title: "Multi-Agent Collaboration", 
      description: "Researcher, Writer, Executor agents working in perfect sync to solve complex tasks."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Commands",
      description: "Simple instructions like 'Find 20 suppliers in Europe and create a Google Sheet.'"
    },
    {
      icon: Globe,
      title: "Enterprise Integrations",
      description: "Seamless compatibility with Google Workspace, Microsoft 365, Slack, Notion, SAP, Salesforce."
    },
    {
      icon: Shield,
      title: "Privacy & Compliance",
      description: "GDPR, HIPAA, and enterprise-grade compliance built-in for secure operations."
    },
    {
      icon: Search,
      title: "Research Copilot",
      description: "AI assistant for market research, academic work, or comprehensive competitor analysis."
    },
    {
      icon: Brain,
      title: "Workflow Memory",
      description: "Remembers your processes and repeats them automatically when needed."
    },
    {
      icon: Workflow,
      title: "System Automation",
      description: "Control dashboards, manage logistics systems, and automate cloud services."
    },
    {
      icon: FileText,
      title: "Content Generation",
      description: "Create proposals, reports, or presentations directly from automated web actions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI automation for modern workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-minimal bg-card hover:shadow-soft transition-all duration-200 group">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-minimal flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-medium text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};