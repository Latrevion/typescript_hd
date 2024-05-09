{
  interface PayInterface {
    handle(price: number): void;
  }

  class AliPay implements PayInterface {
    public handle(price: number): void {
      console.log(`alipay-${price}`);
    }
  }

  class WePay implements PayInterface {
    public handle(price: number): void {
      console.log(`wePay-${price}`);
    }
  }

  function pay(type: string, price: number) {
    let pay: PayInterface;
    switch (type) {
      case "alipay":
        pay = new AliPay();
        break;
      case "wepay":
        pay = new WePay();
        break;
      default:
        throw new Error("Unsupported payment");
    }
    pay.handle(price);
  }
}
