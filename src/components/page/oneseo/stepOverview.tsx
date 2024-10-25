const stepData: { content: string; color: string }[] = [
  { content: "원서 작성", color: "blue-300" },
  { content: "원서 제출", color: "blue-400" },
  { content: "숙려기간", color: "blue-500" },
  { content: "자퇴", color: "blue-600" },
];
function Step({
  title,
  content,
  color,
}: {
  title: string;
  content: string;
  color: string;
}) {
  return (
    <div
      className={`bg-${color} w-full aspect-square rounded-full grid content-center text-center text-white`}
    >
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default function StepOverview() {
  return (
    <div className="flex w-full py-10 gap-10 justify-center">
      {stepData.map((step, index) => (
        <Step
          key={index}
          title={(index + 1).toString()}
          content={step.content}
          color={step.color}
        />
      ))}
    </div>
  );
}
