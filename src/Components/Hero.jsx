export default function HeroSection() {
  return (
    <section className="p-10 w-full flex flex-col lg:flex-row gap-3 px-3 sm:px-20 lg:px-0">
      <ImageSection />
      <DescriptionSection />
    </section>
  );
}

function ImageSection() {
  return (
    <div className="flex flex-col items-center lg:w-[45%] space-y-2">
      <div className="relative">
        <img className=" h-56 sm:h-96" src="/purifairs.png" alt="img" />
        <div
          className=" absolute top-[50%] sm:top-[60%] left-[60%] rounded-full bg-[#488dcb] text-white 
        flex flex-col items-center justify-center aspect-square text-sm p-3 sm:p-6"
        >
          <h1 className="text-xl sm:text-2xl font-bold">4.8</h1>
          <img src="/5-stars.svg" alt="" />
          <b className="text-[10px] font-semibold">1000+ Reviews</b>
        </div>
      </div>
      <button className="px-3 py-1 font-light border border-blue-500 rounded-full">
        Bundles form <b>$28</b> each
      </button>
      <div className="hidden md:block">
        <FeaturedReview />
      </div>
    </div>
  );
}

function DescriptionSection() {
  return (
    <div className="flex flex-col justify-center md:justify-around space-y-5">
      <div className="text-center lg:text-left">
        <h2 className=" text-lg font-light md:text-4xl">WORLD'S BEST</h2>
        <h1 className="font-semibold text-xl md:text-5xl ">
          PORTABLE AIR PRURFIER
        </h1>
      </div>
      <p className="text-center lg:text-left sm:text-lg">
        It’s time to clear the air with a purifier that eliminates pollutants,
        <b> so you can breathe easy anywhere you go.</b>
      </p>
      <button
        className="w-[300px] self-center bg-gradient-to-r from-cyan-500 to-blue-500
      py-2 rounded-full text-white font-semibold text-lg shadow-lg shadow-slate-500
      "
      >
        Get puriferi now
      </button>
      <DescriptionSection__Advantages />
      <DescriptionSection__FeaturedIn />
      <div className="md:hidden">
        <FeaturedReview />
      </div>
    </div>
  );
}

function DescriptionSection__Advantages() {
  const advantages = Array(5).fill({
    img: "/viruses.png",
    text: "Viruses",
  });

  const elements = advantages.map((adv) => (
    <div className="flex flex-col md:flex-row gap-1 items-center">
      <img className=" w-10" src={adv.img} />
      <p className="font-light text-sm">{adv.text}</p>
    </div>
  ));

  return <div className="flex justify-between mx-2">{elements}</div>;
}

function DescriptionSection__FeaturedIn() {
  const fts = Array(3).fill("/cbs.png");
  const elements = fts.map((ft) => <img className=" w-16" src={ft} />);
  return (
    <div className="flex flex-col md:flex-row">
      <p className="self-center font-semibold tracking-wide">Featureed In</p>
      <div className="flex justify-around grow">{elements}</div>
    </div>
  );
}

function FeaturedReview() {
  return (
    <div className="flex items-start sm:items-center gap-3 border border-black text-sm rounded-md sm:rounded-full px-4 py-2 mx-6">
      <img className=" w-9 sm:w-40" src="/BoyAvater.png" alt="" />
      <div className="flex flex-col">
        <p className="lg:text-xs">
          “I love my Purifair! I bought two of them, one for the living room and
          one for the bedroom. My sinuses are clearing after months of
          sinusitis. Well worth the price!”
        </p>
        <div className="self-end flex gap-1">
          <img src="/5-stars.svg" alt="" />
          <span>Sofia N. Verified Customer</span>
        </div>
      </div>
    </div>
  );
}
