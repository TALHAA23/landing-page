import { useEffect, useRef } from "react";

export default function Reviews() {
  return (
    <div className="p-10">
      <div className="text-center text-3xl md:text-5xl">
        <h1>REAL CUSTOMER</h1>
        <h1 className="font-semibold">REAL REVIEWS</h1>
      </div>
      <ReviewSlider />
    </div>
  );
}

function ReviewSlider() {
  const reviews = Array(4).fill({
    img: "/review1.webp",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
    reviewer: "Lizzey B",
  });

  const reviewsEl = reviews.map((review) => (
    <span className=" shrink-0 w-[90%] md:w-1/3 px-2 bg-[#e9e8e8] space-y-2 rounded">
      <img className="mx-auto w-60" src={review.img} />
      <p className=" font-light">{review.review}</p>
      <h6 className="text-right">{review.reviewer}</h6>
    </span>
  ));
  return (
    <div className="scroll-smooth my-10 mx-auto flex gap-6 w-full  md:w-[90%] overflow-x-scroll">
      {reviewsEl}
    </div>
  );
}
