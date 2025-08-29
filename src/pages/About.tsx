import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Globe, BookOpen, Palette, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-8 tracking-tight">
            Do Less, Achieve More
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
            Empowering Communities Across Industries
          </p>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I breathe life into LLMs by allowing them to think, navigate, and act on real-world challenges. From fashion and interior design to food, productivity, finance, and accessibility, my products help communities work smarter, unlock creativity, and achieve meaningful results faster.
            </p>
            <p className="text-lg text-foreground font-medium">
              All products, platforms, and activities are fully free for users, including tools like DoLess.Work, which enables students and differently-abled users to navigate the web independently.
            </p>
          </div>
          <Button size="lg" className="font-medium group">
            Explore the Ecosystem
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-light text-foreground mb-8 tracking-tight">
              Democratizing Technology for Every Community
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              As a student innovator, I started the DoLess Achieve More Ecosystem to make advanced problem-solving products accessible to all — <strong>free of charge</strong>. By breathing life into LLMs, I create platforms that reduce repetitive work, guide complex tasks, and help learners and creators across industries achieve more while focusing on what truly matters: creativity, growth, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* How We Empower Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-light text-foreground mb-8 tracking-tight">
              Products That Transform Work, Learning, and Access
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Access to Technology for All", description: "Free and unrestricted access to advanced tools, products, and platforms for everyone." },
              { icon: Target, title: "Do Less Work, Achieve More", description: "Streamline repetitive tasks and workflows for maximum productivity." },
              { icon: Globe, title: "Broad Industry Coverage", description: "Fashion, interior design, food, productivity, finance, and accessibility." },
              { icon: Users, title: "Community Impact", description: "Measurable outcomes for learners, creators, and professionals." },
              { icon: BookOpen, title: "Education & Skill Development", description: "Products that teach, guide, and enhance practical skills while solving real-world problems." },
              { icon: Lightbulb, title: "Creativity & Innovation", description: "Unlock ideas and projects that were previously impractical or impossible." },
              { icon: Heart, title: "Accessibility & Inclusivity", description: "Platforms usable by all, including students and differently-abled users." },
              { icon: Palette, title: "Tech for All", description: "Democratizing technology for communities everywhere." }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Palette className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-light text-foreground mb-8 tracking-tight">
              Modules of the DoLess Achieve More Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Every product is designed to help a specific community reduce repetitive work, expand capabilities, and unlock creativity.
            </p>
            <p className="text-lg text-foreground font-medium">
              All products are free, including tools that make digital experiences accessible to differently-abled users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Fashion & Lifestyle", description: "Digitize sketches and streamline creative workflows", url: "https://fashion.techrealm.pk/" },
              { name: "Interior & Home", description: "Plan, visualize, and execute projects efficiently", url: "https://interior.techrealm.pk" },
              { name: "Food & Wellness", description: "Recipe creation, meal planning, and culinary innovation", url: "https://meals.techrealm.pk/" },
              { name: "Productivity", description: "Automate documents, presentations, and workflows", url: "https://documents.techrealm.pk/" },
              { name: "Product & Design", description: "Rapid 3D prototyping and design", url: "https://3dmodel.techrealm.pk/" },
              { name: "Outsourcing & Productivity", description: "Manage tasks and projects across teams", url: "https://test.techrealm.pk/" },
              { name: "Virtual Try-On", description: "Visualize clothing and accessories before buying", url: "https://virtualtryon.techrealm.pk/" },
              { name: "Virtual Sizing", description: "Match sizes digitally for fashion and retail", url: "https://virtualsizing.techrealm.pk/" },
              { name: "WalletWala", description: "Personal finance guidance", url: "http://walletwala.techrealm.pk/" },
              { name: "DoLess.Work", description: "Browser platform for students and differently-abled users, free and fully accessible", url: "https://doless.work/" }
            ].map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/20 transition-all duration-200 hover:shadow-soft"
              >
                <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-light text-foreground mb-8 tracking-tight">
            Communities Growing Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Through these free products, communities across industries — designers, creators, students, differently-abled users — can focus on learning, experimenting, and innovating. By reducing repetitive work and guiding complex workflows, the DoLess Achieve More Ecosystem fosters <strong>growth, creativity, inclusion, and real-world impact</strong> for users in Pakistan and globally.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-subtle">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-foreground mb-8 tracking-tight">
            Join the DoLess Achieve More Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            Experience the full potential of products that help you <strong>do less work and achieve more</strong>. Whether you're a creator, professional, student, or innovator, the ecosystem is designed to empower your community, your projects, and your growth — <strong>all products are free and accessible for everyone.</strong>
          </p>
          <Button size="lg" className="font-medium group">
            Explore Products Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;