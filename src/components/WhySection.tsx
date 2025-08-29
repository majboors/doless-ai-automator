import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";

export const WhySection = () => {
  const stats = [
    {
      icon: TrendingUp,
      percentage: "73%",
      title: "Productivity Increase",
      description: "Teams using automation see 73% faster task completion rates compared to manual processes.",
      source: "McKinsey Global Institute"
    },
    {
      icon: Clock,
      percentage: "40%", 
      title: "Time Savings",
      description: "Knowledge workers spend 40% of their time on repetitive tasks that could be automated.",
      source: "Deloitte Research"
    },
    {
      icon: Users,
      percentage: "85%",
      title: "Burnout Reduction",
      description: "85% of professionals report feeling overwhelmed by manual, repetitive digital tasks.",
      source: "Harvard Business Review"
    }
  ];

  return (
    <section id="why" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why DoLess.Work?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Evolving workloads</strong> → Digital work is fragmented across tools, logins, and platforms.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-2">
              <strong className="text-foreground">Efficiency pressure</strong> → Teams are under pressure to do more with less.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-2">
              <strong className="text-foreground">Burnout from repetition</strong> → Endless forms, copy-paste tasks, and manual browsing waste billions of work hours.
            </p>
            <div className="mt-8 p-6 bg-gradient-hero rounded-2xl">
              <p className="text-xl font-bold text-primary-foreground">
                💡 DoLess.Work turns every browser session into a digital worker.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 border border-border/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <div className="text-5xl font-bold text-primary">
                    {stat.percentage}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium italic">
                    ({stat.source})
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};