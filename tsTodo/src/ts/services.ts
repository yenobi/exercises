myToDo
    .service('localStorageService', function() {

        this.storage = []

        // this.saveToLocalStorage = function(key, value) {
        //     localStorage.setItem(key, angular.toJson(value));
        //     // console.log(angular.fromJson(localStorage.order));
        // };
        //
        // this.getLocalStorageItem = function(key) {
        //     return angular.fromJson(localStorage.getItem(key));
        // }
    });

module storageService {
    myToDo.service('localStorageService', function() {

        this.storage = []

        // this.saveToLocalStorage = function(key, value) {
        //     localStorage.setItem(key, angular.toJson(value));
        //     // console.log(angular.fromJson(localStorage.order));
        // };
        //
        // this.getLocalStorageItem = function(key) {
        //     return angular.fromJson(localStorage.getItem(key));
        // }
    });

    module  Whatever {
        export class WhateverSmth {
            constructor(public some: string) {
    
            }
        }
    }
}

//  need to write class MyService extends basic-ng-service from angular.d.ts ? 
class MyService {
    // fields 
    constructor() {
    }
}
// where to init service, cntrl, directives and other classes ? 