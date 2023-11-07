import FacebookIcon from '../components/Icon/FacebookIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import profilepic from '../images/profilepic.webp';
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Services',
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
  name: `Ribal Gardening`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        High quality gardening services at affordable prices. From lawn maintenance and hedge trimming to power washing,
        foliage removal and landscaping, Ribal takes pride in delivering on excellence.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">ribalgardening@gmail.com</strong>.
      </p>
    </>
  ),
  actions: [
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
  description: `Let us transform your garden into something to be proud of via:`,
  aboutItems: [
    {label: 'Lawn Maintenance', text: '', Icon: 'fa-regular'},
    {label: 'Ivy Clearance', text: '', Icon: 'fa'},
    {label: 'Power Washing', text: '', Icon: 'fa'},
    {label: 'Foliage Removal', text: '', Icon: 'fa'},
    {label: 'Weeding', text: '', Icon: 'fa'},
    {label: 'Hedge Trimming', text: '', Icon: 'fa'},
    {label: 'Landscaping', text: '', Icon: 'fa'},
    {label: 'Planting', text: '', Icon: 'fa'},
  ],
};

/**
 * Skills section IGNORE
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section IGNORE
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sutton',
    description: 'Before',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Sutton',
    description: 'After',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Sandymount',
    description: 'Before',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Sandymount',
    description: 'After',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Irishtown',
    description: 'After',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Clonskeagh',
    description: 'After ',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Ballsbridge',
    description: 'Before',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
  {
    title: 'Ballsbridge',
    description: 'Before',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Ballsbridge',
    description: 'Before',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Ballsbridge',
    description: 'After',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Ballsbridge',
    description: 'After',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Ballsbridge',
    description: 'After',
    url: 'https://reactresume.com',
    image: porfolioImage12,
  },
];

/**
 * Resume section IGNORE
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
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
      name: 'Maurice',
      text: 'David was great at keeping in touch when organising the work needed for my garden. He arrived on time and left the place spotless once finished. Highly recommend - March 2023',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Arthur',
      text: 'Great to find a gardener we can trust – goes above and beyond. - August 2023',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/11.jpg',
    },
    {
      name: 'Anna',
      text: 'We got David’s name from a neighbour and are glad we did. Our garden turned out better than we imagined thanks to his hard work. We’ll be using him again. Thanks again David. - July 2023',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/220.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'ribalgardening@gmail.com',
      href: 'mailto:ribalgardening@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Dublin, Ireland',
      href: 'https://www.google.com/maps/@53.3269939,-6.2239984,16.62z',
    },
    {
      type: ContactType.Instagram,
      text: '@ribal',
      href: 'https://www.instagram.com/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ribal-gardening-services-803a3b289'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/ribalgardening'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/RibalGardening'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/ribal.gardening.services'},
];
