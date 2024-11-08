"use client";

import { Dices } from "lucide-react";
import { getQuestion } from "pouzz-questions";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion

export default function ShuffleBtn({ setValue }: { setValue: any }) {
  const [isAnimating, setIsAnimating] = useState(false); // State for animation

  const generateAWord = () => {
    const word = getQuestion();
    setValue(word?.toString() || "");
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      title="Get a random suggestion"
      onClick={generateAWord}
      type="button"
      className="absolute bottom-2 right-2 z-50 flex h-9 w-9 items-center justify-center rounded-md border border-[#e73336]/30 bg-[#e73336]/10 p-[6px] transition duration-200 hover:border-[#e73336]/40 hover:bg-[#e73336]/20 disabled:border-[#e73336]/10 disabled:bg-[#e73336]/5"
    >
      <motion.div
        animate={
          isAnimating ? { scale: 1.08, rotate: 180 } : { scale: 1, rotate: 1 }
        }
        transition={{ type: "spring", stiffness: 350 }}
      >
        <Dices className="text-[#e73336] disabled:text-gray-100" />
      </motion.div>
    </button>
  );
}
