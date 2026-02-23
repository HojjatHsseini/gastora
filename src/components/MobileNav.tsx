import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, ShoppingCart, User, Phone } from "lucide-react";

export default function MobileNav() {
  const location = useLocation();
  
  const navItems = [
    { label: "خانه", icon: Home, path: "/" },
    { label: "محصولات", icon: ShoppingBag, path: "/shop" },
    { label: "سبد خرید", icon: ShoppingCart, path: "/cart" },
    { label: "پروفایل", icon: User, path: "/profile" },
    { label: "تماس", icon: Phone, path: "/contact" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/5 px-2 pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-orange-500" : "text-zinc-500 hover:text-white"
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
