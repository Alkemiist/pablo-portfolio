'use client';

import { useEffect, useRef } from 'react';

export default function AutoplayVideo({
  src,
  poster,
  style,
}: {
  src: string;
  poster: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;

    const tryPlay = () => {
      v.play().catch(() => {});
    };

    if (v.readyState >= 3) {
      // Already has enough data
      tryPlay();
    } else {
      v.addEventListener('canplay', tryPlay, { once: true });
    }

    return () => {
      v.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      loop
      playsInline
      preload="auto"
      poster={poster}
      style={style}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
