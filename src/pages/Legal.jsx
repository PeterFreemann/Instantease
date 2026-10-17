import { Link } from "react-router-dom";
import "./Legal.css";

const LAST_UPDATED = "October 17, 2026";
const CONTACT_EMAIL = "instanteaseapp@gmail.com";
const CONTACT_PHONE = "+234 707 732 3387";
const CONTACT_ADDRESS = "Lekki, Lagos State, Nigeria";

const documents = [
  {
    to: "/terms",
    title: "Terms of Service",
    summary:
      "The rules for using InstantEase: placing orders, payments, deliveries, and the responsibilities of customers, vendors and riders.",
  },
  {
    to: "/privacy-policy",
    title: "Privacy Policy",
    summary:
      "What personal data we collect across the Customer, Vendor and Rider apps and this website, how we use it, who we share it with, and your rights.",
  },
];

function Legal() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <p className="legal-eyebrow">Legal</p>
          <h1 className="legal-title">Legal information</h1>
          <p className="legal-intro">
            The policies that apply when you use InstantEase, whether you order as a customer, sell as a vendor or
            deliver as a rider.
          </p>
          <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <div className="legal-container legal-body">
        <section aria-labelledby="legal-documents">
          <h2 id="legal-documents" className="legal-heading">Our policies</h2>
          <div className="legal-cards">
            {documents.map((doc) => (
              <Link key={doc.to} to={doc.to} className="legal-card">
                <span className="legal-card-title">{doc.title}</span>
                <span className="legal-card-summary">{doc.summary}</span>
                <span className="legal-card-cta">Read the {doc.title} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="delete-account" aria-labelledby="legal-delete" className="legal-section">
          <h2 id="legal-delete" className="legal-heading">Deleting your account</h2>
          <p>You can delete your InstantEase account at any time.</p>
          <ul>
            <li>
              <strong>In the app:</strong> open the app, go to <strong>Account</strong>, then tap{" "}
              <strong>Delete my account</strong> and confirm.
            </li>
            <li>
              <strong>By email:</strong> if you can't access the app, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}?subject=Account%20deletion%20request`}>{CONTACT_EMAIL}</a> from the
              email address on your account and ask us to delete it.
            </li>
          </ul>
          <p>
            Some records, such as completed orders and payment records, may be kept for as long as the law requires.
            The <Link to="/privacy-policy">Privacy Policy</Link> explains what we keep and for how long.
          </p>
        </section>

        <section aria-labelledby="legal-contact" className="legal-section">
          <h2 id="legal-contact" className="legal-heading">Questions about these policies</h2>
          <p>Contact us and we'll get back to you.</p>
          <dl className="legal-contact">
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a></dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>{CONTACT_ADDRESS}</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}

export default Legal;
