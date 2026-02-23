import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const INITIAL_ITEMS = [
  { id: 1, name: "Xiaomi Redmi Note 13 Pro", price: 16900000, quantity: 1, color: "مشکی", image: "https://picsum.photos/seed/cart-1/200/200" },
  { id: 2, name: "Xiaomi Watch S3", price: 6500000, quantity: 1, color: "نقره‌ای", image: "https://picsum.photos/seed/cart-2/200/200" },
];

export default function Cart() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
    toast.error("محصول از سبد خرید حذف شد");
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 10000000 ? 0 : 50000;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    toast.success("در حال انتقال به درگاه پرداخت...");
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-12">سبد خرید</h1>

        {items.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="glass p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-900 p-2 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-right">
                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                    <p className="text-zinc-500 text-sm mb-4">رنگ: {item.color} | گارانتی ۱۸ ماهه</p>
                    
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center glass rounded-xl px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-500 hover:text-rose-500 transition-colors p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="text-xl font-black text-orange-500">
                      {(item.price * item.quantity).toLocaleString()} <span className="text-xs font-normal">تومان</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-[40px] sticky top-24">
                <h3 className="text-xl font-bold mb-8">خلاصه سفارش</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-zinc-400">
                    <span>قیمت کالاها ({items.length})</span>
                    <span>{subtotal.toLocaleString()} تومان</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>تخفیف</span>
                    <span className="text-rose-500">۰ تومان</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>هزینه ارسال</span>
                    <span className={shipping === 0 ? "text-emerald-500" : "text-zinc-400"}>
                      {shipping === 0 ? "رایگان" : `${shipping.toLocaleString()} تومان`}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex justify-between text-xl font-black text-white">
                    <span>جمع کل</span>
                    <span>{total.toLocaleString()} تومان</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
                >
                  ادامه فرآیند خرید
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="glass p-6 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag size={24} />
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  با خرید از شیائومی ساری، از ضمانت اصالت کالا و ۷ روز مهلت تست بهره‌مند شوید.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass p-20 rounded-[40px] text-center flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-700 mb-6">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-2xl font-bold mb-4">سبد خرید شما خالی است</h2>
            <p className="text-zinc-500 mb-8 max-w-xs mx-auto">هنوز هیچ محصولی به سبد خرید خود اضافه نکرده‌اید.</p>
            <Link to="/shop" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold transition-all">
              مشاهده محصولات
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
