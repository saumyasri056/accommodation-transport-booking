
var app = angular.module('project', []);

app.controller('MainCtrl', function($scope) {
    $scope.items = [{}];
    $scope.add = function(){
       $scope.items.push({});
    }


});


app.controller('MainCtrl2', function($scope) {

   $scope.employees = {
Emp1 :{name:"Neha Kale", Employee : "123456", phone : "99345678", mail:"neha@g.com"  },
Emp2 :{name:"Emily Spog", Employee : "234678", phone : "98765432", mail: "emil@m.com"},
Emp3 : {name:"jackson yriehd", Employee : "789051", phone: "87654316", mail:"jack@g.com"}
    }
      $scope.currentState = 'Select';

$scope.states = [
{postcode:'Aman Joshi',name:'543216'},
      {postcode:'Raj Shukla',name:'774895'},     
      
      {postcode:'Shreya goel',name:'776542'},
      {postcode:'Priya Singh',name:'897641'}
      ];



 });
$(document).ready(function(){
    $(".btn1").focus(function(){
        $(this).css("border-color","black");
        $(this).css("background-color", "white");
    });
   
});


$(document).ready(function(){
    $("#1").click(function(){
        alert("Data Saved");
    });
});
$(document).ready(function(){
    $("#2").click(function(){
        alert("Data saved");
    });
  });
$(document).ready(function(){
    $("#3").click(function(){
        alert("Ride booked Succesfully");
    });
  });

