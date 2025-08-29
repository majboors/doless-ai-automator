import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

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
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            <span className="text-primary font-medium">Industry</span> Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by professionals and <span className="text-primary font-medium">enterprises worldwide</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-minimal bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-foreground text-sm leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
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