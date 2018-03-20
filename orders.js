function orderSupplies(item, callback) {  //this should always return painst, then brush.
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
  
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        }
      };
  
      callback(warehouse[item]);
    }, deliveryTime);
  }
  
  function receivedItem(item) {
      //console.log(item.product);
      if(item.product == 'Horsehair brush'){
          
        setTimeout(function() {
            console.log(`Received ${item.product} time to ${item.directions()}`); //this always comes last
          }, 3000);
        
      }
      else{
        console.log(`Received ${item.product} time to ${item.directions()}`);
 
        }
    //console.log(`Received ${item.product} time to ${item.directions()}`);
  }
  
  orderSupplies('brush', receivedItem);
  orderSupplies('paint', receivedItem);
  //orderSupplies('brush', receivedItem);