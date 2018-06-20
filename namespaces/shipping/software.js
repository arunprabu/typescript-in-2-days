var Shipping;
(function (Shipping) {
    var Software;
    (function (Software) {
        function calcShipping() {
            console.log("Cal shipping for software");
        }
        Software.calcShipping = calcShipping;
    })(Software = Shipping.Software || (Shipping.Software = {}));
})(Shipping || (Shipping = {}));
//# sourceMappingURL=software.js.map