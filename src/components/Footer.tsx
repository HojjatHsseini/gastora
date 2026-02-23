import { Link } from "react-router-dom";
import { Instagram, Send, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="text-2xl font-black text-orange-500 mb-4">شیائومی ساری</div>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              فروشگاه تخصصی محصولات شیائومی با ۵ سال سابقه فعالیت حضوری و آنلاین. ما تمامی محصولات معتبر را با تضمین اصالت کالا و بهترین قیمت بازار ارائه می‌دهیم.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">دسترسی سریع</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors reveal-effect px-2 py-1 rounded-lg tactile-button inline-block">صفحه اصلی</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors reveal-effect px-2 py-1 rounded-lg tactile-button inline-block">محصولات</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors reveal-effect px-2 py-1 rounded-lg tactile-button inline-block">درباره ما</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors reveal-effect px-2 py-1 rounded-lg tactile-button inline-block">تماس با ما</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">اطلاعات تماس</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                <span>۰۱۱-۳۳۳۳۳۳۳۳</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="text-orange-500" />
                <a href="https://www.instagram.com/xiaomi.sari" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">xiaomi.sari</a>
              </li>
              <li className="flex items-center gap-2">
                <Send size={16} className="text-orange-500" />
                <a href="https://t.me/xiaomi_sari_admin" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@xiaomi_sari_admin</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs">
            © ۱۴۰۳ شیائومی ساری - تمامی حقوق محفوظ است. طراحی شده برای تجربه خرید هوشمند.
          </p>
        </div>
      </div>
    </footer>
  );
}
