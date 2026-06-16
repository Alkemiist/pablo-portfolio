'use client';

import { useRef, useState } from 'react';

const C = {
  bgSurface:     '#14141c',
  bgCard:        '#1a1a24',
  purple:        '#7c6ff7',
  textSecondary: '#8e8aaa',
  textTertiary:  '#4e4b6a',
  borderSubtle:  'rgba(255,255,255,0.07)',
  borderStrong:  'rgba(255,255,255,0.12)',
} as const;

const mono = { fontFamily: 'var(--font-ibm-mono)' } as const;

const images = [
  { file: '2 option menus.png',             label: '2 option menus' },
  { file: 'bad IA. No design set.png',       label: 'Bad IA — no design system' },
  { file: 'Everything is diff sizes.png',    label: 'Everything is a different size' },
  { file: 'Missing filter.png',              label: 'Missing filter' },
  { file: 'NO Clear CTA you can click.png',  label: 'No clear CTA' },
  { file: 'No clear directive.png',          label: 'No clear directive' },
  { file: 'no clear interactive model.png',  label: 'No clear interactive model' },
  { file: 'no grid or spacing system.png',   label: 'No grid or spacing system' },
].map((img) => ({
  ...img,
  src: `/carousel/${encodeURIComponent(img.file)}`,
}));

const CARD_WIDTH = 180;   // px — width of each card
const GAP        = 12;    // px — gap between cards
const STEP       = CARD_WIDTH + GAP;

export default function LoisCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const maxOffset = Math.max(0, images.length * STEP - GAP - /* visible area approx */ 3 * STEP);

  const scroll = (dir: 'left' | 'right') => {
    setOffset((prev) => {
      const next = dir === 'right'
        ? Math.min(prev + STEP * 2, maxOffset)
        : Math.max(prev - STEP * 2, 0);
      return next;
    });
  };

  const atStart = offset === 0;
  const atEnd   = offset >= maxOffset;

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.purple }}>
            Original product audit
          </span>
          <span style={{ ...mono, fontSize: 10, color: C.textTertiary }}>
            — {images.length} screens
          </span>
        </div>

        {/* Arrow controls */}
        <div style={{ display: 'flex', gap: 6 }}>
          {(['left', 'right'] as const).map((dir) => {
            const disabled = dir === 'left' ? atStart : atEnd;
            return (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                disabled={disabled}
                aria-label={dir === 'left' ? 'Scroll left' : 'Scroll right'}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  border: `0.5px solid ${disabled ? C.borderSubtle : C.borderStrong}`,
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: disabled ? 'default' : 'pointer',
                  color: disabled ? C.textTertiary : C.textSecondary,
                  transition: 'color 0.15s ease, border-color 0.15s ease',
                  opacity: disabled ? 0.4 : 1,
                }}
              >
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
                </svg>
              </button>
            );
          })}
        </div>
      </div>

      {/* Track container — clips overflow */}
      <div style={{ overflow: 'hidden', borderRadius: 12 }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: GAP,
            transform: `translateX(-${offset}px)`,
            transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
          }}
        >
          {images.map((img) => (
            <div
              key={img.src}
              style={{
                flexShrink: 0,
                width: CARD_WIDTH,
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {/* Image card */}
              <div
                style={{
                  background: C.bgCard,
                  border: `0.5px solid ${C.borderStrong}`,
                  borderRadius: 10,
                  overflow: 'hidden',
                  aspectRatio: '9 / 16',
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{
                    width: '100%',
                    height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Label */}
              <p
                style={{
                  ...mono,
                  fontSize: 10,
                  color: C.textTertiary,
                  margin: '6px 2px 0',
                  lineHeight: 1.4,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 14, height: 2, background: C.borderSubtle, borderRadius: 1, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            borderRadius: 1,
            background: C.purple,
            opacity: 0.5,
            width: `${((offset / Math.max(maxOffset, 1)) * (100 - 30) + 30)}%`,
            transition: 'width 0.35s ease',
          }}
        />
      </div>
    </div>
  );
}
