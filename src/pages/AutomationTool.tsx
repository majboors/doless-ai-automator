import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Zap, Clock, Target, CheckCircle, Play } from "lucide-react";

const AutomationTool = () => {
  const [taskInput, setTaskInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = () => {
    if (!taskInput.trim()) return;
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Smart Task
                  <br />
                  <span className="text-primary">Automation</span>
                  <br />
                  Generator
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  DoLessWork's Smart Task Automation Generator is an innovative 
                  AI tool that transforms your repetitive tasks into automated 
                  workflows, saving you hours every week.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Try it
                </Button>
                <Button variant="outline" size="lg">
                  Create account
                </Button>
              </div>
            </div>
            
            {/* Tool Interface Preview */}
            <div className="bg-card border rounded-lg shadow-soft p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Smart Task Automation Generator</h3>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  AI-powered tool for creating automated workflows
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Task Description
                    </label>
                    <Textarea
                      placeholder="Describe the repetitive task you want to automate..."
                      value={taskInput}
                      onChange={(e) => setTaskInput(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleSubmit}
                    disabled={!taskInput.trim() || isProcessing}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isProcessing ? "Processing..." : "Generate Automation"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Real-World Use Cases for the Smart Task Automation Generator
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                The Smart Task Automation Generator is perfect for professionals who need to streamline repetitive workflows, 
                entrepreneurs who want to optimize their business processes, and teams who want to focus on high-value work.
              </p>
            </div>
            
            <div className="space-y-12">
              <h3 className="text-2xl font-semibold text-center">
                More ways to use DoLessWork's Smart Task Automation Generator
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: <Target className="w-5 h-5" />,
                      title: "Streamline workflows",
                      description: "Transform complex multi-step processes into automated sequences that run without manual intervention."
                    },
                    {
                      icon: <Clock className="w-5 h-5" />,
                      title: "Save valuable time",
                      description: "Eliminate hours of repetitive work by converting manual tasks into smart, automated solutions."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <CheckCircle className="w-5 h-5" />,
                      title: "Boost productivity",
                      description: "Focus on strategic work while automation handles routine tasks, increasing overall team efficiency."
                    },
                    {
                      icon: <Play className="w-5 h-5" />,
                      title: "Reduce human error",
                      description: "Minimize mistakes with consistent, automated processes that follow the same steps every time."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works + FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* How It Works */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">
                How the Smart Task Automation Generator Works
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "1.",
                    text: "Visit the tool's interface above."
                  },
                  {
                    step: "2.",
                    text: "Describe your repetitive task in the provided field."
                  },
                  {
                    step: "3.",
                    text: "Click 'Generate Automation' to let the AI analyze and create an automated workflow for your task."
                  },
                  {
                    step: "4.",
                    text: "Review the generated automation workflow, making any necessary adjustments to ensure it aligns with your needs and preferences."
                  },
                  {
                    step: "5.",
                    text: "Implement the automated solution to start saving time and reducing manual work immediately."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">{item.step}</span>
                    <p className="text-muted-foreground pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* FAQs */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">
                FAQs about the Smart Task Automation Generator
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Is DoLessWork's Smart Task Automation Generator free to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, you can try the Smart Task Automation Generator for free with basic features. 
                    Premium plans unlock advanced automation capabilities and unlimited workflows.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How does the AI create automated workflows?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our AI analyzes your task description and breaks it down into logical steps, 
                    then creates a workflow using popular automation tools and platforms that can execute these steps automatically.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I customize the generated automations?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely! All generated workflows can be modified and customized to fit your specific requirements. 
                    You can adjust triggers, actions, and conditions as needed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Create your free account to get started with the Smart Task Automation Generator 
              and explore hundreds of powerful AI tools to transform your work.
            </h2>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AutomationTool;