import { Bike, Check, Lock, Search, Store } from "lucide-react";

// Phone-shaped frame. Shows the real screenshot when `src` is set in config/site.js,
// otherwise a simplified sketch of the app screen built from the app's own colours and wording.
const sizes = {
  lg: "w-[220px] sm:w-[250px]",
  sm: "w-[148px] sm:w-[200px] lg:w-[230px]",
};

export function PhoneFrame({ src, alt, children, size = "lg", className = "" }) {
  return (
    <div
      className={`relative aspect-[9/19] shrink-0 overflow-hidden rounded-[2.4rem] border-[9px] border-ie-ink bg-white shadow-[0_30px_60px_rgba(0,26,17,0.35)] ${sizes[size]} ${className}`}
    >
      <div aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ie-ink" />
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="size-full object-cover" />
      ) : (
        <div role="img" aria-label={`${alt} (preview)`} className="size-full">
          {children}
        </div>
      )}
    </div>
  );
}

const contourBg = { backgroundImage: "url('/images/app/contour.webp')", backgroundSize: "cover" };

export function HomeScreenSketch() {
  const cats = [
    { label: "Pharmacy and Wellness", bg: "bg-cat-pharmacy", img: "/images/app/pharmacy-icon.png", w: "w-7" },
    { label: "Healthy Food and Drinks", bg: "bg-cat-food", img: "/images/app/restaurant-icon.png", w: "w-7" },
    { label: "Beauty and Skincare", bg: "bg-cat-beauty", img: "/images/app/beauty-icon.png", w: "w-14", wide: true },
  ];
  return (
    <div aria-hidden="true" className="flex size-full flex-col bg-ie-dark font-figtree" style={contourBg}>
      <div className="px-4 pb-4 pt-10">
        <img src="/images/app/logo-white.png" alt="" className="h-4 w-auto" />
        <div className="mt-4 flex h-9 items-center gap-2 rounded-2xl bg-white px-3 text-[10px] text-ie-muted">
          <Search size={12} className="text-ie-ink" /> what can we get you today?
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-t-3xl bg-white p-3">
        <div className="grid grid-cols-2 gap-2">
          {cats.map((c) => (
            <div key={c.label} className={`${c.bg} flex h-14 items-center justify-between rounded-lg p-2 ${c.wide ? "col-span-2" : ""}`}>
              <span className="text-[9px] font-medium leading-tight text-ie-ink">{c.label}</span>
              <img src={c.img} alt="" className={`${c.w} h-auto`} />
            </div>
          ))}
        </div>
        <div className="mt-1 h-2 w-20 rounded-full bg-ie-line" />
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-lg bg-ie-mist" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrackingScreenSketch() {
  const steps = [
    { label: "Order confirmed", Icon: Check, done: true },
    { label: "Vendor preparing", Icon: Store, done: true },
    { label: "Rider on the way", Icon: Bike, done: false },
  ];
  return (
    <div aria-hidden="true" className="flex size-full flex-col bg-ie-mist font-figtree">
      <div className="relative h-[42%] bg-cat-pharmacy">
        <svg viewBox="0 0 200 160" className="absolute inset-0 size-full" preserveAspectRatio="none">
          <path d="M20 140 C 60 120, 50 70, 100 70 S 150 30, 180 20" fill="none" stroke="#008054" strokeWidth="3" strokeDasharray="6 5" />
          <circle cx="20" cy="140" r="6" fill="#008054" />
          <circle cx="180" cy="20" r="6" fill="#ff7108" />
        </svg>
        <div className="absolute left-[46%] top-[38%] flex size-8 items-center justify-center rounded-full bg-ie-dark text-white shadow-lg">
          <Bike size={16} />
        </div>
      </div>
      <div className="flex-1 space-y-2 p-3">
        <p className="m-0 text-[11px] font-bold text-ie-ink">Tracking your order</p>
        {steps.map((step) => {
          const { label, Icon, done } = step;
          return (
          <div key={label} className="flex items-center gap-2">
            <span className={`flex size-6 items-center justify-center rounded-full ${done ? "bg-ie-green text-white" : "bg-ie-green-100 text-ie-green"}`}>
              <Icon size={12} />
            </span>
            <span className={`text-[10px] ${done ? "text-ie-ink" : "font-semibold text-ie-green"}`}>{label}</span>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export function DeliveryCodeSketch() {
  return (
    <div aria-hidden="true" className="flex size-full flex-col justify-end bg-ie-green font-figtree text-white" style={contourBg}>
      <div className="m-3 rounded-xl border-2 border-white/30 bg-white/10 p-4 text-center">
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold">
          <Lock size={13} /> Delivery Code
        </div>
        <div className="my-2 text-xl font-bold tracking-[0.2em] sm:text-2xl sm:tracking-[0.3em]">••••••</div>
        <div className="text-[9px] font-medium text-white/80">Give this code to the rider</div>
      </div>
      <div className="h-[30%] rounded-t-3xl bg-white" />
    </div>
  );
}
