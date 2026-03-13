const collections = [
  {
    title: 'Summer Linen',
    desc: 'Áo sơ mi và quần linen tối giản, nhẹ và dễ phối cho mùa nóng.',
  },
  {
    title: 'Urban Essentials',
    desc: 'Basic tee, quần suông và outerwear cho outfit thành phố hiện đại.',
  },
  {
    title: 'Weekend Drop',
    desc: 'Những set đồ thoải mái cho đi chơi cuối tuần nhưng vẫn giữ chất riêng.',
  },
];

const features = [
  'Thiết kế tối giản, ảnh lớn, phù hợp fashion brand',
  'CTA rõ ràng cho chiến dịch quảng cáo',
  'Sẵn sàng mở rộng thành storefront sau này',
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffaf7] text-ink">
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-xl font-black tracking-[0.25em]">MONARCH</div>
          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            <a href="#collections">Bộ sưu tập</a>
            <a href="#about">Về thương hiệu</a>
            <a href="#contact">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
            New season • Modern fashion landing page
          </span>
          <h1 className="text-5xl font-black leading-tight text-stone-900 sm:text-6xl">
            Quần áo tối giản cho người thích mặc đẹp mà không cần cố quá nhiều.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            Landing page thời trang được dựng bằng Vite + React + Tailwind, phù hợp để chạy ads, giới thiệu brand hoặc làm nền cho shop quần áo sau này.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#collections" className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white">Xem bộ sưu tập</a>
            <a href="#contact" className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700">Nhận catalogue</a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] bg-[#e7d9ce] p-8 shadow-card sm:row-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rosebrown">Signature</p>
            <h2 className="mt-3 text-3xl font-black">Neutral tones</h2>
            <p className="mt-4 leading-7 text-stone-700">
              Bảng màu be, nâu, kem và đen giúp outfit dễ phối và giữ cảm giác cao cấp.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-card">
            <div className="text-4xl font-black">2026</div>
            <p className="mt-2 text-stone-600">Season launch</p>
          </div>
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
            <div className="text-4xl font-black">+3</div>
            <p className="mt-2 text-stone-300">Capsule collections</p>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rosebrown">Collections</p>
          <h2 className="text-4xl font-black text-stone-900">Bộ sưu tập nổi bật</h2>
          <p className="text-stone-600">Nội dung có thể đổi sang sản phẩm thật, hình lookbook, hoặc campaign theo mùa.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-card">
              <div className="mb-5 aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-[#f3e7df] to-[#d9c5b7]" />
              <h3 className="text-2xl font-black text-stone-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-card">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-300">About</p>
          <h2 className="mt-3 text-4xl font-black">Một landing page đủ đẹp để chạy chiến dịch ngay.</h2>
          <p className="mt-4 leading-8 text-stone-300">
            Bản này tập trung đúng chất fashion landing page: hero mạnh, block sưu tập rõ, section brand story và CTA chốt nhanh.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-card">
          <h3 className="text-2xl font-black text-stone-900">Điểm mạnh</h3>
          <ul className="mt-5 space-y-4 text-stone-600">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rosebrown" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-rosebrown px-8 py-12 text-white shadow-card">
          <h2 className="text-4xl font-black">Bạn muốn biến landing này thành brand thật của mình?</h2>
          <p className="mt-3 max-w-2xl text-rose-100">
            Có thể thêm hình sản phẩm thật, form lấy lead, kết nối pixel, analytics hoặc nâng cấp thành website bán hàng hoàn chỉnh.
          </p>
          <a href="mailto:hello@monarchwear.com" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-rosebrown">
            hello@monarchwear.com
          </a>
        </div>
      </section>
    </div>
  );
}
