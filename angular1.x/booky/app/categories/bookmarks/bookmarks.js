angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'booky.models.bookmarks',
    'booky.models.categories'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('booky.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksCtrl as bookmarksListCtrl'
                    }
                }
            })
    })
    .controller('BookmarksCtrl', function BookmarksCtrl($stateParams, BookmarksModel) {

        var bookmarksListCtrl = this;

        bookmarksListCtrl.currentCategoryName = $stateParams.category;

        BookmarksModel.getBookmarks().
            then(function(response) {
            bookmarksListCtrl.bookmarks = response;
        });
    });