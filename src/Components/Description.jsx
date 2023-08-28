export default function Description() {
  return (
    <div
      className="w-full h-[80vh] flex md:items-center bg-[url('bg-image.webp')]
        bg-no-repeat bg-cover text-black py-10 px-4"
    >
      <div className="w-[90%] md:w-1/2 flex flex-col gap-10">
        <div className="text-lg md:text-5xl">
          <h1>WHAT YOU DON’T SEE</h1>
          <b> CAN STILL HURT YOU</b>
        </div>

        <p className="text-sm">
          The Environmental Protection Agency has ranked indoor air quality as
          one of the most concerning dangers we face every day. In fact, the EPA
          estimates that our indoor air has almost five times more pollutants
          than outdoor air.
        </p>

        <b className="text-sm">
          Our homes, offices and cars all contain airborne chemicals, gases and
          particles, which can have devastating effect on our health.
        </b>
      </div>
    </div>
  );
}
