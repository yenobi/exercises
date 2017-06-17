booky.controller('mainCtrl', function($scope) {
                                var self = this;
                                self.phones = [{
                                        name: 'Nokia Lumia 630',
                                        year: 2014,
                                        price: 200,
                                        company: {
                                            name: 'Nokia',
                                            country: 'Финляндия'
                                        }
                                    },{
                                        name: 'Samsung Galaxy S 4',
                                        year: 2014,
                                        price: 400,
                                        company: {
                                            name: 'Samsung',
                                            country: 'Республика Корея'
                                        }
                                    },{
                                        name: 'Mi 5',
                                        year: 2015,
                                        price: 300,
                                        company: {
                                            name: 'Xiaomi',
                                            country: 'Китай'
                                        }
                                    }];

                                    self.tablets = [{
                                        name: 'Samsung Galaxy Tab S4',
                                        year: 2014,
                                        price: 300,
                                        company: 'Samsung'
                                    },{
                                        name: 'LG G PAD 8.3',
                                        year: 2013,
                                        price: 180,
                                        company: 'LG'
                                    }];

                                    self.data = {};
                                     self.setFile = function () {
                                       if(self.data.mode=='Tablets') {
                                           console.log('tablets');
                                           return 'tabletsList.html';
                                       } else if(self.data.mode=='Phones')
                                           return 'phonesList.html';
                                   };
                                     self.modes = [{
                                         value: 'Tablets',
                                         label: 'Планшеты'
                                     },{
                                         value: 'Phones',
                                         label: 'Смартфоны'
                                     }];




                            });
