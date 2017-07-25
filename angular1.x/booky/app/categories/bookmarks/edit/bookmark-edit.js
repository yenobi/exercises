angular.module('categories.bookmarks.edit', [

])
    .config(function($stateProvider) {
        $stateProvider
            .state('booky.categories.bookmarks.edit', {
                url: '/bookmarks/:bookmarkId/edit',
                templateUrl: 'app/categories/bookmarks/edit/bookmark-edit.tmpl.html',
                controller: 'EditBookmarkCtrl as editBookmarkCtrl'
            })
    })
    .controller('EditBookmarkCtrl', function($state, $stateParams, BookmarksModel) {
        var editBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go('booky.categories.bookmarks', {
                category: $stateParams.category
            })
        }

        function cancelEditing() {
            returnToBookmarks();
        }

        function updateBookmark() {
            editBookmarkCtrl.bookmark = angular.copy(editBookmarkCtrl.editedBookmark);
            BookmarksModel.updateBookmark(editBookmarkCtrl.bookmark);
            returnToBookmarks();
        }

        BookmarksModel.getBookmarkById($stateParams.bookmarkId)
            .then(function(bookmark) {
                if( bookmark) {
                    editBookmarkCtrl.bookmark = bookmark;

                    //in case of we want to cancel editing
                    editBookmarkCtrl.editedBookmark = angular.copy(editBookmarkCtrl.bookmark);
                } else {
                    returnToBookmarks();
                }
            });

        editBookmarkCtrl.cancelEditing = cancelEditing;
        editBookmarkCtrl.updateBookmark = updateBookmark;
    });