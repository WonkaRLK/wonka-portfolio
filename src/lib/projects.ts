export interface Project {
  slug: string;
  name: string;
  description: string;
  image: string;
  url: string;
  tech: string[];
  highlights: string[];
  year: number;
}

export const projects: Project[] = [
  {
    slug: "biblioteca-oculta",
    name: "Biblioteca Oculta",
    description:
      "Tienda online de libros digitales con pagos integrados vía MercadoPago y entrega automática por email.",
    image: "/projects/biblioteca-oculta.png",
    url: "https://bibliotecaoculta.vercel.app",
    tech: ["Next.js", "Supabase", "MercadoPago", "Resend", "Tailwind CSS"],
    highlights: [
      "Pagos con MercadoPago",
      "Entrega automática por email",
      "Panel admin",
    ],
    year: 2025,
  },
  {
    slug: "kloven-streetwear",
    name: "Kloven Streetwear",
    description:
      "E-commerce de ropa streetwear con variantes de talle/color, códigos promocionales y cálculo de envío.",
    image: "/projects/kloven-streetwear.png",
    url: "https://kloven-web.vercel.app",
    tech: ["Next.js", "Supabase", "MercadoPago", "Tailwind CSS"],
    highlights: [
      "Variantes talle/color",
      "Códigos promo",
      "Cálculo de envío",
    ],
    year: 2026,
  },
  {
    slug: "velvet-crm",
    name: "Velvet CRM",
    description:
      "Sistema de gestión para centro de estética con pacientes, sesiones de tratamiento, productos y consentimientos digitales.",
    image: "/projects/velvet-crm.png",
    url: "https://velvet.vercel.app",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    highlights: [
      "Gestión de pacientes",
      "Registro de sesiones",
      "Consentimientos digitales",
    ],
    year: 2026,
  },
  {
    slug: "alojamientos-la-chay",
    name: "Alojamientos La Chay",
    description:
      "Web de alquileres temporarios con sistema multi-propiedad, galería interactiva y reserva directa por WhatsApp.",
    image: "/projects/alojamientos-la-chay.png",
    url: "https://la-chay-web.vercel.app",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    highlights: [
      "3 propiedades",
      "Animaciones scroll con GSAP",
      "Galería lightbox",
    ],
    year: 2026,
  },
];
