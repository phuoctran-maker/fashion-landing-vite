const collections = [
  {
    title: 'Resort Linen',
    desc: 'Silhouette rộng, chất liệu nhẹ và bảng màu cát cho những ngày cần sự thoải mái nhưng vẫn chỉn chu.',
    tone: 'from-[#f1e3d8] to-[#d8c0ae]',
  },
  {
    title: 'City Minimal',
    desc: 'Những item tối giản dành cho nhịp sống thành thị: blazer mềm, trouser suông và tee chất lượng cao.',
    tone: 'from-[#e8ddd5] to-[#cab8ab]',
  },
  {
    title: 'After Dark',
    desc: 'Capsule sắc đen và nâu đậm cho những outfit buổi tối, gọn gàng nhưng vẫn có điểm nhấn.',
    tone: 'from-[#d7cbc3] to-[#b69c90]',
  },
];

const highlights = [
  ['Premium Fabric', 'Ưu tiên chất liệu đứng form, mặc mát và dễ bảo quản.'],
  ['Seasonal Drop', 'Ra mắt theo capsule nhỏ để giữ cảm giác mới mẻ và có chọn lọc.'],
  ['Visual-first', 'Thiết kế landing phù hợp chạy ads và giới thiệu brand thời trang.'],
];

const testimonials = [
  {
    name: 'Linh Trần',
    role: 'Fashion Content Creator',
    quote: 'Landing page này có đúng cảm giác một fashion brand hiện đại cần có: sạch, sang và rất dễ nâng tiếp thành site bán hàng.',
  },
  {
    name: 'Minh Phạm',
    role: 'Brand Manager',
    quote: 'Điểm mình thích nhất là cách chia section rõ ràng: hero mạnh, collection đẹp và CTA chốt rất gọn.',
  },
];

const faqs = [
  ['Landing page này dùng để làm gì?', 'Phù hợp để chạy quảng cáo, giới thiệu brand, ra mắt collection mới hoặc dùng làm nền trước khi mở rộng thành storefront.'],
  ['Có thể thêm sản phẩm thật không?', 'Có. Mình có thể thêm product grid, chi tiết sản phẩm, giỏ hàng và cả checkout ở bước tiếp theo.'],
  ['Có thể gắn form lấy lead không?', 'Có. Có thể nối form với email, Google Sheets, webhook hoặc CRM tùy nhu cầu.'],
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcf7f2] text-ink">
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#fcf7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.35em] text-rosebrown">Monarch Wear</div>
            <div className="mt-1 text-lg font-black tracking-[0.28em]">MODERN ESSENTIALS</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            <a href="#collections">Collections</a>
            <a href="#story">Story</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rosebrown shadow-sm">
            New collection • Autumn / Winter 2026
          </span>
          <h1 className="text-5xl font-black leading-tight text-stone-900 sm:text-6xl">
            Thời trang tối giản cho người thích cảm giác sang mà vẫn dễ mặc mỗi ngày.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            Một landing page theo hướng luxury-minimal: clean, hình khối lớn, nhấn mạnh câu chuyện thương hiệu và đủ tốt để đem đi chạy campaign ngay.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#collections" className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white">Khám phá bộ sưu tập</a>
            <a href="#contact" className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700">Nhận brand deck</a>
          </div>
          <div className="grid max-w-xl grid-cols-3 gap-3 pt-4">
            {[
              ['03', 'Capsules'],
              ['12+', 'Hero looks'],
              ['24h', 'Ready to launch'],
            ].map(([n, t]) => (
              <div key={t} className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-sm">
                <div className="text-2xl font-black text-stone-900">{n}</div>
                <div className="mt-1 text-sm text-stone-500">{t}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#e8d9cf] to-[#cfb19a] p-8 shadow-card sm:row-span-2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rosebrown">Signature palette</p>
                <h2 className="mt-3 text-3xl font-black text-stone-900">Warm neutrals</h2>
                <p className="mt-4 max-w-sm leading-7 text-stone-700">
                  Kem, cát, nâu hồng và charcoal giúp toàn bộ landing page có chất high-fashion nhưng không quá xa cách.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-4 gap-3">
                {['#f7efe8', '#e3d2c6', '#ba9684', '#3b312d'].map((color) => (
                  <div key={color} className="h-14 rounded-2xl border border-white/40" style={{ background: color }} />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-card">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Drop</div>
            <div className="mt-2 text-4xl font-black">Limited</div>
            <p className="mt-3 text-stone-600">Tạo cảm giác collection có chọn lọc và đáng khám phá.</p>
          </div>
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">Campaign</div>
            <div className="mt-2 text-4xl font-black">Lookbook-first</div>
            <p className="mt-3 text-stone-300">Phù hợp chạy ads hoặc làm landing thu lead cho thương hiệu.</p>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rosebrown">Collections</p>
          <h2 className="text-4xl font-black text-stone-900">Three moods. One identity.</h2>
          <p className="text-stone-600">Mỗi block có thể thay bằng ảnh lookbook thật, sản phẩm thật hoặc campaign theo mùa của brand bạn.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-card">
              <div className={`aspect-[4/5] bg-gradient-to-br ${item.tone}`} />
              <div className="p-6">
                <h3 className="text-2xl font-black text-stone-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-300">Brand story</p>
          <h2 className="mt-3 text-4xl font-black">Ít hơn, nhưng tốt hơn.</h2>
          <p className="mt-4 leading-8 text-stone-300">
            Monarch hướng tới người mặc thích sự gọn gàng, hiện đại và tinh tế. Mỗi item nên dễ mặc, dễ phối, nhưng vẫn đủ chất để khiến người ta nhớ.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map(([title, desc]) => (
            <div key={title} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-card">
              <h3 className="text-xl font-black text-stone-900">{title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-card">
              <p className="text-lg leading-8 text-stone-700">“{item.quote}”</p>
              <div className="mt-6">
                <div className="font-black text-stone-900">{item.name}</div>
                <div className="text-sm text-stone-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rosebrown">FAQ</p>
          <h2 className="text-4xl font-black text-stone-900">Những câu hỏi thường gặp</h2>
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

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-rosebrown px-8 py-12 text-white shadow-card">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-black">Sẵn sàng biến landing này thành brand của bạn?</h2>
              <p className="mt-3 max-w-2xl text-rose-100">
                Mình có thể làm tiếp bước sau: thay brand name, thêm ảnh thật, gắn form lấy lead, thêm pixel hoặc nâng cấp thành website bán hàng hoàn chỉnh.
              </p>
            </div>
            <a href="mailto:hello@monarchwear.com" className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-rosebrown">
              hello@monarchwear.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
