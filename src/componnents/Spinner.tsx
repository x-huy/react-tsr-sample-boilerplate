import { FC } from "react";

export interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <img
      className={`${className} w-6 h-6`}
      src="https://i.gifer.com/ZZ5H.gif"
      alt="loading"
    />
  );
};
