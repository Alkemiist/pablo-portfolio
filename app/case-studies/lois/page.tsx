import { Playfair_Display, IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import LoisCarousel from './LoisCarousel';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
});

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bgBase: '#0d0d12',
  bgSurface: '#14141c',
  bgCard: '#1a1a24',
  bgElevated: '#21212e',
  purple: '#7c6ff7',
  warm: '#c4a882',
  textPrimary: '#edeaf5',
  textSecondary: '#8e8aaa',
  textTertiary: '#4e4b6a',
  borderSubtle: 'rgba(255,255,255,0.07)',
  borderStrong: 'rgba(255,255,255,0.12)',
  success: '#4caf82',
} as const;

// ─── Shared inline style helpers ──────────────────────────────────────────────
const monoFont = { fontFamily: 'var(--font-ibm-mono)' } as const;
const playfairFont = { fontFamily: 'var(--font-playfair)' } as const;
const borderSubtle = { border: `0.5px solid ${C.borderSubtle}` } as const;
const borderStrong = { border: `0.5px solid ${C.borderStrong}` } as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepLabel({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <span style={{ ...monoFont, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.purple }}>
        <span style={{ color: C.textTertiary }}>{n}</span> — {title}
      </span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        ...playfairFont,
        fontSize: 'clamp(26px, 3vw, 34px)',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
        color: C.textPrimary,
        margin: '0 0 12px 0',
      }}
    >
      {children}
    </h2>
  );
}

function GoalPill({ text }: { text: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <span
        style={{
          display: 'inline-block',
          ...monoFont,
          fontSize: 11,
          textTransform: 'uppercase',
          color: C.textTertiary,
          background: C.bgSurface,
          ...borderSubtle,
          borderRadius: 6,
          padding: '8px 12px',
        }}
      >
        Goal: {text}
      </span>
    </div>
  );
}

function BodyText({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 16, lineHeight: 1.8, color: C.textSecondary, ...style }}>
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div style={{ width: 40, height: 0.5, background: C.borderStrong, margin: '28px 0' }} />
  );
}

function FeynmanCheck({ text }: { text: string }) {
  return (
    <div
      style={{
        border: `0.5px dashed rgba(124,111,247,0.35)`,
        borderRadius: 10,
        padding: '14px 18px',
        background: 'rgba(124,111,247,0.04)',
      }}
    >
      <div style={{ ...monoFont, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.purple, opacity: 0.7, marginBottom: 6 }}>
        Feynman Check
      </div>
      <p style={{ ...monoFont, fontSize: 12, color: C.textSecondary, fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

function DiagnosisBlock({ rows, accent = 'purple' }: { rows: { label: string; value: string }[]; accent?: 'purple' | 'warm' }) {
  const accentColor = accent === 'warm' ? C.warm : C.purple;
  return (
    <div
      style={{
        background: C.bgCard,
        ...borderStrong,
        borderLeft: `3px solid ${accentColor}`,
        borderRadius: 14,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {rows.map((row) => (
        <div key={row.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', color: C.textTertiary, minWidth: 72, paddingTop: 2 }}>
            {row.label}
          </div>
          <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.65 }}>
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function HMWBlock({ label, quote }: { label: string; quote: string }) {
  return (
    <div
      style={{
        background: 'rgba(124,111,247,0.06)',
        border: '0.5px solid rgba(124,111,247,0.25)',
        borderRadius: 14,
        padding: 28,
        textAlign: 'center',
      }}
    >
      <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', color: C.purple, opacity: 0.7, marginBottom: 14, letterSpacing: '0.08em' }}>
        {label}
      </div>
      <p style={{ ...playfairFont, fontSize: 18, fontStyle: 'italic', color: C.textPrimary, lineHeight: 1.5, margin: 0 }}>
        {quote}
      </p>
    </div>
  );
}

function ObservationList({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((obs, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            background: C.bgCard,
            ...borderSubtle,
            borderRadius: 10,
            padding: '12px 16px',
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: C.purple,
              opacity: 0.6,
              flexShrink: 0,
              marginTop: 6,
            }}
          />
          <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
            {obs}
          </p>
        </div>
      ))}
    </div>
  );
}

function HypothesisList({ items }: { items: { n: string; body: string; principle: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((h) => (
        <div
          key={h.n}
          style={{
            display: 'grid',
            gridTemplateColumns: '48px 1fr',
            background: C.bgCard,
            ...borderSubtle,
            borderRadius: 12,
            padding: 18,
            gap: 16,
          }}
        >
          <div style={{ ...monoFont, fontSize: 13, color: C.purple, paddingTop: 2 }}>{h.n}</div>
          <div>
            <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.65, margin: '0 0 8px 0' }}>
              {h.body}
            </p>
            <p style={{ ...monoFont, fontSize: 11, color: C.textTertiary, margin: 0 }}>
              Principle: {h.principle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BuildStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: C.bgCard,
            ...borderSubtle,
            borderRadius: 12,
            padding: 20,
            textAlign: 'center',
          }}
        >
          <div style={{ ...playfairFont, fontSize: 28, fontWeight: 700, color: C.textPrimary, marginBottom: 8 }}>
            {s.value}
          </div>
          <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', color: C.textTertiary, lineHeight: 1.4 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ImagePlaceholder({
  label,
  description,
  caption,
}: {
  label: string;
  description: string;
  caption: string;
}) {
  return (
    <div>
      {/* Outer wrapper — same width as one duo panel so height matches */}
      <div
        style={{
          background: C.bgSurface,
          ...borderStrong,
          borderRadius: 14,
          padding: 8,
          aspectRatio: '340 / 600',
          width: '50%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            border: '1.5px dashed rgba(124,111,247,0.2)',
            borderRadius: 12,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: '24px 20px',
          }}
        >
          <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.purple }}>
            {label}
          </div>
          <p style={{ fontSize: 13, color: C.textTertiary, textAlign: 'center', lineHeight: 1.5, margin: 0, maxWidth: 480 }}>
            {description}
          </p>
        </div>
      </div>
      <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
        {caption}
      </p>
    </div>
  );
}

function ImagePlaceholderDuo({
  leftLabel, leftDesc, leftCaption,
  rightLabel, rightDesc, rightCaption,
}: {
  leftLabel: string; leftDesc: string; leftCaption: string;
  rightLabel: string; rightDesc: string; rightCaption: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        { label: leftLabel, desc: leftDesc, caption: leftCaption },
        { label: rightLabel, desc: rightDesc, caption: rightCaption },
      ].map((p) => (
        <div key={p.label}>
          <div
            style={{
              background: C.bgSurface,
              ...borderStrong,
              borderRadius: 14,
              padding: 8,
              aspectRatio: '340 / 600',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                border: '1.5px dashed rgba(124,111,247,0.2)',
                borderRadius: 12,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '20px 16px',
              }}
            >
              <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.purple }}>
                {p.label}
              </div>
              <p style={{ fontSize: 12, color: C.textTertiary, textAlign: 'center', lineHeight: 1.5, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          </div>
          <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '8px 12px 12px', textAlign: 'center', margin: 0 }}>
            {p.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

function AnalysisRow({ n, status, body }: { n: string; status: string; body: string }) {
  return (
    <div
      style={{
        background: C.bgCard,
        ...borderSubtle,
        borderRadius: 10,
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div style={{ ...monoFont, fontSize: 13, color: C.purple, minWidth: 32 }}>{n}</div>
      <div style={{ minWidth: 90 }}>
        <span
          style={{
            ...monoFont,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: C.success,
            background: 'rgba(76,175,130,0.1)',
            padding: '4px 10px',
            borderRadius: 20,
          }}
        >
          {status}
        </span>
      </div>
      <p style={{ fontSize: 13.5, color: C.textSecondary, lineHeight: 1.55, margin: 0 }}>
        {body}
      </p>
    </div>
  );
}

function PatternCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div style={{ background: C.bgCard, ...borderSubtle, borderRadius: 14, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{ ...monoFont, fontSize: 11, color: C.purple }}>Pattern {n}</span>
        <h3 style={{ fontSize: 15, fontWeight: 500, color: C.textPrimary, margin: 0 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 14, color: C.textTertiary, lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LOISCaseStudy() {
  return (
    <div
      className={`${playfair.variable} ${ibmMono.variable}`}
      style={{ background: C.bgBase, minHeight: '100vh', color: C.textPrimary, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
    >
      <Navigation />


      {/* ─── Main content ─── */}
      <div className="px-5 sm:px-8" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>

          {/* ═══════════════════ HERO ═══════════════════ */}
          <header style={{ paddingBottom: 80 }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <span style={{ ...monoFont, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.purple }}>
                Case Study — Legal AI / Word Add-in
              </span>
              <div style={{ width: 48, height: 0.5, background: C.purple, opacity: 0.4 }} />
            </div>

            {/* Title */}
            <h1
              style={{
                ...playfairFont,
                fontSize: 'clamp(38px, 5vw, 58px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: C.textPrimary,
                margin: '0 0 16px 0',
              }}
            >
              LOIS for Word
            </h1>

            {/* Subtitle */}
            <p style={{ ...playfairFont, fontSize: 18, fontStyle: 'italic', color: C.textSecondary, marginBottom: 28, lineHeight: 1.5 }}>
              A take-home that became a production redesign
            </p>

            {/* Meta tags */}
            <div className="flex flex-wrap gap-2" style={{ marginBottom: 40 }}>
              {[
                { label: 'Product Design + Frontend Engineering', accent: true },
                { label: '48 Hours' },
                { label: 'Next.js · TypeScript · Tailwind' },
                { label: 'Filevine / LOIS' },
              ].map((tag) => (
                <span
                  key={tag.label}
                  style={{
                    ...monoFont,
                    fontSize: 11,
                    padding: '5px 12px',
                    borderRadius: 20,
                    border: tag.accent ? '0.5px solid rgba(124,111,247,0.4)' : `0.5px solid ${C.borderStrong}`,
                    color: tag.accent ? C.purple : C.textSecondary,
                    background: tag.accent ? 'rgba(124,111,247,0.08)' : 'transparent',
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Lead */}
            <BodyText style={{ marginBottom: 40 }}>
              Filevine gave me a 4-hour design exercise. I submitted that. Then I kept going — two days of thinking, designing, and building because I couldn't put the problem down. This is what that looks like.
            </BodyText>

            {/* Word constraint callout */}
            <div style={{ marginBottom: 40, border: `0.5px solid ${C.borderSubtle}`, borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'stretch' }}>
                {/* Simulated Word document */}
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', padding: '20px 24px', borderRight: `0.5px solid ${C.borderSubtle}` }}>
                  <div style={{ ...monoFont, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.textTertiary, marginBottom: 10 }}>
                    Word document
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {[100, 82, 96, 68, 90, 75, 88].map((w, i) => (
                      <div key={i} style={{ height: 7, borderRadius: 2, background: C.borderSubtle, width: `${w}%` }} />
                    ))}
                  </div>
                </div>
                {/* Simulated add-in panel */}
                <div style={{ width: 110, background: C.bgCard, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ ...monoFont, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.purple, marginBottom: 2, textAlign: 'center' }}>
                    Add-in · 340px
                  </div>
                  <div style={{ width: '100%', height: 20, borderRadius: 4, background: 'rgba(124,111,247,0.15)', border: '0.5px solid rgba(124,111,247,0.3)' }} />
                  <div style={{ display: 'flex', gap: 4 }}>
                    {['40%','40%','20%'].map((w, i) => (
                      <div key={i} style={{ height: 14, borderRadius: 3, background: C.borderSubtle, width: w }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1 }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ height: 6, borderRadius: 2, background: C.borderSubtle }} />
                    ))}
                  </div>
                  <div style={{ width: '100%', height: 20, borderRadius: 4, background: 'rgba(124,111,247,0.1)', border: '0.5px solid rgba(124,111,247,0.2)' }} />
                </div>
              </div>
              <div style={{ padding: '10px 20px', borderTop: `0.5px solid ${C.borderSubtle}` }}>
                <p style={{ ...monoFont, fontSize: 11, color: C.textTertiary, margin: 0, lineHeight: 1.6 }}>
                  LOIS lives in a{' '}
                  <span style={{ color: C.textSecondary }}>340px panel inside Microsoft Word</span>
                  {' '}— not a standalone app. Every design decision around navigation, density, and hierarchy happens within that constraint.
                </p>
              </div>
            </div>

            {/* Context strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                ...borderSubtle,
                borderRadius: 12,
                overflow: 'hidden',
              }}
              className="sm:grid-cols-4"
            >
              {[
                { label: 'Company', value: 'Filevine / LOIS' },
                { label: 'Product', value: 'AI Legal Document Assistant' },
                { label: 'Brief', value: '4-hour design critique' },
                { label: 'Delivered', value: 'Full production redesign' },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    padding: '20px 16px',
                    borderRight: i % 2 === 0 ? `0.5px solid ${C.borderSubtle}` : 'none',
                    borderBottom: i < 2 ? `0.5px solid ${C.borderSubtle}` : 'none',
                  }}
                >
                  <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', color: C.textTertiary, marginBottom: 6, letterSpacing: '0.08em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: C.textPrimary }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </header>

          {/* ═══════════════════ 01 — OBSERVE ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="01" title="Observe" />
            <SectionHeading>Observe</SectionHeading>
            <GoalPill text="Understand reality as it is, not as you think it is" />

            <BodyText style={{ marginBottom: 28 }}>
              I opened the product cold. No instructions, no walkthrough. Three minutes in — I was stuck. Not because the tool was bad, but because it gave me no signal of what to do next. That's a data point. I ran the full workflow: Composer, Review, playbook runs, menu states. I documented what I observed before reaching for a solution.
            </BodyText>

            <Divider />

            <div style={{ marginBottom: 40 }}>
              <ObservationList
                items={[
                  'The workspace/profile selector disappeared entirely when switching to the Review tab — the component that scopes every action in the tool was treated as optional.',
                  'The empty state was a personalized greeting. No affordances, no examples, no indication of what the tool could do.',
                  "Two adjacent icon buttons of equal visual weight created ambiguity — one was a LOIS control, the other was Word's native add-in system menu.",
                  'Four unlabeled icons in the input toolbar. No tooltips, no labels, no hover states. Trial-and-error as the only discovery path.',
                  '"Review" existed as a primary tab AND as a section header inside the overflow menu — the same word doing two different jobs with no explanation.',
                ]}
              />
            </div>

            {/* Carousel — original product audit */}
            <div style={{ marginBottom: 40 }}>
              <LoisCarousel />
            </div>

            {/* Side-by-side: original Composer + Review */}
            <div style={{ marginBottom: 40 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { src: '/lois-original-composer.png', alt: 'Original LOIS Composer tab showing personalized greeting empty state with no affordances', caption: 'Original — Composer empty state' },
                  { src: '/lois-original-review.png',   alt: 'Original LOIS Review tab showing playbook list with no workspace context visible', caption: 'Original — Review tab' },
                ].map((img) => (
                  <div key={img.src}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                    />
                    <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '8px 12px 12px', textAlign: 'center', margin: 0 }}>
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <FeynmanCheck text={`"Can I explain the problem to someone unfamiliar with this domain in simple terms?" — Yes: the product has no structural logic about what information is always relevant versus what is context-dependent. If I can't say that simply, I don't understand it yet.`} />
          </section>

          {/* ═══════════════════ 02 — QUESTION ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="02" title="Question" />
            <SectionHeading>Question</SectionHeading>
            <GoalPill text="Define the real problem, not the symptom" />

            <BodyText style={{ marginBottom: 32 }}>
              The easy read was: this product needs visual polish. That's the wrong diagnosis. Polish is a symptom treatment. I needed to find the disease.
            </BodyText>

            <div style={{ marginBottom: 32 }}>
              <DiagnosisBlock
                rows={[
                  { label: 'Symptom', value: 'Navigation feels inconsistent. Components appear and disappear. The interface is hard to trust.' },
                  { label: 'Disease', value: 'The information architecture has no single owner. No one resolved what was global versus local before components were built. Everything downstream is broken because the structural question was never answered.' },
                  { label: 'Evidence', value: 'The workspace selector — which scopes every action in the tool — disappears in Review. A user can run a full playbook against a document with zero visibility into which profile is active. That is not a placement bug. That is a trust failure.' },
                ]}
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <HMWBlock
                label="Core Problem Statement"
                quote='"How might we give legal professionals a tool that communicates its context clearly at every moment — so every action they take is grounded in confidence, not assumption?"'
              />
            </div>

            <FeynmanCheck text={`"Am I solving the problem I want to solve, or the actual problem?" — The temptation is to redesign the visual layer. The actual problem is structural. I'm not touching colors until the hierarchy is resolved.`} />
          </section>

          {/* ═══════════════════ 03 — HYPOTHESIS ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="03" title="Hypothesis" />
            <SectionHeading>Hypothesis</SectionHeading>
            <GoalPill text="Form testable predictions before designing anything" />

            <BodyText style={{ marginBottom: 32 }}>
              Every design decision is a bet. I made mine explicit before opening a design tool. Each hypothesis references the underlying principle that makes it defensible.
            </BodyText>

            <div style={{ marginBottom: 32 }}>
              <HypothesisList
                items={[
                  {
                    n: 'H1',
                    body: "If the workspace bar is made globally persistent above the tab row, users will always know which profile they're operating in — eliminating silent errors from wrong-context sessions.",
                    principle: 'Context that scopes all actions must be visible at all times.',
                  },
                  {
                    n: 'H2',
                    body: 'If the empty state surfaces document-aware contextual prompts, users will reach first value in under 10 seconds without any external guidance.',
                    principle: "The empty state is the product's primary onboarding surface.",
                  },
                  {
                    n: 'H3',
                    body: 'If finding cards expand to a full-screen detail panel, we solve density and trust simultaneously — lightweight cards for scanning, depth for decision-making.',
                    principle: 'In high-stakes professional tools, skimming and trusting are different cognitive modes requiring different surfaces.',
                  },
                  {
                    n: 'H4',
                    body: 'If conversation history is accessible via an overlay pattern, multi-session legal work becomes continuous without consuming permanent screen real estate.',
                    principle: 'Borrow the mental model from Claude, ChatGPT, Gemini — but adapt it to the 340px constraint rather than copying it directly.',
                  },
                ]}
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Tradeoff',
                    value: 'H1 costs approximately 50–60px of vertical real estate permanently. I accepted that tradeoff because the alternative — context that disappears when you need it most — produces trust failures that are structurally more damaging than a compressed content area. In a legal workflow, operating in the wrong workspace silently is worse than a tight screen.',
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Can these hypotheses be proven wrong?" — H1 is proven wrong if users never glance at the workspace bar after login. H2 is proven wrong if prompt chips are ignored after day two. H3 is proven wrong if users prefer acting directly from the card without going deeper. All testable.`} />
          </section>

          {/* ═══════════════════ 04 — EXPERIMENT ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="04" title="Experiment" />
            <SectionHeading>Experiment</SectionHeading>
            <GoalPill text="Build only what you need to validate or invalidate" />

            <BodyText style={{ marginBottom: 40 }}>
              I didn't build a prototype. I built the product. A working Next.js application in TypeScript and Tailwind — full component architecture, real interactions, new features the original didn't have. The decision was deliberate: if I was going to critique a production add-in, I needed to prove the solution was production-viable, not just visually appealing.
            </BodyText>

            <div style={{ marginBottom: 32 }}>
              <BuildStats
                stats={[
                  { value: '48hrs', label: 'Observation to deployed code' },
                  { value: '0→1', label: 'Built from scratch' },
                  { value: '5', label: 'New features shipped' },
                ]}
              />
            </div>

            {/* GitHub link */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  ...monoFont,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: C.purple,
                  textDecoration: 'none',
                  border: '0.5px solid rgba(124,111,247,0.3)',
                  borderRadius: 8,
                  padding: '10px 18px',
                  background: 'rgba(124,111,247,0.06)',
                  transition: 'all 0.15s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View the code on GitHub →
              </a>
            </div>

            {/* Composer */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                The Composer — rebuilt from the ground up.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                Workspace bar anchored globally. Dismissible banner powered by a narrow-scoped API call on document load — surfaces renewal dates, missing signatures, document type. Contextual prompt chips replace the greeting. History accessible via clock icon overlay. New chat always one tap away.
              </p>
              <div>
                <img
                  src="/lois-composer-redesign.png"
                  alt="Redesigned LOIS Composer showing global workspace bar, document-aware banner, and contextual prompt chips"
                  style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Redesign — Composer with global chrome, document-aware banner, and contextual empty state
                </p>
              </div>
            </div>

            <Divider />

            {/* Review tab */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                The Review tab — made intelligent.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                The same API call that powers the banner tells Review which playbook to recommend. Playbook is surfaced with a "LOIS Recommends" label and a confidence signal. Recent Runs filter added — so users can see what's been run, when, and whether the document has changed since.
              </p>
              <div>
                <img
                  src="/lois-review-redesign.png"
                  alt='Redesigned LOIS Review tab with document-aware playbook recommendation, "matches document type" label, and Recent Runs filter'
                  style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Redesign — Review tab with contextual playbook recommendation and history
                </p>
              </div>
            </div>

            <Divider />

            {/* Playbook flow */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                The playbook flow — given structural IA.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                A persistent top bar below the main tabs shows the active playbook name and an exit button at every stage. The user always knows where they are, what's running, and how to leave. CTAs anchored sticky at the bottom — not floating mid-screen.
              </p>
              <div>
                <img
                  src="/lois-playbook-preflight.png"
                  alt="Redesigned LOIS pre-flight playbook screen with persistent context bar, playbook name, exit button, and anchored CTA stack"
                  style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Redesign — Pre-flight screen with persistent playbook context bar and anchored CTA
                </p>
              </div>
            </div>

            <Divider />

            {/* Results screen */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                The results screen — triage first.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                Issues sorted by severity: HIGH → MED → LOW → PASSED. Summary count consolidated to one line. AI-generated dismissible summary banner gives the user a plain-English read of the full findings before drilling in. Progress tracker shows resolved count in real time.
              </p>
              <div>
                <img
                  src="/lois-results.png"
                  alt="Redesigned LOIS playbook results screen showing severity-ordered findings, AI summary banner, filter strip, and resolved counter"
                  style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Redesign — Results view with severity ordering, AI summary, and progress tracking
                </p>
              </div>
            </div>

            <Divider />

            {/* Finding detail */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                The finding detail — where trust is built or broken.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                A full-panel view triggered from the card. Persistent top bar shows issue name and a previous/next switcher so users can work through findings sequentially without backtracking. Clause, issue, supporting legal references, suggested fix with sourced benchmarks, and a Word comment generator — all in one surface. CTA stack sticky at the bottom. Never floating. Never lost.
              </p>
              <div>
                <img
                  src="/lois-finding-detail.png"
                  alt="Redesigned LOIS finding detail panel with issue title, severity tag, highlighted clause, legal references, suggested fix, and sticky CTAs"
                  style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Redesign — Finding detail panel with full transparency, sourcing, and actionable CTAs
                </p>
              </div>
            </div>

            <FeynmanCheck text={`"Am I building what users need, or what I think is clever?" — The document-aware banner was not in the original brief. I added it because the API call cost was low and the trust signal was high. Would I throw it away if users dismissed it consistently without reading? Yes.`} />
          </section>

          {/* ═══════════════════ 05 — ANALYZE ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="05" title="Analyze" />
            <SectionHeading>Analyze</SectionHeading>
            <GoalPill text="Learn what worked, what didn't, and why" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
              <AnalysisRow
                n="H1"
                status="Validated"
                body="Workspace bar globally persistent. Switching tabs no longer breaks context. The hierarchy now reads correctly top-to-bottom: who you are → what mode you're in → what you're doing."
              />
              <AnalysisRow
                n="H2"
                status="Validated"
                body='Document-aware empty state. The banner and prompt chips together eliminate the "okay, now what?" moment. First action is available in under 10 seconds without external guidance.'
              />
              <AnalysisRow
                n="H3"
                status="Validated"
                body="Card → full panel architecture. The density problem and the trust problem are solved with one decision. Cards for scanning, panel for deciding. The issue switcher in the panel header means users never have to backtrack to work through findings."
              />
              <AnalysisRow
                n="H4"
                status="Validated"
                body="History overlay. Zero permanent footprint. The pattern borrowed from Claude, ChatGPT, and Gemini — but adapted to a 340px canvas rather than a full browser viewport. The mental model transfers; the implementation had to be rethought."
              />
            </div>

            {/* Projected impact */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.textTertiary, marginBottom: 12 }}>
                Projected Impact
              </div>
              <DiagnosisBlock
                rows={[
                  { label: 'First action', value: 'Under 10 seconds to first meaningful action. Document-aware prompts eliminate the "okay, now what?" moment — users have a clear starting point from frame one.' },
                  { label: 'Context errors', value: 'Near-zero wrong-workspace sessions. By making the profile bar globally persistent, the failure mode is architecturally removed rather than mitigated.' },
                  { label: 'Session continuity', value: 'Meaningful increase in multi-session threads. Once history is accessible via overlay, users can resume prior conversations without restarting — legal work becomes continuous.' },
                ]}
              />
              <p style={{ ...monoFont, fontSize: 11, color: C.textTertiary, fontStyle: 'italic', marginTop: 10, lineHeight: 1.6 }}>
                Design-confidence projections based on hypothesis validation — not production metrics.
              </p>
            </div>

            {/* Unexpected finding / Insight block */}
            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                accent="warm"
                rows={[
                  {
                    label: 'Insight',
                    value: `The dismissible banner wasn't in any hypothesis. It emerged from a question I asked during the build: "what does the product know that it's not telling the user?" A narrow-scoped API call on document load — looking for dates, signature blocks, document type — costs almost nothing and makes the entire product feel aware of its context from frame one. That single addition is the highest-leverage change in the redesign. The best ideas don't always come from the brief.`,
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Am I interpreting evidence to fit my theory, or updating my theory based on evidence?" — The banner was not a theory I had. It was a question the build asked me. I followed it. That's the difference between design as execution and design as inquiry.`} />
          </section>

          {/* ═══════════════════ 06 — SYNTHESIZE ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="06" title="Synthesize" />
            <SectionHeading>Synthesize</SectionHeading>
            <GoalPill text="Extract principles. Feed them back into the system." />

            <BodyText style={{ marginBottom: 32 }}>
              Three reusable patterns emerged from this work. Each one applies beyond LOIS — they're transferable to any dense, professional, AI-powered tool operating inside a host environment.
            </BodyText>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              <PatternCard
                n="01"
                title="Global context anchor"
                desc="Anything that scopes the session belongs above navigation — always persistent, never tab-local. This applies to any multi-mode tool where the user's workspace, account, or matter context determines the validity of every action they take."
              />
              <PatternCard
                n="02"
                title="Progressive disclosure for trust"
                desc="In high-stakes professional tools, skimming and trusting are different cognitive modes. The card/panel pattern lets users triage at speed and decide with depth. One architecture solves density and trust simultaneously without compromise."
              />
              <PatternCard
                n="03"
                title="Document awareness at load"
                desc="A narrow API call on open — looking for signals the document already contains — makes a generic tool feel intelligent. The cost is minimal. The impression is transformational. Build product awareness into the moment of entry, not after the user has already started."
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Next',
                    value: `Design the error and failure states — what happens when a playbook runs against an incompatible document, when the AI is wrong about a suggested fix, when the profile connection drops. That's where trust in an AI legal tool is ultimately built or broken. The happy path is designed. The hard path is still an open problem.`,
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Can I explain what I learned to someone who knows nothing about this project?" — Yes: structure before surface, always. Every visual problem in this product was a symptom of an unresolved architectural question. Fix the question first, then polish the answer.`} />
          </section>

          {/* ═══════════════════ CLOSING ═══════════════════ */}
          <section style={{ paddingTop: 80, paddingBottom: 80, textAlign: 'center' }}>
            <p
              style={{
                ...playfairFont,
                fontSize: 'clamp(22px, 3vw, 30px)',
                lineHeight: 1.45,
                color: C.textPrimary,
                maxWidth: 560,
                margin: '0 auto 20px auto',
              }}
            >
              &ldquo;In 48 hours I went from opening a product I&rsquo;d never seen to shipping a production-quality redesign with features the original didn&rsquo;t have. That&rsquo;s the work I do.&rdquo;
            </p>
            <p
              style={{
                fontSize: 15,
                color: C.textTertiary,
                maxWidth: 420,
                margin: '0 auto 48px auto',
                lineHeight: 1.6,
              }}
            >
              Design judgment. Product thinking. Systems architecture. Shippable code. Not as separate skills — as one integrated practice.
            </p>
            <Link
              href="/case-studies"
              style={{
                ...monoFont,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: C.purple,
                textDecoration: 'none',
                transition: 'opacity 0.15s ease',
              }}
              className="hover:opacity-60"
            >
              ← Back to Case Studies
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
