angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(params, callback) {
    let urlParams = {
      part: 'snippet',
      q: params.query,
      maxResults: params.max,
      key: params.key,
      videoEmbeddable: 'true',
      type: 'video'
    };
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      headers: {
        'Content-Type': 'video'
      },
      params: urlParams
    }).then(function successCallback(data) {
      console.log('Successfully retrieve data', data);
      callback(data.data.items);
    }, function errorCallback(data) {
      console.log('Failed to get data', data);
    });
  };
});
