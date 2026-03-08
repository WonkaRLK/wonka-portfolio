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
];
