import { Plane, GraduationCap, Briefcase, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import travelImg from "@/assets/service-travel.jpg";
import scholarshipImg from "@/assets/service-scholarship.jpg";
import jobsImg from "@/assets/service-jobs.jpg";
import residenceImg from "@/assets/service-residence.jpg";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "السفر إلى تركيا",
      description: "نساعدك في تنظيم رحلتك إلى تركيا بكل سهولة ويسر، من الحجوزات إلى الإقامة والتنقلات",
      image: travelImg,
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "المنح الدراسية",
      description: "نوفر لك معلومات شاملة عن أفضل المنح الدراسية في الجامعات التركية ونساعدك في التقديم",
      image: scholarshipImg,
      color: "secondary",
    },
    {
      icon: Briefcase,
      title: "فرص العمل",
      description: "نربطك بأفضل فرص العمل في تركيا ونساعدك في إيجاد الوظيفة المناسبة لمؤهلاتك",
      image: jobsImg,
      color: "primary",
    },
    {
      icon: FileText,
      title: "استخراج الإقامة",
      description: "نقدم خدمات متكاملة لاستخراج وتجديد الإقامة في تركيا بأسرع وقت وبأقل تكلفة",
      image: residenceImg,
      color: "secondary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            خدماتنا المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات لتسهيل رحلتك إلى تركيا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-medium hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
