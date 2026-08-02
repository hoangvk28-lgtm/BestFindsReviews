import Link from "next/link";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { SectionHeader } from "./SectionHeader";
import { amazonSearchLinks } from "@/lib/amazon-links";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 7.409A2.25 2.25 0 0 1 2.25 5.493V5.25" />
    </svg>
  ),
  GraduationCap: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342m-7.48 0 3.74 1.342m3.74-1.342a50.716 50.716 0 0 1 3.741 1.342" />
    </svg>
  ),
  Archive: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  Briefcase: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006-3.75 3.75m0 0-3.75-3.75M15.75 18.75v-2.25m0 2.25h2.25m-2.25 0h-2.25m0 0v-2.25m0 2.25H11.25M8.25 14.25V7.5m0 6.75L5.25 14.25M8.25 21v-3m0 3h-.375a.375.375 0 0 1-.375-.375v-.375m-5.25-3V7.5A2.25 2.25 0 0 1 4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5v6.75a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25z" />
    </svg>
  ),
  Tag: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  ),
};

export function CategoryGrid() {
  return (
    <section className="py-14">
      <SectionHeader
        eyebrow="Browse by Topic"
        title="Categories"
        description="Five focused areas covering everything a small-space dweller needs."
        href="/categories"
        hrefLabel="All categories"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {categories.map((cat) => {
          const guideCount = guides.filter((g) => g.categorySlug === cat.slug).length;
          const subcategoryCount = cat.subcategories?.length ?? 0;

          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group flex flex-col gap-3 p-5 bg-white rounded-card border border-border border-t-4 border-t-transparent min-w-0 hover:shadow-card-hover hover:border-transparent hover:translate-y-[-2px] transition-all"
              style={{ borderTopColor: cat.color }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-lg text-white transition-transform group-hover:scale-110"
                style={{ backgroundColor: cat.color }}
                aria-hidden="true"
              >
                {iconMap[cat.icon]}
              </div>

              {/* Name + description */}
              <div>
                <h3 className="font-bold text-ink group-hover:text-brand transition-colors text-sm leading-snug">
                  {cat.name}
                </h3>
                <p className="text-xs text-ink-secondary mt-1 leading-relaxed line-clamp-2">
                  {cat.shortDescription}
                </p>
              </div>

              {/* Guide count */}
              <div className="flex items-center gap-1 text-xs text-ink-muted">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                {guideCount} {guideCount === 1 ? "guide" : "guides"}
              </div>

              {/* Amazon CTA */}
              {amazonSearchLinks[cat.slug] && (
                <a
                  href={amazonSearchLinks[cat.slug]}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="mt-auto flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all hover:opacity-80"
                  style={{ background: cat.color + "15", color: cat.color, border: `1px solid ${cat.color}30` }}
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.26 18.36C9.18 20.34 4.76 21.38 1 20.16c-.38-.13-.33-.44.08-.35 3.47.67 7.77-.07 10.6-1.82.47-.27.87.17.58.37zm1.06-1.17c-.43-.56-2.85-.27-3.94-.13-.33.04-.38-.25-.08-.46 1.93-1.36 5.1-.97 5.47-.51.37.46-.1 3.63-1.91 5.14-.28.23-.54.11-.42-.2.41-.98 1.32-3.28.88-3.84z"/><path d="M16.93 3.3c-.96-1.23-1.88-2.26-1.88-4.56 0-.59-.37-1.09-.96-1.09-.47 0-.79.28-.95.68-.29.72-.11 1.65.26 2.46.43.96 1.12 1.85 1.62 2.67.48.79.73 1.55.73 2.37 0 1.28-.5 2.1-1.34 2.86-.28.25-.06.62.27.47 1.87-.85 2.97-2.45 2.25-5.86zm-2.88 6.07c-.08 0-.16-.01-.23-.02-1.04-.15-2.09-.57-2.96-1.22-.65-.48-1.2-1.1-1.54-1.82-.31-.66-.45-1.42-.26-2.13.19-.7.71-1.28 1.43-1.53.26-.09.53-.14.8-.14 1.14 0 2.18.63 2.78 1.64.44.73.58 1.59.39 2.41-.19.82-.7 1.49-1.41 1.81z"/>
                  </svg>
                  Shop {cat.name} on Amazon
                </a>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
