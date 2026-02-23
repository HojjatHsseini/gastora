import { motion } from "motion/react";
import { Smartphone, Laptop, Watch, Tv, Headphones, Home } from "lucide-react";

const categories = [
  { name: "گوشی هوشمند", icon: Smartphone, color: "bg-blue-500" },
  { name: "لپ‌تاپ و تبلت", icon: Laptop, color: "bg-purple-500" },
  { name: "ساعت هوشمند", icon: Watch, color: "bg-rose-500" },
  { name: "تلویزیون", icon: Tv, color: "bg-amber-500" },
  { name: "صدا و موسیقی", icon: Headphones, color: "bg-emerald-500" },
  { name: "خانه هوشمند", icon: Home, color: "bg-orange-500" },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">دسته‌بندی محصولات</h2>
          <p className="text-zinc-400">هر آنچه از دنیای شیائومی نیاز دارید را اینجا پیدا کنید</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl flex flex-col items-center gap-4 cursor-pointer hover:bg-white/10 transition-all group reveal-effect tactile-button"
            >
              <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <cat.icon size={32} />
              </div>
              <span className="font-bold text-sm">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
