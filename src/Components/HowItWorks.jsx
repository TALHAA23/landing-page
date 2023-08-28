export default function HowItWorks() {
  return (
    <div className="py-10 px-3 bg-black text-white flex flex-col gap-3 md:flex-row justify-center items-center">
      <img className="hidden w-80 md:inline" src="/howitworks.webp" />
      <div className="md:hidden">
        <HowItWorks__Heading />
      </div>
      <div className="flex justify-center gap-4 md:flex-col w-[80%]">
        <img className="w-32 aspect-auto md:hidden" src="/howitworks.webp" />
        <div className="hidden md:block">
          <HowItWorks__Heading />
        </div>
        <Steps />
      </div>
    </div>
  );
}

function HowItWorks__Heading() {
  return (
    <div className="flex flex-col md:gap-14 text-center md:text-left mb-8">
      <h1 className="text-2xl md:text-5xl">HOW IT WORKS</h1>
      <p className=" opacity-90 font-light text-sm md:text-lg">
        With the power of negative ions, you can remove pollutants from the air,
        breathe better and live healthier.
      </p>
    </div>
  );
}

function Steps() {
  const steps = Array(5).fill({
    title: "Ion Generator",
    desc: `Releases negatively charged ions that destroy bad pollutants like virus,
            bacteria, dust and smoke.`,
  });

  return (
    <div>
      {steps.map((step, index) => (
        <div className="flex justify-start gap-3 md:gap-9">
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-400 font-semibold">
            {index + 1}
          </div>
          <div className="w-[90%]">
            <h1 className="text-sm md:text-xl font-semibold">{step.title}</h1>
            <p className="text-xs md:text-lg mt-1">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
