import { useMemo, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
};

const lookbook = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
];

const products: Product[] = [
  { id: 1, name: 'Linen Overshirt', price: '890.000đ', category: 'Outerwear', image: lookbook[0] },
  { id: 2, name: 'Relaxed Trousers', price: '760.000đ', category: 'Bottoms', image: lookbook[1] },
  { id: 3, name: 'Classic Tee', price: '420.000đ', category: 'Basics', image: lookbook[2] },
  { id: 4, name: 'Soft Blazer', price: '1.290.000đ', category: 'Tailoring', image: lookbook[1] },
];

const faqs = [
  ['Brand này bán gì?', 'Monarch Wear tập trung vào quần áo tối giản, dễ mặc, dễ phối nhưng vẫn có cảm giác cao cấp.'],
  ['Form này dùng để làm gì?', 'Dùng để thu lead khách quan tâm: xin catalogue, báo giá sỉ, hoặc nhận thông tin collection mới.'],
  ['Giỏ hàng đã thanh toán thật chưa?', 'Chưa. Đây là bản storefront demo có sản phẩm và giỏ hàng; có thể nối checkout thật ở bước sau.'],
];

export default function App() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const cartCount = useMemo(() => Object.values(cart).reduce((sum, qty) => sum + qty, 0), [cart]);

  function addToCart(productId: number) {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  }

  return (
    <div className="min-h-screen bg-[#fcf7f2] text-[#1f2937]">
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#fcf7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.35em] text-[#8b5e5a]">Monarch Wear</div>
            <div className="mt-1 text-lg font-black tracking-[0.28em]">LUXURY MINIMAL</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            <a href="#lookbook">Lookbook</a>
            <a href="#shop">Shop</a>
            <a href="#lead">Lead form</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#shop" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold">Giỏ hàng ({cartCount})</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-[#8b5e5a] shadow-sm">
            Default brand demo • Ready for Vercel
          </span>
          <h1 className="text-5xl font-black leading-tight text-stone-900 sm:text-6xl">
            Quần áo tối giản cho người thích mặc đẹp theo cách rất tự nhiên.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            Đây là bản mặc định hoàn chỉnh hơn: có ảnh lookbook thật, form lấy lead, sản phẩm demo và giỏ hàng để bạn hình dung một brand quần áo có thể đi xa tới đâu.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#shop" className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white">Mua bộ sưu tập</a>
            <a href="#lead" className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700">Nhận catalogue</a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <img src={lookbook[0]} alt="Lookbook 1" className="h-full min-h-[240px] w-full rounded-[2rem] object-cover shadow-card sm:row-span-2" />
          <img src={lookbook[1]} alt="Lookbook 2" className="h-56 w-full rounded-[2rem] object-cover shadow-card" />
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">Signature</div>
            <div className="mt-2 text-4xl font-black">Warm neutrals</div>
            <p className="mt-3 text-stone-300">Kem, cát, nâu và đen cho cảm giác sang, dễ mặc, dễ bán.</p>
          </div>
        </div>
      </section>

      <section id="lookbook" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b5e5a]">Lookbook</p>
          <h2 className="text-4xl font-black text-stone-900">Ảnh thật để lên đúng chất fashion brand</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {lookbook.map((image, index) => (
            <img key={image} src={image} alt={`Lookbook ${index + 1}`} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card" />
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b5e5a]">Shop demo</p>
            <h2 className="text-4xl font-black text-stone-900">Sản phẩm nổi bật</h2>
          </div>
          <div className="text-sm text-stone-500">Giỏ hàng hiện có {cartCount} sản phẩm</div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-card">
              <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e5a]">{product.category}</p>
                <h3 className="text-xl font-black text-stone-900">{product.name}</h3>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold">{product.price}</span>
                  <button onClick={() => addToCart(product.id)} className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white">
                    Thêm giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="lead" className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-12">
        <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-300">Lead form</p>
          <h2 className="mt-3 text-4xl font-black">Nhận catalogue và collection mới</h2>
          <p className="mt-4 leading-8 text-stone-300">
            Form này là bản demo để thu lead. Bước sau có thể nối email, Google Sheets, CRM hoặc webhook thật.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-card">
          {submitted ? (
            <div className="rounded-[1.5rem] bg-emerald-50 p-6 text-emerald-900">
              <h3 className="text-2xl font-black">Đã nhận thông tin</h3>
              <p className="mt-2">Đây là trạng thái demo. Có thể nối form này với backend thật ở bước tiếp theo.</p>
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required placeholder="Họ và tên" className="rounded-2xl border border-stone-300 px-4 py-3" />
              <div className="grid gap-4 md:grid-cols-2">
                <input required placeholder="Email" type="email" className="rounded-2xl border border-stone-300 px-4 py-3" />
                <input placeholder="Số điện thoại" className="rounded-2xl border border-stone-300 px-4 py-3" />
              </div>
              <select className="rounded-2xl border border-stone-300 px-4 py-3 text-stone-600">
                <option>Quan tâm collection mới</option>
                <option>Lấy bảng giá sỉ</option>
                <option>Hợp tác KOL / media</option>
              </select>
              <textarea placeholder="Nhu cầu của bạn" className="min-h-32 rounded-2xl border border-stone-300 px-4 py-3" />
              <button type="submit" className="rounded-full bg-[#8b5e5a] px-6 py-3 font-semibold text-white">Gửi thông tin</button>
            </form>
          )}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b5e5a]">FAQ</p>
          <h2 className="text-4xl font-black text-stone-900">Những gì đã có trong bản mặc định</h2>
        </div>
        <div className="mt-8 space-y-4">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-card">
              <h3 className="text-lg font-black text-stone-900">{q}</h3>
              <p className="mt-3 leading-7 text-stone-600">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
