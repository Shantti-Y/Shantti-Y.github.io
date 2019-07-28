import { Work } from '@/utils/works';

const work: Work = {
  headline: 'Yakukyari',
  role: 'Front, Back-end Development, Operator',
  websiteUrl: 'https://pcareer.m3.com',
  screenShots: [
    { src: require('@/assets/images/works/yakukyari/desktop1.jpg'), alt: 'yakukyari-pic-1' },
    { src: require('@/assets/images/works/yakukyari/desktop2.jpg'), alt: 'yakukyari-pic-2' },
    { src: require('@/assets/images/works/yakukyari/desktop3.jpg'), alt: 'yakukyari-pic-3' },
    { src: require('@/assets/images/works/yakukyari/mobile1.jpg'), alt: 'yakukyari-pic-4' },
    { src: require('@/assets/images/works/yakukyari/mobile2.jpg'), alt: 'yakukyari-pic-5' },
    { src: require('@/assets/images/works/yakukyari/mobile3.jpg'), alt: 'yakukyari-pic-6' }
  ],
  overview: "Yakukyari is one of the largest job finding website for pharmacists in Japan. The biggest feature is it publishes job postings of other recruitment agencies so that it functions as pharmacist's portal website.",
  background: "I have joined M3 Career Co. as a full-stack web developer for two years to renew front design and create new features. During this project, I replaced legacy techs with vue.js to implement new inquiry form which is the core for M3 Career's business and add Web Worker for Page Speed Insight score improvement.",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Ruby",
    "Ruby on Rails",
    "Vue.js",
    "Webpack",
    "PostgreSql"
  ],
  roleShort: 'Web Development',
  thumbnail: require('@/assets/images/works/yakukyari/desktop1.jpg'),
};

export default work;