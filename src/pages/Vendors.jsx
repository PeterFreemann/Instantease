import { BarChart3, ClipboardList, Clock, Download, Headset, Landmark, ListChecks, Store, Users, UtensilsCrossed, Wallet } from "lucide-react";
import { apps } from "../config/site";
import { Categories, ChecklistCard, CtaBand, Faq, FeatureGrid, PageHero, Steps } from "../components/home/sections";

// Copy is based on the Vendor app's store setup and screens. Don't add commission rates,
// payout timings or revenue claims until they're confirmed.

const needs = [
  "Your registered business name, email and phone number",
  "Your store address and a short description",
  "Your opening hours",
  "A Nigerian bank account for payouts",
];

const steps = [
  { Icon: Download, title: "Download the Vendor app", text: "Install it on your phone and create your account." },
  { Icon: Store, title: "Set up your store", text: "Add your business details, opening hours and the bank account you want to be paid into." },
  { Icon: ListChecks, title: "Get reviewed", text: "Our team checks your details before your store goes live." },
  { Icon: ClipboardList, title: "Start taking orders", text: "Add your products and accept orders as they come in." },
];

const features = [
  { Icon: ClipboardList, title: "Incoming orders", text: "See new orders as they arrive and manage each one until the rider picks it up." },
  { Icon: UtensilsCrossed, title: "Menu and products", text: "Organise items into categories and add options such as sizes or extras." },
  { Icon: Clock, title: "Opening hours", text: "Set when your store takes orders, and update it whenever you need to." },
  { Icon: Wallet, title: "Earnings", text: "Keep track of what you've earned from your orders." },
  { Icon: Landmark, title: "Payouts to your bank", text: "Add or update the bank account your earnings are paid into." },
  { Icon: BarChart3, title: "Store stats", text: "See how your store is doing over time." },
  { Icon: Users, title: "Staff access", text: "Add staff so your team can help manage the store." },
  { Icon: Headset, title: "Support when you need it", text: "Reach our team by email or phone if anything goes wrong." },
];

// TODO: confirm every answer below before going live.
const faqs = [
  {
    q: "What can I sell on InstantEase?",
    a: "InstantEase is for pharmacies, healthy food and drink vendors, and beauty and skincare retailers. Pharmacies must hold a valid pharmacy licence.",
  },
  {
    q: "How long does approval take?",
    a: "We review applications, usually within 48 hours. We'll contact you if we need anything else.",
  },
  {
    q: "How do I get paid?",
    a: "Add your bank account during store setup. Your earnings are paid into that account, and you can follow them in the Vendor app.",
  },
  {
    q: "Can my staff use the app too?",
    a: "Yes. You can give members of your team access so they can help manage orders.",
  },
];

function Vendors() {
  return (
    <div className="font-figtree text-ie-ink">
      <PageHero
        eyebrow="For vendors"
        title={<>Sell on InstantEase. <span className="text-ie-orange">Reach more of Lagos.</span></>}
        text="Bring your pharmacy, healthy food business or beauty store to customers nearby. Take orders, manage your products and get paid, all from the Vendor app."
        app={apps.vendor}
        aside={<ChecklistCard title="What you need to sign up" items={needs} note="Have your RC number and TIN to hand if you have them." />}
      />
      <Steps title="Open your store in four steps." steps={steps} />
      <FeatureGrid eyebrow="The Vendor app" title="Everything you need to run your store." features={features} />
      <Categories eyebrow="Who can sell" title="Stores that help Lagos live well." />
      <CtaBand title="Get the Vendor app." text="Set up your store today and start taking orders once you're approved." app={apps.vendor} />
      <Faq items={faqs} title="Questions from vendors." />
    </div>
  );
}

export default Vendors;
