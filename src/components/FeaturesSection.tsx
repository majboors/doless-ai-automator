import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, MessageSquare, Globe, Shield, Search, Workflow, Zap, FileText } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "AI Web Automation",
      description: "Auto-fill forms, book flights, scrape data, run reports automatically across any website."
    },
    {
      icon: Bot,
      title: "Multi-Agent Collaboration", 
      description: "Researcher, Writer, Executor agents working in perfect sync to solve complex tasks."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Commands",
      description: "Just tell it what you want: 'Find 20 suppliers in Europe and put them into a Google Sheet.'"
    },
    {
      icon: Globe,
      title: "Enterprise Integrations",
      description: "Works seamlessly with Google Workspace, Microsoft 365, Slack, Notion, SAP, Salesforce."
    },
    {
      icon: Shield,
      title: "Global Data Privacy Ready",
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
      description: "Remembers your tasks and processes, then repeats them automatically when needed."
    },
    {
      icon: Workflow,
      title: "IoT & System Automation",
      description: "Control dashboards, manage logistics systems, and automate cloud services effortlessly."
    },
    {
      icon: FileText,
      title: "Generative Workflows",
      description: "Create proposals, reports, or presentations directly from automated web actions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Building the Future of Work Automation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DoLess.Work is in active development, but enterprises and professionals worldwide 
            are already testing our core modules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
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