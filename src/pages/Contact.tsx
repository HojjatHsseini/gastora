import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle } from "lucide-react";
import React, { useState, FormEvent } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">تماس با ما</h1>
          <p className="text-zinc-400">ما همیشه آماده شنیدن صدای گرم شما هستیم</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="glass p-10 rounded-[40px] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">تلفن تماس</h3>
            <p className="text-zinc-500 mb-4">شنبه تا پنجشنبه - ۹ الی ۲۱</p>
            <a href="tel:01133333333" className="text-2xl font-black text-white hover:text-orange-500 transition-colors">۰۱۱-۳۳۳۳۳۳۳۳</a>
          </div>

          <div className="glass p-10 rounded-[40px] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">آدرس فروشگاه</h3>
            <p className="text-zinc-500 mb-4">مراجعه حضوری با هماهنگی قبلی</p>
            <p className="text-white font-bold">مازندران، ساری، خیابان فرهنگ، مجتمع تجاری هوشمند</p>
          </div>

          <div className="glass p-10 rounded-[40px] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">شبکه‌های اجتماعی</h3>
            <p className="text-zinc-500 mb-4">پاسخگویی سریع در دایرکت و تلگرام</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <Send size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass p-12 rounded-[40px]">
            <h2 className="text-3xl font-black mb-8">ارسال پیام</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">نام و نام خانوادگی</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">شماره موبایل</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400">موضوع پیام</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400">متن پیام</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white py-4 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 reveal-effect tactile-button"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "ارسال پیام"
                )}
              </button>
            </form>
          </div>

          <div className="glass rounded-[40px] overflow-hidden min-h-[400px] relative">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center text-zinc-500 p-8 text-center">
              <MapPin size={48} className="mb-4 opacity-20" />
              <p>نقشه گوگل در این بخش بارگذاری می‌شود</p>
              <p className="text-xs mt-2">ساری، خیابان فرهنگ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
