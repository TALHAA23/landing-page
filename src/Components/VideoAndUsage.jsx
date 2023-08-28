import PurchaseButton from "./PurchaseButton";

export default function VideoAndUsage() {
  return (
    <div className="relative py-10 px-4 bg-[#f5f5f5] flex flex-col items-center">
      <UpperSection />
      <ProtectionList />
      <PurchaseButton />
      <Video />
    </div>
  );
}

function UpperSection() {
  // md:mb-72
  return (
    <div className="md:mb-[50%]">
      <div className="text-3xl md:text-5xl text-center">
        <h1>Protect yourself</h1>
        <h1 className="font-semibold">And those around you</h1>
      </div>
      <p className="text-base md:text-lg md:w-2/3 mx-auto text-center font-light py-3">
        PURIFAIR will remove bad pollutants from the air, clear smoke, support
        your allergies and allow you to breathe easy anywhere you go.
      </p>
    </div>
  );
}

function ProtectionList() {
  const protections = Array(4).fill({
    img: "/protectser1.png",
    title: "Relieve Allergies",
    desc: "Say goodbye to the itchy eyes, runny nose and non-stop sneezing you suffer through every hayfever season.",
  });

  const protectionsEl = protections.map((protection) => (
    <div className="p-3 md:p-4 flex flex-col gap-2 items-center w-full bg-white rounded-lg md:bg-gradient-to-b  from-blue-100 to-white">
      <img className="w-10 md:w-20" src={protection.img} />
      <h1>{protection.title}</h1>
      <p className="text-sm text-center opacity-80 font-light">
        {protection.desc}
      </p>
    </div>
  ));
  return <div className="flex flex-col gap-3 md:flex-row">{protectionsEl}</div>;
}

function Video() {
  return (
    <div
      className="w-[90%] mt-[40%] md:mt-0 md:w-3/4 aspect-video bg-slate-600
  md:absolute top-1/2 -translate-y-[60%]
  "
    >
      <video src="/purifair.mp4" controls></video>
    </div>
  );
}
