import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "905356899237"; // رقم الواتساب بدون + و بدون مسافات
  const message = "مرحباً، أرغب في الاستفسار عن خدمات ViaTurk";

  useEffect(() => {
    // إظهار الزر بعد تحميل الصفحة بقليل
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 left-6 z-50 group transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="تواصل عبر واتساب"
    >
      {/* الدائرة الخارجية المتموجة */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
      
      {/* الزر الرئيسي */}
      <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-8 h-8 text-white" fill="currentColor" />
      </div>

      {/* النص الذي يظهر عند hover */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-white text-foreground px-4 py-2 rounded-lg shadow-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <span className="font-semibold">تواصل معنا عبر واتساب</span>
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-white" />
      </div>
    </button>
  );
};

export default WhatsAppButton;
