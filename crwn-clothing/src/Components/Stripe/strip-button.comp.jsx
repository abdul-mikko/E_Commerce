import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_DkiJdAuvcrleZ4ZEdq9aPAfJ00uXnr15T0";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Complete");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRW Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is  $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
