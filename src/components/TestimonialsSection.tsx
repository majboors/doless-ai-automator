import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowRight } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "COO, Global Logistics",
      content: "DoLess.Work automated our shipment tracking and cut manual work by 70%. Our team can now focus on strategic decisions.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "Head of IT, Fortune 500 Bank",
      content: "Compliance reporting now takes minutes, not days. The AI understands complex requirements and executes them flawlessly.",
      avatar: "MR", 
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "CTO, Tech Unicorn",
      content: "Finally, an AI that doesn't just talk — it acts. DoLess.Work has become essential to our development workflow.",
      avatar: "EW",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            <span className="text-primary font-semibold">Industry</span> Leaders
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Trusted by professionals and <span className="text-primary font-medium">enterprises worldwide</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-10">
                <div className="space-y-8">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-foreground leading-relaxed font-medium text-center">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-4">
                    <button className="text-sm text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2 mx-auto group/btn">
                      Read Full Story
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};