angular.module('video-player')

.component('app', {
  controller: function() {
    this.videoList = window.exampleVideoData;
    // debugger;
    // console.log('videoList', this.videoList);
  },
  templateUrl: 'src/templates/app.html'
});
