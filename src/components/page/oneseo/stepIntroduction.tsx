const stepData: { title: string; contents: string[] }[] = [
  {
    title: "원서 작성",
    contents: ["자퇴 사유를 적고 부모님 서명을 받습니다."],
  },
  {
    title: "원서 제출",
    contents: ["원서를 학교에 제출합니다."],
  },
  {
    title: "숙려기간",
    contents: [
      "학교에서 자퇴에 대해 생각할 시간을 줍니다.",
      "학교에서 몇번 선생님과 상담하기도합니다.",
    ],
  },
  {
    title: "자퇴",
    contents: ["교장선생님의 도장을 받고 자퇴합니다."],
  },
];
function Step({
  index,
  title,
  contents,
}: {
  index: number;
  title: string;
  contents: string[];
}) {
  let indexLabel = index.toString();
  if (indexLabel.length === 1) {
    indexLabel = "0" + indexLabel;
  }

  return (
    <div className="w-full font-sans font-bold border-b border-gray-200 py-8">
      <h1>
        <p className="text-blue-400 inline">{indexLabel}. </p>
        {title}
      </h1>
      <ul className="list-disc pl-6">
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default function StepIntroduction() {
  return (
    <div className="flex flex-col gap-4">
      {stepData.map((step, index) => (
        <Step
          key={index}
          index={index + 1}
          title={step.title}
          contents={step.contents}
        />
      ))}
    </div>
  );
}
