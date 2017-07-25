angular.module('booky.models.bookmarks', [

])
    .service('BookmarksModel', function($http) {
        var model = this,
            bookmarks,
                URLS = {
                    FETCH: 'data/bookmarks.json'
                };

        function extract(response) {
            return response.data;
        }

        function cacheBookmarks(result) {
            bookmarks = extract(result);
            return bookmarks;
        }

       model.getBookmarks = function() {
           return $http.get(URLS.FETCH).then(cacheBookmarks);
       };

        model.createBookmark = function(bookmark) {
           //  not for production generated id
           //  just to simulation and demonstration purposes

           bookmark.id = bookmarks.length;
           bookmarks.push(bookmark);
        };
    });