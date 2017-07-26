angular.module('categories.bookmarks.create', [

])
    .config(function($stateProvider) {
        $stateProvider
            .state('booky.categories.bookmarks.create', {
                url: '/bookmarks/create',
                templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
                controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
            })
    })
    .controller('CreateBookmarkCtrl', function($state, $stateParams, BookmarksModel) {
        var createBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go('booky.categories.bookmarks', {
                category: $stateParams.category
            })
        }

        function cancelCreating() {
            returnToBookmarks();
        }

        createBookmarkCtrl.cancelCreating = cancelCreating;

        function createBookmark(bookmark) {
            BookmarksModel.createBookmark(bookmark);
            returnToBookmarks();
        }

        createBookmarkCtrl.createBookmark = createBookmark;

        function resetForm() {
            createBookmarkCtrl.newBookmark = {
                titel: '',
                url: '',
                category: $stateParams.category
            }
        }

        resetForm();

        createBookmarkCtrl.tmpFunc = function() {
            console.log(createBookmarkCtrl.newBookmark);
        }
    });