angular.module('booky', [
    'ui.router',
    'ngAnimate',
    'categories',
    'categories.bookmarks'
])
    .config([ '$locationProvider', '$urlRouterProvider', '$stateProvider',
        function( $locationProvider, $urlRouterProvider, $stateProvider) {

            // why is this ?
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
//     .controller('MainCtrl', function($scope, $state){
//
//         $scope.currentCategory = null;
//
//         $scope.setCurrentCategory = function (category) {
//             $scope.currentCategory = category;
//
//             // $state.go('booky.categories.bookmarks', {
//             //     category: category.name
//             // });
//
//             $scope.cancelCreating();
//             $scope.cancelEditing();
//         };
//
//         $scope.isCurrentCategory = function(category) {
//           return $scope.currentCategory !== null && category.name === $scope.currentCategory;
//         };
//
//
// //        crafting and editing states
//
//         $scope.isCreating = false;
//         $scope.isEditing = false;
//
//         $scope.startCreating = function() {
//             $scope.isCreating = true;
//             $scope.isEditing = false;
//
//             resetCreateForm();
//         };
//
//         $scope.cancelCreating = function() {
//             $scope.isCreating = false;
//         };
//
//         $scope.startEditing = function() {
//             $scope.isCreating = false;
//             $scope.isEditing = true;
//         };
//
//         $scope.cancelEditing = function() {
//             $scope.isEditing = false;
//         };
//
//         $scope.shouldShowCreating = function() {
//             return $scope.currentCategory && !$scope.isEditing;
//         };
//
//         $scope.shouldShowEditing = function() {
//             return !$scope.isCreating && $scope.isEditing;
//         };
//
//
// //        CRUD
//
//         function resetCreateForm() {
//             $scope.newBookmark = {
//                 title: '',
//                 url: '',
//                 category: $scope.currentCategory
//             };
//         };
//
//         $scope.createBookmark = function(bookmark) {
//             bookmark.id = $scope.bookmarks.length;
//             bookmark.category = $scope.currentCategory.name;
//             $scope.bookmarks.push(bookmark);
//             console.log($scope.bookmarks);
//
//             resetCreateForm();
//         };
//
//         $scope.editedBookmark = null;
//         $scope.tmpEditedBookmark = null;
//
//         $scope.setEditedBookmark = function(bookmark) {
//             $scope.tmpEditedBookmark = bookmark;
//             $scope.editedBookmark = angular.copy(bookmark);
//         };
//
//         $scope.updateBookmark = function(bookmark) {
//             var index = $scope.bookmarks.indexOf($scope.tmpEditedBookmark);
//             $scope.bookmarks[index] = bookmark;
//
//             $scope.editedBookmark = null;
//             $scope.isEditing = false;
//             $scope.tmpEditedBookmark = null;
//         };
//
//         $scope.isSelecredBookmark = function(bookmarkId) {
//             return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
//         };
//
//         $scope.deleteBookmark = function(bookmark) {    $scope.bookmarks.splice($scope.bookmarks.indexOf(bookmark), 1);
//         };
//
//
//     });

