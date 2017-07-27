angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'booky.models.bookmarks',
    'booky.models.categories',
])
    .config(($stateProvider) => {
        $stateProvider
            .state('booky.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksCtrl as bookmarksListCtrl',
                    },
                },
            });
    })
    .controller('BookmarksCtrl', function BookmarksCtrl($stateParams, BookmarksModel, CategoriesModel) {
        const bookmarksListCtrl = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        BookmarksModel.getBookmarks()
            .then((bookmarks) => {
            bookmarksListCtrl.bookmarks = bookmarks;
        });

        bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;

        bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;

        bookmarksListCtrl.deleteBookmark = BookmarksModel.deleteBookmark;
    });
