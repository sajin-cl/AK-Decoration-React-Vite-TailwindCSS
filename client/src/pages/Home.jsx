import Intro from "@/components/Intro";
import WhyChooseUs from "@/components/WhyChooseUS";
import { WHY_WE_CHOOSE_US, SERVICES, GALLERY_DATA } from "@/config/data";
import CategoryPreview from "@/components/CategoryPreview";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";


function Home() {
  return (
    <>
      <Intro />
      <WhyChooseUs service={WHY_WE_CHOOSE_US} />
      <CategoryPreview services={SERVICES} />
      <Gallery images={GALLERY_DATA} limit={5} />
      <Footer />
    </>
  )
};

export default Home;