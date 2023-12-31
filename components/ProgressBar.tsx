import { useEffect, useState } from "react";

interface ProgressBarProps {
  duration: number;
  selectedIdx: number;
  idx: number;
}
export default function ProgressBar({
  duration,
  selectedIdx,
  idx,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let startTime: number | undefined;
    let elapsedTime: number = 0;

    if (selectedIdx === idx) {
      startTime = Date.now();
      interval = setInterval(() => {
        elapsedTime = Date.now() - (startTime || 0);
        setProgress((elapsedTime / duration) * 100);

        if (elapsedTime >= duration) {
          clearInterval(interval);
        }
      }, 50);
    }
    return () => {
      clearInterval(interval);
    };
  }, [selectedIdx, idx, duration]);

  useEffect(() => {
    setProgress(0);
  }, [selectedIdx]);

  return (
    <div className="w-full h-2.5 bg-[#ccc] rounded-[5px]">
      <div
        className="h-full bg-[#09c03c] transition-[width] duration-[0.05s] rounded-[5px]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
