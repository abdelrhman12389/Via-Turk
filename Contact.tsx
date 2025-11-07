import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "تم الإرسال بنجاح!",
      description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      content: "+90 535 689 92 37",
      color: "primary",
      href: "tel:+905356899237",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      content: "bdalrhmnsmyrsyf@gmail.com",
      color: "secondary",
      href: "mailto:bdalrhmnsmyrsyf@gmail.com",
    },
    {
      icon: MapPin,
      title: "العنوان",
      content: "إسطنبول، تركيا",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في رحلتك إلى تركيا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-none shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-${info.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-7 h-7 text-${info.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-none shadow-medium bg-gradient-primary text-white overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  جاهز للبدء؟
                </h3>
                <p className="mb-6 opacity-90">
                  دعنا نساعدك في تحقيق أهدافك في تركيا. تواصل معنا اليوم!
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold rounded-full"
                >
                  احجز استشارة مجانية
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-strong animate-slide-in-right">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 rounded-lg border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 rounded-lg border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    الرسالة
                  </label>
                  <Textarea
                    placeholder="اكتب رسالتك هنا..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[150px] rounded-lg border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-bold rounded-full shadow-glow transition-all duration-300 hover:scale-105"
                >
                  إرسال الرسالة
                  <Send className="mr-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
