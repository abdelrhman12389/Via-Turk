import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "السفر إلى تركيا", href: "#services" },
      { name: "المنح الدراسية", href: "#services" },
      { name: "فرص العمل", href: "#services" },
      { name: "استخراج الإقامة", href: "#services" },
    ],
    quickLinks: [
      { name: "الرئيسية", href: "#home" },
      { name: "من نحن", href: "#about" },
      { name: "المدونة", href: "#blog" },
      { name: "اتصل بنا", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583122319736", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/viaturkstudyandstayinturkey/", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              ViaTurk
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              بوابتك الموثوقة للسفر والدراسة والعمل في تركيا. نقدم خدمات شاملة ومتكاملة لتحقيق أهدافك.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+905356899237"
                className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-secondary" />
                <span>+90 535 689 92 37</span>
              </a>
              <a 
                href="mailto:bdalrhmnsmyrsyf@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span>bdalrhmnsmyrsyf@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>إسطنبول، تركيا</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">خدماتنا</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">تابعنا</h4>
            <p className="text-white/70 mb-6">
              تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والعروض
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-right">
              © {currentYear} ViaTurk. جميع الحقوق محفوظة
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors duration-300">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
