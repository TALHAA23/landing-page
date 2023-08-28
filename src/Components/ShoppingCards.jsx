import PaymentMethods from "./PaymentMethods";

export default function ShoppingCards() {
  return (
    <div className="p-10 bg-[url('/background.webp')] bg-no-repeat bg-cover">
      <div className="text-center text-2xl md:text-5xl text-white">
        <h1 className="font-light">BUY PUREIFIER TODAY!</h1>
        <h1 className="font-semibold">BUY MORE AND SAVE</h1>
      </div>
      <Cards />
    </div>
  );
}

function Cards() {
  const cardsData = Array(3).fill({
    img: "/5_purifier.webp",
    tag: "Best Bundle",
    off: 40,
    title: "buy 1 purifier",
    price: 59,
    oldPrice: 122,
    save: 90,
    shipping: "Free Shipping in the USA",
    installmentText: "Or 4 interest-free installments of",
    perInstallment: 14.75,
    remainingOrder: 3,
  });

  const cardsEl = cardsData.map((card) => (
    <div className=" tracking-wide px-5 p-1 relative flex flex-col gap-5 items-center border border-black bg-white rounded-2xl">
      <img className=" absolute w-56 -top-14" src={card.img} alt="" />
      <div className="absolute -top-10 -right-10">
        <div className="relative flex items-center justify-center">
          <img className="w-24" src="/sun_sale.png" />
          <div className="absolute  text-lg font-semibold flex flex-col text-white">
            <p>-{card.off}%</p>
            <p className="text-xs self-end">OFF</p>
          </div>
        </div>
      </div>

      <div className="text-center uppercase text-blue-900 font-semibold pt-36 space-y-3">
        {card.tag && (
          <div className="px-2 py-1 rounded-full text-white font-semibold bg-purple-600">
            {card.tag}
          </div>
        )}
        <h1 className="text-2xl">{card.title}</h1>
        <div className="flex justify-around items-center text-2xl">
          <h2 className="">${card.price}</h2>
          {card.oldPrice && (
            <h1 className=" text-gray-500 line-through opacity-75">
              ${card.oldPrice}
            </h1>
          )}
        </div>
        <h4 className="text-sm w-3/4 mx-auto">+{card.shipping}</h4>
      </div>
      <div className="text-xs md:text-sm font-light opacity-80 flex gap-1 items-center text-center md:justify-between">
        <p>{card.installmentText}</p>
        <div className="md:text-xs">
          <b className="font-bold">{card.perInstallment}</b>{" "}
        </div>
      </div>
      <div className="w-full border border-blue-300 rounded-3xl pb-2 text-center">
        <p className="font-semibold text-sm rounded-full border border-blue-300 border-t-transparent px-10 py-2">
          <span> Special online price</span>
        </p>
        <b className="text-sm px-10 flex items-center justify-center gap-4 my-2">
          <img className=" animate-spin delay-100" src="/sand-clock.svg" />
          <span> {card.remainingOrder} orders at this price remaining </span>
        </b>
      </div>
      <button className="w-full font-bold  md:text-2xl bg-purple-400 px-10 md:px-10 py-3 rounded-full text-white">
        CHOSE COLOR
      </button>
      <PaymentMethods />
    </div>
  ));

  return (
    <div className="mt-24 flex flex-col justify-center lg:flex-row gap-16">
      {cardsEl}
    </div>
  );
}
