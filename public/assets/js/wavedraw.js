const playclick = document.querySelector('#wavename1');

var wavesurfer = WaveSurfer.create({
  container: '#wave1',
  waveColor: '#D9DCFF',
  progressColor: '#4353FF',
  cursorColor: '#4353FF',
  barWidth: 3,
  barRadius: 3,
  cursorWidth: 0,
  height: 50,
  barGap: 2,
  fillParent: true,
  responsive: true,
  normalize: true
});


wavesurfer.load("http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3");

playclick.addEventListener('click', () => { 
    wavesurfer.playPause();
});


// TO BE USED WHEN CONNECTED TO AWS

// function loadWaveforms(audioObjectArray) {

//   const playclickers = document.querySelectorAll('.name-container');
//   var waveloaders = [];
//           for (var i=0; i < audioObjectArray.length; i++) {
//               waveloaders[i] = WaveSurfer.create({
//                                   container: '#w'+audioObjectArray[i].id,
//                                   waveColor: '#D9DCFF',
//                                   progressColor: '#4353FF',
//                                   cursorColor: '#4353FF',
//                                   barWidth: 1,
//                                   barRadius: 3,
//                                   cursorWidth: 0,
//                                   height: 25,
//                                   barGap: 2,
//                                   fillParent: true,
//                                   responsive: true
//                               });
//               // LOAD AUDIO DATA
//               waveloaders[i].load(audioObjectArray[i].fileurl);
//           }

//       playclickers.forEach(function(element, index){
//           element.addEventListener('click', () => { 
//               waveloaders[index].play();
//           });
//       });
// }

$('.actions-container .fa-heart').click(function(e) {

  $(this).toggleClass('fas');
  $(this).toggleClass('far');
  
});