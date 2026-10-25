import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Bike, ChevronDown, MapPin, Store } from "lucide-react";
import { apps, areas, screens } from "../config/site";
import StoreButtons from "../components/home/StoreButtons";
import { HomeScreenSketch, PhoneFrame } from "../components/home/PhoneFrame";
import {
  Categories, Contour, CtaBand, Eyebrow, Faq, FeatureTile, SectionTitle, Steps, Tracking, container, focusRing,
} from "../components/home/sections";
import { customerFeatures as features, customerSteps, faqs } from "../components/home/content";

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
            <Link
              to="/vendors"
              className={`flex min-h-13 items-center gap-2 rounded-full border border-white/40 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 ${focusRing}`}
            >
              Become a vendor <ArrowRight size={18} aria-hidden="true" />
            </Link>
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
  const { id, Icon, eyebrow, title, text, cta, app, tone, to } = props;
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
        <Link
          to={to}
          className={`mt-6 inline-flex items-center gap-1.5 self-start rounded-sm font-semibold underline-offset-4 hover:underline ${dark ? "text-white" : "text-ie-green-700"} ${focusRing}`}
        >
          Learn more <ArrowRight size={18} aria-hidden="true" />
        </Link>
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
          id="vendors" Icon={Store} eyebrow="For vendors" title="Sell on InstantEase" app={apps.vendor} cta="Start selling" to="/vendors"
          text="Reach more customers across Lagos. Take orders, manage your stock and get paid, all from the Vendor app."
        />
        <JoinCard
          id="riders" Icon={Bike} eyebrow="For riders" title="Ride with InstantEase" app={apps.rider} cta="Start riding" tone="dark" to="/riders"
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
    <CtaBand id="download" title="Get the InstantEase app." text="Order, pay and track in one place." app={apps.customer}>
      <p className="m-0 mt-8 text-white/90">
        Selling or riding with us?{" "}
        <a href={apps.vendor.apk} download className={`font-semibold text-white underline underline-offset-4 ${focusRing}`}>Vendor app (APK)</a>
        {" · "}
        <a href={apps.rider.apk} download className={`font-semibold text-white underline underline-offset-4 ${focusRing}`}>Rider app (APK)</a>
      </p>
    </CtaBand>
  );
}

function Home() {
  return (
    <div className="font-figtree text-ie-ink">
      <Hero />
      <Categories id="customers" />
      <Steps id="how-it-works" title="From your phone to your door in four steps." steps={customerSteps} />
      <Tracking />
      <WhyInstantEase />
      <VendorsAndRiders />
      <Areas />
      <DownloadBand />
      <Faq items={faqs} />
    </div>
  );
}

export default Home;
