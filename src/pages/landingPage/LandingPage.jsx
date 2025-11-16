import Header from './../../components/Header/Header';
import Hero from './Hero/Hero';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import Reasons from './Reasons/Reasons';
import Footer from './Footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <div className="general-background-header-hero">
        <Header opacity={0} />
        <Hero />
      </div>
      <FeaturesSection />
      <Reasons />
      <Footer />
    </div>
  );
};

export default LandingPage;
