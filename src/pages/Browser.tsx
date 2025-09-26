import { Navigation, Header } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  type: "bot" | "user";
  content: string;
}

const Browser = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Welcome to DoLessWork Browser! I'm your AI assistant. How can I help you automate your web tasks today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        type: "user",
        content: inputValue
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          type: "bot",
          content: "I understand you want to automate that task. Let me analyze the best approach for you..."
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[calc(100vh-200px)]">
          {/* Chat Interface - Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg h-full flex flex-col">
              <div className="p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">AI Assistant</h2>
                <p className="text-sm text-muted-foreground">Chat with your automation helper</p>
              </div>
              
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'bot' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                        }`}>
                          {message.type === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <div className={`rounded-lg px-3 py-2 ${
                          message.type === 'bot' 
                            ? 'bg-muted text-foreground' 
                            : 'bg-primary text-primary-foreground'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Display - Right Column */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg h-full flex flex-col">
              {/* Hero Content */}
              <div className="p-8 text-center border-b border-border">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-6">
                  ✨ Now in public beta
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-red-600">Work Smarter,</span>{" "}
                  <span className="text-foreground">Not Harder.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-2">
                  The Browser That <span className="text-red-600 font-semibold">Works For You</span>
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  <span className="text-red-600 font-semibold">Multi-agent AI browser</span> that automates web tasks.
                  <span className="text-red-600 font-semibold"> Search, analyze, execute</span> — 
                  while you focus on what matters.
                </p>
                
                <Button size="lg" className="mb-4">
                  Try DoLessWork Free
                  <Send className="w-4 h-4 ml-2" />
                </Button>
                
                <p className="text-sm text-red-600">
                  Free • No signup • Available worldwide
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="flex-1 p-8">
                <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-red-50 to-gray-50 border-2 border-dashed border-red-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-12 h-12 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Browser Preview</h3>
                    <p className="text-muted-foreground max-w-md">
                      This area will display the browser interface and automated tasks in action. 
                      Chat with the AI assistant to see live demonstrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Browser;