import { Bell, Headset, KeyRound, Landmark, MapIcon, PackageCheck, Power, Star, Wallet } from "lucide-react";
import { apps } from "../config/site";
import { ChecklistCard, CtaBand, Faq, FeatureGrid, PageHero, Steps } from "../components/home/sections";

// Copy is based on the Rider app's sign-up (KYC) and delivery screens. Don't add pay rates,
// earnings figures or bonus claims until they're confirmed.

const needs = [
  "A smartphone with location turned on",
  "A valid ID: NIN, driver's licence, voter's card or international passport",
  "Your motor insurance policy number",
  "A Nigerian bank account to withdraw your earnings",
];

const steps = [
  { Icon: Power, title: "Go online", text: "Open the Rider app and go online whenever you're ready to work." },
  { Icon: Bell, title: "Accept a delivery", text: "Get delivery requests near you. Accept the ones you want." },
  { Icon: PackageCheck, title: "Pick up the order", text: "Check the order matches the receipt, then confirm pickup in the app." },
  { Icon: KeyRound, title: "Deliver and enter the code", text: "Hand over the order and enter the customer's 6-digit delivery code to complete it." },
];

const features = [
  { Icon: MapIcon, title: "Delivery map", text: "See where to pick up and where to drop off, with your live location on the map." },
  { Icon: Wallet, title: "Earnings", text: "Keep a clear record of what you've earned from each delivery." },
  { Icon: Landmark, title: "Withdraw to your bank", text: "Move your earnings to your bank account from the app." },
  { Icon: Star, title: "Stats and reviews", text: "Track your completed orders and see how customers rate you." },
  { Icon: Bell, title: "Notifications", text: "Get alerted when a new delivery request comes in." },
  { Icon: Headset, title: "In-app support", text: "Reach our team from the app if something goes wrong on a delivery." },
];

// TODO: confirm every answer below before going live.
const faqs = [
  {
    q: "How do I sign up?",
    a: "Download the Rider app, create your account and complete KYC verification with a valid ID and your motor insurance policy number.",
  },
  {
    q: "How long does approval take?",
    a: "We review applications, usually within 48 hours. We'll contact you if we need anything else.",
  },
  {
    q: "Can I choose when I work?",
    a: "Yes. Go online in the app when you want delivery requests, and go offline when you're done.",
  },
  {
    q: "How do I get paid?",
    a: "Your earnings show in the Rider app. Withdraw them to your bank account from the Earnings screen.",
  },
  {
    q: "What is the delivery code?",
    a: "Each customer gets a private 6-digit code. Ask for it when you hand over the order and enter it to complete the delivery.",
  },
];

function Riders() {
  return (
    <div className="font-figtree text-ie-ink">
      <PageHero
        eyebrow="For riders"
        title={<>Ride with InstantEase. <span className="text-ie-orange">Earn on your schedule.</span></>}
        text="Deliver medicines, healthy meals and beauty products across Lagos. Go online when it suits you, accept deliveries near you and withdraw your earnings to your bank."
        app={apps.rider}
        aside={<ChecklistCard title="What you need to sign up" items={needs} />}
      />
      <Steps eyebrow="How deliveries work" title="Four steps from request to doorstep." steps={steps} />
      <FeatureGrid eyebrow="The Rider app" title="Built to keep you moving." features={features} />
      <CtaBand title="Get the Rider app." text="Sign up, complete your verification and start delivering once you're approved." app={apps.rider} />
      <Faq items={faqs} title="Questions from riders." />
    </div>
  );
}

export default Riders;
