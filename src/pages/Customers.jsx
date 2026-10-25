import { apps, screens } from "../config/site";
import { HomeScreenSketch, PhoneFrame } from "../components/home/PhoneFrame";
import { Categories, CtaBand, Faq, FeatureGrid, PageHero, Steps, Tracking } from "../components/home/sections";
import { customerFeatures, customerSteps, faqs } from "../components/home/content";

const customerFaqs = faqs.filter((f) => !f.q.includes("vendor or rider"));

function Customers() {
  return (
    <div className="font-figtree text-ie-ink">
      <PageHero
        eyebrow="For customers"
        title={<>Health, food and beauty, <span className="text-ie-orange">at your door.</span></>}
        text="Shop licensed pharmacies, healthy food vendors and beauty stores near you in Lagos. Pay in naira with Paystack and follow your rider live."
        app={apps.customer}
        aside={
          <PhoneFrame src={screens.home} alt="InstantEase app home screen" className="rotate-[-3deg]">
            <HomeScreenSketch />
          </PhoneFrame>
        }
      />
      <Categories eyebrow="What you can order" title="Three kinds of stores, one app." />
      <Steps title="From your phone to your door in four steps." steps={customerSteps} />
      <Tracking />
      <FeatureGrid eyebrow="Why InstantEase" title="Built for health, beauty and good food." features={customerFeatures} />
      <CtaBand title="Get the InstantEase app." text="Order, pay and track in one place." app={apps.customer} />
      <Faq items={customerFaqs} />
    </div>
  );
}

export default Customers;
