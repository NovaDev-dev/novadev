// *** Main Page Sections

// ** Our Work - Showcase

export interface ProjectProps {
    props: ProjectData,
    tags?: string[],          // discipline tags, derived from the case-study gallery
    onClick?: () => void,
};

export interface ProjectData {
    id: string,
    title: string,
    desc: string,
    details: string[],
    image: string,
    logo: string,
    demo?: string,
    reverse?: boolean,
    featured?: boolean,       // render as the large hero card at the top of the showcase
};

export interface ProjectWidgetProps {
    caseStudy: CaseStudy;
    onClose: () => void,
};

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  sections: {
    problem?: Section;
    solution?: Section;
    technologies?: Section;
    [key: string]: Section | undefined;
  };
  image?: string;
  gallery?: GalleryGroup[];
  links?: LinkItem[];
}

interface Section {
  heading: string;
  text?: string;
  list?: string[];
}

// A discipline-grouped set of deliverables shown in the case-study gallery
// (e.g. "Branding", "Web", "Print", "Packaging").
export interface GalleryGroup {
  category: string;
  items: GalleryItem[];
}

export interface GalleryItem {
  image: string;     // path under /public, e.g. "/showcase/punto-latino/menu-front.png"
  // (each project's assets live in /public/showcase/<project-id>/)
  caption?: string;  // short note on what it is / the thinking behind it
  wide?: boolean;    // span the full row — good for website screenshots
}

interface LinkItem {
  label: string;
  href: string;
}


// ** Services
export interface ServiceProps {
  title: string;
  desc: string;
}


// ** Testimonials

export interface TestimonialProps {
  quote: string;
  photo: string;
  name: string;
  role: string;
}
