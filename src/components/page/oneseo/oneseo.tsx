import { Button } from "@/components/ui/button";
import Banner from "./banner";
import StepOverview from "./stepOverview";
import StepIntroduction from "./stepIntroduction";

export default function OneseoPage() {
  return (
    <>
      <Banner />
      <div className="w-full flex justify-center">
        <div className="w-3/4 max-lg:w-5/6 max-md:w-full max-w-screen-lg flex flex-col mb-20">
          <StepOverview />
          <StepIntroduction />
          <Button className="w-80 h-16 text-2xl rounded-xl sticky bottom-10 left-1/2 -translate-x-1/2 my-10 bg-blue-400">
            원서 작성하기
          </Button>
        </div>
      </div>
    </>
  );
}
