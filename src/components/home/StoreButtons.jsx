import { Download, Smartphone, Tablet } from "lucide-react";

// TODO: swap these for the official "Get it on Google Play" / "Download on the App Store" badge
// artwork (from Google's and Apple's marketing guidelines) once the store links are live.
const stores = [
  { key: "playStore", label: "Google Play", pre: "Get it on", Icon: Smartphone },
  { key: "appStore", label: "App Store", pre: "Download on the", Icon: Tablet },
  { key: "apk", label: "Android APK", pre: "Download the", Icon: Download, download: true },
];

const styles = {
  dark: {
    live: "bg-ie-green-900 text-white hover:bg-black border-white/15",
    soon: "bg-transparent text-white/80 border-white/30",
  },
  light: {
    live: "bg-ie-ink text-white hover:bg-black border-ie-ink",
    soon: "bg-white text-ie-muted border-ie-line",
  },
};

function StoreButtons({ app, only, tone = "light", stacked = false, className = "" }) {
  const list = only ? stores.filter((s) => only.includes(s.key)) : stores;
  const t = styles[tone];
  return (
    <ul className={`m-0 flex list-none gap-3 p-0 ${stacked ? "flex-col" : "flex-wrap"} ${className}`}>
      {list.map((store) => {
        const { key, label, pre, Icon, download } = store;
        const href = app[key];
        const inner = (
          <>
            <Icon size={22} aria-hidden="true" className="shrink-0" />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[11px] font-medium">{href ? pre : "Coming soon"}</span>
              <span className="text-[15px] font-bold">{label}</span>
            </span>
          </>
        );
        const base = `flex min-h-12 items-center gap-2.5 rounded-xl border px-4 py-2 transition-colors ${stacked ? "w-full" : ""}`;
        return (
          <li key={key}>
            {href ? (
              <a
                href={href}
                {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                aria-label={`${pre} ${label}: ${app.name}`}
                className={`${base} ${t.live} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ie-orange`}
              >
                {inner}
              </a>
            ) : (
              <span aria-label={`${label}: ${app.name} coming soon`} className={`${base} ${t.soon} cursor-default`}>
                {inner}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default StoreButtons;
