import React, { MouseEvent, FormEvent } from "react";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  const handleAddToCart = (e: MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${name} به سبد خرید اضافه شد`);
  };

  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault();
    toast.success("با موفقیت در خبرنامه عضو شدید!");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <>
      <Hero />
      <ProductCategories />
      
      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-center sm:text-right">
            <div>
              <h2 className="text-3xl font-bold mb-2">محصولات ویژه</h2>
              <p className="text-zinc-400">پیشنهادات داغ امروز برای شما</p>
            </div>
            <Link to="/shop" className="text-orange-500 font-bold hover:underline">مشاهده همه</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Link to={`/product/${i}`} key={i} className="glass rounded-3xl overflow-hidden group reveal-effect tactile-button">
                <div className="aspect-square overflow-hidden bg-zinc-900 relative">
                  <img 
                    src={`https://picsum.photos/seed/product-${i}/400/400`} 
                    alt="Product" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    تخفیف ویژه
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">Xiaomi Redmi Note 13 Pro</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-500 line-through">۱۸,۵۰۰,۰۰۰ تومان</span>
                      <span className="text-lg font-black text-orange-500">۱۶,۹۰۰,۰۰۰ تومان</span>
                    </div>
                    <button 
                      onClick={(e) => handleAddToCart(e, "Xiaomi Redmi Note 13 Pro")}
                      className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all active:scale-90 reveal-effect tactile-button"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass p-12 rounded-[40px] relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl font-black mb-6">با ما هوشمندتر زندگی کنید</h2>
              <p className="text-zinc-400 mb-8">
                با عضویت در خبرنامه شیائومی ساری، از جدیدترین محصولات و تخفیف‌های ویژه زودتر از همه باخبر شوید.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleNewsletter}>
                <input 
                  type="text" 
                  required
                  placeholder="ایمیل یا شماره موبایل شما" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 reveal-effect tactile-button">
                  عضویت در خبرنامه
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
