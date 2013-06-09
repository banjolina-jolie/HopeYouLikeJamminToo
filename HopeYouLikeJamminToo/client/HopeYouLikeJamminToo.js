var Tracks = new Meteor.Collection("tracks");

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

  Template.sound.trackaroonies = function(){
  	return Tracks.find();
  }

  var streaming;

  Template.sound.events({
    'click button': function() {

      if(streaming){
      	streaming.stop();
      	// streaming = undefined;
      	console.log(streaming);
      	streaming = undefined;
      } else {

      	window.URL = window.URL || window.webkitURL;
	      navigator.getMedia = navigator.getUserMedia ||
	                            navigator.webkitGetUserMedia ||
	                            navigator.mozGetUserMedia ||
	                            navigator.msGetUserMedia;
	      navigator.getMedia(
	        { audio: true },

		    function(localMediaStream){
		    	streaming = localMediaStream;
		      var audio = document.querySelector('audio');
		      localMediaStream.onended = function(){
		      	console.log("onended called");
		      	Tracks.insert(window.URL.createObjectURL(localMediaStream));
		      	audio.src = window.URL.createObjectURL(localMediaStream);
		      }
		      audio.onloadedmetadata = function(e){
		        //console.log(e);
		      };
		    },
		    function(err){ console.log("error: ", err); }
        );
	    }
    }
  });
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
