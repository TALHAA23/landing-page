export default function PaymentMethods() {
  const methods = [
    "cc-apple-pay",
    "cc-google-pay",
    "cc-mastercard",
    "cc-paypal",
    "cc-visa",
  ];
  return (
    <div className="flex justify-center gap-4 items-center">
      {methods.map((method) => (
        <img className="w-7" src={`${method}.svg`} />
      ))}
    </div>
  );
}
