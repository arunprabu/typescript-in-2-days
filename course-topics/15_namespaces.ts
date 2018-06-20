/*
Namespace helps us avoid polluting global scope. we can use obj to create namespaces.
why? To organize our code better.
Helps us avoid global var names collision. */

namespace Furnitures{
  const shippingChargeBasePrice:number = 99;
  export function calculateShippingCharges(zipcode: number, productCode: string){
    if(zipcode == 600000 || productCode == 'A201'){
      console.log(shippingChargeBasePrice);
    }else{
      console.log(shippingChargeBasePrice + 200);
    }
  }

  export function estimateShippingTime(zipcode: number,  productCategory: string){
    if(zipcode > 600001 && zipcode < 6000072){
      console.log("15 days");
    }
    else{
      console.log("10 days");
    }    

    if(productCategory == "OfficeChairs" ){
      console.log("2 days");
    }
    else{
      console.log("15 days");  
    }
  }
}

Furnitures.calculateShippingCharges(600000, 'A201')