import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function BusinessDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: business, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !business) {
    return (
      <main className="min-h-screen bg-[#f8fafc] p-10 text-slate-950">
        <Link href="/" className="text-blue-950">
          ← Ana sayfaya dön
        </Link>
        <h1 className="mt-10 text-4xl font-semibold">İşletme bulunamadı.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      <section
        className="relative h-[420px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${business.image_url})` }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 text-white">
          <p className="mb-3 w-fit rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
            {business.type} · {business.distance}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {business.name}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            {business.comment}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="font-medium text-orange-500">AI Özeti</p>

            <h2 className="mt-2 text-3xl font-semibold text-blue-950">
              Neden {business.trust_score} Güven Puanı aldı?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {business.comment}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-950">
                Öne çıkan güçlü yönler
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>✓ Yorum kalitesi güçlü</li>
                <li>✓ Puan dağılımı tutarlı</li>
                <li>✓ Memnuniyet sinyalleri yüksek</li>
                <li>✓ Sahte yorum riski düşük</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-950">
                Dikkat edilmesi gerekenler
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>• Yoğun saatlerde bekleme olabilir</li>
                <li>• Gitmeden önce güncel yorumlara bakılmalı</li>
                <li>• Popüler saatlerde rezervasyon önerilir</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-950">
              Güven Puanı analiz kırılımı
            </h3>

            <div className="mt-6 space-y-5">
              {[
                ["Yorum gerçekliği", business.trust_score],
                ["Puan tutarlılığı", Math.max(business.trust_score - 2, 0)],
                ["Memnuniyet oranı", Math.max(business.trust_score - 1, 0)],
                ["Sahte yorum riski düşük", Math.max(business.trust_score - 4, 0)],
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
            <div className="text-7xl font-bold">{business.trust_score}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em]">
              Yapay Zeka Güven Puanı
            </div>
          </div>

          <div className="mt-6 space-y-4 text-slate-700">
            <p>⭐ Google puanı: {business.google_rating}</p>
            <p>💬 Yorum sayısı: {business.review_count}</p>
            <p>📍 Bölge: {business.city}</p>
            <p>📌 Mesafe: {business.distance}</p>
          </div>

          <Link
            href="/"
            className="mt-7 block w-full rounded-2xl bg-blue-950 px-5 py-4 text-center font-medium text-white transition hover:bg-orange-500"
          >
            Ana sayfaya dön
          </Link>
        </aside>
      </section>
    </main>
  );
}