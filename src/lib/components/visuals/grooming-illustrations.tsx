import React, { useId, type ReactNode } from "react";

export type GroomingArt =
  | "brush"
  | "comb"
  | "dryer"
  | "scissors"
  | "shampoo";

type Props = {
  type: GroomingArt;
  size?: number | string;
  className?: string;
  decorative?: boolean;
};

type Palette = {
  aqua: string;
  light: string;
  dark: string;
  mint: string;
  shadow: string;
};

const C = {
  outline: "#105052",
  cream: "#fff5df",
  aqua: "#36b8b7",
  light: "#a9e8df",
  mint: "#d5f4e9",
  dark: "#167c7c",
  yellow: "#f5c94e",
};

function StickerShape({
  d,
  fill,
  strokeWidth = 7,
}: {
  d: string;
  fill: string;
  strokeWidth?: number;
}) {
  return (
    <>
      <path
        d={d}
        fill={fill}
        stroke={C.cream}
        strokeWidth={strokeWidth + 11}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill={fill}
        stroke={C.outline}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function DetailLine({
  d,
  width = 3,
  color = C.outline,
}: {
  d: string;
  width?: number;
  color?: string;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Shell({
  title,
  size,
  className,
  decorative = false,
  children,
}: {
  title: string;
  size: number | string;
  className?: string;
  decorative?: boolean;
  children: (ids: Palette) => ReactNode;
}) {
  const id = useId().replace(/:/g, "");

  const ids: Palette = {
    aqua: `${id}-aqua`,
    light: `${id}-light`,
    dark: `${id}-dark`,
    mint: `${id}-mint`,
    shadow: `${id}-shadow`,
  };

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative || undefined}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible" }}
    >
      {!decorative && <title>{title}</title>}

      <defs>
        <linearGradient id={ids.aqua} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#83ded2" />
          <stop offset="55%" stopColor="#36b8b7" />
          <stop offset="100%" stopColor="#168b8c" />
        </linearGradient>

        <linearGradient id={ids.light} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0fff1" />
          <stop offset="100%" stopColor="#8bded1" />
        </linearGradient>

        <linearGradient id={ids.dark} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#269d9b" />
          <stop offset="100%" stopColor="#105052" />
        </linearGradient>

        <linearGradient id={ids.mint} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#bcece0" />
        </linearGradient>

        <filter
          id={ids.shadow}
          x="-35%"
          y="-35%"
          width="170%"
          height="180%"
        >
          <feDropShadow
            dx="1"
            dy="5"
            stdDeviation="3"
            floodColor="#104e50"
            floodOpacity=".22"
          />
        </filter>
      </defs>

      <g filter={`url(#${ids.shadow})`}>{children(ids)}</g>
    </svg>
  );
}

export function GroomingIllustration({
  type,
  size = 180,
  className,
  decorative,
}: Props) {
  if (type === "brush") {
    return (
      <Shell title="Dog grooming slicker brush" size={size} className={className} decorative={decorative}>
        {(ids) => (
          <g transform="rotate(-13 100 100)">
            {/* Bristles */}
            <g>
              {Array.from({ length: 9 }).map((_, i) => {
                const x = 57 + i * 9;
                return (
                  <React.Fragment key={x}>
                    <DetailLine d={`M${x} 29 V12`} width={7} color={C.cream} />
                    <DetailLine d={`M${x} 29 V12`} width={3.5} />
                  </React.Fragment>
                );
              })}
            </g>

            {/* Brush body and handle */}
            <path
              d="M55 25 Q46 25 46 35 L46 79 Q46 89 56 89 L83 89 L73 151 Q71 164 82 168 Q94 172 98 159 L114 89 L132 89 Q142 89 142 79 L142 35 Q142 25 132 25 Z"
              fill={`url(#${ids.aqua})`}
              stroke={C.cream}
              strokeWidth="17"
              strokeLinejoin="round"
            />
            <path
              d="M55 25 Q46 25 46 35 L46 79 Q46 89 56 89 L83 89 L73 151 Q71 164 82 168 Q94 172 98 159 L114 89 L132 89 Q142 89 142 79 L142 35 Q142 25 132 25 Z"
              fill={`url(#${ids.aqua})`}
              stroke={C.outline}
              strokeWidth="7"
              strokeLinejoin="round"
            />

            {/* Brush pad */}
            <path
              d="M55 39 Q55 34 61 34 L126 34 Q133 34 133 41 L133 76 Q133 82 126 82 L61 82 Q55 82 55 76 Z"
              fill={`url(#${ids.dark})`}
            />

            {/* Soft highlight on brush pad */}
            <path
              d="M61 42 Q89 36 121 42"
              stroke="#9de9dc"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Handle detail */}
            <path
              d="M86 105 L81 147"
              stroke="#9de9dc"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="85" cy="155" r="5" fill={C.cream} />
            <circle cx="85" cy="155" r="2.3" fill={C.outline} />
          </g>
        )}
      </Shell>
    );
  }

  if (type === "comb") {
    return (
      <Shell title="Dog grooming comb" size={size} className={className} decorative={decorative}>
        {(ids) => (
          <g transform="rotate(-12 100 100)">
            {/* Comb handle and body */}
            <StickerShape
              d="M83 54 L83 146 Q83 160 96 162 Q109 164 112 150 L112 64 L155 64 Q164 64 164 55 L164 42 Q164 33 155 33 L48 33 Q39 33 39 42 L39 55 Q39 64 48 64 L83 64 Z"
              fill={`url(#${ids.aqua})`}
            />

            {/* Teeth */}
            {Array.from({ length: 13 }).map((_, i) => {
              const x = 49 + i * 8.1;
              return (
                <React.Fragment key={i}>
                  <DetailLine d={`M${x} 34 V13`} width={6} color={C.cream} />
                  <DetailLine d={`M${x} 34 V13`} width={3} />
                </React.Fragment>
              );
            })}

            {/* Comb highlight */}
            <path
              d="M48 46 H153"
              stroke="#a7eee0"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Handle highlight */}
            <path
              d="M95 78 V141"
              stroke="#a7e9dd"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <circle cx="98" cy="151" r="4" fill={C.cream} />
          </g>
        )}
      </Shell>
    );
  }

  if (type === "dryer") {
    return (
      <Shell title="Pet grooming hair dryer" size={size} className={className} decorative={decorative}>
        {(ids) => (
          <g transform="rotate(-10 100 100)">
            {/* Dryer nozzle */}
            <StickerShape
              d="M116 45 L164 34 Q173 32 175 41 L178 66 Q179 75 169 76 L119 70 Z"
              fill={`url(#${ids.light})`}
              strokeWidth={6}
            />

            {/* Dryer body and handle */}
            <StickerShape
              d="M49 56 Q49 36 69 31 L115 25 Q139 22 145 46 L149 67 Q151 87 131 94 L111 101 L116 145 Q118 159 104 162 L90 164 Q77 163 77 149 L76 103 L66 105 Q48 106 46 88 Z"
              fill={`url(#${ids.aqua})`}
            />

            {/* Back air intake */}
            <path
              d="M54 54 Q43 67 53 88"
              fill="none"
              stroke="#a6ece0"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Air vent details */}
            {[0, 1, 2, 3].map((i) => (
              <DetailLine
                key={i}
                d={`M${67 + i * 9} 43 L${70 + i * 9} 65`}
                width={3}
                color={C.outline}
              />
            ))}

            {/* Handle highlight */}
            <path
              d="M91 112 L96 145"
              stroke="#a5ebe0"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Dryer nozzle opening */}
            <path
              d="M145 45 L165 41 L168 66 L148 65 Z"
              fill={C.dark}
            />
            <path
              d="M151 49 L162 47"
              stroke="#a8eee2"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Cord */}
            <path
              d="M92 163 C90 176 103 178 105 187 C108 196 92 197 91 189"
              fill="none"
              stroke={C.cream}
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M92 163 C90 176 103 178 105 187 C108 196 92 197 91 189"
              fill="none"
              stroke={C.outline}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        )}
      </Shell>
    );
  }

  if (type === "scissors") {
    return (
      <Shell title="Dog grooming scissors" size={size} className={className} decorative={decorative}>
        {(ids) => (
          <g transform="rotate(-22 100 100)">
            {/* Blades */}
            <StickerShape
              d="M93 91 L43 21 Q39 15 45 12 Q51 10 55 17 L109 79 Z"
              fill={`url(#${ids.light})`}
              strokeWidth={5}
            />
            <StickerShape
              d="M107 91 L157 21 Q161 15 155 12 Q149 10 145 17 L91 79 Z"
              fill={`url(#${ids.light})`}
              strokeWidth={5}
            />

            {/* Center pivot */}
            <circle
              cx="100"
              cy="91"
              r="12"
              fill={C.cream}
              stroke={C.outline}
              strokeWidth="6"
            />
            <circle cx="100" cy="91" r="4" fill={C.yellow} />

            {/* Handles */}
            <StickerShape
              d="M91 100 C77 110 47 126 38 145 C32 158 43 174 57 170 C78 165 91 137 104 105 Z"
              fill={`url(#${ids.aqua})`}
              strokeWidth={6}
            />
            <StickerShape
              d="M109 100 C123 110 153 126 162 145 C168 158 157 174 143 170 C122 165 109 137 96 105 Z"
              fill={`url(#${ids.aqua})`}
              strokeWidth={6}
            />

            {/* Handle openings */}
            <ellipse
              cx="52"
              cy="148"
              rx="10"
              ry="15"
              transform="rotate(35 52 148)"
              fill={C.cream}
              stroke={C.outline}
              strokeWidth="4"
            />
            <ellipse
              cx="148"
              cy="148"
              rx="10"
              ry="15"
              transform="rotate(-35 148 148)"
              fill={C.cream}
              stroke={C.outline}
              strokeWidth="4"
            />

            {/* Blade shine */}
            <path
              d="M51 25 L84 71 M149 25 L116 71"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        )}
      </Shell>
    );
  }

  if (type === "shampoo") {
    return (
      <Shell title="Dog grooming shampoo bottle" size={size} className={className} decorative={decorative}>
        {(ids) => (
          <g transform="rotate(8 100 100)">
            {/* Pump */}
            <StickerShape
              d="M89 35 L89 19 Q89 13 96 13 L111 13 Q117 13 117 20 L117 35 Z"
              fill={`url(#${ids.dark})`}
              strokeWidth={5}
            />
            <StickerShape
              d="M101 17 L101 8 L143 8 Q151 8 151 15 Q151 21 143 21 L116 21"
              fill={`url(#${ids.aqua})`}
              strokeWidth={5}
            />

            {/* Neck */}
            <StickerShape
              d="M79 35 L128 35 L132 54 L75 54 Z"
              fill={`url(#${ids.aqua})`}
              strokeWidth={5}
            />

            {/* Bottle */}
            <StickerShape
              d="M69 53 Q69 46 78 46 L125 46 Q134 46 134 55 L145 77 Q150 87 150 101 L150 158 Q150 173 135 173 L67 173 Q52 173 52 158 L52 101 Q52 87 58 77 Z"
              fill={`url(#${ids.light})`}
            />

            {/* Label */}
            <path
              d="M68 91 Q68 84 77 84 L124 84 Q133 84 133 93 L133 139 Q133 147 124 147 L77 147 Q68 147 68 139 Z"
              fill={C.cream}
              stroke={C.outline}
              strokeWidth="4"
            />

            {/* Paw on label */}
            <g fill={C.aqua}>
              <ellipse cx="100" cy="119" rx="13" ry="10" />
              <ellipse cx="85" cy="106" rx="5" ry="7" />
              <ellipse cx="96" cy="101" rx="5" ry="7" />
              <ellipse cx="107" cy="101" rx="5" ry="7" />
              <ellipse cx="117" cy="107" rx="5" ry="7" />
            </g>

            {/* Bottle shine */}
            <path
              d="M62 98 L62 148"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".8"
            />
          </g>
        )}
      </Shell>
    );
  }

  return null;
}
