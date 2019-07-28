import { Work } from '@/utils/works';

const work: Work = {
  headline: 'Nikocale',
  role: 'Web Development / Design, Database Architecture (Personal)',
  githubUrl: 'https://github.com/Shantti-Y/Chalendiary',
  websiteUrl: 'https://nikocale.com',
  screenShots: [
    { src: require('@/assets/images/works/nikocale/desktop1.jpg'), alt: 'nikocale-1' },
    { src: require('@/assets/images/works/nikocale/desktop2.jpg'), alt: 'nikocale-2' },
    { src: require('@/assets/images/works/nikocale/desktop3.jpg'), alt: 'nikocale-3' },
    { src: require('@/assets/images/works/nikocale/desktop4.jpg'), alt: 'nikocale-4' },
    { src: require('@/assets/images/works/nikocale/mobile1.jpg'), alt: 'nikocale-5' },
    { src: require('@/assets/images/works/nikocale/mobile2.jpg'), alt: 'nikocale-6' },
    { src: require('@/assets/images/works/nikocale/mobile3.jpg'), alt: 'nikocale-7' },
    { src: require('@/assets/images/works/nikocale/mobile4.jpg'), alt: 'nikocale-8' }
  ],
  overview: "Nikocale stands for 'Niko-niko Calendar' which visualizes the mood and morale of members in the team/organization (Wikipedia). This software can make communication among the group smooth.",
  background: "When I had been working at M3 Career Co., there was a old version of Nikocale which is operated in Google Spreadsheet. However, I've got motivated to create it as a web application because of many reasons (making it more convinient, implementing new technologies which I don't know). It is created by only me with Websocket, Firebase, and React-redux.",
  techStacks: [
    "HTML5",
    "CSS3",
    "Sass/Scss",
    "JavaScript",
    "Babel",
    "Kotlin",
    "Spring Boot",
    "React",
    "Webpack",
    "PostgreSql",
    "Firebase",
    "Websocket"
  ],
  roleShort: 'Design / Web Development',
  thumbnail: require('@/assets/images/works/nikocale/desktop2.jpg'),
}

export default work;