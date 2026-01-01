// Concept 2: Dynamic Slant - Inspired by fence, teys, AGAR italic styles

"use client";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className={cn("flex items-center gap-1", className)}>
      <NewLogo />
      <span className="text-sm text-neutral-600">StackMint Studio</span>
    </Link>
  );
};

export function NewLogo() {
  const { theme } = useTheme();

  // For light theme (dark backgrounds): blue logo
  // For dark theme (light backgrounds): slate STACK + blue MINT
  const stackColor = theme === "dark" ? "#0f172a" : "#0E5FC8";
  const mintColor = "#0E5FC8"; // Always blue

  return (
    <svg
      width="300"
      height="50"
      viewBox="0 0 500 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="slantGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={stackColor} stopOpacity="0.7" />
          <stop offset="50%" stopColor={stackColor} stopOpacity="1" />
          <stop offset="100%" stopColor={stackColor} stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="mintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={mintColor} stopOpacity="0.7" />
          <stop offset="50%" stopColor={mintColor} stopOpacity="1" />
          <stop offset="100%" stopColor={mintColor} stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* All letters slanted to the right (italic effect) using transform skewX */}
      <g transform="skewX(-12)">
        {/* STACKMINT in bold, condensed style */}

        {/* S */}
        <path
          d="M 30 45 Q 30 30, 50 30 L 70 30 Q 80 30, 80 40 Q 80 45, 70 47 L 45 52 Q 35 54, 35 62 Q 35 70, 45 70 L 70 70 Q 85 70, 85 58"
          fill={stackColor}
        />

        {/* T */}
        <rect x="95" y="30" width="50" height="10" fill={stackColor} />
        <rect x="110" y="30" width="18" height="40" fill={stackColor} />

        {/* A */}
        <path
          d="M 150 70 L 165 30 L 180 70 L 170 70 L 167 60 L 158 60 L 155 70 Z M 160 52 L 165 52"
          fill={stackColor}
        />
        <polygon
          points="160,30 170,30 182,70 172,70 169,60 161,60 158,70 148,70"
          fill={stackColor}
        />

        {/* C */}
        <path
          d="M 220 30 Q 195 30, 195 50 Q 195 70, 220 70 L 230 70 L 230 62 L 220 62 Q 205 62, 205 50 Q 205 38, 220 38 L 230 38 L 230 30 Z"
          fill={stackColor}
        />

        {/* K */}
        <rect x="245" y="30" width="15" height="40" fill={stackColor} />
        <polygon
          points="260,45 285,30 295,30 270,45 298,70 287,70 260,48"
          fill={stackColor}
        />

        {/* M */}
        <path
          d="M 310 70 L 310 30 L 325 30 L 337 55 L 349 30 L 364 30 L 364 70 L 354 70 L 354 45 L 342 70 L 332 70 L 320 45 L 320 70 Z"
          fill="url(#mintGradient)"
        />

        {/* I */}
        <rect x="377" y="30" width="15" height="40" fill="url(#mintGradient)" />

        {/* N */}
        <path
          d="M 405 70 L 405 30 L 418 30 L 440 60 L 440 30 L 450 30 L 450 70 L 437 70 L 415 40 L 415 70 Z"
          fill="url(#mintGradient)"
        />

        {/* T */}
        <rect x="463" y="30" width="40" height="10" fill="url(#mintGradient)" />
        <rect x="475" y="30" width="15" height="40" fill="url(#mintGradient)" />
      </g>

      {/* Small ".studio" text */}
      <text
        x="415"
        y="90"
        fill={theme === "dark" ? "#94a3b8" : "#64748b"}
        fontSize="14"
        fontFamily="system-ui"
      >
        .studio
      </text>
    </svg>
  );
}
