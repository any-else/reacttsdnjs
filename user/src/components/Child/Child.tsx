import React from "react";

type Props = {
  name: string;
} & (MaleProps | FemaleProps);

type MaleProps = {
  gender: "male";
  salary: number;
};
type FemaleProps = {
  gender: "female";
  weight: number;
};

const Child: React.FC<Props> = (props: Props) => {
  console.log(props);
  if (props.gender == "male") {
    //do something
  } else if (props.gender == "female") {
    //do something
  }

  return <div>Child</div>;
};

export default Child;
