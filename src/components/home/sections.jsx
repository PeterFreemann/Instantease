import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Check, ShieldCheck } from "lucide-react";
import StoreButtons from "./StoreButtons";
import { DeliveryCodeSketch, PhoneFrame, TrackingScreenSketch } from "./PhoneFrame";
import { screens } from "../../config/site";
import { categories } from "./content";

// Building blocks shared by Home and the Customers, Vendors and Riders pages.

export const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ie-orange";
export const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-12";

// Contour background: the app's own PNG on phones, a matching SVG on wider screens.
export function Contour({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-[url('/images/app/contour.webp')] bg-cover bg-center md:hidden" />
      <div className="absolute inset-0 hidden bg-[url('/images/contour.svg')] bg-cover bg-center md:block" />
    </div>
  );
}

export function Eyebrow({ children, tone = "light" }) {
  const t = tone === "dark" ? "bg-white/10 text-ie-green-100" : "bg-ie-green-100 text-ie-green-700";
  return <p className={`m-0 mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${t}`}>{children}</p>;
}

export function SectionTitle({ children, className = "" }) {
  return <h2 className={`m-0 text-3xl font-extrabold leading-tight tracking-tight text-ie-ink sm:text-4xl ${className}`}>{children}</h2>;
}

// Dark hero used at the top of the audience pages. `aside` fills the right-hand column.
export function PageHero({ eyebrow, title, text, app, aside }) {
  return (
    <section className="relative overflow-hidden bg-ie-dark text-white">
      <Contour />
      <div className={`${container} relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24`}>
        <div>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="m-0 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
          <p className="m-0 mt-5 max-w-xl text-lg leading-relaxed text-white/85">{text}</p>
          <StoreButtons app={app} tone="dark" className="mt-8" />
        </div>
        <div className="flex justify-center lg:justify-end">{aside}</div>
      </div>
    </section>
  );
}

// White checklist card, e.g. "What you need to sign up".
export function ChecklistCard({ title, items, note }) {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-7 text-ie-ink shadow-[0_20px_50px_rgba(0,26,17,0.3)] sm:p-8">
      <h2 className="m-0 text-xl font-bold">{title}</h2>
      <ul className="m-0 mt-5 flex list-none flex-col gap-3.5 p-0">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-ie-slate">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ie-green-100 text-ie-green">
              <Check size={15} aria-hidden="true" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
      {note && <p className="m-0 mt-5 border-t border-ie-line pt-4 text-sm leading-relaxed text-ie-muted">{note}</p>}
    </div>
  );
}

export function Categories({ id, eyebrow = "For customers", title = "Everything for a healthier you, in one app." }) {
  return (
    <section id={id} className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className={container}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/services/${c.slug}`}
              className={`group flex flex-col rounded-3xl ${c.bg} p-6 transition-transform hover:-translate-y-1 sm:p-7 ${focusRing}`}
            >
              <div className="flex h-14 items-center">
                <img src={c.img} alt="" width={c.imgW} height={c.imgH} loading="lazy" className="h-auto max-h-14 w-auto" />
              </div>
              <h3 className="m-0 mt-6 text-xl font-bold text-ie-ink">{c.title}</h3>
              <p className="m-0 mt-2 flex-1 leading-relaxed text-ie-slate">{c.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ie-green-700">
                Explore <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps({ id, eyebrow = "How it works", title, steps, className = "bg-ie-mist" }) {
  const cols = steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${className}`}>
      <div className={container}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
        <ol className={`m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 ${cols}`}>
          {steps.map((step, i) => {
            const { Icon, title, text } = step;
            return (
            <li key={title} className="rounded-2xl border border-ie-line bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-ie-green-100 text-ie-green">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-ie-green" aria-hidden="true">0{i + 1}</span>
              </div>
              <h3 className="m-0 mt-5 text-lg font-bold text-ie-ink">{title}</h3>
              <p className="m-0 mt-2 leading-relaxed text-ie-slate">{text}</p>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Tracking() {
  return (
    <section id="tracking" className="relative scroll-mt-20 overflow-hidden bg-ie-dark py-16 text-white sm:py-24">
      <Contour className="opacity-70" />
      <div className={`${container} relative grid items-center gap-12 lg:grid-cols-2`}>
        <div>
          <Eyebrow tone="dark">Live tracking</Eyebrow>
          <h2 className="m-0 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Watch your order move, right to your gate.
          </h2>
          <p className="m-0 mt-4 max-w-lg text-lg leading-relaxed text-white/85">
            See when the store confirms your order, when it's being prepared, and where your rider is on the map.
          </p>
          <div className="mt-8 max-w-lg rounded-2xl border border-white/20 bg-white/10 p-6">
            <h3 className="m-0 flex items-center gap-2 text-lg font-bold">
              <ShieldCheck size={22} aria-hidden="true" className="text-ie-green-200" /> Your delivery code keeps orders safe
            </h3>
            <p className="m-0 mt-2 leading-relaxed text-white/85">
              When a rider is assigned, the app shows you a private 6-digit delivery code. Give it to the rider only when
              your order is in your hands. The rider enters it to complete the delivery, so your order can't be marked
              delivered without you.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 sm:gap-6">
          <PhoneFrame src={screens.tracking} alt="InstantEase order tracking screen" size="sm">
            <TrackingScreenSketch />
          </PhoneFrame>
          <PhoneFrame src={screens.deliveryCode} alt="InstantEase delivery code screen" size="sm" className="mt-10">
            <DeliveryCodeSketch />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}

export function FeatureTile(props) {
  const { Icon, title, text, className = "" } = props;
  return (
    <div className={`rounded-2xl border border-ie-line bg-white p-6 ${className}`}>
      <span className="flex size-11 items-center justify-center rounded-xl bg-ie-green text-white">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="m-0 mt-4 text-lg font-bold text-ie-ink">{title}</h3>
      <p className="m-0 mt-1.5 leading-relaxed text-ie-slate">{text}</p>
    </div>
  );
}

export function FeatureGrid({ id, eyebrow, title, features, className = "bg-white" }) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${className}`}>
      <div className={container}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => <FeatureTile key={f.title} {...f} />)}
        </div>
      </div>
    </section>
  );
}

// Green download band. `children` goes under the store buttons.
export function CtaBand({ id, title, text, app, children }) {
  return (
    <section id={id} className="relative scroll-mt-20 overflow-hidden bg-ie-green-600 py-16 text-white sm:py-20">
      <Contour className="opacity-50" />
      <div className={`${container} relative`}>
        <h2 className="m-0 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{title}</h2>
        <p className="m-0 mt-3 max-w-xl text-lg text-white/90">{text}</p>
        <StoreButtons app={app} tone="dark" className="mt-8" />
        {children}
      </div>
    </section>
  );
}

export function Faq({ items, title = "Questions, answered." }) {
  return (
    <section id="faq" className="scroll-mt-20 bg-ie-mist py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[860px] px-4 sm:px-6">
        <Eyebrow>FAQ</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-8 space-y-3">
          {items.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border border-ie-line bg-white">
              <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-lg font-semibold text-ie-ink [&::-webkit-details-marker]:hidden ${focusRing}`}>
                {q}
                <ChevronDown size={20} aria-hidden="true" className="shrink-0 text-ie-green transition-transform group-open:rotate-180" />
              </summary>
              <p className="m-0 px-5 pb-5 leading-relaxed text-ie-slate">{a}</p>
            </details>
          ))}
        </div>
        <p className="m-0 mt-6 text-ie-slate">
          More questions? Visit{" "}
          <Link to="/support" className={`font-semibold text-ie-green-700 underline underline-offset-4 ${focusRing}`}>Support</Link>.
        </p>
      </div>
    </section>
  );
}
