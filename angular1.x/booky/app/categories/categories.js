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
                }
        })
    })
    .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel) {
        var categoriesListCtrl = this;

         CategoriesModel.getCategories()
             .then(function(response) {
                 categoriesListCtrl.categories = response;
             });
    })
;
