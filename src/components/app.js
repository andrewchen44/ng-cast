angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videoList = '';
    this.currentVideo = '';
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.search = youTube.search;
    this.update = (videos) => {
      this.currentVideo = videos[3];
      this.videoList = videos;
    };
    
    this.search(
      {query: '', max: '5', key: window.YOUTUBE_API_KEY},
      (data) => {
        this.update(data);
      }
    );
  },
  
  templateUrl: 'src/templates/app.html'
});
