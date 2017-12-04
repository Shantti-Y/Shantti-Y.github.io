
// Jump to each content
function jumpToContent(event, tag){
   event.preventDefault();
   $('html, body').animate({
      scrollTop: $('#' + tag).offset().top
   }, 700);
}

$('.menu:nth-child(1)').click(function(event){ jumpToContent(event, 'profile'); });
$('.menu:nth-child(2)').click(function(event){ jumpToContent(event, 'skills'); });
$('.menu:nth-child(3)').click(function(event){ jumpToContent(event, 'works'); });
$('.menu:nth-child(4)').click(function(event){ jumpToContent(event, 'contact'); });

$('#logos').click(function(event){ jumpToContent(event, 'top'); });


class Transword {
   constructor(tag_id, ja, en){
      this.tag_id = tag_id;
      this.ja = ja;
      this.en = en;
   }
}

var transwords = [
   // Button on header
   new Transword('language', '日本語', 'English'),
   // Title on top
   new Transword('nickname', 'Ruby, JavaScriptメインの日曜プログラマ', 'Amateur Programmer of Ruby & JavaScript'),
   // Top menu buttons
   new Transword('top-profile', '自己紹介', 'Profile'),
   new Transword('top-skills', '技能,経験', 'Skills'),
   new Transword('top-works', '作品', 'Works'),
   new Transword('top-contact', '連絡', 'Contact'),
   // Content headers
   new Transword('content-profile', '自己紹介', 'Profile'),
   new Transword('content-skills', '技能,経験', 'Skills'),
   new Transword('content-works', '作品', 'Works'),
   new Transword('content-contact', '連絡', 'Contact'),
   // Profile
   new Transword('description', '普段は日曜プログラマとして勉強、アプリ開発をしています。</br>' +
                                 '言語は主にRubyとJavaScriptを使用しています。</br>' +
                                 '現在はプログラミング、IT系とは異なる業界で働いていますが、プログラマになるべく転職活動中です。</br>' +
                                 'よろしくお願いいたします。',
                                "Hello! </br>" +
                                "I'm developing applications with Ruby and JavaScript as an amateur programmer.</br>" +
                                "My current job is totally different from developing any application, but I'm willing to work as a programmer.</br>" +
                                "Thanks to see my portfolio."),
   new Transword('career-1', '2016年3月： 東海大学工学部　原子力工学科　卒業', '2016 March： Graduated Nuclear Engineering from Tokai University, Japan'),
   new Transword('career-2', '2016年4月： オイレス工業株式会社　　　　　入社', '2016 April： Started to work at OILES Corporation'),

   // Skills
   new Transword('program-langs', '使用言語', 'Languages'),
   new Transword('frameworks', 'フレームワーク', 'Frameworks'),
   new Transword('sqls', 'データベース', 'Databases'),
   new Transword('envs', '開発環境', 'Environments'),
   new Transword('others', 'その他', 'Others'),
   // Works
   new Transword('noh-description', '全国の能楽公演を検索できるWebアプリ。自主公演の開催などユーザ自身が公演情報を作成・提供することも可能。</br>' +
                                    '現在α版リリース。随時機能追加予定。',
                                    "The web application that can search 'Noh' events in Japan.</br>" +
                                    "Also, any user can submit event information on this application for any purpose.</br>" +
                                    "(Contribution, advertising your own event...etc)</br>" +
                                    "Currently, 'α' version is being released and I'm adding new functions continuously."),
   new Transword('noh-link-1', '公式サイト', 'Official Site'),
   new Transword('noh-link-2', 'Facebookページ', 'Facebook Page'),
   new Transword('noh-langs', '使用言語', 'Languages'),
   new Transword('noh-frameworks', 'フレームワーク', 'Frameworks'),
   new Transword('noh-envs', '開発環境', 'Environments'),
   new Transword('noh-tools', 'ツール群', 'Tools'),

   new Transword('asagata-description', '滋賀県草津市の天気予報、ゴミ分別カレンダーを確認できるデスクトップアプリ</br>' +
                                        '現在開発中。2017年12月末リリース予定',
                                        "The desktop application providing weather report and trash separation calendar for residents in Shiga prefecture.</br>"+
                                        "I'm developing it and will launch in this year."),
   new Transword('asagata-link-1', 'Githubリポジトリ', 'Github Repository'),
   new Transword('asagata-langs', '使用言語', 'Languages'),
   new Transword('asagata-frameworks', 'フレームワーク', 'Frameworks'),
   new Transword('asagata-envs', '開発環境', 'Environments'),
   new Transword('asagata-tools', 'ツール群', 'Tools')
];
// Translate between English and Japanese
var lang = 'en'
function translate(){
   lang = lang == 'ja' ? 'en' : 'ja';
   for(var i = 0; i < transwords.length; i++){
      document.getElementById('trans-'+ transwords[i]['tag_id']).innerHTML = transwords[i][lang];
   }
}


document.addEventListener('DOMContentLoaded', function(event){
   translate();
   $('body,html').css('height','auto');
});

document.getElementById('change-lang').addEventListener('click', function(event){
   event.preventDefault();
   translate();
});
