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
        // can do something like this ?
        // $someCtrl = $ctrl;

        var bookmarksListCtrl = this;

        bookmarksListCtrl.currentCategoryName = $stateParams.category;

        bookmarksListCtrl.bookmarks = BookmarksModel.getBookmarks();
    });