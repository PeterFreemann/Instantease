import { Link } from "react-router-dom";
import { apps, areas, contact, social } from "../config/site";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ie-orange";
const linkClass = `rounded-sm text-[15px] text-white/75 transition-colors hover:text-white ${focusRing}`;

const socialLabels = { instagram: "Instagram", x: "X (Twitter)", facebook: "Facebook", tiktok: "TikTok", linkedin: "LinkedIn" };

function Column({ title, children }) {
  return (
    <div>
      <h2 className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-ie-orange">{title}</h2>
      <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">{children}</ul>
    </div>
  );
}

function Footer() {
  const socials = Object.entries(social).filter(([, url]) => url);

  return (
    <footer className="bg-ie-green-900 font-figtree text-white">
      <div className="mx-auto max-w-[1200px] px-4 pb-8 pt-14 sm:px-6 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className={`inline-block rounded-md ${focusRing}`}>
              <img src="/images/app/logo-white.png" alt="InstantEase home" width="442" height="72" loading="lazy" className="h-9 w-auto" />
            </Link>
            <p className="m-0 mt-4 max-w-xs text-[15px] leading-relaxed text-white/70">
              Pharmacy, healthy food and beauty, delivered fast across Lagos.
            </p>
            <ul className="m-0 mt-5 flex list-none flex-col gap-2 p-0 text-[15px] text-white/75">
              <li><a href={`mailto:${contact.email}`} className={linkClass}>{contact.email}</a></li>
              <li><a href={contact.phoneHref} className={linkClass}>{contact.phone}</a></li>
              <li>{contact.address}</li>
            </ul>
            {socials.length > 0 && (
              <ul aria-label="Follow us" className="m-0 mt-5 flex list-none flex-wrap gap-x-4 gap-y-2 p-0">
                {socials.map(([key, url]) => (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>{socialLabels[key]}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Column title="Explore">
            <li><Link to="/" className={linkClass}>Home</Link></li>
            <li><Link to="/about" className={linkClass}>About Us</Link></li>
            <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            <li><Link to="/support" className={linkClass}>Support</Link></li>
          </Column>

          <Column title="Services">
            <li><Link to="/services/pharmacy" className={linkClass}>Pharmacy &amp; Wellness</Link></li>
            <li><Link to="/services/food" className={linkClass}>Healthy Food &amp; Drinks</Link></li>
            <li><Link to="/services/beauty" className={linkClass}>Beauty &amp; Skincare</Link></li>
          </Column>

          <Column title="Get Our Apps">
            {Object.values(apps).map((app) => (
              <li key={app.apk}>
                <a href={app.apk} download className={linkClass}>{app.name.replace(" app", " App")} (Android)</a>
              </li>
            ))}
          </Column>

          <Column title="Popular areas">
            {areas.length ? (
              areas.slice(0, 6).map((a) => (
                <li key={a}><Link to="/#areas" className={linkClass}>{a}</Link></li>
              ))
            ) : (
              <li className="text-[15px] text-white/60">Coming soon</li>
            )}
          </Column>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-sm text-white/60">&copy; {new Date().getFullYear()} InstantEase. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className={`${linkClass} text-sm`}>Privacy Policy</Link>
            <Link to="/terms" className={`${linkClass} text-sm`}>Terms of Service</Link>
            <Link to="/legal" className={`${linkClass} text-sm`}>Legal</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
