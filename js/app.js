angular.module('firstApp', [])

.controller('mainController', function() {
  var vm = this;
  vm.message = 'Hey there! Come and see how good I look!';
  vm.computers = [
    { name: 'Macbook Pro', colour: 'Silver', nerdness: 7 },
    { name: 'Yoga 2 Pro', colour: 'Gray', nerdness: 6 },
    { name: 'Chromebook', colour: 'Black', nerdness: 5 }
  ];
  vm.computerData = {};

  vm.addComputer = function() {
    vm.computers.push({
      name: vm.computerData.name,
      colour: vm.computerData.colour,
      nerdness: vm.computerData.nerdness
    });
    // vm.computerData = {};
  }
});