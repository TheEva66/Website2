import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Evas Portfolio',
  description: "Eva's portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Eva Akselrad`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student at <strong className="text-stone-100">Arcadia University</strong>, currently studing
        <strong className="text-stone-100"> Computer Science</strong> With a focus on cybersecurity. I am also the lead lighting designer at <strong className="text-stone-100">Pulse Entertainment</strong>.
        I have a passion for lighting design and have worked on many productions with <strong className="text-stone-100">Newtown Arts Company and The Ohev Players</strong>. I taught myself Unreal Engine and have created a few projects with it. I am always looking for new opportunities to learn and grow.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">Video Games</strong>,
        playing with my dog <strong className="text-stone-100">Kimora</strong>, or {' '}
        <strong className="text-stone-100">Designing light shows</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1ZFLsnWf_pPl5sG2DniTdyyHkKZq3tdPs/view',
      text: 'Lighting Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an excentric individual who loves to learn new things. I am currently studying computer science at Arcadia University with a focus on cybersecurity. I am also the lead lighting designer at Pulse Entertainment. I have a passion for lighting design and have worked on many productions with Newtown Arts Company. I taught myself Unreal Engine and have created a few projects with it. I am always looking for new opportunities to learn and grow.`,
  aboutItems: [
    {label: 'Location', text: 'Richboro PA', Icon: MapIcon},
    {label: 'Age', text: '18', Icon: CalendarIcon},
    {label: 'Interests', text: 'Gaming, VR, Coding', Icon: SparklesIcon},
    {label: 'Study', text: 'Arcadia University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Pulse Entertainment', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML/CSS',
        level: 4,
      },
      {
        name: 'JS/TS',
        level: 1,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },

    ],
  },
  {
    name: 'Unreal Engine',
    skills: [
      {
        name: 'Blueprints',
        level: 7,
      },
      {
        name: 'Map design',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2024',
    location: 'Council Rock High School South',
    title: 'High School Diploma',
    content: <p> </p>,
  },
  {
    date: 'September 2024 - June 2028',
    location: 'Arcadia University',
    title: 'Bachelor of Science in Computer Science',
    content: <p>Expected graduation date is 2028. I was a also the recipiant of the <a href="https://www.arcadia.edu/arcadia-university-admissions/financial-aid/aid-for-undergraduates/">Distinguished Presidential Scholarship</a> from Arcadia University Aswell as making the Distinguished Deans List for Fall of 2024</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2019 - Present',
    location: 'Pulse Entertainment',
    title: 'Lead Lighting Designer',
    content: (
      <p>
        I worked for Pulse Entertainment to design and implement lighting for various events. I was responsible for light 
        fixture locations as well as the programming of the lights. I also worked with the sound team to ensure that the lighting and sound were in sync.
      </p>
    ),
  },
  {
    date: '2022 - Present',
    location: 'Newtown Arts Company',
    title: 'Tech',
    content: (
      <p>
        I worked for Newtown Arts Company on many productions and was responsable for 
        the lighting, sound, spotlight, projections and many other technical aspects of the show.
        I was the recipiant of the TODO ADD NAME legacy scholarship. My next show is<a href="https://newtownac.booktix.com/dept/Main/e/TC"> The Crucible</a> In October 2024. I will be running the sound board for this show, aswell as learing the new recently renovated lighting system.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contact me for any inquiries or opportunities. I am always looking for new opportunities to learn and grow.',
  items: [
    {
      type: ContactType.Email,
      text: 'evaakselrad@gmail.com',
      href: 'mailto:evaakselrad@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'TODO',
      href: 'https://www.linkedin.com/in/TODO/',
    },
    {
      type: ContactType.Github,
      text: 'TheEva66',
      href: 'https://github.com/TheEva66',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/TheEva66'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
];
