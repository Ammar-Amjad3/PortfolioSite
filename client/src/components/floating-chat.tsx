import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const chatMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", {
        ...data,
        subject: "Chat Message",
        isFromChat: "true",
      });
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsOpen(false);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    chatMutation.mutate(formData);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Popup */}
      {isOpen && (
        <Card 
          className={`absolute bottom-20 right-0 w-80 shadow-2xl border transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transformOrigin: "bottom right" }}
        >
          {/* Chat Header */}
          <div className="p-4 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Quick Message</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 hover:bg-blue-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-1">Send me a quick message!</p>
          </div>

          {/* Chat Form */}
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="text-sm"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="text-sm"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="text-sm resize-none"
              />
              <Button
                type="submit"
                disabled={chatMutation.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              >
                <Send className="mr-2 h-4 w-4" />
                {chatMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
