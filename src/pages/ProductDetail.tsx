import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Check,
  Info,
  Zap,
  Cpu,
  Smartphone,
  Battery
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PRODUCT_DATA = {
  id: "1",
  name: "Xiaomi Redmi Note 13 Pro Plus 5G",
  category: "گوشی هوشمند",
  price: 16900000,
  oldPrice: 18500000,
  rating: 4.8,
  reviewsCount: 124,
  colors: [
    { name: "مشکی نیمه‌شب", hex: "#1a1a1a" },
    { name: "سفید مهتابی", hex: "#f5f5f5" },
    { name: "بنفش شفق", hex: "#d8b4fe" },
  ],
  storage: ["256GB / 8GB", "512GB / 12GB"],
  specs: [
    { icon: Cpu, label: "پردازنده", value: "Dimensity 7200-Ultra" },
    { icon: Smartphone, label: "نمایشگر", value: "6.67\" 1.5K AMOLED" },
    { icon: Zap, label: "دوربین", value: "200MP OIS" },
    { icon: Battery, label: "باتری", value: "5000mAh / 120W" },
  ],
  features: [
    "سنسور اثر انگشت زیر نمایشگر",
    "گواهی IP68 مقاومت در برابر آب و گرد و غبار",
    "محافظ صفحه نمایش Gorilla Glass Victus",
    "اسپیکرهای استریو با پشتیبانی از Dolby Atmos",
    "تکنولوژی شارژ هوشمند HyperCharge"
  ]
};

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(PRODUCT_DATA.storage[1]);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(`https://picsum.photos/seed/product-${id}/800/800`);

  const handleAddToCart = () => {
    toast.success(`${PRODUCT_DATA.name} به سبد خرید شما اضافه شد.`, {
      description: `نسخه ${selectedStorage} - رنگ ${selectedColor.name}`,
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          <a href="/" className="hover:text-white">خانه</a>
          <ChevronLeft size={12} />
          <a href="/shop" className="hover:text-white">فروشگاه</a>
          <ChevronLeft size={12} />
          <span className="text-zinc-300">{PRODUCT_DATA.name}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Image Gallery (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              layoutId="product-image"
              className="aspect-square rounded-[40px] overflow-hidden glass p-8 relative group"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={mainImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  src={mainImage} 
                  alt={PRODUCT_DATA.name} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                <div className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                  پیشنهاد ویژه
                </div>
                <div className="bg-rose-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                  ۱۰٪ تخفیف
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(`https://picsum.photos/seed/thumb-${i}-${id}/400/400`)}
                  className={`aspect-square rounded-2xl overflow-hidden glass p-2 transition-all border-2 ${
                    mainImage.includes(`thumb-${i}`) ? "border-orange-500 scale-95" : "border-transparent hover:border-white/20"
                  }`}
                >
                  <img src={`https://picsum.photos/seed/thumb-${i}-${id}/200/200`} alt="Thumb" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-orange-500 font-bold text-sm mb-3">
                <Smartphone size={16} />
                {PRODUCT_DATA.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{PRODUCT_DATA.name}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="font-bold text-zinc-300">{PRODUCT_DATA.rating}</span>
                  <span className="text-zinc-500">({PRODUCT_DATA.reviewsCount} دیدگاه)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-500 font-bold">
                  <Check size={16} />
                  موجود در انبار
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {PRODUCT_DATA.specs.map((spec, i) => (
                <div key={i} className="glass p-4 rounded-2xl text-center">
                  <spec.icon size={20} className="mx-auto mb-2 text-orange-500" />
                  <div className="text-[10px] text-zinc-500 mb-1">{spec.label}</div>
                  <div className="text-xs font-bold text-zinc-200">{spec.value}</div>
                </div>
              ))}
            </div>

            <div className="glass p-8 rounded-[32px] mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full" />
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <div className="text-zinc-500 text-sm line-through mb-1">
                    {PRODUCT_DATA.oldPrice.toLocaleString()} تومان
                  </div>
                  <div className="text-4xl font-black text-orange-500">
                    {PRODUCT_DATA.price.toLocaleString()} <span className="text-sm font-normal">تومان</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 p-2 rounded-2xl border border-white/5">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors reveal-effect tactile-button"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors reveal-effect tactile-button"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Options Selection */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-xs font-bold text-zinc-500 mb-3">انتخاب رنگ: {selectedColor.name}</div>
                  <div className="flex gap-3">
                    {PRODUCT_DATA.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 ${
                          selectedColor.name === color.name ? "border-orange-500 scale-110 shadow-lg shadow-orange-500/20" : "border-transparent"
                        }`}
                      >
                        <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color.hex }} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-zinc-500 mb-3">انتخاب حافظه:</div>
                  <div className="flex flex-wrap gap-3">
                    {PRODUCT_DATA.storage.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedStorage(s)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                          selectedStorage === s 
                          ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20" 
                          : "glass border-white/5 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-orange-500 hover:bg-orange-600 text-white h-16 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-500/20 active:scale-95 reveal-effect tactile-button"
                >
                  <ShoppingCart size={22} />
                  افزودن به سبد خرید
                </button>
                <div className="flex gap-4">
                  <button className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-zinc-400 hover:text-rose-500 transition-colors group reveal-effect tactile-button">
                    <Heart size={22} className="group-hover:fill-current" />
                  </button>
                  <button className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-zinc-400 hover:text-blue-500 transition-colors reveal-effect tactile-button">
                    <Share2 size={22} />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-[11px] text-zinc-400 glass p-3 rounded-2xl">
                <ShieldCheck size={18} className="text-orange-500" />
                <span>گارانتی ۱۸ ماهه معتبر</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-zinc-400 glass p-3 rounded-2xl">
                <Truck size={18} className="text-orange-500" />
                <span>ارسال فوری سراسر کشور</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-zinc-400 glass p-3 rounded-2xl">
                <RotateCcw size={18} className="text-orange-500" />
                <span>۷ روز ضمانت بازگشت</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content Tabs */}
        <div className="glass rounded-[40px] overflow-hidden mb-20">
          <div className="flex border-b border-white/5 overflow-x-auto no-scrollbar bg-white/5">
            {[
              { id: "description", label: "توضیحات محصول" },
              { id: "specs", label: "مشخصات فنی" },
              { id: "reviews", label: "نظرات کاربران" },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-10 py-6 font-bold transition-all relative whitespace-nowrap ${
                  activeTab === tab.id ? "text-orange-500" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                  />
                )}
              </button>
            ))}
          </div>
          
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {activeTab === "description" && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-black mb-6">تجربه‌ای فراتر از انتظار</h3>
                    <p className="text-zinc-400 leading-loose text-lg mb-8">
                      گوشی هوشمند Redmi Note 13 Pro Plus یکی از قدرتمندترین میان‌رده‌های بازار است که با ویژگی‌های پرچمدار عرضه شده است. این گوشی با دوربین ۲۰۰ مگاپیکسلی خود، استانداردهای عکاسی موبایل را در این بازه قیمتی جابجا کرده است.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-white flex items-center gap-2">
                          <Info size={18} className="text-orange-500" />
                          ویژگی‌های برجسته
                        </h4>
                        <ul className="space-y-3">
                          {PRODUCT_DATA.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="glass p-6 rounded-3xl bg-orange-500/5 border-orange-500/10">
                        <h4 className="font-bold text-white mb-4">چرا بخریم؟</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          اگر به دنبال گوشی با دوربین فوق‌العاده، شارژ سریع خیره‌کننده و طراحی لوکس هستید، این مدل بهترین انتخاب در رده قیمتی خود است.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-2 gap-12"
                >
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold border-r-4 border-orange-500 pr-4">پردازنده و حافظه</h4>
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-white/5">
                        <tr className="flex py-3">
                          <td className="w-1/3 text-zinc-500">تراشه</td>
                          <td className="w-2/3 font-bold">MediaTek Dimensity 7200-Ultra (4 nm)</td>
                        </tr>
                        <tr className="flex py-3">
                          <td className="w-1/3 text-zinc-500">پردازنده گرافیکی</td>
                          <td className="w-2/3 font-bold">Mali-G610 MC4</td>
                        </tr>
                        <tr className="flex py-3">
                          <td className="w-1/3 text-zinc-500">نوع حافظه</td>
                          <td className="w-2/3 font-bold">UFS 3.1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold border-r-4 border-orange-500 pr-4">صفحه نمایش</h4>
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-white/5">
                        <tr className="flex py-3">
                          <td className="w-1/3 text-zinc-500">نوع پنل</td>
                          <td className="w-2/3 font-bold">AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+</td>
                        </tr>
                        <tr className="flex py-3">
                          <td className="w-1/3 text-zinc-500">روشنایی</td>
                          <td className="w-2/3 font-bold">1800 nits (peak)</td>
                        </tr>
                        <tr className="flex py-3">
                          <td className="w-1/3 text-zinc-500">رزولوشن</td>
                          <td className="w-2/3 font-bold">1220 x 2712 pixels (~446 ppi density)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="glass p-8 rounded-3xl text-center w-full md:w-64">
                      <div className="text-5xl font-black text-orange-500 mb-2">۴.۸</div>
                      <div className="flex justify-center text-amber-500 mb-2">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                      <div className="text-xs text-zinc-500">از مجموع ۱۲۴ امتیاز</div>
                    </div>
                    
                    <div className="flex-grow space-y-6 w-full">
                      {[1, 2].map((i) => (
                        <div key={i} className="glass p-6 rounded-2xl border-white/5">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold">
                                {i === 1 ? "ع" : "س"}
                              </div>
                              <div>
                                <div className="font-bold text-sm">{i === 1 ? "علی رضایی" : "سارا محمدی"}</div>
                                <div className="text-[10px] text-zinc-500">۲ روز پیش</div>
                              </div>
                            </div>
                            <div className="flex text-amber-500">
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                            </div>
                          </div>
                          <p className="text-sm text-zinc-400 leading-relaxed">
                            {i === 1 
                              ? "واقعا گوشی فوق‌العاده‌ایه. دوربینش توی نور روز عالیه و شارژ شدنش هم که حرف نداره. ممنون از شیائومی ساری برای ارسال سریع."
                              : "طراحی خیلی شیکی داره و صفحه نمایشش واقعا با کیفیته. رنگ بنفشش رو خریدم و خیلی راضیم."}
                          </p>
                        </div>
                      ))}
                      <button className="text-orange-500 font-bold text-sm hover:underline">مشاهده همه نظرات</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black">محصولات مشابه</h2>
            <a href="/shop" className="text-orange-500 font-bold text-sm hover:underline">مشاهده همه</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[2, 3, 4, 5].map((i) => (
              <a href={`/product/${i}`} key={i} className="glass rounded-3xl overflow-hidden group">
                <div className="aspect-square bg-zinc-900 p-4">
                  <img src={`https://picsum.photos/seed/rel-${i}/400/400`} alt="Product" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2 truncate">Xiaomi Redmi Note 13</h3>
                  <div className="text-orange-500 font-black text-sm">۱۲,۵۰۰,۰۰۰ تومان</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
