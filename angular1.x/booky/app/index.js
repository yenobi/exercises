angular.module('booky', [
    'ui.router',
    'ngAnimate',
    'categories',
    'categories.bookmarks'
])
    .config([ '$locationProvider', '$urlRouterProvider', '$stateProvider',
        function( $locationProvider, $urlRouterProvider, $stateProvider) {

            // abstract state serves as a PLACEHOLDER or NAMESPACE for app
            $stateProvider.
                state('booky', {
                    url: '',
                    abstract: true
            });

            // redirecting by default to root app-route
            $urlRouterProvider.otherwise('/');

            // this is for what ?
            $locationProvider.html5Mode(false).hashPrefix('!');
        }]);


