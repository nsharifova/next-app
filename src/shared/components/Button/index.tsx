import React, { FC } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Button: FC<IProps> = () => {
  return <button></button>;
};

const Wrapper = () => {
  return <Button name="" color="" />;
};
