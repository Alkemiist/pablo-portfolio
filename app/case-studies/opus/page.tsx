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

// Asset card — used in the Experiment section to visually distinguish each of the 5 asset types
function AssetBadge({ n, name, method }: { n: string; name: string; method: string }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'rgba(124,111,247,0.06)',
        border: '0.5px solid rgba(124,111,247,0.2)',
        borderRadius: 8,
        padding: '8px 14px',
        marginBottom: 20,
      }}
    >
      <span style={{ ...monoFont, fontSize: 10, color: C.purple }}>Asset {n}</span>
      <span style={{ width: 1, height: 12, background: C.borderStrong }} />
      <span style={{ fontSize: 13, fontWeight: 500, color: C.textPrimary }}>{name}</span>
      <span style={{ ...monoFont, fontSize: 10, color: C.textTertiary }}>{method}</span>
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

export default function OpusCaseStudy() {
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
                Case Study — AI Creative Marketing / Feature 0→1
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
              Inspo — Opus Intelligence
            </h1>

            <p style={{ ...playfairFont, fontSize: 18, fontStyle: 'italic', color: C.textSecondary, marginBottom: 28, lineHeight: 1.5 }}>
              From a 1-way street to a creative playground
            </p>

            <div className="flex flex-wrap gap-2" style={{ marginBottom: 40 }}>
              {[
                { label: 'Feature 0→1', accent: true },
                { label: 'PM · Designer · Engineer' },
                { label: '3 Sprint Cycles' },
                { label: 'Opus Intelligence' },
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
              This one didn&apos;t start with a product review or a design brief. It started with reading user logs. The logs told me everything I needed to know — and what they said was: we had the assets, we had the data, and we were making our users pretend we didn&apos;t. This is what happened when we stopped doing that.
            </BodyText>

            {/* Feature context callout */}
            <div
              style={{
                marginBottom: 40,
                background: C.bgCard,
                ...borderSubtle,
                borderRadius: 12,
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 3,
                  borderRadius: 2,
                  background: C.warm,
                  alignSelf: 'stretch',
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ ...monoFont, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.warm, marginBottom: 6 }}>
                  A note on scope
                </div>
                <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.65, margin: 0 }}>
                  Inspo is a feature, not a standalone product. It lives inside Opus Intelligence, an AI-powered creative marketing platform. This case study documents how one observation — users fighting the agent to use context it already had — became the most-requested feature in the product and reshaped the platform&apos;s roadmap.
                </p>
              </div>
            </div>

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
                { label: 'Company', value: 'Opus Intelligence' },
                { label: 'Feature', value: 'Inspo — Campaign Generator' },
                { label: 'Timeline', value: '3 Sprint Cycles' },
                { label: 'Role', value: 'PM · Designer · Engineer' },
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
              I didn&apos;t start with a user interview. I started with logs. Users were fighting the agent. They had brand assets, product pages, audience data — everything the system needed to generate good campaigns — and they were manually typing all of it into the chat, over and over, because the product wasn&apos;t using what it already had. They were doing the AI&apos;s job for it.
            </BodyText>

            <BodyText style={{ marginBottom: 28 }}>
              That is not confusion. That is a behavior signal. Users weren&apos;t struggling to understand the tool — they were working around a gap the tool should have closed.
            </BodyText>

            <Divider />

            <div style={{ marginBottom: 40 }}>
              <ObservationList
                items={[
                  'Users re-entering brand voice, product descriptions, and audience details that already existed as system assets — every session, from scratch.',
                  'Campaign generation happening one idea at a time inside a chat thread, with no visual output.',
                  'No memory between sessions — every new campaign started with a blank prompt.',
                  'The agent returned text; users wanted options, visuals, something to react to and compare — a workspace, not a conversation.',
                  'The product assumed "talk to it enough" solved the problem. The logs showed it didn\'t.',
                ]}
              />
            </div>

            {/* Image slot 1 — user behavior / logs */}
            <div style={{ marginBottom: 40 }}>
              <img
                src="/inspo/agent-chat.jpg"
                alt="The original Opus agent chat interface — users manually typing brand and product details that already existed as system assets"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
              />
              <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                The logs — users manually re-entering what the system already knew
              </p>
            </div>

            <FeynmanCheck text={`"Can I explain what I observed to someone outside this domain?" — Yes: the users were doing manually what the product should have been doing automatically. The product knew things it wasn't using. That's not a UX problem. That's a product architecture problem.`} />
          </section>

          {/* ═══════════════════ 02 — QUESTION ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="02" title="Question" />
            <SectionHeading>Question</SectionHeading>
            <GoalPill text="Define the real problem, not the symptom" />

            <BodyText style={{ marginBottom: 32 }}>
              The easy read was: users find the agent interface hard to use. That&apos;s the wrong diagnosis.
            </BodyText>

            <div style={{ marginBottom: 32 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Symptom',
                    value: 'Output quality is inconsistent. Users feel like they\'re fighting the tool. Adoption isn\'t sticky.',
                  },
                  {
                    label: 'Disease',
                    value: 'The product was a 1-way street. Input → output, one idea at a time, no context carried between sessions, no visual feedback. We built an agent and assumed conversation was the right interface for every job. It wasn\'t. The real job was: collect the right intelligence from the user\'s existing assets once, then give them a playground to mix, match, and generate ideas at scale — without starting from scratch every time.',
                  },
                  {
                    label: 'Evidence',
                    value: 'The logs showed exactly which assets users were re-entering. Brand tone. Product descriptions. Audience profiles. These were all assets the system had already collected and stored. The agent was ignoring them. That is not an interface problem. That is an architecture failure — and the users were solving it manually because we hadn\'t solved it for them.',
                  },
                ]}
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <HMWBlock
                label="Core Problem Statement"
                quote={`"How might we give creative teams a playground where their existing assets generate a range of campaign ideas — so every session starts with context, not a blank page, and output gets better with every asset they build?"`}
              />
            </div>

            <FeynmanCheck text={`"Am I solving the problem I want to solve, or the actual problem?" — The temptation was to improve the agent. The actual problem was that the agent was the wrong interface for this job. A playground with asset context was the answer. Those are fundamentally different products.`} />
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
                    body: 'If we collect user assets before generation — brand, product, persona, goal, visual direction — the AI has enough context to produce campaign ideas that are usable out of the box, not just impressive on first glance.',
                    principle: 'Output quality is determined before generation starts. Context is the unlock.',
                  },
                  {
                    n: 'H2',
                    body: 'If we generate 4 ideas simultaneously instead of 1, users will engage differently — comparing, combining, iterating — instead of accepting or rejecting a single output.',
                    principle: 'Plurality creates judgment. One idea forces a yes/no. Four ideas create a workshop.',
                  },
                  {
                    n: 'H3',
                    body: 'If the playground makes iteration fast and frictionless, users will keep generating. The compounding engagement of "one more run" makes the platform stickier than any single great output.',
                    principle: 'The best creative tool is one users want to keep using. Stickiness is designed, not assumed.',
                  },
                  {
                    n: 'H4',
                    body: 'If assets are built once and reused across every campaign, users stop re-entering the same information — and the platform becomes a compound investment. The more they build, the better it gets.',
                    principle: 'Every input should have permanent value. Nothing in a creative system should be throwaway.',
                  },
                ]}
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Tradeoff',
                    value: 'H1 requires upfront asset creation before users see any output. That\'s friction at the start. I accepted it deliberately — because the alternative is generating without context, which produces generic ideas that erode trust faster than a well-designed intake flow does. One session of context setup. Every session after that starts stronger.',
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Can these hypotheses be proven wrong?" — H3 is proven wrong if users generate once and don't return. H4 is proven wrong if users re-enter the same information anyway, ignoring the asset system. Both are measurable. Both were tracked.`} />
          </section>

          {/* ═══════════════════ 04 — EXPERIMENT ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="04" title="Experiment" />
            <SectionHeading>Experiment</SectionHeading>
            <GoalPill text="Build only what you need to validate or invalidate" />

            <BodyText style={{ marginBottom: 40 }}>
              I built Inspo from scratch. Five asset types, each with a dedicated workflow — designed to collect exactly what the AI needed to generate ideas worth keeping.
            </BodyText>

            <div style={{ marginBottom: 56 }}>
              <BuildStats
                stats={[
                  { value: '0→1', label: 'Feature from scratch' },
                  { value: '5', label: 'Asset types built' },
                  { value: '3', label: 'Sprint cycles' },
                ]}
              />
            </div>

            {/* Asset 01 — Brand */}
            <div style={{ marginBottom: 48 }}>
              <AssetBadge n="01" name="Brand" method="URL scraper" />
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Brand — the platform reads it, you don&apos;t describe it.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                Not a text field. A URL scraper. Point it at your brand&apos;s website and it pulls tone, language, positioning, and visual direction — structured and fed directly into the model. The user doesn&apos;t describe their brand. The platform reads it.
              </p>
              <img
                src="/inspo/create-brand.jpg"
                alt="Inspo brand asset creation — URL input and structured brand profile output with tone, language, and positioning extracted automatically"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
              />
              <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                Brand asset — the product reads your brand so you don&apos;t have to describe it
              </p>
            </div>

            <Divider />

            {/* Asset 02 — Product */}
            <div style={{ marginBottom: 48 }}>
              <AssetBadge n="02" name="Product" method="PDP scraper" />
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Product — scraped from source, not typed from memory.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                Same architecture. Point it at a product detail page and it scrapes everything: feature copy, positioning, product language, imagery context. Every campaign Inspo generates starts with a product the model actually understands — not a generic description a user typed into a field.
              </p>
              <img
                src="/inspo/create-product.jpg"
                alt="Inspo product asset — PDP URL scraper extracting features, copy, and positioning directly from the product detail page"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
              />
              <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                Product asset — scraped from source, not typed from memory
              </p>
            </div>

            <Divider />

            {/* Asset 03 — Persona */}
            <div style={{ marginBottom: 48 }}>
              <AssetBadge n="03" name="Persona" method="Audience analyzer" />
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Persona — built from real audience behavior, not assumptions.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                An audience analyzer. Connect your social media platforms and the tool builds data-driven personas from real audience behavior — preferred brands, behavioral patterns, content consumption habits. Not guesswork. Not a template. Actual data from the people who already follow you.
              </p>
              <img
                src="/inspo/persona.jpg"
                alt="Inspo persona asset — audience analyzer showing social media connection and data-driven persona output with behavioral patterns and brand affinities"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
              />
              <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                Persona — built from real audience behavior, not assumptions
              </p>
            </div>

            <Divider />

            {/* Asset 04 — Goal */}
            <div style={{ marginBottom: 48 }}>
              <AssetBadge n="04" name="Goal" method="Local intent asset" />
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Goal — a clear intent that keeps generation purposeful.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                A local asset the user fills intentionally. Campaign intent, success criteria, what this is for. Simple, structured, and grounding — keeps every generation anchored to a real objective rather than a creative direction with no target.
              </p>
              <img
                src="/inspo/goal.jpg"
                alt="Inspo goal asset — structured campaign intent input capturing objective, success criteria, and target action"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
              />
              <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                Goal — a clear intent that keeps generation purposeful
              </p>
            </div>

            <Divider />

            {/* Asset 05 — Visual Direction */}
            <div style={{ marginBottom: 48 }}>
              <AssetBadge n="05" name="Visual Direction" method="Freehand + presets" />
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                Visual Direction — aesthetic intent before generation starts.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                The user either freehands what they want aesthetically — describing feel, texture, color energy, visual references — or selects from Opus-created presets that encode a specific visual language. The model has aesthetic direction before it generates anything.
              </p>
              <img
                src="/inspo/visual-style.jpg"
                alt="Inspo visual direction asset — freehand aesthetic input and Opus preset selector grid for encoding visual language before generation"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
              />
              <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                Visual direction — aesthetic intent, not just a blank canvas
              </p>
            </div>

            <Divider />

            {/* The Inspo playground */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ ...playfairFont, fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: '0 0 12px 0' }}>
                The Inspo playground — four ideas, full context, zero starting from scratch.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textSecondary, marginBottom: 24 }}>
                Select your assets. Run the generator. Get 4 ideas simultaneously — each with campaign concept, copy direction, visual language, and rationale. Compare them. Mix them. Reject one, combine two, regenerate a third. The blank page problem is gone. The one-idea-at-a-time problem is gone. The re-entering-the-same-data problem is gone.
              </p>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14, border: `0.5px solid ${C.borderStrong}` }}
              >
                <source src="/inspo/inspo-video.mp4" type="video/mp4" />
              </video>
              <p style={{ ...monoFont, fontSize: 12, color: C.textTertiary, fontStyle: 'italic', padding: '10px 16px 14px', textAlign: 'center', margin: 0 }}>
                Inspo — a playground, not a conversation. Four ideas, full context, zero starting from scratch.
              </p>
            </div>

            <FeynmanCheck text={`"Am I building what users need, or what I think is clever?" — The URL scraper for brand and product was the highest-leverage single decision in the build. Users don't want to describe their brand. They want the platform to know it. The scraper eliminated the most friction-heavy input in the entire flow. Would I have cut it if it was technically too costly? Yes — but it wasn't.`} />
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
                body="Asset-grounded generation produced campaign ideas users described as 'actually on brand' and 'specific to what we\'re doing.' Context was the differentiator. Generic ideas from context-free prompts didn\'t survive the comparison."
              />
              <AnalysisRow
                n="H2"
                status="Validated"
                body="Four simultaneous ideas changed the behavior entirely. Users stopped accepting or rejecting. They started workshopping — comparing outputs, identifying what worked in one idea and what worked in another, combining them into something new. One idea at a time never produced that behavior."
              />
              <AnalysisRow
                n="H3"
                status="Validated"
                body="Users preferred Inspo over the agent for creative work. Consistently, clearly, and by a wide margin. One idea, no visuals, no comparison — the old model lost every time. The compounding engagement was real. Users kept generating."
              />
              <AnalysisRow
                n="H4"
                status="Validated"
                body="Reusable assets changed the platform's value proposition. Every session started stronger because of what the previous session built. Users who built all five assets generated at a measurably higher quality than those who used partial context."
              />
            </div>

            {/* Unexpected finding */}
            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                accent="warm"
                rows={[
                  {
                    label: 'Insight',
                    value: 'Inspo became the most requested feature of the entire platform. Not just for campaigns — users were treating it as the creative center of gravity. What started as a solution to the agent\'s limitations became the primary reason people returned. That changed the roadmap. We are now building more and more to support Inspo — new asset types, deeper integrations, expansion of what the playground can generate. The feature didn\'t just validate; it reorganized what the product is.',
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Am I interpreting evidence to fit my theory, or updating my theory based on evidence?" — The scale of the response to Inspo surprised us. We built a feature; users told us we built the product. We followed that signal. The roadmap reflects it now.`} />
          </section>

          {/* ═══════════════════ 06 — SYNTHESIZE ═══════════════════ */}
          <section style={{ paddingTop: 72, paddingBottom: 72, borderTop: `0.5px solid ${C.borderSubtle}` }}>
            <StepLabel n="06" title="Synthesize" />
            <SectionHeading>Synthesize</SectionHeading>
            <GoalPill text="Extract principles. Feed them back into the system." />

            <BodyText style={{ marginBottom: 32 }}>
              Three reusable patterns emerged from this work. Each one now runs through the rest of the Opus product.
            </BodyText>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              <PatternCard
                n="01"
                title="Context before output"
                desc="Always collect the assets that make output meaningful before generation starts. One-time asset creation that persists across sessions is more valuable than any individual output it produces. This pattern transfers to any AI product where quality is determined by context richness. The intake layer is not overhead — it is the product."
              />
              <PatternCard
                n="02"
                title="Plurality creates judgment"
                desc="Never give one answer when you can give four. Multiple simultaneous outputs shift the user from accepting or rejecting to comparing and refining — which is a fundamentally different and more powerful creative mode. This is the difference between a vending machine and a workshop."
              />
              <PatternCard
                n="03"
                title="The tool that knows you gets used again"
                desc="Stickiness comes from compounding value. Every asset created makes the next session stronger. Every session builds on the last. Design for the second session, not just the first — and the second session will bring back a third. This pattern now runs through every surface in Opus."
              />
            </div>

            <div style={{ marginBottom: 40 }}>
              <DiagnosisBlock
                rows={[
                  {
                    label: 'Next',
                    value: 'Build cross-campaign learning — where patterns from successful campaigns (high engagement, brand fit, performance data) feed back into asset recommendations for future runs. The data is already there. The assets are already there. The next version of Inspo is one that tells you what worked and why — making the playground not just generative, but intelligent about its own history.',
                  },
                ]}
              />
            </div>

            <FeynmanCheck text={`"Can I explain what I learned to someone who knows nothing about this project?" — Yes: the best AI tool is one that already knows what it needs to know. Context is the product. Output is just the proof that the context was good. Build the context layer first and build it right — everything downstream gets better automatically.`} />
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
              &ldquo;We built a tool that turned existing knowledge into new ideas. Not by making the AI smarter — by making the inputs it already had access to actually count.&rdquo;
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
              Asset design. Context architecture. Compound creative value. Not as separate features — as one coherent system that makes every session better than the last.
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
