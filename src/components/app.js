angular.module('video-player')

.component('app', {
  controller: function() {
    this.videoList = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
  },
  
  templateUrl: 'src/templates/app.html'
});
