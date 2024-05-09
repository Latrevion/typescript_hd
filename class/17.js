{
    var AliPay_1 = /** @class */ (function () {
        function AliPay() {
        }
        AliPay.prototype.handle = function (price) {
            console.log("alipay-".concat(price));
        };
        return AliPay;
    }());
    var WePay_1 = /** @class */ (function () {
        function WePay() {
        }
        WePay.prototype.handle = function (price) {
            console.log("wePay-".concat(price));
        };
        return WePay;
    }());
    function pay(type, price) {
        var pay;
        switch (type) {
            case "alipay":
                pay = new AliPay_1();
                break;
            case "wepay":
                pay = new WePay_1();
                break;
            default:
                throw new Error("Unsupported payment");
        }
        pay.handle(price);
    }
}
