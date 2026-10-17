import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const EFFECTIVE_DATE = "October 8, 2026";
const CONTACT_EMAIL = "instanteaseapp@gmail.com";
const CONTACT_PHONE = "+234 707 732 3387";
const CONTACT_ADDRESS = "Lekki, Lagos State, Nigeria";

const sections = [
  {
    id: "about",
    title: "1. About These Terms",
    body: (
      <>
        <p>
          These Terms of Service ("Terms") govern your use of the InstantEase Customer, Vendor and Rider mobile apps,
          our website and related services (the "Services"), operated by InstantEase ("InstantEase", "we", "us" or
          "our"), {CONTACT_ADDRESS}.
        </p>
        <p>
          By creating an account or using the Services, you agree to these Terms and to our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>. If you do not agree, do not use the Services.
        </p>
      </>
    ),
  },
  {
    id: "platform",
    title: "2. Our Platform",
    body: (
      <p>
        InstantEase is a technology platform that connects customers with independent vendors (pharmacies, food
        vendors and beauty retailers) and with independent riders who deliver orders. Vendors are responsible for
        the products they sell, including their quality, safety, legality and description. Unless we say otherwise,
        InstantEase is not the seller of products listed on the platform.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "3. Accounts",
    body: (
      <ul>
        <li>You must be at least 18 years old and able to enter into a binding contract.</li>
        <li>The information you give us must be accurate, and you must keep it up to date.</li>
        <li>You are responsible for keeping your login details secure and for all activity on your account. Tell us immediately if you suspect unauthorised use.</li>
        <li>You may delete your account at any time, as described in our <Link to="/privacy-policy#delete-account">Privacy Policy</Link>.</li>
      </ul>
    ),
  },
  {
    id: "orders",
    title: "4. Orders, Pricing and Payment",
    body: (
      <ul>
        <li>Prices, delivery fees and any service fees are shown in the app before you confirm an order. All amounts are in Nigerian Naira (₦) unless stated otherwise.</li>
        <li>An order is accepted when the vendor confirms it. Vendors may decline orders, for example if an item is out of stock.</li>
        <li>Payments are processed by our third-party payment providers. By paying, you also agree to their terms.</li>
        <li>Estimated delivery times are estimates only. They may change because of traffic, weather, vendor preparation time or other factors.</li>
      </ul>
    ),
  },
  {
    id: "cancellations",
    title: "5. Cancellations and Refunds",
    body: (
      <ul>
        <li>You may cancel an order in the app until the vendor starts preparing it. After that, cancellation may not be possible, or a fee may apply.</li>
        <li>If an order is missing items, damaged or incorrect, report it in the app or <Link to="/support">contact support</Link> within 24 hours of delivery. Include photos where you can.</li>
        <li>Approved refunds go back to your original payment method. How long it takes depends on your bank or payment provider.</li>
        <li>This section does not limit any rights you have under the Federal Competition and Consumer Protection Act 2018 or other applicable law.</li>
      </ul>
    ),
  },
  {
    id: "pharmacy",
    title: "6. Pharmacy and Health Products",
    body: (
      <ul>
        <li>Pharmacy products are sold and dispensed by licensed pharmacies, not by InstantEase.</li>
        <li>Prescription-only medicines require a valid prescription. The pharmacy may refuse or cancel an order if the prescription cannot be verified.</li>
        <li>Nothing on the Services is medical advice. Always consult a qualified healthcare professional about your health and medicines.</li>
      </ul>
    ),
  },
  {
    id: "vendors",
    title: "7. Additional Terms for Vendors",
    body: (
      <ul>
        <li>You must hold and maintain every licence, permit and registration your business needs, including a pharmacy licence where it applies.</li>
        <li>Your listings, prices and stock levels must be accurate, and you must sell only genuine, safe and lawful products.</li>
        <li>You must prepare orders promptly and to a proper standard of hygiene and quality.</li>
        <li>Commission, fees and payout schedules are set out in your vendor agreement or in the Vendor App. We may deduct refunds caused by vendor error from your payouts.</li>
      </ul>
    ),
  },
  {
    id: "riders",
    title: "8. Additional Terms for Riders",
    body: (
      <ul>
        <li>You must hold a valid driver's or rider's licence and any permits needed for your vehicle, and you must keep your vehicle roadworthy.</li>
        <li>You must obey traffic laws, handle orders with care and treat customers and vendors respectfully.</li>
        <li>Unless a separate written agreement says otherwise, riders use the platform as independent service providers, not as employees of InstantEase.</li>
        <li>Earnings and payout schedules are shown in the Rider App.</li>
      </ul>
    ),
  },
  {
    id: "conduct",
    title: "9. Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the Services for any unlawful, fraudulent or harmful purpose;</li>
          <li>harass, abuse or threaten other users, riders, vendors or our staff;</li>
          <li>post false reviews or misleading content;</li>
          <li>interfere with, reverse-engineer or try to gain unauthorised access to the Services;</li>
          <li>create multiple accounts, or abuse promotions or refunds.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "10. Intellectual Property",
    body: (
      <p>
        The Services, including the InstantEase name, logo, apps and content, belong to InstantEase or its
        licensors. We give you a limited, non-exclusive, non-transferable right to use the apps for their intended
        purpose. When you submit content such as reviews or photos, you give us a non-exclusive licence to use it to
        operate and promote the Services.
      </p>
    ),
  },
  {
    id: "liability",
    title: "11. Disclaimers and Limitation of Liability",
    body: (
      <>
        <p>
          The Services are provided "as is" and "as available". We do not guarantee that they will be uninterrupted
          or error-free.
        </p>
        <p>
          To the fullest extent the law allows, InstantEase is not liable for indirect, incidental or
          consequential losses. For any claim about an order, our total liability is limited to the amount you paid
          for that order. Nothing in these Terms excludes liability that cannot be excluded by law.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "12. Suspension and Termination",
    body: (
      <p>
        We may suspend or close your account if you breach these Terms, if we suspect fraud or abuse, or if the
        law requires us to. You may stop using the Services and delete your account at any time.
      </p>
    ),
  },
  {
    id: "law",
    title: "13. Governing Law and Disputes",
    body: (
      <p>
        These Terms are governed by the laws of the Federal Republic of Nigeria. Before starting formal
        proceedings, please contact us so we can try to resolve the issue. Any dispute that cannot be resolved
        informally will be handled by the courts of Lagos State, Nigeria.
      </p>
    ),
  },
  {
    id: "changes",
    title: "14. Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. When we do, we will change the "Effective date" above. If the
        changes are significant, we will also notify you in the app or by email. If you keep using the Services
        after changes take effect, you accept the updated Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "15. Contact Us",
    body: (
      <ul className="pp-contact">
        <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        <li><strong>Phone:</strong> <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a></li>
        <li><strong>Address:</strong> InstantEase, {CONTACT_ADDRESS}</li>
      </ul>
    ),
  },
];

function Terms() {
  return (
    <div className="privacy">
      <section className="pp-hero">
        <div className="pp-hero-inner">
          <span className="pp-hero-tag">Legal</span>
          <h1 className="pp-hero-title">Terms of Service</h1>
          <p className="pp-hero-sub">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="pp-body">
        <div className="pp-container">
          <nav className="pp-toc" aria-label="Contents">
            <h2 className="pp-toc-title">Contents</h2>
            <ol>
              {sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s/, "")}</a></li>
              ))}
            </ol>
          </nav>

          <article className="pp-content">
            <p className="pp-intro">
              Please read these Terms carefully. They explain your rights and responsibilities when you use
              InstantEase as a customer, vendor or rider.
            </p>
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="pp-section">
                <h2>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}

export default Terms;
