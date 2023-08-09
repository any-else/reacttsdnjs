import React from "react";

type Props =
  | {
      test: number;
    }
  | undefined;

const Test: React.FC = (props: Props) => {
  console.log("props", props);
  return <div>Test</div>;
};

export default Test;
