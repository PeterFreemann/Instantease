import { Link } from "react-router-dom";
import "./Support.css";

const CONTACT_EMAIL = "instanteaseapp@gmail.com";
const CONTACT_PHONE = "+234 707 732 3387";

const faqGroups = [
  {
    id: "customers",
    icon: "📱",
    title: "Customer App",
    faqs: [
      { q: "How do I place an order?", a: "Open the Customer App, browse pharmacies, food vendors or beauty brands, add items to your cart and check out. You will get a confirmation as soon as the vendor accepts your order." },
      { q: "How can I track my order?", a: "Once your order is confirmed, you can track it in real time from the Orders tab. You will receive notifications at every stage, from preparation to delivery." },
      { q: "What are the delivery charges?", a: "Delivery charges depend on distance and order value, and are shown at checkout before you pay. Orders above a certain amount may qualify for free delivery." },
      { q: "Can I cancel an order?", a: "You can cancel an order from the order details screen until the vendor starts preparing it. After that, contact support and we will help where we can." },
      { q: "My order is missing items or arrived damaged. What should I do?", a: `Report the problem from the order details screen, or email ${CONTACT_EMAIL} with your order number and photos if you have them. We will investigate and arrange a refund or replacement where appropriate.` },
      { q: "When will I get my refund?", a: "Approved refunds go back to your original payment method. How long it takes to reach your account depends on your bank or card provider." },
      { q: "Do you operate in my area?", a: "Enter your address in the Customer App to see the vendors that deliver to you. We are constantly expanding to new areas across Nigeria." },
    ],
  },
  {
    id: "vendors",
    icon: "🏪",
    title: "Vendor App",
    faqs: [
      { q: "How do I become a vendor?", a: "Download the Vendor App and complete registration with your business details. Our team will review your application and get back to you within 48 hours." },
      { q: "What documents do I need?", a: "You will need your business details and, where relevant, licences or permits. Pharmacies must provide a valid pharmacy licence." },
      { q: "How do I manage my products and stock?", a: "Use the Inventory section of the Vendor App to add products, update prices, mark items as out of stock and set your opening hours." },
      { q: "When and how do I get paid?", a: "Your earnings are paid out to the settlement bank account in your vendor profile. You can see your sales and payout history in the app's dashboard." },
    ],
  },
  {
    id: "riders",
    icon: "🏍️",
    title: "Rider App",
    faqs: [
      { q: "How do I become a rider?", a: "Download the Rider App, sign up and upload the documents it asks for, such as a valid ID and vehicle details. We will verify them before you can start accepting deliveries." },
      { q: "Why does the Rider App need my location?", a: "When you are online, the app uses your location to send you nearby delivery requests, give you directions and show customers live tracking. Location sharing stops when you go offline." },
      { q: "How are my earnings calculated and paid?", a: "You can see what you earn on each delivery, and your running total, in the Earnings section. Payouts go to the bank account in your rider profile." },
      { q: "What if I have a problem during a delivery?", a: `Use the call button in the app to reach the customer or vendor. For anything else, contact support on ${CONTACT_PHONE}.` },
    ],
  },
  {
    id: "account",
    icon: "🔐",
    title: "Account & Privacy",
    faqs: [
      { q: "I forgot my password. How do I reset it?", a: "On the sign-in screen, tap \"Forgot password\" and follow the instructions sent to your registered phone number or email." },
      { q: "How do I update my details?", a: "Go to Profile in the app to change your name, phone number, email, addresses or bank details." },
      { q: "How do I delete my account?", a: "deleteAccount" },
      { q: "How is my data used?", a: "privacy" },
    ],
  },
];

function renderAnswer(a) {
  if (a === "deleteAccount") {
    return (
      <p>
        In the app, go to <em>Account</em>, then tap <em>Delete my account</em> and confirm. You can also email{" "}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Account%20Deletion%20Request`}>{CONTACT_EMAIL}</a> with the subject
        "Account Deletion Request". See <Link to="/privacy-policy#delete-account">Deleting Your Account</Link> for
        details.
      </p>
    );
  }
  if (a === "privacy") {
    return (
      <p>
        Our <Link to="/privacy-policy">Privacy Policy</Link> explains what we collect, why, who we share it with, and
        your rights.
      </p>
    );
  }
  return <p>{a}</p>;
}

function Support() {
  return (
    <div className="support">
      <section className="sp-hero">
        <div className="sp-hero-inner">
          <span className="sp-hero-tag">Help Center</span>
          <h1 className="sp-hero-title">How can we <em>help?</em></h1>
          <p className="sp-hero-sub">
            Support for the InstantEase Customer, Vendor and Rider apps. Find answers below or get in touch with our team.
          </p>
          <nav className="sp-jump" aria-label="Help topics">
            {faqGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="sp-jump-link">{g.icon} {g.title}</a>
            ))}
          </nav>
        </div>
      </section>

      <section className="sp-contact">
        <div className="sp-container sp-contact-grid">
          <a href={`mailto:${CONTACT_EMAIL}`} className="sp-card">
            <div className="sp-card-icon">📧</div>
            <h2 className="sp-card-title">Email us</h2>
            <p className="sp-card-text">{CONTACT_EMAIL}</p>
          </a>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="sp-card">
            <div className="sp-card-icon">📞</div>
            <h2 className="sp-card-title">Call us</h2>
            <p className="sp-card-text">{CONTACT_PHONE}</p>
          </a>
          <Link to="/contact" className="sp-card">
            <div className="sp-card-icon">💬</div>
            <h2 className="sp-card-title">Send a message</h2>
            <p className="sp-card-text">Use our contact form</p>
          </Link>
        </div>
      </section>

      <section className="sp-faqs">
        <div className="sp-container">
          {faqGroups.map((g) => (
            <div key={g.id} id={g.id} className="sp-group">
              <h2 className="sp-group-title"><span>{g.icon}</span> {g.title}</h2>
              {g.faqs.map((f) => (
                <details key={f.q} className="sp-faq">
                  <summary>{f.q}</summary>
                  <div className="sp-faq-a">{renderAnswer(f.a)}</div>
                </details>
              ))}
            </div>
          ))}

          <div className="sp-note">
            <p>
              When you contact us about an order, include your order number and the app you're using (Customer,
              Vendor or Rider) so we can help you faster.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
