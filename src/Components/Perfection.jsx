import PurchaseButton from "./PurchaseButton";
export default function Perfection() {
  return (
    <div className="flex gap-5 flex-col items-center md:flex-row-reverse py-5 px-3">
      <img className="w-full md:w-1/2" src="/perfect.webp" />
      <div className="text-center px-3 md:text-left">
        <h1 className="text-3xl md:text-5xl">
          Perfect for <b>every room in your house</b>{" "}
        </h1>
        <p className=" opacity-70 text-sm my-4 md:my-8 md:text-base">
          Each PURIFAIR is perfect for areas as big as 200 square feet. Anything
          more than that, you can place multiple units across your house to
          create maximum effect, including in your bedroom, kitchen, living room
          or office.
        </p>
        <PurchaseButton />
      </div>
    </div>
  );
}
