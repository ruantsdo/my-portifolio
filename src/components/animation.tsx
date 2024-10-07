"use client";
import Lottie from "react-lottie-player";

interface Props {
  src: object;
  className?: string;
}

const LottieAnimation = ({ src, className }: Props) => {
  return <Lottie play loop animationData={src} className={className} />;
};

export default LottieAnimation;
