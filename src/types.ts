// *** Main Page Sections

// ** Our Work - Showcase

export interface ProjectProps {
    props: ProjectData,
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
  links?: LinkItem[];
}

interface Section {
  heading: string;
  text?: string;
  list?: string[];
}

interface LinkItem {
  label: string;
  href: string;
}


// ** Services
export interface ServiceProps {
  title: string;
  image: string;
}


// ** Testimonials

export interface TestimonialProps {
  quote: string;
  photo: string;
  name: string;
  role: string;
}
