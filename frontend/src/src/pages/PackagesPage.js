import PackagesSection from '../components/PackagesSection';
import PromotionsSection from '../components/PromotionsSection';
import Footer from '../components/Footer';

const PackagesPage = () => {
  return (
    <>
      <div className="pt-16">
        <PackagesSection />
        <PromotionsSection />
      </div>
      <Footer />
    </>
  );
};

export default PackagesPage;