import { Work } from '@/utils/works';

const work: Work = {
  headline: 'DealXpert',
  role: 'Front, Back-end Development, Database Design',
  screenShots: [
    { src: require('@/assets/images/works/dealxpert/desktop1.jpg'), alt: 'dealxpert-pic-1' },
    { src: require('@/assets/images/works/dealxpert/desktop2.jpg'), alt: 'dealxpert-pic-2' },
    { src: require('@/assets/images/works/dealxpert/desktop3.jpg'), alt: 'dealxpert-pic-3' },
    { src: require('@/assets/images/works/dealxpert/desktop4.jpg'), alt: 'dealxpert-pic-4' }
  ],
  overview: "DealXpert is a sales process management system which targets to B2B companies. Not only it records a business person's client information and their relationships, but also shows effective solutions to navigate complex deals to win.",
  background: "I have joined for the half of a year since the begining of this project. What I did were application development in both sides(front-end, back-end) and first version of database design. So that this application has been released in some closed users.",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Ruby",
    "Ruby on Rails",
    "React",
    "Webpack",
    "PostgreSql"
  ],
  roleShort: 'Web Development',
  thumbnail: require('@/assets/images/works/dealxpert/desktop1.jpg'),
};

export default work;