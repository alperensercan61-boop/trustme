"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [location, setLocation] = useState({
    lat: 40.9919,
    lng: 29.0236,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => console.log("Konum izni verilmedi.")
    );
  }, []);

  const categories = [
  {
    name: "Restoran",
    count: "248 işletme",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kafe",
    count: "183 işletme",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Otel",
    count: "65 işletme",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Diş Kliniği",
    count: "91 işletme",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kuaför",
    count: "140 işletme",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Oto Servis",
    count: "72 işletme",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
  },
];

  const places = [
    {
      name: "Mira Steak House",
      type: "Restoran",
      distance: "1.2 km",
      score: 96,
      comment:
        "AI analizine göre yorumların büyük bölümü doğal, puan dağılımı tutarlı ve müşteri memnuniyeti son aylarda yüksek seviyede.",
    },
    {
      name: "Luna Coffee",
      type: "Kafe",
      distance: "850 m",
      score: 94,
      comment:
        "Kullanıcılar özellikle ortam, servis hızı ve ürün kalitesinden memnun. Sahte yorum riski düşük görünüyor.",
    },
    {
      name: "Nova Dental",
      type: "Diş Kliniği",
      distance: "2.1 km",
      score: 91,
      comment:
        "Yorumlarda doktor ilgisi, hijyen ve randevu düzeni öne çıkıyor. Olumsuz yorum oranı düşük.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* HERO MAP */}
      <section className="relative h-[760px] overflow-hidden bg-white">
        <iframe
          src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
          className="absolute inset-0 h-full w-full scale-110 border-0 blur-[2px]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-white/55" />

        <nav className="absolute left-0 right-0 top-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <div className="text-2xl font-bold text-blue-950">Güven Bana</div>

            <button className="rounded-full bg-blue-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-500">
              İşletmeni ekle
            </button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 rounded-full border border-orange-200 bg-white/90 px-5 py-2 text-sm font-medium text-blue-950 shadow-sm">
            Konumuna göre güvenilir işletmeler
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-blue-950 md:text-7xl">
            Yakınındaki en güvenilir yerleri bul.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Restoran, kafe, klinik ve yerel işletmeleri Trust Score ile karşılaştır.
            Sadece puana değil, güvenilirliğe bak.
          </p>

          <div className="mt-10 flex w-full max-w-3xl items-center rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-500/20">
            <input
              className="w-full rounded-2xl px-6 py-5 text-lg text-slate-700 outline-none"
              placeholder="Restoran, kafe veya işletme ara..."
            />

            <button className="rounded-2xl bg-gradient-to-r from-orange-500 to-blue-950 px-10 py-5 text-lg font-semibold text-white">
              Ara
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-white/90 px-4 py-2 text-blue-950 shadow-sm">
              Yakınında 128 işletme
            </span>
            <span className="rounded-full bg-white/90 px-4 py-2 text-blue-950 shadow-sm">
              En yüksek skor: 96
            </span>
            <span className="rounded-full bg-white/90 px-4 py-2 text-blue-950 shadow-sm">
              AI destekli analiz
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
    <div>
      <p className="font-medium text-orange-500">Kategoriler</p>
      <h2 className="mt-2 text-4xl font-semibold tracking-tight text-blue-950">
        Ne arıyorsun?
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        En çok aranan işletme kategorilerini Trust Score ile keşfet.
      </p>
    </div>

    <button className="w-fit rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-blue-950 shadow-sm transition hover:border-orange-300 hover:text-orange-500">
      Tüm kategoriler
    </button>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {categories.map((cat) => (
      <div
        key={cat.name}
        className="group relative h-[260px] overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${cat.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/25 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="mb-4 w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
            {cat.count}
          </div>

          <h3 className="text-2xl font-semibold">{cat.name}</h3>

          <p className="mt-2 text-sm text-white/80">
            Güven skoru yüksek işletmeleri keşfet.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* NEARBY RECOMMENDATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div>
          <p className="font-medium text-orange-500">Yakındaki öneriler</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-blue-950">
            AI tarafından öne çıkarılan yerler
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {places.map((place) => (
            <div
              key={place.name}
              className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-950">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-slate-500">
                    {place.type} · {place.distance}
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-500 px-5 py-4 text-center text-white">
                  <div className="text-3xl font-bold">{place.score}</div>
                  <div className="text-xs uppercase tracking-wide">Trust</div>
                </div>
              </div>

              <p className="leading-7 text-slate-600">{place.comment}</p>

              <Link
  href="/business/mira-steak-house"
  className="mt-6 block w-full rounded-2xl bg-blue-950 px-5 py-4 text-center font-medium text-white transition hover:bg-orange-500"
>
  AI Analizini Gör
</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}