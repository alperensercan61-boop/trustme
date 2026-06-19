import Link from "next/link";

export default function RestoranCategoryPage() {
  const restaurants = [
    {
      name: "Mira Steak House",
      area: "Kadıköy",
      distance: "1.2 km",
      googleRating: "4.8",
      reviews: "2.400+",
      score: 96,
      href: "/business/mira-steak-house",
    },
    {
      name: "Luna Grill",
      area: "Beşiktaş",
      distance: "2.4 km",
      googleRating: "4.7",
      reviews: "1.850+",
      score: 93,
      href: "/business/mira-steak-house",
    },
    {
      name: "Agora Burger",
      area: "Şişli",
      distance: "3.1 km",
      googleRating: "4.6",
      reviews: "3.100+",
      score: 91,
      href: "/business/mira-steak-house",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            ← Ana sayfaya dön
          </Link>

          <p className="mt-10 font-medium text-orange-400">Kategori</p>

          <h1 className="mt-2 text-5xl font-semibold tracking-tight md:text-7xl">
            Restoranlar
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Yakınındaki yüksek Trust Score alan restoranları keşfet.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-blue-950">
              Önerilen restoranlar
            </h2>
            <p className="mt-2 text-slate-600">
              AI analizine göre en güvenilir seçenekler.
            </p>
          </div>

          <button className="w-fit rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-blue-950 shadow-sm">
            En yüksek skora göre sırala
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {restaurants.map((place) => (
            <Link
              key={place.name}
              href={place.href}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 h-44 rounded-[1.5rem] bg-gradient-to-br from-orange-200 via-orange-500 to-blue-950" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-950">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-slate-500">
                    {place.area} · {place.distance}
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-500 px-5 py-4 text-center text-white">
                  <div className="text-3xl font-bold">{place.score}</div>
                  <div className="text-xs uppercase tracking-wide">Trust</div>
                </div>
              </div>

              <div className="mt-6 flex gap-4 text-sm text-slate-600">
                <span>⭐ {place.googleRating}</span>
                <span>💬 {place.reviews}</span>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                Yorum kalitesi, puan tutarlılığı ve memnuniyet sinyalleri güçlü.
              </p>

              <div className="mt-6 font-medium text-orange-500">
                AI analizini gör →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}