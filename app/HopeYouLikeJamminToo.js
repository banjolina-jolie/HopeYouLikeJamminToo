// var Tracks = new Meteor.Collection("tracks");


// if (Meteor.isClient) {
//   console.log(Recorder);
//   Template.hello.greeting = function () {
//     return "Welcome to HopeYouLikeJamminToo.";
//   };

//   Template.hello.events({
//     'click input' : function () {
//       // template data, if any, is available in 'this'
//       if (typeof console !== 'undefined')
//         console.log("You pressed the button");
//     }
//   });

//   Template.sound.trackaroonies = function(){
//     return Tracks.find();
//   }

//   var streaming;
//   var elRecordo;

//   Template.sound.events({
//     'click button': function() {
//       if(streaming){
//         streaming.stop();
//         console.log(streaming);
//         var audio = document.querySelector('audio');

//         streaming = undefined;
//       } else {

//         window.URL = window.URL || window.webkitURL;
//         navigator.getMedia = navigator.getUserMedia ||
//                               navigator.webkitGetUserMedia ||
//                               navigator.mozGetUserMedia ||
//                               navigator.msGetUserMedia;
//         navigator.getMedia(
//           { video: false, audio: true, toString: function() {return "audio";} },

//         function(localMediaStream){
//           streaming = localMediaStream;
//           console.log(streaming);
//           var audio = document.querySelector('audio');
//           audio.src = window.URL.createObjectURL(localMediaStream);
//           localMediaStream.onended = function(e){
//             console.log("onended e", e);
//           };

//         },
//         function(err){ console.log("error: ", err); }
//         );
//       }
//     }
//   });
// };

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }
