import { Calendar, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import travelImg from "@/assets/blog-travel.jpg";
import studyImg from "@/assets/blog-study.jpg";
import cultureImg from "@/assets/blog-culture.jpg";

const Blog = () => {
  const articles = [
    {
      title: "أفضل الأماكن السياحية في إسطنبول",
      excerpt: "اكتشف أجمل المعالم السياحية والتاريخية في مدينة إسطنبول الساحرة",
      image: travelImg,
      date: "15 يناير 2025",
      category: "سياحة",
    },
    {
      title: "دليلك الشامل للدراسة في تركيا",
      excerpt: "كل ما تحتاج معرفته عن الدراسة في الجامعات التركية والمنح المتاحة",
      image: studyImg,
      date: "10 يناير 2025",
      category: "تعليم",
    },
    {
      title: "الثقافة والحياة اليومية في تركيا",
      excerpt: "تعرف على العادات والتقاليد التركية وكيفية التأقلم مع الحياة هناك",
      image: cultureImg,
      date: "5 يناير 2025",
      category: "ثقافة",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            أحدث المقالات
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اقرأ آخر الأخبار والمعلومات المفيدة حول تركيا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-slide-in-right bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 p-0 font-semibold group/btn"
                >
                  اقرأ المزيد
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
