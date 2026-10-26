// Single place for links, store URLs and contact details used by the Home page, Header and Footer.
// Anything set to null renders as "Coming soon" (or is hidden) until you fill it in.

export const contact = {
  email: "instanteaseapp@gmail.com",
  phone: "+234 707 732 3387",
  phoneHref: "tel:+2347077323387",
  address: "Lekki, Lagos State, Nigeria",
};

export const apps = {
  customer: {
    name: "Customer app",
    apk: "/downloads/instantease-customer-mobile-app.apk",
    playStore: null, // TODO: Google Play URL once the customer app is live
    appStore: null, // TODO: App Store URL once the customer app is approved
  },
  vendor: {
    name: "Vendor app",
    apk: "/downloads/instantease-vendor-mobile-app.apk",
    playStore: null, // TODO: Google Play URL for the vendor app
    appStore: null, // TODO: App Store URL for the vendor app
  },
  rider: {
    name: "Rider app",
    apk: "/downloads/instantease-rider-mobile-app.apk",
    playStore: null, // TODO: Google Play URL for the rider app
    appStore: null, // TODO: App Store URL for the rider app
  },
};

// TODO: add the Lagos areas you deliver to, e.g. ["Lekki Phase 1", "Ikoyi"]. Used on Home and in the Footer.
export const areas = [];

// TODO: add your social profile URLs. Empty ones are hidden.
export const social = {
  instagram: null,
  x: null,
  facebook: null,
  tiktok: null,
  linkedin: null,
};

// TODO: put app screenshots (PNG, portrait, about 1170 x 2532) in /public/screens and set the paths,
// e.g. home: "/screens/home.png". Until then the phone frames show a placeholder.
export const screens = {
  home: null,
  tracking: null,
  deliveryCode: null,
};

export const nav = [
  { label: "Customers", to: "/customers" },
  { label: "Vendors", to: "/vendors" },
  { label: "Riders", to: "/riders" },
  { label: "About", to: "/about" },
  { label: "Support", to: "/support" },
];
