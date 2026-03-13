import { useMemo, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  material: string;
};

type CartState = Record<string, { productId: number; size: string; color: string; quantity: number }>;

const lookbook = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
];

const products: Product[] = [
  {
    id: 1,
    name: 'Linen Overshirt',
    price: 890000,
    category: 'Outerwear',
    image: lookbook[0],
    description: 'Áo khoác sơ mi linen form relaxed, hợp layering nhẹ và outfit tối giản hằng ngày.',
    sizes: ['S', 'M', 'L'],
    colors: ['Sand', 'Stone'],
    material: '100% Linen Blend',
  },
  {
    id: 2,
    name: 'Relaxed Trousers',
    price: 760000,
    category: 'Bottoms',
    image: lookbook[1],
    description: 'Quần suông cạp cao, chất vải đứng nhưng mềm, mặc lên sang mà vẫn thoải mái.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Taupe', 'Black'],
    material: 'Premium Twill',
  },
  {
    id: 3,
    name: 'Classic Tee',
    price: 420000,
    category: 'Basics',
    image: lookbook[2],
    description: 'Áo thun basic phom vừa, cổ đẹp, vải dày vừa phải cho outfit clean.',
    sizes: ['S', 'M', 'L'],
    colors: ['Cream', 'Black'],
    material: 'Cotton 280gsm',
  },
  {
    id: 4,
    name: 'Soft Blazer',
    price: 1290000,
    category: 'Tailoring',
    image: lookbook[1],
    description: 'Blazer mềm, vai nhẹ, hợp set smart casual hoặc phối cùng trouser ton-sur-ton.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Mocha', 'Charcoal'],
    material: 'Viscose Blend',
  },
];

const faqs = [
  ['Có thanh toán thật chưa?', 'Chưa. Đây là checkout mock theo flow shop thật. Có thể nối cổng thanh toán ở bước kế tiếp.'],
  ['Giỏ hàng có lưu lại không?', 'Trong bản này cart giữ trong session hiện tại của trình duyệt. Có thể thêm localStorage hoặc backend sau.'],
  ['Có thể thêm product detail thật không?', 'Có. Cấu trúc hiện tại đã có detail state, rất dễ mở rộng thành nhiều route hoặc API thật.'],
];

function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[0]);
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[0]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
  const [cart, setCart] = useState<CartState>({});
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cartItems = useMemo(() => Object.values(cart).map((item) => {
    const product = products.find((p) => p.id === item.productId)!;
    return { ...item, product };
  }), [cart]);

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);
  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [cartItems]);

  function openProduct(product: Product) {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
  }

  function addToCart() {
    if (!selectedProduct) return;
    const key = `${selectedProduct.id}-${selectedSize}-${selectedColor}`;
    setCart((prev) => ({
      ...prev,
      [key]: {
        productId: selectedProduct.id,
        size: selectedSize,
        color: selectedColor,
        quantity: (prev[key]?.quantity || 0) + 1,
      },
    }));
  }

  function updateQty(key: string, qty: number) {
    setCart((prev) => {
      if (qty <= 0) {
        const clone = { ...prev };
        delete clone[key];
        return clone;
      }
      return { ...prev, [key]: { ...prev[key], quantity: qty } };
    });
  }

  return (
    <div className="min-h-screen bg-[#fcf7f2] text-[#1f2937]">
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#fcf7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.35em] text-[#8b5e5a]">Monarch Wear</div>
            <div className="mt-1 text-lg font-black tracking-[0.28em]">SHOP DEMO</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            <a href="#lookbook">Lookbook</a>
            <a href="#shop">Shop</a>
            <a href="#checkout">Checkout</a>
          </nav>
          <button onClick={() => setCheckoutOpen(true)} className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold">
            Giỏ hàng ({cartCount})
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-[#8b5e5a] shadow-sm">
            Upgraded storefront • Product detail + cart + checkout
          </span>
          <h1 className="text-5xl font-black leading-tight text-stone-900 sm:text-6xl">
            Từ landing page thành shop quần áo demo hoàn chỉnh hơn.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            Giờ site đã có chi tiết sản phẩm rõ hơn, chọn size/màu, giỏ hàng tốt hơn và flow checkout mock để bạn demo như một shop thật.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#shop" className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white">Xem sản phẩm</a>
            <button onClick={() => setCheckoutOpen(true)} className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700">Mở giỏ hàng</button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <img src={lookbook[0]} alt="Lookbook 1" className="h-full min-h-[240px] w-full rounded-[2rem] object-cover shadow-card sm:row-span-2" />
          <img src={lookbook[1]} alt="Lookbook 2" className="h-56 w-full rounded-[2rem] object-cover shadow-card" />
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">Current cart</div>
            <div className="mt-2 text-4xl font-black">{cartCount}</div>
            <p className="mt-3 text-stone-300">Tổng tạm tính: {formatPrice(subtotal)}</p>
          </div>
        </div>
      </section>

      <section id="lookbook" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {lookbook.map((image, index) => (
            <img key={image} src={image} alt={`Lookbook ${index + 1}`} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card" />
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-card">
          {selectedProduct && (
            <>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e5a]">{selectedProduct.category}</p>
                <h2 className="mt-2 text-3xl font-black text-stone-900">{selectedProduct.name}</h2>
                <p className="mt-2 text-xl font-bold">{formatPrice(selectedProduct.price)}</p>
                <p className="mt-4 leading-7 text-stone-600">{selectedProduct.description}</p>
                <p className="mt-3 text-sm text-stone-500">Chất liệu: {selectedProduct.material}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 text-sm font-semibold">Size</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <button key={size} onClick={() => setSelectedSize(size)} className={`rounded-full px-4 py-2 text-sm font-semibold ${selectedSize === size ? 'bg-stone-900 text-white' : 'border border-stone-300 bg-white text-stone-700'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-semibold">Màu</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color) => (
                      <button key={color} onClick={() => setSelectedColor(color)} className={`rounded-full px-4 py-2 text-sm font-semibold ${selectedColor === color ? 'bg-[#8b5e5a] text-white' : 'border border-stone-300 bg-white text-stone-700'}`}>
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={addToCart} className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white">Thêm vào giỏ</button>
                <button onClick={() => { addToCart(); setCheckoutOpen(true); }} className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700">Mua ngay</button>
              </div>
            </>
          )}
        </div>

        <div>
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b5e5a]">Catalog</p>
            <h2 className="text-4xl font-black text-stone-900">Chọn sản phẩm để xem chi tiết</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <button key={product.id} onClick={() => openProduct(product)} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white text-left shadow-card transition hover:-translate-y-1">
                <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
                <div className="space-y-2 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e5a]">{product.category}</p>
                  <h3 className="text-xl font-black text-stone-900">{product.name}</h3>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold">{formatPrice(product.price)}</span>
                    <span className="text-sm text-stone-500">Xem chi tiết</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="checkout" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-300">Checkout flow</p>
            <h2 className="mt-3 text-4xl font-black">Một bước nữa là thành shop thật</h2>
            <p className="mt-4 leading-8 text-stone-300">
              Flow checkout này đã đủ để demo với khách: có cart, chọn biến thể sản phẩm, cập nhật số lượng và form đặt hàng rõ ràng.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-card">
            {submitted ? (
              <div className="rounded-[1.5rem] bg-emerald-50 p-6 text-emerald-900">
                <h3 className="text-2xl font-black">Đặt hàng demo thành công</h3>
                <p className="mt-2">Bước tiếp theo có thể nối cổng thanh toán, email xác nhận và database đơn hàng thật.</p>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input required placeholder="Họ và tên" className="rounded-2xl border border-stone-300 px-4 py-3" />
                  <input required placeholder="Số điện thoại" className="rounded-2xl border border-stone-300 px-4 py-3" />
                </div>
                <input type="email" placeholder="Email" className="rounded-2xl border border-stone-300 px-4 py-3" />
                <textarea required placeholder="Địa chỉ giao hàng" className="min-h-28 rounded-2xl border border-stone-300 px-4 py-3" />
                <textarea placeholder="Ghi chú đơn hàng" className="min-h-24 rounded-2xl border border-stone-300 px-4 py-3" />
                <button disabled={cartItems.length === 0} type="submit" className="rounded-full bg-[#8b5e5a] px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50">
                  Xác nhận đặt hàng demo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mt-8 space-y-4">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-card">
              <h3 className="text-lg font-black text-stone-900">{q}</h3>
              <p className="mt-3 leading-7 text-stone-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {checkoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 p-4 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-black text-stone-900">Giỏ hàng</h3>
              <button onClick={() => setCheckoutOpen(false)} className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold">Đóng</button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-stone-500">Chưa có sản phẩm nào trong giỏ.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const key = `${item.productId}-${item.size}-${item.color}`;
                  return (
                    <div key={key} className="rounded-2xl border border-stone-200 p-4">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="font-bold text-stone-900">{item.product.name}</div>
                          <div className="text-sm text-stone-500">{item.color} • Size {item.size}</div>
                          <div className="mt-1 text-sm font-semibold">{formatPrice(item.product.price)}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => updateQty(key, item.quantity - 1)} className="rounded-full border border-stone-300 px-3 py-1">-</button>
                          <span className="min-w-6 text-center font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQty(key, item.quantity + 1)} className="rounded-full border border-stone-300 px-3 py-1">+</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between border-t border-stone-200 pt-4 text-lg font-bold">
                  <span>Tạm tính</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setCheckoutOpen(false)} className="rounded-full border border-stone-300 px-5 py-3 font-semibold text-stone-700">Tiếp tục mua</button>
                  <a href="#checkout" onClick={() => setCheckoutOpen(false)} className="rounded-full bg-stone-900 px-5 py-3 font-semibold text-white">Đi tới checkout</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
