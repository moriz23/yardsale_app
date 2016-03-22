  angular.module("yardApp", [])
    .controller("YardSaleController", function($http) {
      console.log("This controller ran");
      var yardSale = this;
      yardSale.items = [];
   

      yardSale.login = function() {
        yardSale.loggedIn = true;

        console.log("trying to create user");

        $http({
          method: "POST",
          url: "/user",
          data: { username: yardSale.username }
        }).then(function(result){
          console.log("user was successfully created");
          yardSale.userId = result.data._id;
          yardSale.username = result.data.username;
          yardSale.password = result.data.password;
          yardSale.Items = result.data.items;
      })


      yardSale.addItem = function() {
        console.log("adding item");
        yardSale.items.push(yardSale.item);
        yardSale.item = {};

        $http({
          method: 'POST',
          url: '/newitem/' + yardSale.userId,
          data: {
            name: yardSale.item.name,
            cost : yardSale.item.cost,
            description: yardSale.item.description
          }
        }).then(function(result) {
        yardSale.login();
        });
      };

      yardSale.deleteItem = function(itemId){
        console.log("delete item")
        $http({
          method: 'GET',
          url: '/deleteitem/' + itemId
        }).then(function(result) {
          yardSale.login();
        });
      };

 
      };

  });