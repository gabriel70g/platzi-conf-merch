import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";
import { Helmet } from "react-helmet";
import AppContext from "../context/AppContext";
import "../styles/components/Payment.css";

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOtions = {
    clientId:
      "AVuH0y6kTWq6RtGK9mGhSFI58RivPeutJbKb9nlbNYyVB6VQ8dbMSQ2GsGwq8PsFJc6GuX-Z7RQB4POP",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        Payment: data,
      };

      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };
  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Payment</title>
      </Helmet>

      <div className="Payment">
        <div className="Payment-content">
          <h3>Resument del pedido:</h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))}
          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOtions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onPaymentStart={() => console.log("Start Payment")}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default Payment;
