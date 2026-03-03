import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root {
    --forest: #2d7a4f; --forest-deep: #1a5c38; --forest-mid: #3d9c65;
    --forest-light: #52c47d; --mint: #a8e6c2; --mint-pale: #e6f7ee;
    --orange: #f97316; --orange-deep: #ea6000; --orange-pale: #fff4ed;
    --cream: #f8fcf9; --charcoal: #1a2e22; --muted: #5a7a65; --border: #d4eadb;
  }
  body { font-family: 'DM Sans', sans-serif; }
  .ie-home { min-height:100vh; background:var(--cream); overflow-x:hidden; }

  .ie-hero { min-height:100vh; background:var(--forest-deep); position:relative; display:flex; align-items:center; overflow:hidden; }
  .ie-hero-bg { position:absolute; inset:0; background-image:url('/instant.jpg'); background-size:cover; background-position:center; }
  .ie-hero-overlay { position:absolute; inset:0; background:linear-gradient(135deg, rgba(26,92,56,0.82) 0%, rgba(45,122,79,0.6) 50%, rgba(26,92,56,0.75) 100%); }
  .ie-hero-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(168,240,208,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,240,208,0.04) 1px, transparent 1px); background-size:60px 60px; }
  .ie-hero-orb { position:absolute; border-radius:50%; filter:blur(80px); animation:float 8s ease-in-out infinite; }
  .ie-hero-orb-1 { width:500px; height:500px; background:rgba(249,115,22,0.18); top:-100px; right:-100px; }
  .ie-hero-orb-2 { width:300px; height:300px; background:rgba(82,196,125,0.15); bottom:0; left:30%; animation-delay:-4s; }
  @keyframes float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-30px) scale(1.05)} }

  .ie-hero-inner { position:relative; z-index:2; max-width:1200px; margin:0 auto; padding:0 3rem; display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; width:100%; }
  .ie-hero-badge { display:inline-flex; align-items:center; gap:0.5rem; background:rgba(249,115,22,0.15); border:1px solid rgba(249,115,22,0.35); color:#fbb97d; padding:0.4rem 1rem; border-radius:100px; font-size:0.8rem; font-weight:500; letter-spacing:0.05em; text-transform:uppercase; margin-bottom:1.75rem; animation:fadeUp 0.6s ease both; }
  .ie-hero-badge::before { content:''; width:6px; height:6px; background:#f97316; border-radius:50%; }
  .ie-hero-title { font-family:'Playfair Display',serif; font-size:clamp(2.8rem,4.5vw,4.5rem); font-weight:900; line-height:1.08; color:white; letter-spacing:-0.02em; margin-bottom:1.5rem; animation:fadeUp 0.6s ease 0.1s both; }
  .ie-hero-title em { font-style:italic; color:#fbb97d; }
  .ie-hero-desc { font-size:1.1rem; line-height:1.75; color:rgba(255,255,255,0.7); max-width:480px; margin-bottom:2.5rem; font-weight:300; animation:fadeUp 0.6s ease 0.2s both; }
  .ie-hero-actions { display:flex; gap:1rem; align-items:center; animation:fadeUp 0.6s ease 0.3s both; }
  .ie-btn-primary { background:var(--orange); color:white; border:none; padding:0.9rem 2.25rem; border-radius:100px; font-family:'DM Sans',sans-serif; font-size:0.95rem; font-weight:600; cursor:pointer; transition:all 0.25s ease; display:flex; align-items:center; gap:0.5rem; }
  .ie-btn-primary:hover { background:var(--orange-deep); transform:translateY(-2px); box-shadow:0 8px 30px rgba(249,115,22,0.4); }
  .ie-btn-ghost { background:transparent; color:rgba(255,255,255,0.8); border:1px solid rgba(255,255,255,0.2); padding:0.9rem 2.25rem; border-radius:100px; font-family:'DM Sans',sans-serif; font-size:0.95rem; font-weight:500; cursor:pointer; transition:all 0.25s ease; }
  .ie-btn-ghost:hover { border-color:rgba(255,255,255,0.6); color:white; transform:translateY(-2px); }
  .ie-hero-stats { display:flex; gap:2.5rem; margin-top:3.5rem; padding-top:2.5rem; border-top:1px solid rgba(255,255,255,0.1); animation:fadeUp 0.6s ease 0.4s both; }
  .ie-stat-val { font-family:'Playfair Display',serif; font-size:2.2rem; font-weight:700; color:white; line-height:1; }
  .ie-stat-val span { color:#fbb97d; }
  .ie-stat-label { font-size:0.8rem; color:rgba(255,255,255,0.5); margin-top:0.25rem; letter-spacing:0.03em; text-transform:uppercase; }
  .ie-hero-visual { display:flex; justify-content:center; align-items:center; animation:fadeUp 0.7s ease 0.2s both; }
  .ie-phones { position:relative; width:320px; height:520px; }
  .ie-phone { position:absolute; width:200px; height:380px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(20px); border-radius:32px; overflow:hidden; transition:transform 0.4s ease; }
  .ie-phone:hover { transform:scale(1.03) translateY(-8px) !important; }
  .ie-phone-1 { top:0; left:0; transform:rotate(-8deg) translateY(20px); }
  .ie-phone-2 { top:60px; left:80px; transform:rotate(5deg); z-index:2; background:rgba(255,255,255,0.09); }
  .ie-phone-3 { top:20px; right:0; transform:rotate(12deg) translateY(40px); }
  .ie-phone-screen { padding:1.25rem 1rem; height:100%; display:flex; flex-direction:column; gap:0.6rem; }
  .ie-phone-bar { height:8px; border-radius:4px; background:rgba(168,240,208,0.4); }
  .ie-phone-bar.short { width:60%; }
  .ie-phone-bar.medium { width:80%; background:rgba(255,255,255,0.15); }
  .ie-phone-card-mini { background:rgba(168,240,208,0.1); border-radius:12px; padding:0.75rem; margin-top:0.5rem; display:flex; align-items:center; gap:0.6rem; }
  .ie-phone-dot { width:28px; height:28px; border-radius:8px; background:var(--orange); flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:0.8rem; }
  .ie-phone-lines { flex:1; }
  .ie-phone-line { height:6px; border-radius:3px; background:rgba(255,255,255,0.2); margin-bottom:4px; }
  .ie-phone-line.s { width:50%; }

  .ie-section { padding:7rem 3rem; max-width:1200px; margin:0 auto; }
  .ie-section-tag { display:inline-block; font-size:0.7rem; font-weight:600; text-transform:uppercase; letter-spacing:0.15em; color:var(--forest-deep); background:var(--mint-pale); padding:0.35rem 0.9rem; border-radius:100px; margin-bottom:1.25rem; }
  .ie-section-title { font-family:'Playfair Display',serif; font-size:clamp(2rem,3.5vw,3rem); font-weight:800; color:var(--charcoal); line-height:1.15; letter-spacing:-0.02em; margin-bottom:0.75rem; }
  .ie-section-sub { font-size:1.05rem; color:var(--muted); line-height:1.7; font-weight:300; max-width:520px; }
  .ie-section-header { display:grid; grid-template-columns:1fr auto; align-items:end; margin-bottom:4rem; gap:2rem; }

  .ie-categories-wrap { background:white; padding:7rem 0; }
  .ie-categories-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
  .ie-cat-card { position:relative; border-radius:24px; overflow:hidden; cursor:pointer; transition:transform 0.35s ease, box-shadow 0.35s ease; aspect-ratio:0.85; display:flex; flex-direction:column; justify-content:flex-end; }
  .ie-cat-card:hover { transform:translateY(-8px); box-shadow:0 30px 60px rgba(0,62,41,0.2); }
  .ie-cat-bg { position:absolute; inset:0; transition:transform 0.5s ease; }
  .ie-cat-card:hover .ie-cat-bg { transform:scale(1.06); }
  .ie-cat-bg-1 { background-image:url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80'); background-size:cover; background-position:center; }
  .ie-cat-bg-2 { background-image:url('/food.jpg'); background-size:cover; background-position:center; }
  .ie-cat-bg-3 { background-image:url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80'); background-size:cover; background-position:center; }
  .ie-cat-bg-1::after, .ie-cat-bg-2::after, .ie-cat-bg-3::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(26,46,34,0.82) 0%,rgba(26,46,34,0.2) 60%,transparent 100%); }
  .ie-cat-pattern { position:absolute; inset:0; opacity:0.08; background-image:radial-gradient(circle,rgba(168,240,208,1) 1px,transparent 1px); background-size:24px 24px; }
  .ie-cat-emoji { position:absolute; top:2rem; right:2rem; font-size:4rem; opacity:0.25; transition:opacity 0.3s, transform 0.3s; }
  .ie-cat-card:hover .ie-cat-emoji { opacity:0.5; transform:scale(1.1) rotate(-5deg); }
  .ie-cat-content { position:relative; z-index:2; padding:2rem; background:linear-gradient(to top,rgba(0,26,17,0.9) 0%,transparent 100%); }
  .ie-cat-label { display:inline-block; font-size:0.7rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--mint); font-weight:600; margin-bottom:0.5rem; }
  .ie-cat-title { font-family:'Playfair Display',serif; font-size:1.5rem; font-weight:700; color:white; line-height:1.2; margin-bottom:0.75rem; }
  .ie-cat-desc { font-size:0.875rem; color:rgba(255,255,255,0.65); line-height:1.6; font-weight:300; }
  .ie-cat-arrow { display:inline-flex; align-items:center; gap:0.4rem; color:var(--mint); font-size:0.85rem; font-weight:600; margin-top:1rem; opacity:0; transform:translateX(-8px); transition:all 0.3s ease; }
  .ie-cat-card:hover .ie-cat-arrow { opacity:1; transform:translateX(0); }

  .ie-how-wrap { background:var(--cream); }
  .ie-how-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:2rem; position:relative; }
  .ie-how-grid::before { content:''; position:absolute; top:40px; left:calc(12.5% + 20px); right:calc(12.5% + 20px); height:1px; background:linear-gradient(90deg,transparent,var(--mint),var(--orange),var(--mint),transparent); z-index:0; }
  .ie-step { text-align:center; position:relative; z-index:1; }
  .ie-step-num { width:80px; height:80px; border-radius:50%; background:white; border:2px solid var(--border); display:flex; align-items:center; justify-content:center; font-family:'Playfair Display',serif; font-size:1.75rem; font-weight:700; color:var(--forest); margin:0 auto 1.5rem; transition:all 0.3s ease; }
  .ie-step:hover .ie-step-num { background:var(--forest); color:var(--mint); border-color:var(--forest); transform:scale(1.1); box-shadow:0 8px 30px rgba(0,62,41,0.25); }
  .ie-step-title { font-size:1.05rem; font-weight:600; color:var(--charcoal); margin-bottom:0.6rem; }
  .ie-step-desc { font-size:0.875rem; color:var(--muted); line-height:1.65; font-weight:300; }

  .ie-apps-wrap { background:var(--forest-deep); padding:7rem 0; }
  .ie-apps-wrap .ie-section-title { color:white; }
  .ie-apps-wrap .ie-section-sub { color:rgba(255,255,255,0.55); }
  .ie-apps-wrap .ie-section-tag { background:rgba(168,240,208,0.12); color:var(--mint); }
  .ie-apps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
  .ie-app-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:24px; padding:2.5rem; transition:all 0.35s ease; position:relative; overflow:hidden; }
  .ie-app-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,var(--mint),transparent); opacity:0; transition:opacity 0.3s; }
  .ie-app-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(168,240,208,0.2); transform:translateY(-6px); }
  .ie-app-card:hover::before { opacity:1; }
  .ie-app-icon-wrap { width:64px; height:64px; border-radius:18px; background:rgba(168,240,208,0.1); border:1px solid rgba(168,240,208,0.2); display:flex; align-items:center; justify-content:center; font-size:2rem; margin-bottom:1.75rem; transition:all 0.3s; }
  .ie-app-card:hover .ie-app-icon-wrap { background:rgba(168,240,208,0.18); transform:scale(1.05); }
  .ie-app-name { font-size:1.3rem; font-weight:600; color:white; margin-bottom:0.75rem; font-family:'Playfair Display',serif; }
  .ie-app-desc { font-size:0.9rem; color:rgba(255,255,255,0.5); line-height:1.7; font-weight:300; margin-bottom:2rem; }
  .ie-app-features { list-style:none; display:flex; flex-direction:column; gap:0.6rem; }
  .ie-app-features li { display:flex; align-items:center; gap:0.6rem; font-size:0.85rem; color:rgba(255,255,255,0.65); }
  .ie-check { width:18px; height:18px; border-radius:50%; background:rgba(168,240,208,0.12); border:1px solid rgba(168,240,208,0.3); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:var(--mint); flex-shrink:0; }

  .ie-trust-wrap { background:white; padding:7rem 0; }
  .ie-trust-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }
  .ie-trust-card { padding:2.5rem; border-radius:20px; border:1px solid var(--border); background:var(--cream); transition:all 0.3s ease; }
  .ie-trust-card:hover { border-color:var(--orange); box-shadow:0 12px 40px rgba(249,115,22,0.1); transform:translateY(-4px); }
  .ie-trust-icon { font-size:2rem; margin-bottom:1.25rem; }
  .ie-trust-title { font-size:1.1rem; font-weight:600; color:var(--charcoal); margin-bottom:0.75rem; }
  .ie-trust-text { font-size:0.9rem; color:var(--muted); line-height:1.7; font-weight:300; }

  .ie-cta-wrap { background:var(--cream); padding:7rem 3rem; }
  .ie-cta-inner { max-width:1200px; margin:0 auto; background:linear-gradient(135deg,var(--forest-deep) 0%,var(--forest-mid) 60%,#007a50 100%); border-radius:32px; padding:5rem 4rem; display:grid; grid-template-columns:1fr auto; align-items:center; gap:3rem; position:relative; overflow:hidden; }
  .ie-cta-inner::before { content:''; position:absolute; inset:0; background-image:radial-gradient(circle,rgba(168,240,208,0.06) 1px,transparent 1px); background-size:32px 32px; }
  .ie-cta-orb { position:absolute; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle,rgba(168,240,208,0.12),transparent 70%); right:-100px; top:-100px; pointer-events:none; }
  .ie-cta-text { position:relative; z-index:1; }
  .ie-cta-tag { display:inline-block; font-size:0.7rem; font-weight:600; text-transform:uppercase; letter-spacing:0.15em; color:var(--mint); margin-bottom:1rem; }
  .ie-cta-title { font-family:'Playfair Display',serif; font-size:clamp(2rem,3vw,2.8rem); font-weight:800; color:white; line-height:1.15; letter-spacing:-0.02em; margin-bottom:0.75rem; }
  .ie-cta-title em { font-style:italic; color:var(--mint); }
  .ie-cta-sub { font-size:1rem; color:rgba(255,255,255,0.6); line-height:1.7; font-weight:300; }
  .ie-cta-actions { display:flex; flex-direction:column; gap:0.75rem; position:relative; z-index:1; flex-shrink:0; }
  .ie-dl-btn { display:flex; align-items:center; gap:0.75rem; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); color:white; padding:0.9rem 1.5rem; border-radius:14px; cursor:pointer; transition:all 0.25s ease; font-family:'DM Sans',sans-serif; min-width:180px; }
  .ie-dl-btn:hover { background:rgba(255,255,255,0.15); border-color:rgba(255,255,255,0.4); transform:translateX(4px); }
  .ie-dl-btn-icon { font-size:1.5rem; }
  .ie-dl-btn-sub { font-size:0.65rem; opacity:0.6; line-height:1; margin-bottom:0.2rem; display:block; }
  .ie-dl-btn-main { font-size:0.95rem; font-weight:600; line-height:1; display:block; }

  .ie-img-strip { background:var(--cream); padding:0 3rem 7rem; }
  .ie-img-strip-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1.2fr 1fr 1.2fr; gap:1.25rem; align-items:end; }
  .ie-img-item { border-radius:20px; overflow:hidden; position:relative; height:260px; }
  .ie-img-item-tall { height:340px; }
  .ie-img-item img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
  .ie-img-item:hover img { transform:scale(1.06); }
  .ie-img-caption { position:absolute; bottom:0; left:0; right:0; padding:1rem 1.25rem 1.1rem; background:linear-gradient(to top,rgba(0,26,17,0.85),transparent); color:rgba(255,255,255,0.9); font-size:0.8rem; font-weight:600; letter-spacing:0.05em; text-transform:uppercase; }

  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  .ie-reveal { opacity:0; transform:translateY(32px); transition:opacity 0.7s ease, transform 0.7s ease; }
  .ie-reveal.visible { opacity:1; transform:translateY(0); }

  @media(max-width:1024px){
    .ie-hero-inner{grid-template-columns:1fr} .ie-hero-visual{display:none}
    .ie-categories-grid,.ie-apps-grid,.ie-trust-grid{grid-template-columns:1fr 1fr}
    .ie-how-grid{grid-template-columns:repeat(2,1fr)} .ie-how-grid::before{display:none}
  }
  @media(max-width:768px){
    .ie-nav{padding:1rem 1.5rem} .ie-nav.scrolled{padding:0.75rem 1.5rem} .ie-nav-links{display:none}
    .ie-hero-inner,.ie-section{padding-left:1.5rem;padding-right:1.5rem}
    .ie-section{padding-top:5rem;padding-bottom:5rem}
    .ie-categories-grid,.ie-apps-grid,.ie-trust-grid,.ie-how-grid{grid-template-columns:1fr}
    .ie-section-header{grid-template-columns:1fr}
    .ie-cta-inner{grid-template-columns:1fr;padding:3rem 2rem} .ie-cta-wrap{padding:4rem 1.5rem}
    .ie-footer{flex-direction:column;gap:1.5rem;text-align:center;padding:2.5rem 1.5rem}
    .ie-hero-stats{gap:1.5rem}
  }
  @media(max-width:768px){
    .ie-img-strip { padding:0 1.5rem 5rem; }
    .ie-img-strip-inner { grid-template-columns:1fr 1fr; }
    .ie-img-item { height:200px; }
    .ie-img-item-tall { height:200px; }
  }
`;

function PhoneCard({ num }) {
  const emojis = ["💊", "🥗", "✨"];
  return (
    <div className="ie-phone-screen">
      <div className="ie-phone-bar" />
      <div className="ie-phone-bar medium short" />
      <div className="ie-phone-card-mini">
        <div className="ie-phone-dot">{emojis[num]}</div>
        <div className="ie-phone-lines"><div className="ie-phone-line" /><div className="ie-phone-line s" /></div>
      </div>
      <div className="ie-phone-card-mini">
        <div className="ie-phone-dot" style={{ background: "rgba(255,255,255,0.12)" }}>📦</div>
        <div className="ie-phone-lines"><div className="ie-phone-line" /><div className="ie-phone-line s" /></div>
      </div>
      <div className="ie-phone-bar" style={{ marginTop: "0.5rem", opacity: 0.3 }} />
      <div className="ie-phone-bar medium short" style={{ opacity: 0.2 }} />
    </div>
  );
}

export default function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (i) => (el) => { revealRefs.current[i] = el; };

  return (
    <>
      <style>{styles}</style>
      <div className="ie-home">


        <section className="ie-hero">
          <div className="ie-hero-bg" />
          <div className="ie-hero-overlay" />
          <div className="ie-hero-grid" />
          <div className="ie-hero-orb ie-hero-orb-1" />
          <div className="ie-hero-orb ie-hero-orb-2" />
          <div className="ie-hero-inner">
            <div>
              <div className="ie-hero-badge">Now delivering in your city</div>
              <h1 className="ie-hero-title">Healthy Foods,<br /><em>Delivered Instantly.</em></h1>
              <p className="ie-hero-desc">InstantEase connects  healthy food vendors, pharmacies, and beauty brands directly to your door — fast, safe, and effortless.</p>
              {/* <div className="ie-hero-actions">
                <button className="ie-btn-primary"><span>Get Started</span><span>→</span></button>
                <button className="ie-btn-ghost">Explore Services</button>
              </div> */}
              <div className="ie-hero-stats">
                <div><div className="ie-stat-val">50K<span>+</span></div><div className="ie-stat-label">Customers</div></div>
                <div><div className="ie-stat-val">1.2K<span>+</span></div><div className="ie-stat-label">Vendors</div></div>
                <div><div className="ie-stat-val">99<span>%</span></div><div className="ie-stat-label">On-time rate</div></div>
              </div>
            </div>
            {/* <div className="ie-hero-visual">
              <div className="ie-phones">
                <div className="ie-phone ie-phone-1"><PhoneCard num={0} /></div>
                <div className="ie-phone ie-phone-2"><PhoneCard num={1} /></div>
                <div className="ie-phone ie-phone-3"><PhoneCard num={2} /></div>
              </div>
            </div> */}
          </div>
        </section>

        <div className="ie-categories-wrap">
          <div className="ie-section">
            <div className="ie-section-header ie-reveal" ref={r(0)}>
              <div>
                <span className="ie-section-tag">What We Offer</span>
                <h2 className="ie-section-title">Three categories,<br />one platform.</h2>
                <p className="ie-section-sub">Everything you need for your health, nutrition, and beauty — sourced from trusted local vendors.</p>
              </div>
            </div>
            <div className="ie-categories-grid">
              {[
                
                { bg: "ie-cat-bg-2", emoji: "🥗", label: "Nutrition", title: "Healthy Food & Drinks", desc: "Fresh meals, organic produce, smoothies and nutritious snacks from top-rated vendors near you." },
                { bg: "ie-cat-bg-1", emoji: "💊", label: "Health", title: "Pharmacy & Wellness", desc: "Prescription meds, OTC drugs, vitamins, supplements, and wellness essentials — delivered securely." },
                { bg: "ie-cat-bg-3", emoji: "✨", label: "Beauty", title: "Beauty & Skincare", desc: "Curated skincare, cosmetics and beauty products from brands you know and love." },
              ].map((c, i) => (
                <div key={i} className={"ie-cat-card ie-reveal"} ref={r(1 + i)} style={{ transitionDelay: i * 0.1 + "s" }}>
                  <div className={"ie-cat-bg " + c.bg} />
                  <div className="ie-cat-pattern" />
                  <div className="ie-cat-emoji">{c.emoji}</div>
                  <div className="ie-cat-content">
                    <span className="ie-cat-label">{c.label}</span>
                    <h3 className="ie-cat-title">{c.title}</h3>
                    <p className="ie-cat-desc">{c.desc}</p>
                    <div className="ie-cat-arrow">Explore <span>→</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ie-how-wrap">
          <div className="ie-section">
            <div className="ie-section-header ie-reveal" ref={r(4)}>
              <div>
                <span className="ie-section-tag">How It Works</span>
                <h2 className="ie-section-title">From order to door,<br />in minutes.</h2>
              </div>
            </div>
            <div className="ie-how-grid">
              {[
                { n: "01", title: "Browse & Choose", desc: "Explore products across pharmacies, healthy food vendors, and beauty brands." },
                { n: "02", title: "Place Your Order", desc: "Add to cart and checkout securely with multiple payment options." },
                { n: "03", title: "Vendor Prepares", desc: "The vendor confirms and prepares your order with care." },
                { n: "04", title: "Rider Delivers", desc: "A verified rider picks up and delivers to your door with live tracking." },
              ].map((s, i) => (
                <div key={i} className={"ie-step ie-reveal"} ref={r(5 + i)} style={{ transitionDelay: i * 0.12 + "s" }}>
                  <div className="ie-step-num">{s.n}</div>
                  <div className="ie-step-title">{s.title}</div>
                  <p className="ie-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ie-apps-wrap">
          <div className="ie-section">
            <div className="ie-section-header ie-reveal" ref={r(9)}>
              <div>
                <span className="ie-section-tag">The Ecosystem</span>
                <h2 className="ie-section-title">Three apps.<br />One connected world.</h2>
                <p className="ie-section-sub">A seamless ecosystem built for customers, vendors, and riders — each with tools designed for their needs.</p>
              </div>
            </div>
            <div className="ie-apps-grid">
              {[
                { icon: "📱", name: "Customer App", desc: "Browse, order, and track deliveries from pharmacies, food vendors, and beauty brands — all in one place.", features: ["Easy browsing & ordering", "Real-time order tracking", "Secure payment methods", "Full order history"] },
                { icon: "🏪", name: "Vendor App", desc: "Run your business smarter. Accept orders, manage inventory, and grow your customer base effortlessly.", features: ["Smart order management", "Live inventory tracking", "Sales analytics dashboard", "Customer insights & reviews"] },
                { icon: "🏍️", name: "Rider App", desc: "Earn flexibly with optimized routes and clear earnings tracking. Join a trusted network of delivery riders.", features: ["Optimized route planning", "Flexible scheduling", "Live earnings tracker", "Performance metrics & ratings"] },
              ].map((app, i) => (
                <div key={i} className={"ie-app-card ie-reveal"} ref={r(10 + i)} style={{ transitionDelay: i * 0.1 + "s" }}>
                  <div className="ie-app-icon-wrap">{app.icon}</div>
                  <h3 className="ie-app-name">{app.name}</h3>
                  <p className="ie-app-desc">{app.desc}</p>
                  <ul className="ie-app-features">
                    {app.features.map((f, j) => (
                      <li key={j}><span className="ie-check">✓</span>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ie-trust-wrap">
          <div className="ie-section">
            <div className="ie-section-header ie-reveal" ref={r(13)}>
              <div>
                <span className="ie-section-tag">Why InstantEase</span>
                <h2 className="ie-section-title">Built on trust,<br />driven by care.</h2>
              </div>
            </div>
            <div className="ie-trust-grid">
              {[
                { icon: "🔐", title: "Secure & Private", text: "Your orders, payments, and personal data are protected with end-to-end encryption and secure processing." },
                { icon: "⚡", title: "Lightning Fast", text: "From order placement to delivery, we optimize every step so you receive your items as quickly as possible." },
                { icon: "✅", title: "Verified Vendors", text: "Every pharmacy, food vendor, and beauty brand on our platform is vetted and quality-checked." },
              ].map((t, i) => (
                <div key={i} className={"ie-trust-card ie-reveal"} ref={r(14 + i)} style={{ transitionDelay: i * 0.1 + "s" }}>
                  <div className="ie-trust-icon">{t.icon}</div>
                  <div className="ie-trust-title">{t.title}</div>
                  <p className="ie-trust-text">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ie-cta-wrap">
          <div className={"ie-cta-inner ie-reveal"} ref={r(17)}>
            <div className="ie-cta-orb" />
            <div className="ie-cta-text">
              <div className="ie-cta-tag">Ready to begin?</div>
              <h2 className="ie-cta-title">Healthy food,<br /><em>at your fingertips.</em></h2>
              <p className="ie-cta-sub">Join thousands already using InstantEase. Download the app and get your first order delivered today.</p>
            </div>
            <div className="ie-cta-actions">
              {[
                { icon: "🍎", sub: "Download on the", main: "App Store" },
                { icon: "▶", sub: "Get it on", main: "Google Play" },
                { icon: "🏪", sub: "Become a", main: "Vendor Partner" },
              ].map((btn, i) => (
                <button key={i} className="ie-dl-btn">
                  <span className="ie-dl-btn-icon">{btn.icon}</span>
                  <span>
                    <span className="ie-dl-btn-sub">{btn.sub}</span>
                    <span className="ie-dl-btn-main">{btn.main}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>


      </div>
    </>
  );
}