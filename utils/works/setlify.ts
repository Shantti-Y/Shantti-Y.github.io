import { Work } from '@/utils/works';

const work: Work = {
  headline: 'Setlify',
  role: 'Front, Back-end Development (Private)',
  githubUrl: 'https://setlify-236901.appspot.com',
  websiteUrl: 'https://github.com/Shantti-Y/SetList',
  screenShots: [
    { src: require('@/assets/images/works/setlify/desktop1.jpg'), alt: 'setlify-pic-1' },
    { src: require('@/assets/images/works/setlify/desktop2.jpg'), alt: 'setlify-pic-2' },
    { src: require('@/assets/images/works/setlify/desktop3.jpg'), alt: 'setlify-pic-3' },
    { src: require('@/assets/images/works/setlify/mobile1.jpg'), alt: 'setlify-pic-4' },
    { src: require('@/assets/images/works/setlify/mobile2.jpg'), alt: 'setlify-pic-5' },
    { src: require('@/assets/images/works/setlify/mobile3.jpg'), alt: 'setlify-pic-6' }
  ],
  overview: "Setlify is a instant Spotify playlist creator. What you needs are only three things. Your Spotify account, playlist's duration, and your favorite words.",
  background: "This is a personal work. I have done all the things that application needs to learn how web applications are developed and are deployed in public. In this application, I used a modern JavaScript syntax, frameworks, and GCP for deployment.",
  techStacks: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Nodejs",
    "Express",
    "React",
    "Webpack",
    "Spotify API",
  ],
  roleShort: 'Design / Web Development',
  thumbnail: require('@/assets/images/works/setlify/desktop1.jpg'),
};

export default work;