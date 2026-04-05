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
export const SOCIAL_LINKS = [
  {
    icon: MdAttachEmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sajincl222@gmail.com&su=Decoration%20Service%20Inquiry&body=Hi%20AK%20Decoration,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20decoration%20services.%20Please%20share%20details%20about%20availability,%20pricing,%20and%20packages.%0A%0AThank%20you.",
    label: 'ajithkumar@gmail.com',
    type: 'Email'
  },
  {
    icon: MdOutlineWifiCalling3,
    href: `tel:+${PERSONAL_NUMBER}`,
    label: '+91 7550305180',
    type: 'Mobile No'

  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ak_decoration_service/?hl=en",
    label: 'instagram.com/ak_decoration_service',
    type: 'Instagram'
  },
  {
    icon: MdWhatsapp,
    href: `https://wa.me/${PERSONAL_NUMBER}?text=Hello%20I%20need%20decoration%20service`,
    label: 'wa.me/917550305180',
    type: 'Whatsapp'
  }
];

export const GALLERY_DATA = [
  'https://res.cloudinary.com/dpc9p1npw/image/upload/q_auto,f_auto/1_rywqnx.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/2_c4bxqt.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/3_kewmnw.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/4_lwch6p.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/5_mmggm6.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/6_zmpt5c.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/7_hjka9k.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/8_hmomcn.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/9_htlnb1.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/10_r4uada.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/11_c0p9le.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/12_kgtje7.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/13_eiynap.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/14_u4g00w.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/15_vtclwx.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/16_topk1s.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/17_dmmex3.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/18_kptevg.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/19_tbhywv.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/20_gqqxmo.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/21_lcqrwz.webp',
  'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/22_xlznap.webp'

];

export const WEDDING_DECOR = [
  { id: 1, title: 'Stage Decoration', img: 'https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/4_lwch6p.webp' },
  { id: 2, title: 'Floral Setup', img: 'floral-setup.webp' },
  { id: 3, title: 'Mandap Design', img: 'mandap-design.webp' }
];


export const FLORAL_DECOR = [
  {
    id: 1,
    title: "Rose Stage Decoration",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/Rose_Stage_Decoration_j7szzl.webp",
  },
  {
    id: 2,
    title: "Jasmine Wedding Setup",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/74a0701be7387d24865789001c2a51ac_mtvhaj.jpg",
  },
  {
    id: 3,
    title: "Floral Arch Decoration",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/b2b9f839c3c8647363e3e7899e349bb4_zikkpv.jpg",
  },
  {
    id: 4,
    title: "Entrance Flower Decoration",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/c84cf51b4d05267fddf629d751977778_idnsnd.jpg",
  },
  {
    id: 5,
    title: "Temple Style Floral Design",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/mandap-design_r0ihqt.webp",
  },
  {
    id: 6,
    title: "Reception Floral Backdrop",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/f5fd787b2c47d0072c188a24ada8a330_j3p2om.jpg",
  },
];


export const STAGE_DECOR = [
  {
    id: 1,
    title: "Wedding Stage Decoration",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/0b51191c2945d0b76aa095e80d1de202_cqxvas.jpg",
  },
  {
    id: 2,
    title: "Reception Stage Setup",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/d25a635c1c9c5777cd1b9e51382b8cfa_er7dwk.jpg",
  },
  {
    id: 3,
    title: "Birthday Stage Decoration",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/cb3ebba6b289e873e19b517ea4101f63_vlqwsy.jpg",
  },
  {
    id: 4,
    title: "Engagement Stage Design",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/0bd0b1fb268d1c0cd29b0fdac4e6d151_giovnj.jpg",
  },
  {
    id: 5,
    title: "LED Backdrop Stage",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/44b27e3f5af31517c2592874d8cbd990_ra5u8l.jpg",
  },
  {
    id: 6,
    title: "Traditional Stage Setup",
    img: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/51f5d5e8f0c321579f6e3670cd2ade35_imdwoh.jpg",
  },
];