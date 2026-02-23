import { motion } from "motion/react";
import { CheckCircle2, Users, History, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <h1 className="text-5xl font-black mb-8">داستان <span className="text-orange-500">شیائومی ساری</span></h1>
            <p className="text-zinc-400 text-lg leading-loose mb-8">
              سلام رفقا، به فروشگاه خودتون خوش اومدید. اینجا ما یه فروشگاه مولتی برند هستیم که تمامی محصولات معتبر رو با تضمین اصالت کالا ارائه میدیم.
            </p>
            <p className="text-zinc-400 text-lg leading-loose mb-8">
              بیش از ۵ سال هست که فروشگاه حضوری داریم و در فضای مجازی (اینستاگرام و تلگرام) فعالیت می‌کنیم. هدف ما همیشه فراهم کردن جدیدترین تکنولوژی‌های روز دنیا با قیمتی منصفانه برای همشهریان عزیز ساروی و تمام مردم ایران بوده است.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-500" size={24} />
                <span className="font-bold">تضمین اصالت</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-500" size={24} />
                <span className="font-bold">قیمت رقابتی</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-500" size={24} />
                <span className="font-bold">پشتیبانی سریع</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-500" size={24} />
                <span className="font-bold">ارسال به سراسر کشور</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden glass p-4">
              <img 
                src="https://picsum.photos/seed/about-store/800/800" 
                alt="Our Store" 
                className="w-full h-full object-cover rounded-[40px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="text-4xl font-black text-orange-500 mb-1">+۵</div>
              <div className="text-sm font-bold text-zinc-400">سال سابقه درخشان</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="glass p-10 rounded-[40px] text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-6">
              <History size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">تاریخچه ما</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              از یک فروشگاه کوچک در قلب ساری شروع کردیم و امروز به یکی از معتبرترین مراجع محصولات شیائومی تبدیل شده‌ایم.
            </p>
          </div>
          <div className="glass p-10 rounded-[40px] text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">تیم ما</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              تیمی متشکل از متخصصین تکنولوژی که همیشه آماده راهنمایی شما برای بهترین انتخاب هستند.
            </p>
          </div>
          <div className="glass p-10 rounded-[40px] text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">افتخارات</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              رضایت بیش از ۵۰۰۰ مشتری، بزرگترین افتخار و سرمایه ما در این سال‌ها بوده است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
