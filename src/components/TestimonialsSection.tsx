import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "COO, Global Logistics Firm",
      content: "DoLess.Work automated our shipment tracking and cut manual work by 70%. Our team can now focus on strategic decisions instead of data entry.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "Head of IT, Fortune 500 Bank",
      content: "Compliance reporting now takes minutes, not days. The AI understands complex regulatory requirements and executes them flawlessly.",
      avatar: "MR", 
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "CTO, Tech Unicorn",
      content: "Finally, an AI that doesn't just talk — it acts. DoLess.Work has become an essential part of our development workflow automation.",
      avatar: "EW",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Industry Leaders Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by professionals and enterprises worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 border border-border/50 hover:border-primary/20">
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
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