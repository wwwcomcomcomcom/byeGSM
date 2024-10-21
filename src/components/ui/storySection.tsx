import React from "react";

interface StorySectionProps extends React.HTMLProps<HTMLDivElement> {
  story: {
    title: string;
    image: string;
  };
  isRight?: boolean;
}

export default function StorySection(props: StorySectionProps) {
  const isRight = props.isRight ?? false;
  return (
    <div className="w-3/4 h-28 flex items-center bg-slate-100 rounded-full shadow-2xl relative">
      <div className="text-5xl font-bold flex-grow text-center">
        {props.story.title}
      </div>
      <img
        src={props.story.image}
        alt={props.story.title}
        className={"w-28 absolute " + (isRight ? "right-0" : "left-0")}
      />
    </div>
  );
}
