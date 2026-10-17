import "./PrivacyPolicy.css";

const EFFECTIVE_DATE = "October 7, 2026";
const CONTACT_EMAIL = "instanteaseapp@gmail.com";
const CONTACT_PHONE = "+234 707 732 3387";
const CONTACT_ADDRESS = "Lekki, Lagos State, Nigeria";

const sections = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    body: (
      <>
        <p>
          InstantEase ("InstantEase", "we", "us" or "our") operates an on-demand delivery platform that connects
          customers with pharmacies, healthy food vendors and beauty retailers, and with riders who deliver orders.
          We are based in {CONTACT_ADDRESS}, and we are the data controller for the personal data described in this policy.
        </p>
        <p>This Privacy Policy applies to:</p>
        <ul>
          <li><strong>InstantEase Customer App</strong>, for ordering and tracking deliveries;</li>
          <li><strong>InstantEase Vendor App</strong>, for businesses that sell on InstantEase;</li>
          <li><strong>InstantEase Rider App</strong>, for riders who deliver orders;</li>
          <li>our website at instantease.com.ng, and any related services (together, the "Services").</li>
        </ul>
        <p>
          By using the Services, you acknowledge that you have read this policy. If you do not agree with it, please
          do not use the Services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: (
      <>
        <h3>2.1 Information you give us</h3>
        <ul>
          <li><strong>Account details:</strong> name, phone number, email address, password and profile photo.</li>
          <li><strong>Delivery details (customers):</strong> delivery addresses, delivery instructions and recipient contact details.</li>
          <li>
            <strong>Business details (vendors):</strong> business name, address, business registration details,
            licences or permits (for example, pharmacy licences), product listings, prices, opening hours and the
            settlement bank account details we use to pay you.
          </li>
          <li>
            <strong>Rider details:</strong> government-issued ID, driver's licence, vehicle information, a photo for
            identity checks, guarantor or emergency contact details, and the bank account details we use to pay your earnings.
          </li>
          <li>
            <strong>Orders and transactions:</strong> items ordered, order value, payment method type, receipts and
            refunds. Card payments are handled by our payment providers. We do not store your full card number or CVV.
          </li>
          <li>
            <strong>Health-related information:</strong> some pharmacy orders may reveal information about your
            health, for example a prescription you upload or the products you buy. We use this only to fulfil the
            order and meet legal requirements, and we share it only with the vendor and rider who handle that order.
          </li>
          <li><strong>Communications:</strong> messages, ratings, reviews, support requests and anything you send through our contact form.</li>
        </ul>

        <h3>2.2 Information we collect automatically</h3>
        <ul>
          <li>
            <strong>Location:</strong> with your permission, the Customer App uses your device location to suggest
            delivery addresses and show nearby vendors. The Rider App collects precise location <em>while you are
            online and available for deliveries, including when the app is in the background</em>, so that we can
            assign nearby orders, give directions and show customers live tracking. Location collection stops
            when you go offline. You can turn off location access in your device settings, but some features
            will then stop working.
          </li>
          <li>
            <strong>Device and usage data:</strong> device model, operating system, app version, language, IP
            address, crash logs, performance data and how you use app features.
          </li>
          <li><strong>Push notification token:</strong> used to send you order updates and, if you opt in, promotions.</li>
        </ul>

        <h3>2.3 Device permissions</h3>
        <p>The apps only ask for a permission when a feature needs it. You can change permissions in your device settings at any time.</p>
        <ul>
          <li><strong>Location:</strong> nearby vendors, delivery addresses, rider dispatch and live order tracking.</li>
          <li><strong>Camera and photos:</strong> profile photos, product images, prescriptions, ID documents and proof-of-delivery photos.</li>
          <li><strong>Notifications:</strong> order status, new order alerts for vendors and delivery requests for riders.</li>
          <li><strong>Phone:</strong> calling the customer, vendor or rider about an active order.</li>
        </ul>

        <h3>2.4 Information from others</h3>
        <ul>
          <li>Payment providers confirm whether a payment succeeded and send refund status.</li>
          <li>Verification partners may confirm the identity or documents of riders and vendors.</li>
          <li>Other users: for example, a rider may mark an order as delivered, or a customer may rate a vendor or rider.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    body: (
      <>
        <ul>
          <li>To create and manage your account and verify your identity.</li>
          <li>To process orders and payments, connect customers, vendors and riders, and deliver orders.</li>
          <li>To provide live order tracking, routing and estimated delivery times.</li>
          <li>To pay vendors and riders, and to issue refunds.</li>
          <li>To send service messages such as order updates, security alerts and policy changes.</li>
          <li>To provide customer support and resolve disputes.</li>
          <li>To detect and prevent fraud, abuse and security incidents, and to keep users safe.</li>
          <li>To analyse usage, fix bugs and improve the Services.</li>
          <li>To send marketing messages, but only if you have opted in. You can opt out at any time.</li>
          <li>To meet legal, regulatory, tax and accounting obligations.</li>
        </ul>
        <p>
          We process your data on the following legal bases under the Nigeria Data Protection Act 2023 and other
          applicable laws: to perform our contract with you, to meet legal obligations, for our legitimate
          interests (such as fraud prevention and improving the Services), and with your consent (for example,
          for location access, marketing or health-related information). You can withdraw consent at any time.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. How We Share Your Information",
    body: (
      <>
        <p><strong>We do not sell your personal data.</strong> We share it only as described below.</p>
        <ul>
          <li>
            <strong>Between users, to complete an order:</strong> vendors see the customer's name, the order
            details and any delivery notes. Riders see the customer's name, phone number and delivery address, and
            the vendor's pickup location. Customers see the rider's first name, photo, vehicle details and live
            location while their order is being delivered.
          </li>
          <li>
            <strong>Service providers</strong> who work on our behalf under contract: payment processors, cloud
            hosting, maps and navigation, SMS and push notifications, email, analytics, crash reporting and
            identity verification. They may use your data only to provide services to us.
          </li>
          <li>
            <strong>Legal and safety:</strong> law enforcement, regulators or courts when the law requires it, or
            when we need to protect the rights, property or safety of InstantEase, our users or the public.
          </li>
          <li>
            <strong>Business transfers:</strong> if we are involved in a merger, acquisition or sale of assets, the
            new owner may receive your data and must keep protecting it under this policy.
          </li>
        </ul>
        <p>
          We do not use your data to track you across other companies' apps or websites, and we do not share it
          with data brokers.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "5. How Long We Keep Your Information",
    body: (
      <>
        <p>We keep personal data only as long as we need it for the purposes in this policy. In general:</p>
        <ul>
          <li>Account data is kept while your account is active.</li>
          <li>
            After you delete your account, we delete or anonymise your personal data within 30 days. Some records
            are kept longer only where the law requires it or for fraud prevention and dispute resolution. These
            include transaction, tax and accounting records, which are usually kept for up to 6 years.
          </li>
          <li>Rider location history is kept for up to 90 days, unless it is needed to investigate an incident or dispute.</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "6. How We Protect Your Information",
    body: (
      <p>
        We protect your data with technical and organisational safeguards. These include encryption in transit
        (HTTPS/TLS), access controls, hashed passwords and limited access for staff. No system is completely
        secure, so we cannot guarantee absolute security. If a data breach is likely to put your rights at risk,
        we will notify you and the relevant authorities as the law requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Rights and Choices",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>access the personal data we hold about you and get a copy of it;</li>
          <li>correct inaccurate or incomplete data;</li>
          <li>ask us to delete your data;</li>
          <li>object to or restrict certain processing;</li>
          <li>receive your data in a portable format;</li>
          <li>withdraw consent at any time, without affecting processing that happened before;</li>
          <li>complain to a data protection authority. In Nigeria, this is the Nigeria Data Protection Commission (NDPC).</li>
        </ul>
        <p>
          You can update most account details inside the app. To exercise any other right, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within 30 days and may need to
          verify your identity first.
        </p>
        <p>
          You can opt out of marketing messages using the unsubscribe link or the app settings, and you can
          turn off push notifications and location access in your device settings.
        </p>
      </>
    ),
  },
  {
    id: "delete-account",
    title: "8. Deleting Your Account",
    body: (
      <>
        <p>You can delete your InstantEase account and its associated data at any time, using either method:</p>
        <ul>
          <li>
            <strong>In the app:</strong> open the Customer, Vendor or Rider App, go to <em>Account</em>, then
            tap <em>Delete my account</em> and confirm.
          </li>
          <li>
            <strong>By email:</strong> send a request to{" "}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Account%20Deletion%20Request`}>{CONTACT_EMAIL}</a> with the
            subject "Account Deletion Request". Send it from the email address or phone number registered to
            your account, and say which app you use. You do not need the app installed to do this.
          </li>
        </ul>
        <p>
          Deleting your account removes your profile, saved addresses, payment preferences and app history. We
          complete deletion within 30 days. Any data we must keep by law (see section 5) is kept only for the
          required period and then deleted. Before your account can be deleted, any active orders must be completed
          or cancelled, and any outstanding vendor or rider balances must be settled.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    body: (
      <p>
        The Services are not directed at children. You must be at least 18 years old to create an account. We do
        not knowingly collect personal data from anyone under 18. If you believe a child has given us personal
        data, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "international",
    title: "10. International Data Transfers",
    body: (
      <p>
        Some of our service providers may store or process data outside Nigeria. When this happens, we use
        appropriate safeguards required by the Nigeria Data Protection Act 2023 and other applicable laws, such as
        contractual protections, to keep your data protected.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "11. Third-Party Links and Services",
    body: (
      <p>
        The Services may link to or use third-party services, such as payment pages or map providers. Their own
        privacy policies apply to how they handle your data, and we encourage you to read them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. When we do, we will change the "Effective date" at the top
        of this page. If the changes are significant, we will also notify you in the app or by email before they
        take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact Us",
    body: (
      <>
        <p>If you have questions or requests about this policy or your personal data, contact us:</p>
        <ul className="pp-contact">
          <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          <li><strong>Phone:</strong> <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a></li>
          <li><strong>Address:</strong> InstantEase, {CONTACT_ADDRESS}</li>
        </ul>
      </>
    ),
  },
];

function PrivacyPolicy() {
  return (
    <div className="privacy">
      <section className="pp-hero">
        <div className="pp-hero-inner">
          <span className="pp-hero-tag">Legal</span>
          <h1 className="pp-hero-title">Privacy Policy</h1>
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
              This policy explains what personal data InstantEase collects when you use the InstantEase Customer,
              Vendor and Rider mobile apps and our website, how we use it, who we share it with, and the choices
              and rights you have.
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

export default PrivacyPolicy;
