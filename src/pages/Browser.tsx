import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Send, Bot, User, Play, Pause, Square, RotateCcw, Home, Settings, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

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

  const handleStop = () => {
    setIsRunning(false);
  };

  const handlePause = () => {
    setIsRunning(!isRunning);
  };

  const handleClear = () => {
    setMessages([{
      id: 1,
      type: "bot",
      content: "Welcome to DoLessWork Browser! I'm your AI assistant. How can I help you automate your web tasks today?"
    }]);
  };

  const handleSubmitTask = () => {
    setIsRunning(true);
    // Simulate task submission
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal Header */}
      <header className="border-b border-border bg-card px-4 py-2 flex items-center justify-between">
        {/* Left side - Project name with dropdown */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 font-semibold text-foreground hover:bg-accent">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">D</span>
                </div>
                DoLessWork Browser
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem onClick={() => navigate("/")}>
                <Home className="w-4 h-4 mr-2" />
                Go to Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleStop}
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            <Square className="w-4 h-4 mr-1" />
            Stop
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handlePause}
          >
            {isRunning ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
            {isRunning ? 'Pause' : 'Resume'}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleClear}
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Clear
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={handleSubmitTask}
            className="bg-primary text-primary-foreground"
          >
            Submit Task
          </Button>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <div className="flex-1 flex">
        {/* Chat Interface - Left Column */}
        <div className="w-80 border-r border-border bg-card flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">AI Assistant</h2>
            <p className="text-sm text-muted-foreground">Chat with your automation helper</p>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
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

        {/* Browser Preview - Right Column */}
        <div className="flex-1 bg-background">
          <div className="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Interactive Browser Preview</h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                This area will display the live browser interface and show automated tasks in action. 
                Start a conversation with the AI assistant to begin automating web tasks.
              </p>
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                {isRunning ? 'Task Running' : 'Ready for Tasks'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;