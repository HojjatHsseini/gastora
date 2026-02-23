import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, Lock, Phone, ArrowLeft, Github, Chrome as Google } from "lucide-react";
import { toast } from "sonner";

export default function Profile() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(isLogin ? "خوش آمدید!" : "ثبت‌نام با موفقیت انجام شد.");
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="glass p-10 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full" />
          
          <div className="text-center mb-10 relative z-10">
            <div className="w-20 h-20 rounded-3xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-6">
              <User size={40} />
            </div>
            <h1 className="text-3xl font-black mb-2">{isLogin ? "خوش آمدید" : "ساخت حساب کاربری"}</h1>
            <p className="text-zinc-500 text-sm">
              {isLogin ? "برای دسترسی به پنل کاربری وارد شوید" : "به جمع مشتریان هوشمند ما بپیوندید"}
            </p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 mr-2">نام و نام خانوادگی</label>
                <div className="relative">
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl pr-12 pl-4 py-4 focus:outline-none focus:border-orange-500 transition-colors" placeholder="مثلا: علی محمدی" />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 mr-2">شماره موبایل یا ایمیل</label>
              <div className="relative">
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl pr-12 pl-4 py-4 focus:outline-none focus:border-orange-500 transition-colors" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 mr-2">رمز عبور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input type="password" className="w-full bg-white/5 border border-white/10 rounded-2xl pr-12 pl-4 py-4 focus:outline-none focus:border-orange-500 transition-colors" placeholder="••••••••" />
              </div>
            </div>

            {isLogin && (
              <div className="text-left">
                <button type="button" className="text-xs text-zinc-500 hover:text-orange-500 transition-colors">فراموشی رمز عبور؟</button>
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 reveal-effect tactile-button"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "ورود به حساب" : "ثبت‌نام"}
                  <ArrowLeft size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center relative z-10">
            <p className="text-sm text-zinc-500 mb-6">یا ورود با شبکه های اجتماعی</p>
            <div className="flex justify-center gap-4">
              <button className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <Google size={20} />
              </button>
              <button className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </button>
            </div>
          </div>

          <div className="mt-10 text-center relative z-10">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-bold text-orange-500 hover:underline"
            >
              {isLogin ? "هنوز حساب ندارید؟ ثبت‌نام کنید" : "قبلا ثبت‌نام کرده‌اید؟ وارد شوید"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
