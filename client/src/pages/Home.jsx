import Intro from "@/components/Intro";
import WhyChooseUs from "@/components/WhyChooseUS";
import { WHY_WE_CHOOSE_US } from "../config/data";


function Home() {
  return (
    <>
      <Intro />
      <WhyChooseUs service={WHY_WE_CHOOSE_US} />
    </>
  )
};

export default Home;