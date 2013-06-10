var Tracks = new Meteor.Collection("tracks");


if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to HopeYouLikeJamminToo.";
  };

  Template.hello.username = function() {
    return Session.get("name");
  };

  Template.hello.events({
    'click input.submit_name': function(){
      Session.set("name", document.getElementById("user_name").value);
      $('#user_name').val("");
    }
  });

  Template.sound.trackaroonies = function(){
    return Tracks.find();
  };

  var streaming;

  var createDownloadLink = function() {
    recorder && recorder.exportWAV(function(blob) {
      url = URL.createObjectURL(blob);
      var li = document.createElement('li');
      var au = document.createElement('audio');
      var hf = document.createElement('a');

      hf.download = new Date().toISOString() + '.wav';
      hf.innerHTML = "hf.download";
      au.controls = true;
      au.src = url;
      hf.href = url;
      li.appendChild(au);
      li.appendChild(hf);
      recordingslist.appendChild(li);
    });
  }


  Template.sound.events({
    'click button': function() {

      if(streaming){
      	recorder.stop();

        createDownloadLink();
        Tracks.insert({jammer: Session.get("name")});

        recorder.clear();

        streaming = false;
      } else {

      	recorder.record();
      	streaming = true;

      }
    }
  });
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
