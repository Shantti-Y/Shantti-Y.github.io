import { Work } from '@/utils/works';

const work: Work = {
  headline: 'AI獅白ぼたんbot',
  role: '個人開発',
  screenShots: [
    { src: require('@/assets/images/works/shishiron/desktop1.jpg'), alt: 'shishiron-1' },
    { src: require('@/assets/images/works/shishiron/desktop2.jpg'), alt: 'shishiron-2' }
  ],
  overview: "コミックマーケット103で頒布した2次創作作品「獅白ぼたん」のなりきりLINE bot",
  background: "過去にコミックマーケットへのサークル参加/同人誌頒布の経験はあったものの頒布数に対して感想がもらえなかった為、感想を送信するハードルを下げて多く獲得するために開発。結果過去2件ほどしか得られていなかった感想メッセージが30件まで増加した",
  techStacks: [
    "JavaScript",
    "Node.js",
    "TypeScript",
    "LINE Messsaging API",
    "ChatGPT3.5",
    "OpenAPI",
    "Firebase"
  ],
  roleShort: '個人開発',
  thumbnail: require('@/assets/images/works/shishiron/desktop1.jpg'),
}

export default work;