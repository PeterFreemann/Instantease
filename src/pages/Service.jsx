import { Link, Navigate, useParams } from "react-router-dom";
import "./Service.css";

const services = {
  pharmacy: {
    emoji: "💊",
    label: "Health",
    title: "Pharmacy & Wellness",
    intro: "Prescription medicines, over-the-counter drugs, vitamins, supplements and wellness essentials from licensed pharmacies near you — delivered securely to your door.",
    image: "/hero.jpg",
    offers: [
      { icon: "💊", title: "Over-the-counter medicines", text: "Pain relief, cold and flu remedies, allergy care, first aid and other everyday essentials." },
      { icon: "📋", title: "Prescription medicines", text: "Upload a valid prescription in the app and a licensed pharmacy will review it before dispensing." },
      { icon: "🌿", title: "Vitamins & supplements", text: "Multivitamins, immune support, sports nutrition and herbal supplements." },
      { icon: "🩺", title: "Health devices & personal care", text: "Thermometers, blood pressure monitors, glucose test strips, baby care and hygiene products." },
    ],
    notes: [
      "Every pharmacy on InstantEase is verified and must hold a valid pharmacy licence.",
      "Prescription-only medicines are dispensed only against a valid prescription, as Nigerian law requires.",
      "Orders are sealed by the pharmacy and handled discreetly by our riders.",
      "Always follow the advice of a doctor or pharmacist. InstantEase is a delivery platform, not a medical provider.",
    ],
  },
  food: {
    emoji: "🥗",
    label: "Nutrition",
    title: "Healthy Food & Drinks",
    intro: "Fresh meals, organic produce, smoothies and nutritious snacks from top-rated vendors near you — prepared to order and delivered while they're fresh.",
    image: "/food.jpg",
    offers: [
      { icon: "🍲", title: "Healthy meals", text: "Balanced, freshly prepared meals, from local favourites to salads and protein bowls." },
      { icon: "🥤", title: "Smoothies & juices", text: "Cold-pressed juices, smoothies, yoghurts and other refreshing drinks." },
      { icon: "🥑", title: "Fresh & organic produce", text: "Fruits, vegetables and pantry staples from trusted local suppliers." },
      { icon: "🥜", title: "Nutritious snacks", text: "Nuts, granola, protein bars and other better-for-you snacks." },
    ],
    notes: [
      "Food vendors are vetted for quality and hygiene before they join the platform.",
      "Vendors list ingredients and allergen information where it is available. If you have an allergy, check with the vendor before ordering.",
      "Track your order live from the kitchen to your door.",
    ],
  },
  beauty: {
    emoji: "✨",
    label: "Beauty",
    title: "Beauty & Skincare",
    intro: "Curated skincare, cosmetics and beauty products from brands you know and love — authentic products from verified retailers, delivered fast.",
    image: "/home.jpg",
    offers: [
      { icon: "🧴", title: "Skincare", text: "Cleansers, moisturisers, serums, sunscreen and treatments for every skin type." },
      { icon: "💄", title: "Makeup & cosmetics", text: "Foundations, lip products, eye makeup, tools and accessories." },
      { icon: "💇🏾", title: "Hair care", text: "Shampoos, conditioners, oils and styling products for every hair type." },
      { icon: "🌸", title: "Fragrance & body care", text: "Perfumes, body lotions, bath and body essentials." },
    ],
    notes: [
      "We partner only with verified beauty retailers and brands to keep products authentic.",
      "Product details and ingredients are shown in the app so you can shop with confidence.",
      "If an item arrives damaged or is not what you ordered, report it in the app and we will make it right.",
    ],
  },
};

const steps = [
  { n: "01", title: "Browse & Choose", desc: "Open the Customer App and explore products from vendors near you." },
  { n: "02", title: "Place Your Order", desc: "Add to cart and check out securely with your preferred payment method." },
  { n: "03", title: "Vendor Prepares", desc: "The vendor confirms and prepares your order with care." },
  { n: "04", title: "Rider Delivers", desc: "A verified rider picks up your order and delivers it, with live tracking." },
];

function Service() {
  const { slug } = useParams();
  const service = services[slug];
  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="service">
      <section className="sv-hero">
        <div className="sv-hero-img" style={{ backgroundImage: `url('${service.image}')` }} />
        <div className="sv-hero-overlay" />
        <div className="sv-hero-inner">
          <span className="sv-hero-tag">{service.emoji} {service.label}</span>
          <h1 className="sv-hero-title">{service.title}</h1>
          <p className="sv-hero-sub">{service.intro}</p>
          <a href="/downloads/instantease-customer-mobile-app.apk" download className="sv-btn">Order with the Customer App</a>
        </div>
      </section>

      <section className="sv-section">
        <div className="sv-container">
          <span className="sv-section-tag">What You Can Order</span>
          <h2 className="sv-section-title">Everything in one place.</h2>
          <div className="sv-offer-grid">
            {service.offers.map((o) => (
              <div key={o.title} className="sv-offer-card">
                <div className="sv-offer-icon">{o.icon}</div>
                <h3 className="sv-offer-title">{o.title}</h3>
                <p className="sv-offer-text">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-section sv-section-alt">
        <div className="sv-container">
          <span className="sv-section-tag">How It Works</span>
          <h2 className="sv-section-title">From vendor to your door.</h2>
          <div className="sv-steps">
            {steps.map((s) => (
              <div key={s.n} className="sv-step">
                <div className="sv-step-num">{s.n}</div>
                <h3 className="sv-step-title">{s.title}</h3>
                <p className="sv-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-section">
        <div className="sv-container">
          <span className="sv-section-tag">Good to Know</span>
          <h2 className="sv-section-title">Quality you can trust.</h2>
          <ul className="sv-notes">
            {service.notes.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
      </section>

      <section className="sv-cta">
        <div className="sv-container sv-cta-inner">
          <div>
            <h2 className="sv-cta-title">Sell {service.title.toLowerCase()} on InstantEase?</h2>
            <p className="sv-cta-text">Reach more customers and manage orders easily with the Vendor App.</p>
          </div>
          <div className="sv-cta-actions">
            <a href="/downloads/instantease-vendor-mobile-app.apk" download className="sv-btn">Get the Vendor App</a>
            <Link to="/support" className="sv-btn sv-btn-ghost">Visit Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
