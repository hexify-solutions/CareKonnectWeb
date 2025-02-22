const PaymentForm = () => {
  return (
    <div>
      <h4>Payment Method</h4>
      <div>
        {
            paymentOptions?.map(() => {
                return <div>
                    {/* <IconLoader /> */}
                </div>
            })
        }
      </div>
    </div>
  );
};

const paymentOptions = [
  {
    type: "Credit Card",
    description: "Pay with MasterCard, Visa or Verve",
    subDescription: "MasterCard *****1234",
  },
  {
    type: "HMO Provideer",
    description: "Reliance HMO",
    subDescription: "Red Beryl Lite Individual",
  },
  {
    type: "Internet Banking",
    description: "Pay directly from your bank account",
  },
  {
    type: "Paystack",
    description: "Pay using paystack",
  },
];

export default PaymentForm;
