angular.module('video-player')
.component('videoList', {
  // TODO
  // pass in data from exampleVideoData
  bindings: {
    videos: '<',
    onClick: '<'
  },
  controller: function() {
    // console.log('videoData', this.videoData);
  },
  templateUrl: 'src/templates/videoList.html'
});
