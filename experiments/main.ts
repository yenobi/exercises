// This works on all devices/browsers, and uses IndexedDBShim as a final fallback
// var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var some = window.indexedDB.open("MyDatabase", 1);

// Create the schema
some.onupgradeneeded = function() {
    var db = some.result;
    var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
    var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
};

some.onsuccess = function() {
    // Start a new transaction
    var db = some.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");
    var index = store.index("NameIndex");

    // Add some data
    store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
    store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});

    // Query the data
    var getJohn = store.get(12345);
    var getBob = index.get(["Smith", "Bob"]);

    getJohn.onsuccess = function() {
        console.log(getJohn.result.name.first);  // => "John"
    };

    getBob.onsuccess = function() {
        console.log(getBob.result.name.first);   // => "Bob"
    };

    // Close the db when the transaction is done
    tx.oncomplete = function() {
        // db.close();
        console.log('here was closing db');
    };
}


// const customerData = [
//   { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
//   { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
// ];
//
// if (!window.indexedDB) {
//     window.alert("Your browser has no indexedDB. Offline features won't work!");
// } else {
//   // узнать разрешено ли пользовательским браузером создавать базу данных
//   // узнать сколько памяти могу использовать
//
//   // скорей всего при открытии бд, будет появляться окно запрашивающее разрешение у пользователя
//   let db: IDBDatabase;
//   const dbName: string = 'MyTestDatabase5';
//   const request: IDBOpenDBRequest = indexedDB.open(dbName, 3);
//   request.onerror = (event) => {
//     console.log(event);
//     // alert("Почему Вы не позволяете моему веб-приложению использовать IndexedDB?!");
//   };
//   request.onsuccess = (event: any) => {
//     db = event.target.result;
//     console.log(db);
//   };
//
//   // все ошибки выводим в alert
//   // db.onerror = (event: any) => {
//   //   // alert("Database error: " + event.target);
//   //   alert(`Database error: ${event.target}`);
//   // };
//
// // this didn't run because the Database is not running a version change transaction
//   request.onupgradeneeded = (event) => {
//     console.log('some');
//     var objectStore: IDBObjectStore = db.createObjectStore("customers", { keyPath: "ssn" });
//
//     // Create an index to search customers by name. We may have duplicates
//     // so we can't use a unique index.
//     // objectStore.createIndex("name", "name", { unique: false });
//
//     // Create an index to search customers by email. We want to ensure that
//     // no two customers have the same email, so use a unique index.
//     objectStore.createIndex("email", "email", { unique: true });
//
//     // Store values in the newly created objectStore.
//     for (var i in customerData) {
//       objectStore.add(customerData[i]);
//     }
//
//     console.log(objectStore.get('bill@company.com'));
//     console.log(objectStore.get('555-55-5555'));
//   }
// }
//
// // window.indexedDB.open(name, version)
// // version of indexedDB ?
// // (Версия определяет схему базы данных - хранилище объектов  и их структуру.)?
// // var request: IDBOpenDBRequest = window.indexedDB.open("MyTestDatabase", 3);
// //
// // console.log(request);
// //
// // request.onerror = function(event) {
// //   console.log('event ',event);
// //   // console.log(request.errorCode);
// //   // Сделать что-то при ошибке request.errorCode!
// // };
// // request.onsuccess = function(event) {
// //   console.log('event ',event);
// //   // request.result: IDBDatabase
// //   console.log(request.result);
// // };
