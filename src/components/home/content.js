import { BadgeCheck, Bike, CreditCard, Download, Headset, Leaf, Navigation, Sparkles, Store } from "lucide-react";

// Customer-facing copy shared by Home and the Customers page.

export const categories = [
  {
    slug: "pharmacy", title: "Pharmacy & Wellness", bg: "bg-cat-pharmacy", img: "/images/app/pharmacy-icon.png", imgW: 48, imgH: 49,
    desc: "Over-the-counter medicines, prescriptions, vitamins and wellness essentials from licensed pharmacies.",
  },
  {
    slug: "food", title: "Healthy Food & Drinks", bg: "bg-cat-food", img: "/images/app/restaurant-icon.png", imgW: 57, imgH: 57,
    desc: "Fresh meals, smoothies, produce and better-for-you snacks from vetted food vendors.",
  },
  {
    slug: "beauty", title: "Beauty & Skincare", bg: "bg-cat-beauty", img: "/images/app/beauty-icon.png", imgW: 96, imgH: 47,
    desc: "Skincare, makeup, hair care and fragrance from verified beauty retailers.",
  },
];

export const customerSteps = [
  { Icon: Download, title: "Download the app", text: "Get InstantEase on your phone and set your delivery address." },
  { Icon: Store, title: "Choose a store near you", text: "Browse pharmacies, healthy food spots and beauty stores close to you." },
  { Icon: CreditCard, title: "Pay securely with Paystack", text: "Pay by card, bank transfer, bank or USSD at checkout." },
  { Icon: Bike, title: "Track your rider to your door", text: "Follow your order live and share your delivery code when it arrives." },
];

export const customerFeatures = [
  { Icon: BadgeCheck, title: "Verified pharmacies", text: "Every pharmacy is checked and licensed before it can sell on InstantEase." },
  { Icon: Leaf, title: "Healthy meals", text: "Fresh, balanced meals and drinks from vetted food vendors." },
  { Icon: Sparkles, title: "Beauty brands", text: "Skincare, makeup and hair care from verified beauty retailers." },
  { Icon: Navigation, title: "Live tracking", text: "See where your rider is, from pickup to your door." },
  { Icon: CreditCard, title: "Secure payments", text: "Checkout runs on Paystack: card, transfer, bank or USSD." },
  { Icon: Headset, title: "Real support", text: "Reach our team in the app, by email or by phone if anything goes wrong." },
];

// TODO: confirm every answer below before going live.
export const faqs = [
  {
    q: "How do I place an order?",
    a: "Download the InstantEase app, set your delivery address, then browse pharmacies, healthy food vendors and beauty stores near you. Add items to your cart and check out.",
  },
  {
    q: "How much is delivery?",
    a: "Delivery fees depend on distance and order size. You'll see the exact fee at checkout before you pay.",
  },
  {
    q: "How can I pay?",
    a: "Checkout runs on Paystack, so you can pay by card, bank transfer, bank or USSD.",
  },
  {
    q: "Can I order prescription medicines?",
    a: "Yes. Upload a valid prescription in the app and a licensed pharmacy will review it before dispensing.",
  },
  {
    q: "What if something is wrong with my order?",
    a: "Report it from the order screen in the app or contact support with your order number. If a refund is approved, it goes back to your original payment method.",
  },
  {
    q: "How do I become a vendor or rider?",
    a: "Download the Vendor app or the Rider app, sign up and upload the documents it asks for. We review applications, usually within 48 hours.",
  },
];
