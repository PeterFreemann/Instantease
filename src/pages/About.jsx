import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (i) => (el) => { revealRefs.current[i] = el; };

  return (
    <div className="about">

      <section className="ab-hero">
        <div className="ab-hero-img" />
        <div className="ab-hero-overlay" />
        <div className="ab-hero-grid" />
        <div className="ab-hero-orb ab-hero-orb-1" />
        <div className="ab-hero-inner">
          <span className="ab-hero-tag">Our Story</span>
          <h1 className="ab-hero-title">We make Healthy Food<br /><em> a Priority.</em></h1>
          <p className="ab-hero-sub">InstantEase is revolutionizing the way Nigerians access healthy food, wellness, and beauty products — delivered to your door in minutes.</p>
        </div>
      </section>

      <section className="ab-mission">
        <div className="ab-container">
          <div className="ab-mission-inner ab-reveal" ref={r(0)}>
            <div className="ab-mission-img">
              <img src="/about.jpg" alt="Health and wellness" />
              <div className="ab-mission-img-tag">Trusted across Lagos</div>
            </div>
            <div className="ab-mission-content">
              <span className="ab-section-tag">Mission</span>
              <h2 className="ab-content-title">Why we exist.</h2>
              <p className="ab-body-text">At InstantEase, we believe that access to healthy food, wellness, and beauty products should be simple, fast, and reliable. Our mission is to bridge the gap between customers and quality vendors through innovative technology and exceptional service.</p>
              <p className="ab-body-text">We are committed to creating a seamless ecosystem that benefits everyone — from customers seeking convenience, to vendors growing their businesses, to riders earning flexibly across Nigeria.</p>
              <div className="ab-mission-tags">
                <span className="ab-tag">Healthy Food & Drinks</span>
                <span className="ab-tag">Pharmacy & Wellness</span>
                
                <span className="ab-tag">Beauty & Skincare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-values">
        <div className="ab-container">
          <div className="ab-values-header ab-reveal" ref={r(1)}>
            <span className="ab-section-tag">What drives us</span>
            <h2 className="ab-section-title">Our core values.</h2>
          </div>
          <div className="ab-values-grid">
            {[
              { num: "01", icon: "\u26A1", title: "Speed & Efficiency", desc: "We prioritize quick delivery times and streamlined processes to ensure you get what you need, when you need it." },
              { num: "02", icon: "\uD83E\uDD1D", title: "Trust & Reliability", desc: "We partner with verified vendors and trusted riders to guarantee quality service and authentic products every time." },
              { num: "03", icon: "\uD83D\uDCA1", title: "Innovation", desc: "We continuously improve our platform with cutting-edge technology to enhance user experience across all our apps." },
              { num: "04", icon: "\uD83C\uDF31", title: "Community First", desc: "We are committed to supporting local businesses and creating economic opportunities within the communities we serve." },
            ].map((v, i) => (
              <div key={i} className="ab-value-card ab-reveal" ref={r(2 + i)} style={{ transitionDelay: i * 0.1 + "s" }}>
                <div className="ab-value-num">{v.num}</div>
                <div className="ab-value-icon">{v.icon}</div>
                <h3 className="ab-value-title">{v.title}</h3>
                <p className="ab-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-story">
        <div className="ab-container">
          <div className="ab-story-inner">
            <div className="ab-story-img ab-reveal" ref={r(6)}>
              <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&q=80" alt="Delivery rider" />
              <div className="ab-story-img-badge">Serving <span>Lagos</span> & beyond</div>
            </div>
            <div className="ab-story-right ab-reveal" ref={r(7)}>
              <span className="ab-section-tag">How we started</span>
              <h2 className="ab-section-title">Our story.</h2>
              <p className="ab-body-text">InstantEase was born from a simple observation: people need quick access to health and wellness products, but the traditional shopping experience often falls short. Long queues, limited store hours, and the hassle of traveling to multiple locations create unnecessary barriers.</p>
              <p className="ab-body-text">We set out to change that by creating a comprehensive platform that connects customers directly with pharmacies, healthy food vendors, and beauty retailers. Through our three specialized mobile apps, we built an ecosystem where convenience meets quality.</p>
              <p className="ab-body-text">Today, InstantEase serves thousands of customers across Nigeria, supports hundreds of vendors, and provides flexible earning opportunities for our rider network.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-stats">
        <div className="ab-stats-bg" />
        <div className="ab-stats-grid-bg" />
        <div className="ab-container ab-stats-inner">
          <div className="ab-stats-header ab-reveal" ref={r(8)}>
            <span className="ab-section-tag ab-tag-light">By the numbers</span>
            <h2 className="ab-section-title ab-title-white">Growing every day.</h2>
          </div>
          <div className="ab-stats-grid">
            {[
              { num: "10K+", label: "Happy Customers" },
              { num: "500+", label: "Trusted Vendors" },
              { num: "200+", label: "Active Riders" },
              { num: "50K+", label: "Deliveries Completed" },
            ].map((s, i) => (
              <div key={i} className="ab-stat-card ab-reveal" ref={r(9 + i)} style={{ transitionDelay: i * 0.1 + "s" }}>
                <div className="ab-stat-num">{s.num}</div>
                <div className="ab-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;