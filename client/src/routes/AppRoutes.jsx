import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import Gallery from '@/components/Gallery'
import { GALLERY_DATA } from "@/config/data";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <Contact /> },
      { path: 'Gallery', element: <Gallery images={GALLERY_DATA} limit={5} /> }
    ]
  }
]);

