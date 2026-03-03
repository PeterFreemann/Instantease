import { useState, useEffect, useRef } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact">

      <section className="ct-hero">
        <div className="ct-hero-img" />
        <div className="ct-hero-overlay" />
        <div className="ct-hero-grid" />
        <div className="ct-hero-inner">
          <span className="ct-hero-tag">Reach Out</span>
          <h1 className="ct-hero-title">Let us talk.<br /><em>We are listening.</em></h1>
          <p className="ct-hero-sub">Have questions? Send us a message and we will respond as soon as possible.</p>
        </div>
      </section>

      <section className="ct-content">
        <div className="ct-container">
          <div className="ct-grid">

            <div className="ct-info ct-reveal" ref={r(0)}>
              <div className="ct-info-header">
                <span className="ct-section-tag">Contact Info</span>
                <h2 className="ct-info-title">Get in touch.</h2>
                <p className="ct-info-sub">Reach out through any of the following channels. We are here to help.</p>
              </div>
              <div className="ct-info-img">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80" alt="Customer support" />
                <div className="ct-info-img-badge">Lagos, Nigeria <span>\uD83C\uDDF3\uD83C\uDDEC</span></div>
              </div>
              <div className="ct-info-items">
                {[
                  { icon: "\uD83D\uDCE7", label: "Email", value: "support@instantease.com" },
                  { icon: "\uD83D\uDCDE", label: "Phone", value: "+234 800 INSTANT" },
                  { icon: "\uD83D\uDCCD", label: "Address", value: "Victoria Island, Lagos, Nigeria" },
                  { icon: "\uD83D\uDD52", label: "Business Hours", value: "Mon - Fri: 8:00 AM - 8:00 PM\nSat - Sun: 9:00 AM - 5:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="ct-info-item">
                    <div className="ct-info-icon-wrap">{item.icon}</div>
                    <div className="ct-info-detail">
                      <div className="ct-info-label">{item.label}</div>
                      <div className="ct-info-value">
                        {item.value.split("\n").map((line, j, arr) => (
                          <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ct-form-wrap ct-reveal" ref={r(1)}>
              <div className="ct-form-header">
                <span className="ct-section-tag">Send a message</span>
                <h2 className="ct-form-title">Write to us.</h2>
              </div>
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div className="ct-form-group">
                    <label htmlFor="name" className="ct-label">Your Name</label>
                    <input type="text" id="name" name="name" className="ct-input" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div className="ct-form-group">
                    <label htmlFor="email" className="ct-label">Email Address</label>
                    <input type="email" id="email" name="email" className="ct-input" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="ct-form-group">
                  <label htmlFor="subject" className="ct-label">Subject</label>
                  <input type="text" id="subject" name="subject" className="ct-input" value={formData.subject} onChange={handleChange} required placeholder="How can we help?" />
                </div>
                <div className="ct-form-group">
                  <label htmlFor="message" className="ct-label">Message</label>
                  <textarea id="message" name="message" className="ct-textarea" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell us more..."></textarea>
                </div>
                <button type="submit" className="ct-submit">
                  <span>Send Message</span>
                  <span className="ct-submit-arrow">&#x2192;</span>
                </button>
                {submitted && (
                  <div className="ct-success">
                    <span>&#x2713;</span> Thank you! We will get back to you soon.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="ct-img-banner">
        <div className="ct-img-banner-grid">
          <div className="ct-img-banner-item">
            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80" alt="Pharmacy" />
            <div className="ct-img-banner-label">Pharmacy</div>
          </div>
          <div className="ct-img-banner-item ct-img-banner-tall">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="Food delivery" />
            <div className="ct-img-banner-label">Healthy Food</div>
          </div>
          <div className="ct-img-banner-item">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" alt="Beauty" />
            <div className="ct-img-banner-label">Beauty</div>
          </div>
          <div className="ct-img-banner-item ct-img-banner-tall">
            <img src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80" alt="Rider" />
            <div className="ct-img-banner-label">Fast Delivery</div>
          </div>
        </div>
      </section>

      <section className="ct-faq">
        <div className="ct-container">
          <div className="ct-faq-header ct-reveal" ref={r(2)}>
            <span className="ct-section-tag">FAQ</span>
            <h2 className="ct-faq-title">Common questions.</h2>
          </div>
          <div className="ct-faq-grid">
            {[
              { q: "How do I become a vendor?", a: "Download our Vendor App and complete the registration process. Our team will review your application and get back to you within 48 hours." },
              { q: "What are the delivery charges?", a: "Delivery charges vary based on distance and order value. Orders above a certain amount may qualify for free delivery." },
              { q: "How can I track my order?", a: "Once your order is confirmed, you can track it in real-time through the Customer App. You will receive updates at every stage of delivery." },
              { q: "Do you operate in my area?", a: "Check the Customer App to see if we are available in your location. We are constantly expanding to new areas across Nigeria." },
            ].map((faq, i) => (
              <div key={i} className="ct-faq-card ct-reveal" ref={r(3 + i)} style={{ transitionDelay: i * 0.1 + "s" }}>
                <div className="ct-faq-num">0{i + 1}</div>
                <h3 className="ct-faq-q">{faq.q}</h3>
                <p className="ct-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;