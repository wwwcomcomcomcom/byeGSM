import Clover from "./clover";
import Star from "./star";

export default function Banner() {
  return (
    <div className="bg-[#2F68C5] h-60 relative grid content-center">
      <Star className="absolute top-0 left-[15%]" />
      <Clover className="absolute bottom-0 right-[15%]" />
      <h1 className="text-center text-white text-4xl font-sans font-semibold">
        원서 작성 및 진행 절차 안내
      </h1>
    </div>
  );
}
