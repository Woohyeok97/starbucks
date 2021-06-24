
// //YOUTUBE IFRAME API
// //일방적인 출력이 아닌, 제어가능하게 출력


//       // 2. This code loads the IFrame Player API code asynchronously.
//       var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       function onYouTubeIframeAPIReady() {
//         new YT.Player('player', {
//           videoId: 'An6LvWQuj_8',    //최초 재생할 유튜브 영상 ID(주소창)
//           PlayerVars: {
//             autoplay: true, //자동 재생 유무
//             loop: true, //반복 재생 유무
//             Playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID
//           },
//           events: {
//             onReady: function(event) {
//               event.target.mute() //음소거 처리
//             }
//           }
//         });
//       }

// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}