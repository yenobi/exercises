angular.module('booky', [
    'ui.router',
    'categories',
    'categories.bookmarks'
])
    .config([ '$locationProvider', '$urlRouterProvider', '$stateProvider',
        function( $locationProvider, $urlRouterProvider, $stateProvider) {

            $stateProvider.
                state('booky', {
                url: '/',
                templateUrl: 'app/categories/categories.tmpl.html'
            });

            // Default path
            // $routeProvider.otherwise({redirectTo: '/categories'});

            // this is for what ?
            $locationProvider.html5Mode(false).hashPrefix('!');
        }])
    .controller('MainCtrl', function($scope){
        $scope.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"}
        ];
    
        $scope.bookmarks = [
            {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
            {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
            {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
            {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
            {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
            {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
            {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
            {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
            {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
        ];
    
        $scope.currentCategory = null;
    
        $scope.setCurrentCategory = function (category) {
            $scope.currentCategory = category;
            
            $scope.cancelCreating();
            $scope.cancelEditing();
        };
    
        $scope.isCurrentCategory = function(category) {
          return $scope.currentCategory !== null && category.name === $scope.currentCategory;
        };
    
    
//        crafting and editing states
    
        $scope.isCreating = false;
        $scope.isEditing = false;
        
        $scope.startCreating = function() {
            $scope.isCreating = true;
            $scope.isEditing = false;
            
            resetCreateForm();
        };
        
        $scope.cancelCreating = function() {
            $scope.isCreating = false;
        };
    
        $scope.startEditing = function() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        };
    
        $scope.cancelEditing = function() {
            $scope.isEditing = false;
        };
    
        $scope.shouldShowCreating = function() {
            return $scope.currentCategory && !$scope.isEditing;
        };
    
        $scope.shouldShowEditing = function() {
            return !$scope.isCreating && $scope.isEditing;
        };
    
    
//        CRUD 
    
        function resetCreateForm() {
            $scope.newBookmark = {
                title: '',
                url: '',
                category: $scope.currentCategory
            };
        };
    
        $scope.createBookmark = function(bookmark) {
            bookmark.id = $scope.bookmarks.length;
            bookmark.category = $scope.currentCategory.name;
            $scope.bookmarks.push(bookmark);
            console.log($scope.bookmarks);
            
            resetCreateForm();
        };
    
        $scope.editedBookmark = null;
        $scope.tmpEditedBookmark = null;
    
        $scope.setEditedBookmark = function(bookmark) {
            $scope.tmpEditedBookmark = bookmark;
            $scope.editedBookmark = angular.copy(bookmark);
        };
    
        $scope.updateBookmark = function(bookmark) {
            var index = $scope.bookmarks.indexOf($scope.tmpEditedBookmark);
            $scope.bookmarks[index] = bookmark;
            
            $scope.editedBookmark = null;
            $scope.isEditing = false;
            $scope.tmpEditedBookmark = null;
        };
        
        $scope.isSelecredBookmark = function(bookmarkId) {
            return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
        };
    
        $scope.deleteBookmark = function(bookmark) {    $scope.bookmarks.splice($scope.bookmarks.indexOf(bookmark), 1);
        };
        

    });

