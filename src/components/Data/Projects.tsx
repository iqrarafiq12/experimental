export type Project = {
  id: number;
  title: string;
  category: "Website Development" | "UI UX Designing" | "Brand Identity" | "Social Media Designs";
  location: string;
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Bulkova Dent",
    category: "UI UX Designing",
    location: "Giza, Spain",
    image: "/projects/project-1.jpg",
    link: "/projects/bulkova-dent",
  },
  {
    id: 2,
    title: "De Negen Linden",
    category: "Brand Identity",
    location: "Giza, Spain",
    image: "/projects/project-2.jpg",
    link: "/projects/de-negen-linden",
  },
  {
    id: 3,
    title: "Marla Pasticceria",
    category: "Website Development",
    location: "Milan, Italy",
    image: "/projects/project-3.jpg",
    link: "/projects/marla-pasticceria",
  },
  {
    id: 4,
    title: "Hauptstadt",
    category: "Social Media Designs",
    location: "Berlin, Germany",
    image: "/projects/project-4.jpg",
    link: "/projects/hauptstadt",
  },
];
