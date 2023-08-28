export default function Features() {
  return (
    <div className="bg-white flex flex-col justify-center py-10 px-3">
      <div className="text-3xl md:text-5xl text-center">
        <h1 className="font-light">SUPER PORTABLE</h1>
        <h1 className="font-semibold">TAKE ME ANY WHERE</h1>
        <p className="text-base md:text-lg opacity-80 mt-5">
          PURIFAIR is light & portable, allowing you to bring it with you
          anywhere – from your office to your car to your bedroom.
        </p>
      </div>
      <div>
        <FeaturesGenerator />
      </div>
    </div>
  );
}

function FeaturesGenerator() {
  const features = Array(3).fill({
    img: "/feature-image-1.webp",
    title: "Breathe Easy In The Bedroom",
    desc: "We spend 1/3 of our lives asleep. Make sure the air you breathe while you sleep is free from pollutants, so you can wake up refreshed. PURIFAIR is as quiet as a whisper, so it won't stop you from getting a good night's sleep.",
  });

  const featureElements = features.map((feature) => (
    <div className=" px-3 py-1 text-center space-y-4 w-[80%] md:w-1/4 ">
      <img src={feature.img} />
      <h1 className="text-2xl font-light">{feature.title}</h1>
      <p className=" opacity-75">{feature.desc}</p>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-wrap p-3 rounded">
      {featureElements}
    </div>
  );
}
