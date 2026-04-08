import AboutHeader from './_components/AboutHeader';
import CollectorJourney from './_components/CollectorJourney';
import AboutFunFacts from './_components/AboutFunFacts';
import CollectingTips from './_components/CollectingTips';
import ContactForm from './_components/ContactForm';

export default function About() {
  return (
    <div className="max-w-[900px] mx-auto px-6 pt-12 pb-20">
      <AboutHeader />
      <CollectorJourney />
      <AboutFunFacts />
      <CollectingTips />
      <ContactForm />
    </div>
  );
}
