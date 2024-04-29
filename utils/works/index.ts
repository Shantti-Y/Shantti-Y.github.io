import yakukyari from '@/utils/works/yakukyari';
import dealxpert from '@/utils/works/dealxpert';
import portfolio from '@/utils/works/portfolio';

export interface Work {
  headline: string,
  role: string,
  githubUrl?: string,
  websiteUrl?: string,
  screenShots: { src: string, alt: string }[],
  overview: string,
  background: string,
  techStacks: string[],
  roleShort: string,
  thumbnail: string
}

export default {
  yakukyari, dealxpert, portfolio
};