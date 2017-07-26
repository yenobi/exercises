angular.module('booky.models.bookmarks', [

])
    .service('BookmarksModel', function($http, $q) {
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

        function findBookmark(bookmarkId) {
            return bookmarks.find(function(b) {
                return b.id === parseInt(bookmarkId, 10);
            })
        }

        model.getBookmarkById = function(bookmarkId) {
           var deferred = $q.defer();

           if(bookmarks) {
               deferred.resolve(findBookmark(bookmarkId));
           } else {
               model.getBookmarks().then(function () {
                   deferred.resolve(findBookmark(bookmarkId));
               });
           }

           return deferred.promise;
        };

       model.getBookmarks = function() {
           // was in previos iterations, but now goal is to return cached result
           // return $http.get(URLS.FETCH).then(cacheBookmarks);
           var deferred = $q.defer();

           if(bookmarks) {
               deferred.resolve(bookmarks);
           } else {
               $http.get(URLS.FETCH).then(function (bookmarks) {
                   deferred.resolve(cacheBookmarks(bookmarks));
               });
           }

           return deferred.promise;
       };

        model.createBookmark = function(bookmark) {
           //  not for production generated id
           //  just to simulation and demonstration purposes

           bookmark.id = bookmarks.length;
           bookmarks.push(bookmark);
        };

        model.updateBookmark = function (bookmark) {
            var index;

            // this might not work - underscore to vanilla with own hands
            bookmarks.forEach(function(b) {
                if (b.id === bookmark.id) {
                    index = bookmarks.indexOf(b);
                }
            });

            bookmarks[index] = bookmark;
        };
        
        model.deleteBookmark = function(bookmark) {
            bookmarks.splice(bookmarks.indexOf(bookmark), 1);
        };
    });