"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "../ui/particles";
import { rubikBuble } from "@/utils/Helper/helper";
export function LoadingPage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className={`${rubikBuble.className} capitalize pointer-events-none z-40 whitespace-pre-wrap text-center text-8xl font-semibold leading-none animate-bounce`}>
        loading
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
