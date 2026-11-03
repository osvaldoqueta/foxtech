'use client';

import React, { useId } from 'react';

export const FOX_VECTOR_PATHS = [
  "M 36.34 12.10 L 38.00 13.30 C 39.25 15.81, 41.29 21.79, 43.71 26.89 C 46.14 32.00, 49.18 37.67, 52.27 43.33 C 55.35 48.99, 58.68 55.21, 61.87 60.18 C 65.05 65.15, 70.99 72.56, 70.99 72.56 L 70.84 74.07 C 70.84 74.07, 61.79 74.85, 57.93 75.63 C 54.08 76.42, 48.19 78.67, 48.19 78.67 L 31.68 66.77 L 36.34 12.10 Z",
  "M 164.35 12.14 L 165.65 13.04 L 168.90 67.03 L 162.77 73.46 C 162.77 73.46, 157.12 66.58, 154.71 64.14 C 152.29 61.69, 151.16 60.89, 148.54 59.10 C 145.93 57.31, 143.62 55.74, 139.30 53.60 C 134.99 51.46, 123.15 46.49, 123.15 46.49 C 123.15 46.49, 143.41 33.10, 150.41 27.26 C 157.42 21.42, 164.35 12.14, 164.35 12.14 Z",
  "M 50.30 26.72 C 50.30 26.72, 73.44 43.02, 79.53 46.61 C 85.62 50.21, 81.77 47.51, 86.12 47.86 C 90.46 48.22, 99.75 48.12, 105.08 48.69 C 110.41 49.27, 112.90 49.95, 117.46 51.25 C 122.03 52.55, 126.93 54.03, 131.95 56.35 C 136.96 58.67, 143.02 62.14, 146.96 64.90 C 150.90 67.66, 152.86 70.05, 155.12 72.56 C 157.37 75.08, 159.12 77.80, 160.21 79.68 C 161.30 81.56, 161.63 81.21, 161.54 83.63 C 161.45 86.05, 159.83 91.48, 159.68 93.90 C 159.53 96.32, 159.06 95.01, 160.66 97.85 C 162.26 100.70, 166.14 106.74, 169.09 110.64 C 172.04 114.53, 178.00 120.77, 178.00 120.77 L 177.89 122.61 C 176.96 123.97, 174.19 127.16, 172.51 128.78 C 170.84 130.40, 169.09 131.53, 168.03 132.14 L 166.30 132.36 C 166.30 132.36, 166.01 128.64, 165.14 126.90 C 164.26 125.15, 161.86 123.57, 161.14 122.08 C 160.43 120.59, 165.55 124.36, 160.93 118.13 C 156.30 111.91, 140.84 92.50, 133.91 85.47 C 126.99 78.44, 127.27 79.92, 120.18 76.78 C 113.08 73.63, 98.73 69.70, 92.18 66.97 C 85.62 64.24, 87.54 65.57, 81.64 60.70 C 75.74 55.83, 62.54 43.47, 57.47 38.32 C 52.39 33.17, 53.03 32.39, 51.81 30.42 C 50.60 28.45, 50.30 26.72, 50.30 26.72 Z",
  "M 32.12 75.13 C 32.12 75.13, 37.02 78.32, 38.44 79.54 C 39.86 80.76, 40.48 82.31, 40.48 82.31 C 40.48 82.31, 31.08 87.70, 28.27 89.69 C 25.46 91.67, 23.96 93.98, 23.96 93.98 C 23.96 93.98, 41.79 88.55, 47.93 87.01 C 54.06 85.46, 55.56 85.15, 60.04 84.90 C 64.52 84.65, 69.92 85.01, 74.27 85.53 C 78.61 86.05, 81.61 86.83, 85.59 87.96 C 89.58 89.08, 93.27 90.17, 97.71 92.14 C 102.14 94.10, 107.28 96.82, 111.67 99.53 C 116.06 102.24, 117.65 103.19, 123.52 108.10 C 129.39 113.01, 139.81 124.70, 146.22 128.40 C 152.62 132.11, 157.80 129.22, 161.19 129.90 C 164.57 130.57, 166.11 132.36, 166.11 132.36 L 165.96 133.15 C 165.96 133.15, 166.25 134.08, 163.56 135.12 C 160.86 136.15, 153.84 139.03, 150.12 139.25 C 146.41 139.47, 146.17 139.64, 141.70 136.41 C 137.22 133.18, 128.24 123.75, 123.78 120.24 C 119.32 116.73, 119.40 117.33, 115.46 115.76 C 111.52 114.19, 106.67 112.04, 100.60 111.01 C 94.54 109.99, 85.43 109.68, 79.80 109.73 C 74.16 109.78, 72.96 109.90, 67.44 111.28 C 61.91 112.67, 52.26 115.85, 47.29 117.87 C 42.32 119.88, 42.44 120.17, 38.20 123.14 C 33.97 126.10, 22.38 135.31, 22.38 135.31 C 22.38 135.31, 21.86 127.96, 22.21 124.45 C 22.55 120.95, 23.52 117.71, 24.39 114.71 C 25.26 111.71, 25.80 109.76, 27.34 106.81 C 28.88 103.85, 33.47 97.32, 33.47 97.32 L 32.38 96.47 L 22.38 96.76 C 22.38 96.76, 21.29 93.41, 21.82 91.27 C 22.35 89.12, 23.75 86.90, 25.50 84.15 C 27.25 81.41, 32.12 75.13, 32.12 75.13 Z",
  "M 108.51 80.41 C 108.51 80.41, 122.03 84.42, 125.63 85.90 C 129.23 87.39, 128.27 87.62, 129.69 89.16 C 131.11 90.70, 133.98 94.95, 133.98 94.95 C 133.98 94.95, 123.48 93.93, 120.62 93.46 C 117.77 92.99, 119.22 94.08, 117.20 92.19 C 115.17 90.29, 110.19 84.31, 108.71 82.31 L 108.51 80.41 Z",
  "M 74.00 114.17 L 75.58 114.22 L 76.01 115.23 C 76.01 115.23, 73.25 120.06, 72.41 122.35 C 71.58 124.63, 70.78 125.44, 71.10 128.67 C 71.42 131.89, 72.67 137.18, 74.28 141.31 C 75.89 145.44, 75.44 145.05, 80.59 152.98 C 85.73 160.90, 104.54 187.93, 104.54 187.93 C 104.54 187.93, 79.52 171.86, 71.37 165.99 C 63.22 160.12, 56.59 153.43, 56.59 153.43 L 55.22 154.74 L 56.42 167.12 L 55.04 167.38 C 55.04 167.38, 52.04 164.49, 50.58 162.38 C 49.12 160.28, 47.67 157.69, 46.45 155.01 C 45.23 152.32, 44.01 149.09, 43.39 146.58 C 42.77 144.07, 42.80 142.54, 42.82 140.26 C 42.84 137.97, 42.94 135.43, 43.51 133.15 C 44.09 130.86, 45.00 128.74, 46.20 126.82 C 47.40 124.91, 48.97 123.15, 50.56 121.88 C 52.15 120.60, 51.58 120.63, 55.56 119.32 C 59.55 118.01, 70.60 115.04, 74.00 114.17 Z",
  "M 112.00 119.00 C 98.50 133.50, 97.50 155.00, 106.20 178.50 C 111.00 154.50, 118.80 140.50, 132.80 133.20 C 126.00 125.80, 119.00 121.20, 112.00 119.00 Z",
];

interface FoxtechIconProps {
  className?: string;
  monochrome?: string;
}

export function FoxtechIcon({ className = "w-10 h-10", monochrome }: FoxtechIconProps) {
  const uid = useId().replace(/:/g, '');
  const fills = monochrome
    ? Array(7).fill(monochrome)
    : [
        `url(#${uid}-bright)`,
        `url(#${uid}-main)`,
        `url(#${uid}-main)`,
        `url(#${uid}-bright)`,
        "#FF6800",
        `url(#${uid}-deep)`,
        `url(#${uid}-main)`,
      ];

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {!monochrome && (
        <defs>
          <linearGradient id={`${uid}-main`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7B00" />
            <stop offset="55%" stopColor="#FF6800" />
            <stop offset="100%" stopColor="#FF3600" />
          </linearGradient>
          <linearGradient id={`${uid}-bright`} x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FF9500" />
            <stop offset="100%" stopColor="#FF5500" />
          </linearGradient>
          <linearGradient id={`${uid}-deep`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5800" />
            <stop offset="100%" stopColor="#D92B00" />
          </linearGradient>
        </defs>
      )}
      {FOX_VECTOR_PATHS.map((d, idx) => (
        <path key={idx} d={d} fill={fills[idx]} />
      ))}
    </svg>
  );
}

interface FoxtechLogoProps {
  variant?: 'header' | 'footer' | 'primary' | 'white' | 'black' | 'orange';
  slogan?: string;
  className?: string;
}

export default function FoxtechLogo({
  variant = 'header',
  slogan,
  className = '',
}: FoxtechLogoProps) {
  const isWhite = variant === 'white';
  const isBlack = variant === 'black';
  const isOrange = variant === 'orange';

  const foxTextColor = isBlack ? '#080B12' : isOrange ? '#FF6800' : '#FFFFFF';
  const techTextColor = isWhite ? '#FFFFFF' : isBlack ? '#080B12' : '#FF6800';
  const monoIcon = isWhite ? '#FFFFFF' : isBlack ? '#080B12' : isOrange ? '#FF6800' : undefined;

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <FoxtechIcon className="w-11 h-11 shrink-0 drop-shadow-[0_0_12px_rgba(255,104,0,0.35)]" monochrome={monoIcon} />
        <div className="flex flex-col justify-center">
          <div className="font-black text-2xl tracking-wider leading-none italic" style={{ transform: 'skewX(-6deg)' }}>
            <span style={{ color: foxTextColor }}>FOX</span>
            <span style={{ color: techTextColor }}>TECH</span>
          </div>
          <span className="text-[11px] font-medium text-[#A8AFB8] tracking-wide mt-1">
            {slogan || 'Inovação. Estratégia. Resultados.'}
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'primary') {
    return (
      <div className={`inline-flex items-center gap-4 select-none ${className}`}>
        <FoxtechIcon className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-[0_0_16px_rgba(255,104,0,0.4)]" monochrome={monoIcon} />
        <div className="h-10 w-[1px] bg-white/20" />
        <div className="flex flex-col justify-center">
          <div className="font-black text-3xl sm:text-4xl tracking-wider leading-none italic" style={{ transform: 'skewX(-6deg)' }}>
            <span style={{ color: foxTextColor }}>FOX</span>
            <span style={{ color: techTextColor }}>TECH</span>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-[#D0D5DD] uppercase tracking-[0.25em] mt-1.5">
            {slogan || 'INOVAÇÃO. ESTRATÉGIA. RESULTADOS.'}
          </span>
        </div>
      </div>
    );
  }

  // Default: 'header' compact horizontal
  return (
    <div className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      <FoxtechIcon
        className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 drop-shadow-[0_0_10px_rgba(255,104,0,0.4)] group-hover:scale-105 transition-transform duration-300"
        monochrome={monoIcon}
      />
      <div
        className="font-black text-xl sm:text-2xl tracking-wider leading-none italic"
        style={{ transform: 'skewX(-6deg)' }}
      >
        <span style={{ color: foxTextColor }}>FOX</span>
        <span style={{ color: techTextColor }}>TECH</span>
      </div>
    </div>
  );
}

