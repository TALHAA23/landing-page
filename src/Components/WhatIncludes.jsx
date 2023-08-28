import PurchaseButton from "./PurchaseButton";

export default function WhatIncludes() {
  return (
    <div className="p-10 space-y-4">
      <div className="flex flex-col md:flex-row-reverse justify-center gap-5">
        <img className="md:w-1/2" src="/included-package.webp" />
        <div className="text-center space-y-4">
          <h1 className="font-semibold text-3xl">What included</h1>
          <p className="font-light opacity-80">
            The package will include the portable air purifier, USB cable, user
            manual, a thank you card AND a discount voucher for a future
            purchase. Once it arrives, all you need to do is open the box and
            push the button to turn it on.
          </p>
          <Includes />
          <PurchaseButton />
        </div>
      </div>
      <ShippingAndGurantee />
    </div>
  );
}

function Includes() {
  const includes = Array(3).fill({
    img: "/included-purifair.avif",
    title: ["1x Portable", "Air Purifier"],
  });

  const includesEl = includes.map((include) => (
    <div
      key={include.title}
      className="flex flex-col justify-center items-center"
    >
      <div className=" w-20 aspect-square rounded-full flex justify-center items-end">
        <img src={include.img} />
      </div>
      <div className="font-light text-base text-center flex flex-col gap items-center">
        <small>{include.title[0]}</small>
        <small>{include.title[1]}</small>
      </div>
    </div>
  ));

  return <div className="flex justify-around">{includesEl}</div>;
}

function ShippingAndGurantee() {
  const contents = Array(2).fill({
    img: "/free-delivery.svg",
    title: "Free Shipping",
    desc: "We proudly ship all orders from our warehouse in Nevada! Our shipping is tracked right from the moment it leaves the warehouse until it arrives at your door. Once you make your purchase, it will be shipped the next business day and delivered within a few days!",
  });

  const contentEl = contents.map((content) => (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 p-3 md:p-6 border border-blue-300 rounded-2xl bg-gradient-to-b from-blue-50 to-white">
      <img src={content.img} />
      <div className="text-center md:text-left font-light">
        <h1 className="text-2xl md:text-3xl">{content.title}</h1>
        <p className=" opacity-80">{content.desc}</p>
      </div>
    </div>
  ));
  return <div className="flex flex-col md:flex-row gap-5">{contentEl}</div>;
}
