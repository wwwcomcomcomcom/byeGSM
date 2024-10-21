import img1 from "../../assets/tired.png";
import img2 from "../../assets/sad.png";
import img3 from "../../assets/mad.png";
import icon from "../../assets/icon.png";
import StorySection from "../ui/storySection";
import { Button } from "../ui/button";

interface Story {
  title: string;
  image: string;
}

const stories: Story[] = [
  {
    title: "개발이 적성에 맞지 않는것 같아요",
    image: img1,
  },
  {
    title: "기숙사 생활이 힘들어요",
    image: img2,
  },
  {
    title: "학교가 너무 싫어요",
    image: img3,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 my-10">
        {stories.map((story, i) => (
          <StorySection story={story} isRight={i % 2 !== 0} />
        ))}
      </div>
      <div className="flex flex-col mt-32 gap-40 items-center">
        <h1 className="text-5xl">이런 고민을 해결해줄 해결사!</h1>
        <h2 className="text-6xl">Bye, GSM</h2>
        <img src={icon} alt="icon" className="w-96 animate-spin" />
        <Button className="w-1/3 h-20 text-xl rounded-2xl">
          지금 시작하기
        </Button>
      </div>
    </>
  );
}
