import { WHY_WE_CHOOSE_US, SERVICES, GALLERY_DATA } from "@/config/data";
import Intro from "@/components/Intro";
import WhyChooseUs from "@/components/WhyChooseUS";
import CategoryPreview from "@/components/CategoryPreview";
import Footer from "@/components/Footer";
import { lazy, Suspense } from 'react'
import { ShimmerFeaturedGallery } from "react-shimmer-effects";

const Gallery = lazy(() => import("@/components/Gallery"));


function Home() {
  return (
    <>
      <Intro />
      <WhyChooseUs service={WHY_WE_CHOOSE_US} />
      <CategoryPreview services={SERVICES} />
      <h2 className="text-3xl font-bold pb-8 text-center text-black tracking-normal  bg-white">
        OUR WORK
      </h2>
      <Suspense fallback={<ShimmerFeaturedGallery row={2} col={2} card frameHeight={400} />}>
        <Gallery images={GALLERY_DATA} limit={5} />
      </Suspense>
      <Footer />
    </>
  )
};

export default Home;