import Head from "next/head";

export default function Home() {
  const services = [
    { key: "trafik", title: "Trafik Sigortası", desc: "Zorunlu trafik sigortası ile karşı tarafın hasarlarını teminat altına alın.", icon: "🚗" },
    { key: "kasko", title: "Kasko", desc: "Çalınma, çarpma, doğal afetler ve daha fazlasına karşı aracınızı koruyun.", icon: "🚙" },
    { key: "seyahat", title: "Seyahat Sağlık", desc: "Yurt içi/yurt dışı seyahatlerinizde acil sağlık ve asistans güvencesi.", icon: "✈️" },
    { key: "konut", title: "Konut", desc: "Eviniz, eşyalarınız ve üçüncü şahıs sorumluluklarınız güvende.", icon: "🏠" },
    { key: "dask", title: "DASK", desc: "Zorunlu deprem sigortası ile konutunuzun temelleri güvence altında.", icon: "🏡" },
    { key: "saglik", title: "Sağlık", desc: "Tamamlayıcı ve özel sağlık planlarıyla hızlı erişim, geniş ağ.", icon: "💙" },
  ];

  const phoneE164 = "905444456567";
  const email = "calansigorta@gmail.com";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Head>
        <title>Calan Sigorta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Calan Sigorta Logo" className="w-12 h-12 object-contain" />
            <div className="font-semibold tracking-tight">CALAN SİGORTA</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hizmetler" className="hover:text-slate-600">Hizmetler</a>
            <a href="#teklif" className="hover:text-slate-600">Teklif Al</a>
            <a href="#iletisim" className="hover:text-slate-600">İletişim</a>
          </nav>
          <a href="#teklif" className="px-4 py-2 rounded-xl bg-[#1d2c3b] text-white text-sm shadow">Hızlı Teklif</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#1d2c3b] to-[#2f3e4e] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Değerlerinize <span className="text-emerald-400">Değer Katar</span>
            </h1>
            <div className="mt-6 flex gap-3">
              <a href="#teklif" className="px-5 py-3 rounded-2xl bg-emerald-500 text-white shadow">Hemen Teklif Al</a>
              <a href="#hizmetler" className="px-5 py-3 rounded-2xl border border-white text-white">Hizmetleri Gör</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img src="/logo.png" alt="Calan Sigorta" className="w-56 h-56 object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Hizmetler</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.key} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                <a
                  href={`https://wa.me/${phoneE164}?text=${encodeURIComponent(
                    `Merhaba, ${s.title} için teklif almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
                >
                  WhatsApp’tan Teklif Al
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teklif" className="bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Hızlı Teklif Formu</h2>
          <p className="mt-2 text-slate-600">Formu doldurduktan sonra WhatsApp üzerinden size dönüş yapılacaktır.</p>
          <div className="mt-8">
            <a
              href={`https://wa.me/${phoneE164}?text=${encodeURIComponent(
                "Merhaba, sigorta teklifi almak istiyorum."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-[#1d2c3b] text-white shadow inline-block"
            >
              WhatsApp ile Teklif Al
            </a>
          </div>
        </div>
      </section>

      <section id="iletisim">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">İletişim</h2>
            <div className="mt-6 space-y-3 text-slate-700">
              <div>📍 Van, Türkiye</div>
              <div>✉️ <a href={`mailto:${email}`} className="underline">{email}</a></div>
              <div>📱 <a href={`https://wa.me/${phoneE164}`} target="_blank" rel="noreferrer" className="underline">WhatsApp: 0544 445 65 67</a></div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 overflow-hidden">
            <iframe
              title="Harita"
              className="w-full h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Van%20Turkey&output=embed"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#1d2c3b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
          <div>© {new Date().getFullYear()} Calan Sigorta • Değerlerinize Değer Katar</div>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#teklif">Teklif</a>
            <a href={`https://wa.me/${phoneE164}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={`mailto:${email}`} className="underline underline-offset-4">{email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
