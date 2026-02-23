import { motion } from "motion/react";
import { ArrowLeft, Smartphone, Watch, Laptop } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-orange-500/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-right"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            نمایندگی رسمی محصولات شیائومی در مازندران
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
            دنیای هوشمند <br />
            <span className="text-gradient">شیائومی</span> در دستان شما
          </h1>
          
          <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
            جدیدترین گوشی‌های هوشمند، ساعت‌های سلامتی و لوازم خانگی هوشمند شیائومی را با گارانتی معتبر و بهترین قیمت از شیائومی ساری تهیه کنید.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all group reveal-effect tactile-button">
              مشاهده محصولات
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all reveal-effect tactile-button">
              درباره ما
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 border-t border-white/5 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">+۵۰۰۰</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">مشتری راضی</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">+۱۰۰۰</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">تنوع محصول</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">۲۴/۷</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">پشتیبانی آنلاین</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 animate-float">
            <img 
              src="https://picsum.photos/seed/xiaomi-phone/800/800" 
              alt="Xiaomi Products" 
              className="w-full h-auto rounded-3xl shadow-2xl shadow-orange-500/20 border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <Smartphone size={20} />
              </div>
              <div>
                <div className="text-xs text-zinc-400">جدیدترین مدل</div>
                <div className="text-sm font-bold">Xiaomi 14 Ultra</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white">
                <Watch size={20} />
              </div>
              <div>
                <div className="text-xs text-zinc-400">تخفیف ویژه</div>
                <div className="text-sm font-bold">Watch S3</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
