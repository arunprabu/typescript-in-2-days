/// <reference path="shipping/furniture.ts"/>
/// <reference path="shipping/software.ts"/>

//The above is the way to import ts namespace files.
console.log("Test");
Shipping.Furniture.calcShipping();
Shipping.Software.calcShipping();


//You can also import namespace by this way
import MyFurn = Shipping.Furniture;
MyFurn.calcShipping();