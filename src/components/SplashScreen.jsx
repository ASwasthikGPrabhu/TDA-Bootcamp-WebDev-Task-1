import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaShoppingCart } from "react-icons/fa";

export default function SplashScreen({ onFinish }) {
  const splashRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    tl.from(splashRef.current, {
      scale: 1.8,
    //   opacity: 0,
      duration: 0.8,
    })
      .to(splashRef.current, {
        scale: 0.8,
        y: -120,
        duration: 0.8,
      });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0f0f14] text-white">
      <div ref={splashRef}>
        <FaShoppingCart
          className="text-violet-500 mx-auto"
          size={80}
        />

        <h1 className="text-5xl font-bold mt-4">
          ShopEasy
        </h1>
      </div>
    </div>
  );
}