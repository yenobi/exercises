angular.module('categories', [
    'booky.models.categories'
])
    .config(function($stateProvider) {
        $stateProvider.
            state('booky.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    }
                    // 'bookmarks@': {
                    //     controller: 'BookmarksCtrl',
                    //     templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    // }
                }
        })
    })
    .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel) {
        var categoriesListCtrl = this;

        categoriesListCtrl.categories = CategoriesModel.getCategories();
    })
;
