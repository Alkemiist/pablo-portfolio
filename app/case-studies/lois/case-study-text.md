# LOIS for Word
## A take-home that became a production redesign

Filevine gave me a 4-hour design exercise. I submitted that. Then I kept going — two days of thinking, designing, and building because I couldn't put the problem down. This is what that looks like.

---

METADATA
- Type: Product Design + Frontend Engineering
- Domain: Legal AI / Word Add-in
- Timeline: 48 hours — observation to deployed code
- Stack: Next.js · TypeScript · Tailwind
- Company: Filevine / LOIS
- Product: AI Legal Document Assistant, Microsoft Word Add-in
- Brief: 4-hour design critique — went further voluntarily
- What I actually did: Designed and coded a full production redesign

---

## 01 — Observe
Goal: Understand reality as it is, not as you think it is

I opened the product cold. No instructions, no walkthrough. Three minutes in — I was stuck. Not because the tool was bad, but because it gave me no signal of what to do next. That's a data point. I ran the full workflow: Composer, Review, playbook runs, menu states. I documented what I observed before reaching for a solution.

What I observed:

- The workspace/profile selector disappeared entirely when switching to the Review tab — the component that scopes every action in the tool was treated as optional
- The empty state was a personalized greeting. No affordances, no examples, no indication of what the tool could do
- Two adjacent icon buttons of equal visual weight created ambiguity — one was a LOIS control, the other was Word's native add-in system menu
- Four unlabeled icons in the input toolbar. No tooltips, no labels, no hover states. Trial-and-error as the only discovery path
- "Review" existed as a primary tab AND as a section header inside the overflow menu — the same word doing two different jobs with no explanation

[IMAGE SLOT 1 — side by side grid]
Left: Original Composer tab showing "Good evening, Pablo" empty state
Right: Original Review tab showing playbook list with no workspace context visible
Caption left: Original — Composer empty state
Caption right: Original — Review tab

Feynman check: "Can I explain the problem to someone unfamiliar with this domain in simple terms?" — Yes: the product has no structural logic about what information is always relevant versus what is context-dependent. If I can't say that simply, I don't understand it yet.

---

## 02 — Question
Goal: Define the real problem, not the symptom

The easy read was: this product needs visual polish. That's the wrong diagnosis. Polish is a symptom treatment. I needed to find the disease.

Symptom: Navigation feels inconsistent. Components appear and disappear. The interface is hard to trust.

Disease: The information architecture has no single owner. No one resolved what was global versus local before components were built. Everything downstream is broken because the structural question was never answered.

Evidence: The workspace selector — which scopes every action in the tool — disappears in Review. A user can run a full playbook against a document with zero visibility into which profile is active. That is not a placement bug. That is a trust failure.

Core problem statement:
"How might we give legal professionals a tool that communicates its context clearly at every moment — so every action they take is grounded in confidence, not assumption?"

Feynman check: "Am I solving the problem I want to solve, or the actual problem?" — The temptation is to redesign the visual layer. The actual problem is structural. I'm not touching colors until the hierarchy is resolved.

---

## 03 — Hypothesis
Goal: Form testable predictions before designing anything

Every design decision is a bet. I made mine explicit before opening a design tool. Each hypothesis references the underlying principle that makes it defensible.

H1: If the workspace bar is made globally persistent above the tab row, users will always know which profile they're operating in — eliminating silent errors from wrong-context sessions. Principle: context that scopes all actions must be visible at all times.

H2: If the empty state surfaces document-aware contextual prompts, users will reach first value in under 10 seconds without any external guidance. Principle: the empty state is the product's primary onboarding surface.

H3: If finding cards expand to a full-screen detail panel, we solve density and trust simultaneously — lightweight cards for scanning, depth for decision-making. Principle: in high-stakes professional tools, skimming and trusting are different cognitive modes requiring different surfaces.

H4: If conversation history is accessible via an overlay pattern, multi-session legal work becomes continuous without consuming permanent screen real estate. Principle: borrow the mental model from Claude, ChatGPT, Gemini — but adapt it to the 340px constraint rather than copying it directly.

Explicit tradeoff: H1 costs approximately 50–60px of vertical real estate permanently. I accepted that tradeoff because the alternative — context that disappears when you need it most — produces trust failures that are structurally more damaging than a compressed content area. In a legal workflow, operating in the wrong workspace silently is worse than a tight screen.

Feynman check: "Can these hypotheses be proven wrong?" — H1 is proven wrong if users never glance at the workspace bar after login. H2 is proven wrong if prompt chips are ignored after day two. H3 is proven wrong if users prefer acting directly from the card without going deeper. All testable.

---

## 04 — Experiment
Goal: Build only what you need to validate or invalidate

I didn't build a prototype. I built the product. A working Next.js application in TypeScript and Tailwind — full component architecture, real interactions, new features the original didn't have. The decision was deliberate: if I was going to critique a production add-in, I needed to prove the solution was production-viable, not just visually appealing.

Build stats:
- 48 hours — observation to deployed code
- 0→1 — built from scratch
- 5 new features shipped

---

The Composer — rebuilt from the ground up.

Workspace bar anchored globally. Dismissible banner powered by a narrow-scoped API call on document load — surfaces renewal dates, missing signatures, document type. Contextual prompt chips replace the greeting. History accessible via clock icon overlay. New chat always one tap away.

[IMAGE SLOT 2 — full width]
Redesigned Composer — showing profile component, history + menu icons, dismissible document-aware banner, and contextual prompt chips
Caption: Redesign — Composer with global chrome, document-aware banner, and contextual empty state

---

The Review tab — made intelligent.

The same API call that powers the banner tells Review which playbook to recommend. Playbook is surfaced with a "LOIS Recommends" label and a confidence signal. Recent Runs filter added — so users can see what's been run, when, and whether the document has changed since.

[IMAGE SLOT 3 — full width]
Redesigned Review tab — showing document-aware playbook recommendation with "matches document type" label, search, and Recent Runs filter
Caption: Redesign — Review tab with contextual playbook recommendation and history

---

The playbook flow — given structural IA.

A persistent top bar below the main tabs shows the active playbook name and an exit button at every stage. The user always knows where they are, what's running, and how to leave. CTAs anchored sticky at the bottom — not floating mid-screen.

[IMAGE SLOT 4 — full width]
Pre-flight playbook screen — showing new top bar with playbook name and exit, context input, and anchored CTA stack at bottom
Caption: Redesign — Pre-flight screen with persistent playbook context bar and anchored CTA

---

The results screen — triage first.

Issues sorted by severity: HIGH → MED → LOW → PASSED. Summary count consolidated to one line. AI-generated dismissible summary banner gives the user a plain-English read of the full findings before drilling in. Progress tracker shows resolved count in real time.

[IMAGE SLOT 5 — full width]
Playbook results — showing severity-ordered findings, AI summary banner, one-line filter strip, and resolved counter
Caption: Redesign — Results view with severity ordering, AI summary, and progress tracking

---

The finding detail — where trust is built or broken.

A full-panel view triggered from the card. Persistent top bar shows issue name and a previous/next switcher so users can work through findings sequentially without backtracking. Clause, issue, supporting legal references, suggested fix with sourced benchmarks, and a Word comment generator — all in one surface. CTA stack sticky at the bottom. Never floating. Never lost.

[IMAGE SLOT 6 — full width]
Finding detail panel — showing issue title, severity tag, highlighted clause, issue explanation, legal references, suggested fix with benchmark sources, Word comment generator, and sticky Apply fix / Add comment CTAs
Caption: Redesign — Finding detail panel with full transparency, sourcing, and actionable CTAs

---

Feynman check: "Am I building what users need, or what I think is clever?" — The document-aware banner was not in the original brief. I added it because the API call cost was low and the trust signal was high. Would I throw it away if users dismissed it consistently without reading? Yes.

---

## 05 — Analyze
Goal: Learn what worked, what didn't, and why

H1 — Validated: Workspace bar globally persistent. Switching tabs no longer breaks context. The hierarchy now reads correctly top-to-bottom: who you are → what mode you're in → what you're doing.

H2 — Validated: Document-aware empty state. The banner and prompt chips together eliminate the "okay, now what?" moment. First action is available in under 10 seconds without external guidance.

H3 — Validated: Card → full panel architecture. The density problem and the trust problem are solved with one decision. Cards for scanning, panel for deciding. The issue switcher in the panel header means users never have to backtrack to work through findings.

H4 — Validated: History overlay. Zero permanent footprint. The pattern borrowed from Claude, ChatGPT, and Gemini — but adapted to a 340px canvas rather than a full browser viewport. The mental model transfers; the implementation had to be rethought.

Unexpected finding:

The dismissible banner wasn't in any hypothesis. It emerged from a question I asked during the build: "what does the product know that it's not telling the user?" A narrow-scoped API call on document load — looking for dates, signature blocks, document type — costs almost nothing and makes the entire product feel aware of its context from frame one. That single addition is the highest-leverage change in the redesign. The best ideas don't always come from the brief.

Feynman check: "Am I interpreting evidence to fit my theory, or updating my theory based on evidence?" — The banner was not a theory I had. It was a question the build asked me. I followed it. That's the difference between design as execution and design as inquiry.

---

## 06 — Synthesize
Goal: Extract principles. Feed them back into the system.

Three reusable patterns emerged from this work. Each one applies beyond LOIS — they're transferable to any dense, professional, AI-powered tool operating inside a host environment.

Pattern 01 — Global context anchor:
Anything that scopes the session belongs above navigation — always persistent, never tab-local. This applies to any multi-mode tool where the user's workspace, account, or matter context determines the validity of every action they take.

Pattern 02 — Progressive disclosure for trust:
In high-stakes professional tools, skimming and trusting are different cognitive modes. The card/panel pattern lets users triage at speed and decide with depth. One architecture solves density and trust simultaneously without compromise.

Pattern 03 — Document awareness at load:
A narrow API call on open — looking for signals the document already contains — makes a generic tool feel intelligent. The cost is minimal. The impression is transformational. Build product awareness into the moment of entry, not after the user has already started.

---

What I'd do next: Design the error and failure states — what happens when a playbook runs against an incompatible document, when the AI is wrong about a suggested fix, when the profile connection drops. That's where trust in an AI legal tool is ultimately built or broken. The happy path is designed. The hard path is still an open problem.

Feynman check: "Can I explain what I learned to someone who knows nothing about this project?" — Yes: structure before surface, always. Every visual problem in this product was a symptom of an unresolved architectural question. Fix the question first, then polish the answer.

---

## Closing

"In 48 hours I went from opening a product I'd never seen to shipping a production-quality redesign with features the original didn't have. That's the work I do."

Design judgment. Product thinking. Systems architecture. Shippable code. Not as separate skills — as one integrated practice.
