import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, Search, X, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

const categories = ["گوشی هوشمند", "ساعت هوشمند", "لپ‌تاپ", "خانه هوشمند", "لوازم جانبی"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-black text-orange-500 tracking-tighter"
              >
                شیائومی ساری
              </motion.div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
              <Link to="/" className="hover:text-white transition-colors reveal-effect px-3 py-1 rounded-lg tactile-button">صفحه اصلی</Link>
              <Link to="/shop" className="hover:text-white transition-colors reveal-effect px-3 py-1 rounded-lg tactile-button">محصولات</Link>
              <Link to="/about" className="hover:text-white transition-colors reveal-effect px-3 py-1 rounded-lg tactile-button">درباره ما</Link>
              <Link to="/contact" className="hover:text-white transition-colors reveal-effect px-3 py-1 rounded-lg tactile-button">تماس با ما</Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-zinc-400 hover:text-white transition-colors reveal-effect rounded-xl tactile-button">
              <Search size={20} />
            </button>
            <Link to="/cart" className="p-2 text-zinc-400 hover:text-white transition-colors relative reveal-effect rounded-xl tactile-button">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-orange-500 text-[10px] flex items-center justify-center rounded-full text-white font-bold">
                ۰
              </span>
            </Link>
            <Link to="/profile" className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all reveal-effect tactile-button">
              <User size={18} />
              <span>ورود / ثبت‌نام</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors reveal-effect rounded-xl tactile-button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-zinc-950 z-[70] md:hidden p-8 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-black text-orange-500">منو</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-zinc-400">
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-6 mb-12">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-bold text-zinc-200 hover:text-orange-500 transition-colors"
                >
                  صفحه اصلی
                  <ChevronLeft size={18} className="text-zinc-600" />
                </Link>
                <Link 
                  to="/shop" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-bold text-zinc-200 hover:text-orange-500 transition-colors"
                >
                  محصولات
                  <ChevronLeft size={18} className="text-zinc-600" />
                </Link>
                <Link 
                  to="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-bold text-zinc-200 hover:text-orange-500 transition-colors"
                >
                  درباره ما
                  <ChevronLeft size={18} className="text-zinc-600" />
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-bold text-zinc-200 hover:text-orange-500 transition-colors"
                >
                  تماس با ما
                  <ChevronLeft size={18} className="text-zinc-600" />
                </Link>
              </nav>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-xs font-bold text-zinc-500 mb-6 uppercase tracking-widest">دسته‌بندی‌ها</h3>
                <div className="grid gap-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/shop?category=${cat}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Link 
                  to="/profile" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 bg-orange-500 text-white p-4 rounded-2xl font-bold justify-center shadow-lg shadow-orange-500/20"
                >
                  <User size={20} />
                  ورود / ثبت‌نام
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
