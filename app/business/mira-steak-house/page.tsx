export default function MiraSteakHousePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      <section className="relative h-[420px] overflow-hidden bg-gradient-to-br from-orange-200 via-orange-500 to-blue-950">
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 text-white">
          <p className="mb-3 w-fit rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
            Restoran · 1.2 km yakınında
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Mira Steak House
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            AI analizine göre yüksek güven skoruna sahip premium steak restoranı.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="font-medium text-orange-500">AI Özeti</p>
            <h2 className="mt-2 text-3xl font-semibold text-blue-950">
              Neden 96 Trust Score aldı?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Yorumların büyük bölümü doğal görünüyor. Puan dağılımı tutarlı,
              son dönem müşteri memnuniyeti yüksek ve olumsuz yorumların oranı düşük.
              Kullanıcılar özellikle et kalitesi, servis hızı ve atmosferden memnun.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-950">
                İnsanlar neyi seviyor?
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>✓ Et kalitesi yüksek</li>
                <li>✓ Servis hızlı ve ilgili</li>
                <li>✓ Atmosfer premium</li>
                <li>✓ Temizlik yorumları güçlü</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-950">
                Nelere dikkat edilmeli?
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>• Hafta sonu yoğun olabilir</li>
                <li>• Fiyatlar ortalamanın üzerinde</li>
                <li>• Rezervasyon önerilir</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-950">
              Trust Score analiz kırılımı
            </h3>

            <div className="mt-6 space-y-5">
              {[
                ["Yorum gerçekliği", 97],
                ["Puan tutarlılığı", 95],
                ["Memnuniyet oranı", 96],
                ["Sahte yorum riski düşük", 92],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{label}</span>
                    <span className="font-semibold">{value}/100</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-orange-500"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm lg:sticky lg:top-6">
          <div className="rounded-[2rem] bg-orange-500 p-8 text-center text-white">
            <div className="text-7xl font-bold">96</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em]">
              AI Trust Score
            </div>
          </div>

          <div className="mt-6 space-y-4 text-slate-700">
            <p>⭐ Google puanı: 4.8</p>
            <p>💬 Yorum sayısı: 2.400+</p>
            <p>📍 Mesafe: 1.2 km</p>
            <p>💰 Fiyat seviyesi: Orta-Üst</p>
          </div>

          <button className="mt-7 w-full rounded-2xl bg-blue-950 px-5 py-4 font-medium text-white transition hover:bg-orange-500">
            Haritada Gör
          </button>

          <a
            href="/"
            className="mt-4 block text-center text-sm font-medium text-blue-950"
          >
            Ana sayfaya dön
          </a>
        </aside>
      </section>
    </main>
  );
}