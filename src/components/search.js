angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    youtube: '<',
    update: '<'
  },
  controller: function() {
    this.query = '';
    
    this.search = (inputQuery) => {
      this.youtube(
        {query: inputQuery, max: '5', key: window.YOUTUBE_API_KEY},
        (data) => {
          this.update(data);
        }
      );
    };
  },
  templateUrl: 'src/templates/search.html'
});
