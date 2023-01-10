import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";

export default function PaypalCheckoutButton(props) {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at  for assistance.");
  };
  
  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error);
  }

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    alert("Thank you for your purchase!");
  }
  return (
    <PayPalButtons
      style={{
        color: "white",
        layout: "vertical",
        height: 55,
        tagline: false,
        shape: "pill",
        label: "pay",
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
    />
  );
}
