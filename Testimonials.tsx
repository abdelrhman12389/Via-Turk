import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "أحمد محمد",
      country: "مصر",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
      text: "خدمة ممتازة ساعدتني في الحصول على منحة دراسية في جامعة إسطنبول. الفريق محترف جداً وسريع في الرد",
      rating: 5,
    },
    {
      name: "فاطمة السعيد",
      country: "السعودية",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
      text: "استخرجت إقامتي في تركيا بكل سهولة بفضل ViaTurk. خدمة احترافية ومتابعة مستمرة حتى إتمام الإجراءات",
      rating: 5,
    },
    {
      name: "عمر حسن",
      country: "الأردن",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
      text: "وجدت فرصة عمل رائعة في أنقرة بمساعدة الفريق. شكراً لكم على الجهود المبذولة والمتابعة المستمرة",
      rating: 5,
    },
    {
      name: "سارة علي",
      country: "المغرب",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      text: "تجربة سفري إلى تركيا كانت رائعة بفضل التنظيم المحترف من ViaTurk. أنصح بهم بشدة",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            آراء عملائنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف تجارب عملائنا الناجحة معنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-none shadow-strong bg-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-16 h-16 text-secondary mb-6 opacity-50" />
              
              <div className="relative min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentIndex
                        ? "opacity-100 relative"
                        : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-4 border-primary/20"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">{testimonial.country}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-secondary text-xl">★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
