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
    <section id="why" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Why <span className="text-primary font-medium">DoLess.Work</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern work faces three critical challenges that demand a <span className="text-primary font-medium">new approach</span>
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {problems.map((problem, index) => (
              <Card key={index} className="border-0 shadow-minimal bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-minimal flex items-center justify-center mx-auto mb-6">
                    <problem.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {index === 0 && <><span className="text-primary">Fragmented</span> Workflows</>}
                    {index === 1 && <><span className="text-primary">Efficiency</span> Pressure</>}
                    {index === 2 && <><span className="text-primary">Repetitive</span> Tasks</>}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {index === 0 && <>Digital work is scattered across <span className="text-primary font-medium">multiple tools</span>, logins, and platforms, creating friction and inefficiency.</>}
                    {index === 1 && <>Teams face increasing pressure to accomplish <span className="text-primary font-medium">more with fewer resources</span> and tighter deadlines.</>}
                    {index === 2 && <>Endless forms, copy-paste work, and manual browsing consume <span className="text-primary font-medium">billions of valuable work hours</span>.</>}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl font-light text-primary">{stat.number}</div>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground italic">({stat.source})</p>
              </div>
            ))}
          </div>

          {/* Solution Statement */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/5 border border-primary/20 rounded-minimal">
              <ArrowRight className="w-5 h-5 text-primary" />
              <p className="text-foreground font-medium">
                DoLess.Work transforms every browser session into an <span className="text-primary font-semibold">intelligent digital worker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};