angular.module('booky.models.categories', [

])
    .service('CategoriesModel', function($http, $q) {
        var model = this,
            URLS = {
                FETCH: 'data/categories.json'
            },
            categories,
            currentCategory;

        function extract(response) {
            return response.data;
        }

        function cacheCategories(result) {
            categories = extract(result);
            return categories;
        }

        model.getCategories = function() {
            // $q wraps promise around object
            // if categories already exists -> wrap it to promise and return it (manual handling cash and promise ?)
            return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
        };

        model.setCurrentCategory = function(categoryName) {
            return model.getCategoryByName(categoryName)
                .then(function(category) {
                    currentCategory = category;
                })
        };

        model.getCurrentCategory = function() {
            return currentCategory;
        };

        model.getCurrentCategoryName = function() {
            return currentCategory ? currentCategory.name : '';
        };


        //didn't understand this
        model.getCategoryByName = function(categoryName) {
            var deferred = $q.defer();

            // this was in example with underscore
            // function findCategory() {
            //     return _.find(categories, function (c) {
            //         return c.name === categoryName;
            //     })
            // }

            // write the same with vanillaJS
            function findCategory() {
                return categories.find(function (c) {
                    return c.name == categoryName;
                });
            }

            if (categories) {
                deferred.resolve(findCategory());
            } else {
                model.getCategories()
                    .then(function(respnse) {
                        deferred.resolve(findCategory())
                    });
            }

            return deferred.promise;
        }
    });