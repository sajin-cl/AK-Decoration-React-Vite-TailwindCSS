import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import { GALLERY_DATA } from "@/config/data";
import { lazy, Suspense } from 'react';
import { ShimmerFeaturedGallery } from 'react-shimmer-effects';
import NotFound from '@/components/NotFound';
import WeddingDecoration from '@/pages/WeddingDecoration';


const Gallery = lazy(() => import('@/components/Gallery'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<ShimmerFeaturedGallery row={3} col={2} card frameHeight={600} />}>
            <Gallery images={GALLERY_DATA} />
          </Suspense>
        ),
      },
      { path: '/wedding-decoration', element: <WeddingDecoration /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);