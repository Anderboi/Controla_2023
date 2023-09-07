"use client";

import React, { useState, useRef, useEffect } from "react";

interface Props {
  initMin: number;
  initMax: number;
  min: number;
  max: number;
  step: number;
}

const RangeSlider = ({ initMax, initMin, max, min, step }: Props) => {

  const progressRef = useRef<HTMLInputElement>(null);
  const [minValue, setMinValue] = useState(initMin);
  const [maxValue, setMaxValue] = useState(initMax);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = (minValue / max) * step +'%';
      progressRef.current.style.right = step - (maxValue / max) * step + '%';
    }
  }, [minValue, maxValue,max,step]);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(`${maxValue}`)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };
  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(`${minValue}`)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center my-6">
        <div>
          <span className="p-2 font-semibold">Min</span>
          <input
            onChange={(e) => setMinValue(parseInt(e.target.value))}
            min={min}
            step={step}
            max={max}
            type="number"
            value={minValue}
          />
        </div>
        <div>
          <span className="p-2 font-semibold">Max</span>
          <input
            onChange={(e) => setMaxValue(parseInt(e.target.value))}
            min={min}
            step={step}
            max={max}
            type="number"
            value={maxValue}
          />
        </div>
      </div>

      {/* //* slider */}
      <div className="mb-4">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-5 bg-accent-dark rounded"
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative">
          <input
            onChange={handleMin}
            min={min}
            step={step}
            max={max}
            value={minValue}
            type="range"
            className="
            range-min
            absolute
            w-full
            -top-1
            h-1
            bg-transparent
            appearance-none
            pointer-events-none
            "
          />

          <input
            onChange={handleMax}
            min={min}
            step={step}
            max={max}
            value={maxValue}
            type="range"
            className="
            range-min
            absolute
            w-full
            -top-1
            h-1
            bg-transparent
            appearance-none
            pointer-events-none
            "
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
