if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to HopeYouLikeJamminToo.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.sound.events({
    'click button': function() {
      window.URL = window.URL || window.webkitURL;
      navigator.getMedia = navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;
      navigator.getMedia(
      {
        video: false,
        audio: true
      },

      function(localMediaStream){
        var audio = document.querySelector('audio');
        audio.src = window.URL.createObjectURL(localMediaStream);
        audio.onloadedmetadata = function(e){
          console.log(e);
        };
      },
      function(err){
        console.log("error: ", err);
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
