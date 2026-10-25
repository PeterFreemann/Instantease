import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, BadgeCheck, Bike, ChevronDown, CreditCard, Download, Headset, Leaf,
  MapPin, Navigation, ShieldCheck, Sparkles, Store,
} from "lucide-react";
import { apps, areas, screens } from "../config/site";
import StoreButtons from "../components/home/StoreButtons";
import { DeliveryCodeSketch, HomeScreenSketch, PhoneFrame, TrackingScreenSketch } from "../components/home/PhoneFrame";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ie-orange";
const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-12";


// Contour background: the app's own PNG on phones, a matching SVG on wider screens.
function Contour({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-[url('/images/app/contour.webp')] bg-cover bg-center md:hidden" />
      <div className="absolute inset-0 hidden bg-[url('/images/contour.svg')] bg-cover bg-center md:block" />
    </div>
  );
}

function Eyebrow({ children, tone = "light" }) {
  const t = tone === "dark" ? "bg-white/10 text-ie-green-100" : "bg-ie-green-100 text-ie-green-700";
  return <p className={`m-0 mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${t}`}>{children}</p>;
}

function SectionTitle({ children, className = "" }) {
  return <h2 className={`m-0 text-3xl font-extrabold leading-tight tracking-tight text-ie-ink sm:text-4xl ${className}`}>{children}</h2>;
}

function GetAppMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="get-app-menu"
        className={`flex min-h-13 cursor-pointer items-center gap-2 rounded-full border-0 bg-ie-orange px-7 text-base font-bold text-ie-green-900 transition-colors hover:bg-[#ff8a33] ${focusRing}`}
      >
        Get the app <ChevronDown size={18} aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        id="get-app-menu"
        hidden={!open}
        className="absolute left-0 top-full z-20 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(0,26,17,0.3)]"
      >
        <p className="m-0 mb-2 px-1 text-sm font-semibold text-ie-ink">InstantEase customer app</p>
        <StoreButtons app={apps.customer} stacked />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ie-dark text-white">
      <Contour />
      <div className={`${container} relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24`}>
        <div>
          <Eyebrow tone="dark">Delivery across Lagos</Eyebrow>
          <h1 className="m-0 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Pharmacy, healthy food and beauty, <span className="text-ie-orange">delivered fast.</span>
          </h1>
          <p className="m-0 mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Order medicines, fresh meals and skincare from trusted stores near you. Pay in naira with Paystack and
            track your rider all the way to your door.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <GetAppMenu />
            <a
              href="#vendors"
              className={`flex min-h-13 items-center gap-2 rounded-full border border-white/40 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 ${focusRing}`}
            >
              Become a vendor <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-sm text-ie-green-100">
            {["Verified pharmacies", "Secure Paystack checkout", "Live rider tracking"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <BadgeCheck size={16} aria-hidden="true" className="text-ie-green-200" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <PhoneFrame src={screens.home} alt="InstantEase app home screen" className="rotate-[-3deg]">
            <HomeScreenSketch />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}

const categories = [
  {
    slug: "pharmacy", title: "Pharmacy & Wellness", bg: "bg-cat-pharmacy", img: "/images/app/pharmacy-icon.png", imgW: 48, imgH: 49,
    desc: "Over-the-counter medicines, prescriptions, vitamins and wellness essentials from licensed pharmacies.",
  },
  {
    slug: "food", title: "Healthy Food & Drinks", bg: "bg-cat-food", img: "/images/app/restaurant-icon.png", imgW: 57, imgH: 57,
    desc: "Fresh meals, smoothies, produce and better-for-you snacks from vetted food vendors.",
  },
  {
    slug: "beauty", title: "Beauty & Skincare", bg: "bg-cat-beauty", img: "/images/app/beauty-icon.png", imgW: 96, imgH: 47,
    desc: "Skincare, makeup, hair care and fragrance from verified beauty retailers.",
  },
];

function Categories() {
  return (
    <section id="customers" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className={container}>
        <Eyebrow>For customers</Eyebrow>
        <SectionTitle>Everything for a healthier you, in one app.</SectionTitle>
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

const steps = [
  { Icon: Download, title: "Download the app", text: "Get InstantEase on your phone and set your delivery address." },
  { Icon: Store, title: "Choose a store near you", text: "Browse pharmacies, healthy food spots and beauty stores close to you." },
  { Icon: CreditCard, title: "Pay securely with Paystack", text: "Pay by card, bank transfer, bank or USSD at checkout." },
  { Icon: Bike, title: "Track your rider to your door", text: "Follow your order live and share your delivery code when it arrives." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-ie-mist py-16 sm:py-24">
      <div className={container}>
        <Eyebrow>How it works</Eyebrow>
        <SectionTitle>From your phone to your door in four steps.</SectionTitle>
        <ol className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
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

function Tracking() {
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

const features = [
  { Icon: BadgeCheck, title: "Verified pharmacies", text: "Every pharmacy is checked and licensed before it can sell on InstantEase." },
  { Icon: Leaf, title: "Healthy meals", text: "Fresh, balanced meals and drinks from vetted food vendors." },
  { Icon: Sparkles, title: "Beauty brands", text: "Skincare, makeup and hair care from verified beauty retailers." },
  { Icon: Navigation, title: "Live tracking", text: "See where your rider is, from pickup to your door." },
  { Icon: CreditCard, title: "Secure payments", text: "Checkout runs on Paystack: card, transfer, bank or USSD." },
  { Icon: Headset, title: "Real support", text: "Reach our team in the app, by email or by phone if anything goes wrong." },
];

function FeatureTile(props) {
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

function WhyInstantEase() {
  return (
    <section id="why" className="scroll-mt-20 overflow-hidden bg-white py-16 sm:py-24">
      <div className={container}>
        <Eyebrow>Why InstantEase</Eyebrow>
        <SectionTitle>Built for health, beauty and good food.</SectionTitle>
        {/* Static grid: phones, tablets, and anyone who prefers reduced motion. */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:motion-safe:hidden">
          {features.map((f) => <FeatureTile key={f.title} {...f} />)}
        </div>
      </div>
      {/* Gentle marquee on desktop only; pauses on hover or keyboard focus. */}
      <div className="group mt-10 hidden lg:motion-safe:block">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {[...features, ...features].map((f, i) => (
            <div key={i} aria-hidden={i >= features.length ? "true" : undefined} className="w-80">
              <FeatureTile {...f} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinCard(props) {
  const { id, Icon, eyebrow, title, text, cta, app, tone } = props;
  const dark = tone === "dark";
  return (
    <article
      id={id}
      className={`relative flex scroll-mt-20 flex-col overflow-hidden rounded-3xl p-7 sm:p-10 ${dark ? "bg-ie-dark text-white" : "bg-cat-beauty text-ie-ink"}`}
    >
      {dark && <Contour className="opacity-60" />}
      <div className="relative flex flex-1 flex-col">
        <span className={`flex size-12 items-center justify-center rounded-2xl ${dark ? "bg-white/10 text-ie-green-100" : "bg-white text-ie-burnt-dark"}`}>
          <Icon size={24} aria-hidden="true" />
        </span>
        <p className={`m-0 mt-6 text-sm font-bold uppercase tracking-[0.12em] ${dark ? "text-ie-green-200" : "text-ie-burnt-dark"}`}>{eyebrow}</p>
        <h3 className="m-0 mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">{title}</h3>
        <p className={`m-0 mt-3 flex-1 text-lg leading-relaxed ${dark ? "text-white/85" : "text-ie-slate"}`}>{text}</p>
        <p className="m-0 mt-8 font-bold">{cta}</p>
        <StoreButtons app={app} only={["apk", "appStore"]} tone={dark ? "dark" : "light"} className="mt-3" />
      </div>
    </article>
  );
}

function VendorsAndRiders() {
  return (
    <section className="bg-ie-mist py-16 sm:py-24">
      <div className={`${container} grid gap-5 lg:grid-cols-2`}>
        <JoinCard
          id="vendors" Icon={Store} eyebrow="For vendors" title="Sell on InstantEase" app={apps.vendor} cta="Start selling"
          text="Reach more customers across Lagos. Take orders, manage your stock and get paid, all from the Vendor app."
        />
        <JoinCard
          id="riders" Icon={Bike} eyebrow="For riders" title="Ride with InstantEase" app={apps.rider} cta="Start riding" tone="dark"
          text="Earn on your own schedule. Get delivery requests near you, clear directions and a record of your earnings."
        />
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className={container}>
        <Eyebrow>Where we deliver</Eyebrow>
        <SectionTitle>Areas we deliver to in Lagos.</SectionTitle>
        {areas.length ? (
          <ul className="m-0 mt-8 flex list-none flex-wrap gap-2.5 p-0">
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-1.5 rounded-full border border-ie-green-100 bg-ie-green-100/50 px-4 py-2 font-medium text-ie-green-700">
                <MapPin size={16} aria-hidden="true" /> {a}
              </li>
            ))}
          </ul>
        ) : (
          <p className="m-0 mt-6 max-w-xl text-lg leading-relaxed text-ie-slate">
            Our full list of areas is coming soon. In the meantime, enter your address in the app to see the stores that
            deliver to you.
          </p>
        )}
      </div>
    </section>
  );
}

function DownloadBand() {
  return (
    <section id="download" className="relative scroll-mt-20 overflow-hidden bg-ie-green-600 py-16 text-white sm:py-20">
      <Contour className="opacity-50" />
      <div className={`${container} relative`}>
        <h2 className="m-0 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Get the InstantEase app.
        </h2>
        <p className="m-0 mt-3 max-w-xl text-lg text-white/90">Order, pay and track in one place.</p>
        <StoreButtons app={apps.customer} tone="dark" className="mt-8" />
        <p className="m-0 mt-8 text-white/90">
          Selling or riding with us?{" "}
          <a href={apps.vendor.apk} download className={`font-semibold text-white underline underline-offset-4 ${focusRing}`}>Vendor app (APK)</a>
          {" · "}
          <a href={apps.rider.apk} download className={`font-semibold text-white underline underline-offset-4 ${focusRing}`}>Rider app (APK)</a>
        </p>
      </div>
    </section>
  );
}

// TODO: confirm every answer below before going live.
const faqs = [
  {
    q: "How do I place an order?",
    a: "Download the InstantEase app, set your delivery address, then browse pharmacies, healthy food vendors and beauty stores near you. Add items to your cart and check out.",
  },
  {
    q: "How much is delivery?",
    a: "Delivery fees depend on distance and order size. You'll see the exact fee at checkout before you pay.",
  },
  {
    q: "How can I pay?",
    a: "Checkout runs on Paystack, so you can pay by card, bank transfer, bank or USSD.",
  },
  {
    q: "Can I order prescription medicines?",
    a: "Yes. Upload a valid prescription in the app and a licensed pharmacy will review it before dispensing.",
  },
  {
    q: "What if something is wrong with my order?",
    a: "Report it from the order screen in the app or contact support with your order number. If a refund is approved, it goes back to your original payment method.",
  },
  {
    q: "How do I become a vendor or rider?",
    a: "Download the Vendor app or the Rider app, sign up and upload the documents it asks for. We review applications, usually within 48 hours.",
  },
];

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-ie-mist py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[860px] px-4 sm:px-6">
        <Eyebrow>FAQ</Eyebrow>
        <SectionTitle>Questions, answered.</SectionTitle>
        <div className="mt-8 space-y-3">
          {faqs.map(({ q, a }) => (
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

function Home() {
  return (
    <div className="font-figtree text-ie-ink">
      <Hero />
      <Categories />
      <HowItWorks />
      <Tracking />
      <WhyInstantEase />
      <VendorsAndRiders />
      <Areas />
      <DownloadBand />
      <Faq />
    </div>
  );
}

export default Home;
