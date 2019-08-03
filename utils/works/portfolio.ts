import { Work } from '@/utils/works';

const work: Work = {
  headline: 'Portfolio',
  role: 'Design / Web Development (Private)',
  githubUrl: "https://github.com/Shantti-Y/Shantti-Y.github.io",
  websiteUrl: "https://shanttiy.netlify.com",
  screenShots: [
    { src: require('@/assets/images/works/portfolio/desktop1.jpg'), alt: 'portfolio-pic-1' },
    { src: require('@/assets/images/works/portfolio/desktop2.jpg'), alt: 'portfolio-pic-2' },
    { src: require('@/assets/images/works/portfolio/mobile1.jpg'), alt: 'portfolio-pic-3' },
    { src: require('@/assets/images/works/portfolio/mobile2.jpg'), alt: 'portfolio-pic-4' }
  ],
  overview: "My portfolio site. This design is inspired by the concept of cyberpunk.",
  background: "Also, I want you to look at my portfolio site as one of my works. This is used as an experiment for new techs, and new tools.",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Vue.js",
    "Nuxt.js",
    "TypeScript"
  ],
  roleShort: 'Design / Web Development',
  thumbnail: require('@/assets/images/works/portfolio/desktop1.jpg'),
};

export default work;