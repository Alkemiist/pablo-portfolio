import { Playfair_Display, IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

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

// Wide landscape placeholder for desktop/web UI screenshots
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
      <div
        style={{
          background: C.bgSurface,
          ...borderStrong,
          borderRadius: 14,
          padding: 8,
          aspectRatio: '16 / 9',
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
            gap: 10,
            padding: '24px 20px',
          }}
        >
          <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.purple }}>
            {label}
          </div>
          <p style={{ fontSize: 13, color: C.textTertiary, textAlign: 'center', lineHeight: 1.5, margin: 0, maxWidth: 520 }}>
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

export default function OnlyEdgeCaseStudy() {
  return (
    <div
      className={`${playfair.variable} ${ibmMono.variable}`}
      style={{ background: C.bgBase, minHeight: '100vh', color: C.textPrimary, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
    >
      <Navigation />

      <div className="px-5 sm:px-8" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>

          {/* ═══════════════════ HERO ═══════════════════ */}
          <header style={{ paddingBottom: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <span style={{ ...monoFont, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.purple }}>
                Case Study — Hiring Intelligence / 0→1
              </span>
              <div style={{ width: 48, height: 0.5, background: C.purple, opacity: 0.4 }} />
            </div>

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
              OnlyEdge AI
            </h1>

            <p style={{ ...playfairFont, fontSize: 18, fontStyle: 'italic', color: C.textSecondary, marginBottom: 28, lineHeight: 1.5 }}>
              From a search engine to a decision-making platform
            </p>

            <div className="flex flex-wrap gap-2" style={{ marginBottom: 40 }}>
              {[
                { label: 'Product Design / 0→1', accent: true },
                { label: 'VP of Product Development' },
                { label: 'Pre-seed' },
                { label: 'Hiring Intelligence' },
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

            <BodyText style={{ marginBottom: 40 }}>
              I was the first product designer at OnlyEdge AI. No brief, no design system, no product direction. What I found was something that looked like a platform but worked like a search engine. This is what it took to fix that.
            </BodyText>

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
                { label: 'Company', value: 'OnlyEdge AI' },
                { label: 'Product', value: 'Hiring Intelligence Platform' },
                { label: 'Stage', value: 'Pre-seed · 0→1' },
                { label: 'Role', value: 'VP of Product Development' },
              ].map((item, i) => (
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
              I joined without a brief. The product existed but had never had a designer. I ran it end to end before asking any questions. What I found wasn&apos;t a design problem. It was a product identity problem wearing a design problem&apos;s clothes.
            </BodyText>

            <Divider />

            <div style={{ marginBottom: 40 }}>
              <ObservationList
                items={[
                  'The first screen was a fork — two flow options before the product knew who you were or what you were trying to do. A decision the product was too afraid to make for you.',
                  'No home for active projects. You couldn\'t see what was in progress, what needed attention, or what you had started. Every session felt like the first session.',
                  'The product surfaced candidates. It had no opinion about them. No "why this person for this role." Results without rationale.',
                  'No memory between sessions. Returning users started from scratch. Nothing was tracked, no decisions were recorded, no context was preserved.',
                  'Architecture existed. A product logic did not.',
                ]}
              />
            </div>

            {/* Image slot 1 — entry fork */}
            {/* TODO: uncomment and add screenshot when available
            <div style={{ marginBottom: 40 }}>
              <ImagePlaceholder
                label="Image Slot 1 — Entry fork"
                description="Full-width screenshot of the original OnlyEdge flow showing the two-option fork at entry — before the product knows who the user is or what they are trying to do. Should clearly show both path options and the lack of any persona context."
                caption="The entry fork — a decision the product should have made for the user"
              />
            </div>
            */}

            <FeynmanCheck text={`"Can I explain what's wrong to someone outside this domain?" — Yes: the product made you decide before it knew anything about you, and then forgot everything you decided. That is not a platform. That is a search engine with extra steps.`} />
          </section>

          {/* ═══════════════════ 02 — QUESTION ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="02" title="Question" />
            <SectionHeading>Question</SectionHeading>
            <GoalPill text="Define the real problem, not the symptom" />

            <BodyText style={{ marginBottom: 32 }}>
              The easy read was: the navigation is confusing, the flows are disconnected. That&apos;s the wrong diagnosis.
            </BodyText>

            <div style={{ marginBottom: 32 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Symptom',
                    value: 'The IA feels fragmented. The flows feel arbitrary. The product is hard to trust.',
                  },
                  {
                    label: 'Disease',
                    value: 'The product was built as a search engine. Search returns results. What this product needed to be was a platform — one that collects intelligence, forms a thesis, delivers recommendations with conviction, and tracks decisions over time. Nobody resolved what kind of thing this was before building it.',
                  },
                  {
                    label: 'Evidence',
                    value: 'During a live demo, a potential customer said directly: "If you weren\'t guiding me through this, I wouldn\'t know what to do." That is not a navigation problem. That is a product identity problem. The product had no opinion. It had no memory. It had no stake in the outcome.',
                  },
                ]}
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <HMWBlock
                label="Core Problem Statement"
                quote={`"How might we give private equity sponsors a hiring platform that thinks alongside them — one that collects intelligence, delivers recommendations with conviction, and builds a record of every decision made?"`}
              />
            </div>

            <FeynmanCheck text={`"Am I solving the problem I want to solve, or the actual problem?" — The temptation is to improve the navigation. The actual problem is that the product is the wrong kind of thing. We are building a decision-support platform, not a search tool. Those are different products.`} />
          </section>

          {/* ═══════════════════ 03 — HYPOTHESIS ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="03" title="Hypothesis" />
            <SectionHeading>Hypothesis</SectionHeading>
            <GoalPill text="Form testable predictions before designing anything" />

            <BodyText style={{ marginBottom: 32 }}>
              Every design decision is a bet. I made mine explicit before opening a design tool.
            </BodyText>

            <div style={{ marginBottom: 32 }}>
              <HypothesisList
                items={[
                  {
                    n: 'H1',
                    body: 'If we route users into the right flow based on their persona — instead of making them choose at entry — they will reach meaningful work faster and the product will feel like it knows them.',
                    principle: 'The product should make the decisions the user shouldn\'t have to make.',
                  },
                  {
                    n: 'H2',
                    body: 'If we lead with intelligence collection before surfacing candidates, the recommendations will carry conviction — because they\'ll be grounded in what the product knows about the project.',
                    principle: 'Output is only as strong as the input that preceded it.',
                  },
                  {
                    n: 'H3',
                    body: 'If each candidate card surfaces the "why" — not just the who — users will engage with recommendations differently. They\'ll evaluate with intent, not scroll through results.',
                    principle: 'Nobody else does this. The why is the differentiator.',
                  },
                  {
                    n: 'H4',
                    body: 'If we build a touchpoint and thesis layer on top of recommendations, users have a place to think alongside the platform — not just react to it.',
                    principle: 'High-stakes decisions need a trail. You can\'t build conviction without a record.',
                  },
                  {
                    n: 'H5',
                    body: 'If we track every action and decision and make it reviewable, the platform becomes a trusted record — not a transactional tool.',
                    principle: 'People care more about the intelligence behind the decision than just getting results.',
                  },
                ]}
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Tradeoff',
                    value: 'H2 requires the user to do work before they see anything. The product asks for context before it delivers value. I accepted that tradeoff deliberately — because the alternative is surfacing candidates before the platform understands the project, which produces noise. In PE hiring, noise is expensive. The upfront investment is the right cost.',
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Can these hypotheses be proven wrong?" — H3 is proven wrong if users scroll past the "why" on candidate cards without reading it. H5 is proven wrong if nobody returns to review past decisions. Both are measurable. Both were testable.`} />
          </section>

          {/* ═══════════════════ 04 — EXPERIMENT ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="04" title="Experiment" />
            <SectionHeading>Experiment</SectionHeading>
            <GoalPill text="Build only what you need to validate or invalidate" />

            <BodyText style={{ marginBottom: 40 }}>
              I built the full product from scratch. Not a prototype. The decision was deliberate — a platform this opinionated had to be proven at real fidelity to be worth believing in.
            </BodyText>

            <div style={{ marginBottom: 56 }}>
              <BuildStats
                stats={[
                  { value: '0→1', label: 'Full product from scratch' },
                  { value: '5', label: 'Core flows built' },
                  { value: 'PE', label: 'Private equity grade' },
                ]}
              />
            </div>

            {/* Intelligence collection */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Layer 1 — Intelligence collection.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                When starting a project, the product asks for everything it needs to know: the role, the mandate, the timeline, the constraints. This is not a form. It is a structured intake — the intelligence layer that anchors every recommendation that follows. The quality of what comes next is determined here.
              </p>
              <div>
                <img
                  src="/onlyedge/Context-gathering.png"
                  alt="OnlyEdge AI project creation and intelligence collection flow — structured intake for role, mandate, timeline, and constraints"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Project intake — the intelligence layer that makes every downstream recommendation specific
                </p>
              </div>
            </div>

            <Divider />

            {/* Candidate cards */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Layer 2 — Candidate recommendations with conviction.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                Candidates surface with a &ldquo;why&rdquo; on every card. Not just who they are — why they fit this specific project, this specific mandate, this specific moment. No other hiring tool does this. The recommendation is the product. The rationale is the differentiator.
              </p>
              <div>
                <img
                  src="/onlyedge/Why-fit.png"
                  alt="OnlyEdge AI candidate recommendation cards showing the why rationale — fit signals and matching logic prominent on each card"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Candidate cards — conviction-backed recommendations, not just results
                </p>
              </div>
            </div>

            <Divider />

            {/* Touchpoints */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Touchpoints and thesis building.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                For each candidate, the user creates touchpoints — notes, interactions, observations, flags. Over time, a thesis builds naturally. The platform is not just surfacing names. It is giving the user a structured place to think through them.
              </p>
              <div>
                <img
                  src="/onlyedge/candidate-judgment.png"
                  alt="OnlyEdge AI touchpoint and thesis building interface — accumulated notes and observations per candidate forming an evaluation trail"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Touchpoints — where the platform becomes a thinking partner, not just a tool
                </p>
              </div>
            </div>

            <Divider />

            {/* Decision tracking */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Decision tracking.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                Every action is tracked. Every decision is recorded with a timestamp. The user can always look back: what happened, when, and on what basis. This was the memory the product was missing from day one.
              </p>
              <div>
                <img
                  src="/onlyedge/system-record.png"
                  alt="OnlyEdge AI decision tracking view — chronological log of all actions taken across the project with timestamps and context"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Decision tracking — full context on every move, always reviewable
                </p>
              </div>
            </div>

            <Divider />

            {/* Feedback loop */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Feedback loop and evaluation.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                At the close of a project, the user evaluates: did the recommendation hold? Did the hire perform? This data feeds back into the platform and makes future recommendations sharper. The loop closes.
              </p>
              <div>
                <img
                  src="/onlyedge/outcome.png"
                  alt="OnlyEdge AI project close and feedback screen — evaluation of whether recommendations held and data feeding back into future projects"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
                />
                <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                  Feedback loop — decisions evaluated over time, not just made and forgotten
                </p>
              </div>
            </div>

            <FeynmanCheck text={`"Am I building what users need, or what I think is clever?" — The touchpoint and thesis layer wasn't in any initial spec. It emerged from the question: "what happens between the recommendation and the hire?" That gap is where trust is built or lost. I built into the gap.`} />
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
                body="Persona-driven routing eliminated the entry fork. Users moved from 'what do I do?' to 'here's where I am' in one step. The product started acting like it knew who it was talking to."
              />
              <AnalysisRow
                n="H2"
                status="Validated"
                body="Intelligence collection anchored the output. Users described recommendations as 'specific' and 'actually relevant to what we're doing.' The upfront investment paid immediately."
              />
              <AnalysisRow
                n="H3"
                status="Validated"
                body="Candidate cards with 'why' changed engagement entirely. Users evaluated with intent instead of scrolling. They read the rationale, pushed back on it, argued with it — which is exactly what a high-conviction recommendation should do."
              />
              <AnalysisRow
                n="H4"
                status="Validated"
                body="Touchpoints and thesis building became the most-used feature after initial testing. Users wanted a place to think alongside the platform. The gap between recommendation and hire was where they were spending the most cognitive energy."
              />
              <AnalysisRow
                n="H5"
                status="Validated"
                body="Decision tracking pointed directly back to the original hypothesis. Users cared about the intelligence behind the decision, not just the outcome."
              />
            </div>

            {/* Unexpected finding */}
            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                accent="warm"
                rows={[
                  {
                    label: 'Insight',
                    value: 'The decision tracking created a behavior we didn\'t design for. Users started using historical decision records as reference material for new projects — "we tried this hire profile last cycle, it didn\'t work, here\'s why." The platform became institutional memory. That was not in any brief. It changed the roadmap. The data was already there; the users showed us what it was worth.',
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Am I interpreting evidence to fit my theory, or updating my theory based on evidence?" — The institutional memory behavior surprised us. We didn't design for it. We documented it, followed it, and it opened an entirely new product direction.`} />
          </section>

          {/* ═══════════════════ 06 — SYNTHESIZE ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="06" title="Synthesize" />
            <SectionHeading>Synthesize</SectionHeading>
            <GoalPill text="Extract principles. Feed them back into the system." />

            <BodyText style={{ marginBottom: 32 }}>
              Three reusable patterns emerged. Each one applies beyond OnlyEdge — they&apos;re transferable to any decision-support product where stakes are high and context determines quality.
            </BodyText>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              <PatternCard
                n="01"
                title="Persona-driven entry"
                desc="Never make the user choose their context at the door. The product should determine that from what it knows and route accordingly. This applies to any multi-persona platform where the right starting point depends on who you are. The fork at entry is always a product abdication."
              />
              <PatternCard
                n="02"
                title="Intelligence before output"
                desc="Don't surface results before you've collected the inputs that make those results meaningful. The quality of the output is determined before the first recommendation appears. Build the intake layer with conviction — the output layer earns its trust there."
              />
              <PatternCard
                n="03"
                title="The intel → delivery → tracking loop"
                desc="Gather context. Deliver with conviction. Track the outcome. This three-phase loop works for any decision-support product: hiring, investing, sourcing, risk evaluation. The platform that owns all three phases owns the relationship. The platform that only owns delivery is a search engine."
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Next',
                    value: 'Build the cross-project intelligence layer — where insights from one project\'s decision record inform recommendations in the next. The data is already there. The pattern is established. The next version of this platform is one that gets smarter across every project you\'ve ever run, turning individual decisions into compound organizational knowledge.',
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Can I explain what I learned to someone who knows nothing about this project?" — Yes: the product that tells you why is more valuable than the product that gives you results. Decision-support is not about output — it's about confidence in the output. Those are different problems requiring different architectures.`} />
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
              &ldquo;A product that returns results is a search engine. A product that helps you think through them, track what happened, and learn from what you decided — that&rsquo;s a platform. That&rsquo;s what we built.&rdquo;
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
              Product identity. IA from first principles. Decision intelligence with a memory. Not as separate features — as one coherent point of view about what this kind of product is supposed to do.
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
