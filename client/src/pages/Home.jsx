import Intro from "@/components/Intro";
import WhyChooseUs from "@/components/WhyChooseUS";
import { WHY_WE_CHOOSE_US, SERVICES } from "../config/data";
import CategoryPreview from "../components/CategoryPreview";


function Home() {
  return (
    <>
      <Intro />
      <WhyChooseUs service={WHY_WE_CHOOSE_US} />
      <CategoryPreview services={SERVICES} />
    </>
  )
};

export default Home;