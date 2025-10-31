import Header from '../../components/Header/Header';
import Hero from './../../components/Hero/Hero';
import FeaturesSection from './../../components/FeaturesSection/FeaturesSection';

const Main = () => {
  return (
    <div className="main-background">
        <div className="general-background-header-hero">
          <Header />
          <Hero />
        </div>

        <FeaturesSection />
    </div>
  );
};

export default Main;
