angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  console.log('in service');
  this.search = function(params, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: params.query,
        maxResults: params.max,
        key: params.key,
        videoEmbeddable: 'true',
        part: 'snippet'
      }
    }).then(function successCallback(response) {
      console.log('Successfully retrieve data');
      callback(response);
    }, function errorCallback(response) {
      console.log('Failed to get data');
    });
  };
});
