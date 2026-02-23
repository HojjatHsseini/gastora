import React, { useState, useMemo, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const categories = ["همه", "گوشی هوشمند", "ساعت هوشمند", "لپ‌تاپ", "خانه هوشمند", "لوازم جانبی"];

const PRODUCTS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `محصول شماره ${i + 1} شیائومی`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  price: 16900000 + (i * 100000),
  oldPrice: 18500000 + (i * 100000),
  image: `https://picsum.photos/seed/shop-${i}/400/400`,
  isSpecial: i % 3 === 0
}));

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === "همه" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (e: MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${name} به سبد خرید اضافه شد`);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2">فروشگاه</h1>
            <p className="text-zinc-400">جستجو در میان صدها محصول هوشمند شیائومی</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="text" 
                placeholder="جستجوی محصول..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pr-12 pl-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <button className="glass p-3 rounded-2xl text-zinc-400 hover:text-white transition-colors">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap reveal-effect tactile-button ${
                selectedCategory === cat 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                : "glass text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="glass rounded-3xl overflow-hidden group flex flex-col reveal-effect tactile-button">
                <div className="aspect-square overflow-hidden bg-zinc-900 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.isSpecial && (
                    <div className="absolute top-3 right-3 bg-rose-500 text-white text-[9px] font-bold px-2 py-1 rounded-full">
                      تخفیف ویژه
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="text-[10px] text-orange-500 font-bold mb-1 uppercase tracking-wider">{product.category}</div>
                  <h3 className="font-bold mb-4 text-sm sm:text-base line-clamp-2 flex-grow">{product.name}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-500 line-through">{product.oldPrice.toLocaleString()}</span>
                      <span className="text-sm sm:text-lg font-black text-orange-500">{product.price.toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={(e) => handleAddToCart(e, product.name)}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all active:scale-90 reveal-effect tactile-button"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="glass p-20 rounded-[40px] text-center">
            <div className="text-zinc-500 mb-4">هیچ محصولی با این مشخصات پیدا نشد.</div>
            <button 
              onClick={() => {setSelectedCategory("همه"); setSearchQuery("");}}
              className="text-orange-500 font-bold hover:underline"
            >
              پاک کردن فیلترها
            </button>
          </div>
        )}
        
        {filteredProducts.length > 0 && (
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-orange-500 font-bold">۱</button>
            <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-500 hover:text-white transition-colors">۲</button>
            <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-500 hover:text-white transition-colors">۳</button>
          </div>
        )}
      </div>
    </div>
  );
}
