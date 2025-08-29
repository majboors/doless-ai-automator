import { Card, CardContent } from "@/components/ui/card";
import { Layers, Zap, RefreshCw, ArrowRight } from "lucide-react";

export const WhySection = () => {
  const problems = [
    {
      icon: Layers,
      title: "Fragmented Workflows",
      description: "Digital work is scattered across multiple tools, logins, and platforms, creating friction and inefficiency."
    },
    {
      icon: Zap,
      title: "Efficiency Pressure", 
      description: "Teams face increasing pressure to accomplish more with fewer resources and tighter deadlines."
    },
    {
      icon: RefreshCw,
      title: "Repetitive Tasks",
      description: "Endless forms, copy-paste work, and manual browsing consume billions of valuable work hours."
    }
  ];

  const stats = [
    {
      number: "40%",
      label: "of work time spent on repetitive tasks",
      source: "Deloitte Research"
    },
    {
      number: "73%",
      label: "faster completion with automation",
      source: "McKinsey Global Institute"
    },
    {
      number: "85%",
      label: "feel overwhelmed by manual tasks",
      source: "Harvard Business Review"
    }
  ];

  return (
    <section id="why" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 mb-24">
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Why <span className="text-primary font-semibold">DoLess.Work</span>?
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Modern work faces <span className="text-primary font-medium">three critical challenges</span> that demand a new approach
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-24">
            {problems.map((problem, index) => (
              <Card key={index} className="border-0 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/20 transition-colors">
                    <problem.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    {index === 0 && <><span className="text-primary">Fragmented</span> Workflows</>}
                    {index === 1 && <><span className="text-primary">Efficiency</span> Pressure</>}
                    {index === 2 && <><span className="text-primary">Repetitive</span> Tasks</>}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {index === 0 && <>Digital work scattered across <span className="text-primary font-medium">multiple tools</span> and platforms</>}
                      {index === 1 && <>Teams must accomplish <span className="text-primary font-medium">more with fewer resources</span></>}
                      {index === 2 && <>Manual tasks consume <span className="text-primary font-medium">billions of work hours</span></>}
                    </p>
                    
                    <div className="pt-4">
                      <button className="text-sm text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2 mx-auto group/btn">
                        Learn More
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3 p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-light text-primary">{stat.number}</div>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground italic">({stat.source})</p>
              </div>
            ))}
          </div>

          {/* Solution Statement */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-6 bg-primary/5 border border-primary/20 rounded-2xl shadow-soft">
              <ArrowRight className="w-6 h-6 text-primary" />
              <p className="text-lg font-semibold text-foreground">
                DoLess.Work transforms every browser session into an <span className="text-primary font-bold">intelligent digital worker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};