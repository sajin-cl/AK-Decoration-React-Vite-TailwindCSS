import { MdAttachEmail, MdOutlineWifiCalling3, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export const PERSONAL_NUMBER = 917550305180;
export const EXPERIENCE = new Date().getFullYear() - 2021;
export const ADMIN_NAME = 'AJITH KUMAR';
export const COMPANY_NAME = 'AK DECORATION SERVICE';


/* NavLinks */
export const NAV_LINKS = [
  { id: 1, name: "Home", href: "/" },
  {
    id: 2,
    name: "Services",
    href: '/wedding-decoration',
    children: [
      { id: 21, name: "Wedding Decoration", href: "/wedding-decoration" },
      { id: 22, name: "Floral Decoration", href: "/floral-decoration" },
      { id: 23, name: "Stage Decoration", href: "/stage-decoration" },
    ],
  },
  { id: 3, name: "Gallery", href: "/gallery" },
  { id: 4, name: "About", href: "/about" },
  { id: 5, name: "Contact", href: "/contact" },
];


/* Why we choose us section.. */
export const WHY_WE_CHOOSE_US = [
  {
    id: 1, logo: '/ai.gif', title: 'Creative & Stylish Designs',
    content: 'We bring fresh and innovative decoration ideas with a perfect blend of traditional and modern styles.'
  },
  {
    id: 2, logo: '/decoration_solution.gif', title: 'Complete Decoration Solutions',
    content: 'From wedding decoration to floral and stage setup, we handle everything for a smooth experience.'
  },
  {
    id: 3, logo: '/timer.gif', title: 'On-Time Setup',
    content: 'We ensure all decorations are completed on time with proper planning and execution.'
  },
  {
    id: 4, logo: '/Premium_Quality.gif', title: 'Premium Quality Materials',
    content: 'We use fresh flowers and quality materials to create elegant and attractive decorations.'
  },
  {
    id: 5, logo: '/experience.gif', title: 'Experience in Event Decoration',
    content: `We have ${EXPERIENCE} years experience of handling different types of decoration setups for various events.`
  },
  {
    id: 6, logo: '/Customer_Support.gif', title: 'Budget-Friendly Service',
    content: 'We customize every design based on your needs, style, and budget.'
  },
];

export const SERVICES = [
  {
    title: "Floral",
    desc: "Elegant wedding stage and full event decoration.",
    img: "/floral-decoration.jpg",
  },
  {
    title: "Wedding",
    desc: "Creative floral designs for all occasions.",
    img: "/wedding-decoration.jpg",
  },
  {
    title: "Stage",
    desc: "Stylish stage setups with lighting and props.",
    img: "/stage-decoration.jpg",
  },
];

/* --------------------------------------------------Social Links------------------------------------------------------------------- */
export const SOCIAL_lINKS = [
  {
    icon: MdAttachEmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sajincl222@gmail.com&su=Decoration%20Service%20Inquiry&body=Hi%20AK%20Decoration,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20decoration%20services.%20Please%20share%20details%20about%20availability,%20pricing,%20and%20packages.%0A%0AThank%20you.",
  },
  { icon: MdOutlineWifiCalling3, href: `tel:+${PERSONAL_NUMBER}` },
  { icon: FaInstagram, href: "https://www.instagram.com/ak_decoration_service/?hl=en" },
  { icon: MdWhatsapp, href: `https://wa.me/${PERSONAL_NUMBER}?text=Hello%20I%20need%20decoration%20service` }
];

export const GALLERY_DATA = [
  "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
];