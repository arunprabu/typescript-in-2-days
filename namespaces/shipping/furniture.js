var Shipping;
(function (Shipping) {
    var Furniture;
    (function (Furniture) {
        function calcShipping() {
            console.log("Cal shipping for furniture");
        }
        Furniture.calcShipping = calcShipping;
    })(Furniture = Shipping.Furniture || (Shipping.Furniture = {}));
})(Shipping || (Shipping = {}));
//# sourceMappingURL=furniture.js.map