# OnlyEdge AI
## From a search engine to a decision-making platform

I was the first product designer at OnlyEdge AI. No brief, no design system, no product direction. What I found was something that looked like a platform but worked like a search engine. This is what it took to fix that.

---

METADATA
- Type: Product Design / 0→1
- Domain: PE-grade hiring intelligence
- Role: VP of Product Development / First Product Designer
- Timeline: Full 0→1 product build
- Stage: Pre-seed
- Product: Agentic hiring platform for private equity sponsors
- What I actually did: Diagnosed a product identity failure and rebuilt the entire platform from first principles

---

## 01 — Observe
Goal: Understand reality as it is, not as you think it is

I joined without a brief. The product existed but had never had a designer. I ran it end to end before asking any questions. What I found wasn't a design problem. It was a product identity problem wearing a design problem's clothes.

What I observed:

- The first screen was a fork — two flow options before the product knew who you were or what you were trying to do. A decision the product was too afraid to make for you.
- No home for active projects. You couldn't see what was in progress, what needed attention, or what you had started. Every session felt like the first session.
- The product surfaced candidates. It had no opinion about them. No "why this person for this role." Results without rationale.
- No memory between sessions. Returning users started from scratch. Nothing was tracked, no decisions were recorded, no context was preserved.
- Architecture existed. A product logic did not.

[IMAGE SLOT 1 — full width or side by side]
Original flow showing the entry fork — two options before any context is established
Caption: The entry fork — a decision the product should have made for the user

Feynman check: "Can I explain what's wrong to someone outside this domain?" — Yes: the product made you decide before it knew anything about you, and then forgot everything you decided. That is not a platform. That is a search engine with extra steps.

---

## 02 — Question
Goal: Define the real problem, not the symptom

The easy read was: the navigation is confusing, the flows are disconnected. That's the wrong diagnosis.

Symptom: The IA feels fragmented. The flows feel arbitrary. The product is hard to trust.

Disease: The product was built as a search engine. Search returns results. What this product needed to be was a platform — one that collects intelligence, forms a thesis, delivers recommendations with conviction, and tracks decisions over time. Nobody resolved what kind of thing this was before building it.

Evidence: During a live demo, a potential customer said directly: "If you weren't guiding me through this, I wouldn't know what to do." That is not a navigation problem. That is a product identity problem. The product had no opinion. It had no memory. It had no stake in the outcome.

Core problem statement:
"How might we give private equity sponsors a hiring platform that thinks alongside them — one that collects intelligence, delivers recommendations with conviction, and builds a record of every decision made?"

Feynman check: "Am I solving the problem I want to solve, or the actual problem?" — The temptation is to improve the navigation. The actual problem is that the product is the wrong kind of thing. We are building a decision-support platform, not a search tool. Those are different products.

---

## 03 — Hypothesis
Goal: Form testable predictions before designing anything

Every design decision is a bet. I made mine explicit before opening a design tool.

H1: If we route users into the right flow based on their persona — instead of making them choose at entry — they will reach meaningful work faster and the product will feel like it knows them.
Principle: The product should make the decisions the user shouldn't have to make.

H2: If we lead with intelligence collection before surfacing candidates, the recommendations will carry conviction — because they'll be grounded in what the product knows about the project.
Principle: Output is only as strong as the input that preceded it.

H3: If each candidate card surfaces the "why" — not just the who — users will engage with recommendations differently. They'll evaluate with intent, not scroll through results.
Principle: Nobody else does this. The why is the differentiator.

H4: If we build a touchpoint and thesis layer on top of recommendations, users have a place to think alongside the platform — not just react to it.
Principle: High-stakes decisions need a trail. You can't build conviction without a record.

H5: If we track every action and decision and make it reviewable, the platform becomes a trusted record — not a transactional tool.
Principle: People care more about the intelligence behind the decision than just getting results.

Explicit tradeoff: H2 requires the user to do work before they see anything. The product asks for context before it delivers value. I accepted that tradeoff deliberately — because the alternative is surfacing candidates before the platform understands the project, which produces noise. In PE hiring, noise is expensive. The upfront investment is the right cost.

Feynman check: "Can these hypotheses be proven wrong?" — H3 is proven wrong if users scroll past the "why" on candidate cards without reading it. H5 is proven wrong if nobody returns to review past decisions. Both are measurable. Both were testable.

---

## 04 — Experiment
Goal: Build only what you need to validate or invalidate

I built the full product from scratch. Not a prototype. The decision was deliberate — a platform this opinionated had to be proven at real fidelity to be worth believing in.

Build stats:
- 0→1 — full product, no prior design
- 5 core flows built
- Pre-seed stage — no design system, no precedent

---

Layer 1 — Intelligence collection:

When starting a project, the product asks for everything it needs to know: the role, the mandate, the timeline, the constraints. This is not a form. It is a structured intake — the intelligence layer that anchors every recommendation that follows. The quality of what comes next is determined here.

[IMAGE SLOT 2 — full width]
Project creation / intelligence intake flow
Caption: Project intake — the intelligence layer that makes every downstream recommendation specific

---

Layer 2 — Candidate recommendations with conviction:

Candidates surface with a "why" on every card. Not just who they are — why they fit this specific project, this specific mandate, this specific moment. No other hiring tool does this. The recommendation is the product. The rationale is the differentiator.

[IMAGE SLOT 3 — full width]
Candidate cards showing the "why" rationale for each match
Caption: Candidate cards — conviction-backed recommendations, not just results

---

Touchpoints and thesis building:

For each candidate, the user creates touchpoints — notes, interactions, observations, flags. Over time, a thesis builds naturally. The platform is not just surfacing names. It is giving the user a structured place to think through them.

[IMAGE SLOT 4 — full width]
Touchpoint view / thesis building interface per candidate
Caption: Touchpoints — where the platform becomes a thinking partner, not just a tool

---

Decision tracking:

Every action is tracked. Every decision is recorded with a timestamp. The user can always look back: what happened, when, and on what basis. This was the memory the product was missing from day one.

[IMAGE SLOT 5 — full width]
Decision timeline / activity record
Caption: Decision tracking — full context on every move, always reviewable

---

Feedback loop and evaluation:

At the close of a project, the user evaluates: did the recommendation hold? Did the hire perform? This data feeds back into the platform and makes future recommendations sharper. The loop closes.

[IMAGE SLOT 6 — full width]
Metrics and feedback view at project close
Caption: Feedback loop — decisions evaluated over time, not just made and forgotten

---

Feynman check: "Am I building what users need, or what I think is clever?" — The touchpoint and thesis layer wasn't in any initial spec. It emerged from the question: "what happens between the recommendation and the hire?" That gap is where trust is built or lost. I built into the gap.

---

## 05 — Analyze
Goal: Learn what worked, what didn't, and why

H1 — Validated: Persona-driven routing eliminated the entry fork. Users moved from "what do I do?" to "here's where I am" in one step. The product started acting like it knew who it was talking to.

H2 — Validated: Intelligence collection anchored the output. Users described recommendations as "specific" and "actually relevant to what we're doing." The upfront investment paid immediately.

H3 — Validated: Candidate cards with "why" changed engagement entirely. Users evaluated with intent instead of scrolling. They read the rationale. They pushed back on it, argued with it, used it as a starting point for conversation — which is exactly what a high-conviction recommendation should do.

H4 — Validated: Touchpoints and thesis building became the most-used feature after initial testing. Users wanted a place to think alongside the platform. The gap between recommendation and hire was where they were spending the most cognitive energy — and we gave it structure.

H5 — Validated: Decision tracking pointed directly back to the original hypothesis. Users cared about the intelligence behind the decision, not just the outcome.

Unexpected finding:

The decision tracking created a behavior we didn't design for. Users started using historical decision records as reference material for new projects — "we tried this hire profile last cycle, it didn't work, here's why." The platform became institutional memory. That was not in any brief. It changed the roadmap. The data was already there; the users showed us what it was worth.

Feynman check: "Am I interpreting evidence to fit my theory, or updating my theory based on evidence?" — The institutional memory behavior surprised us. We didn't design for it. We documented it, followed it, and it opened an entirely new product direction.

---

## 06 — Synthesize
Goal: Extract principles. Feed them back into the system.

Three reusable patterns emerged. Each one applies beyond OnlyEdge — they're transferable to any decision-support product where stakes are high and context determines quality.

Pattern 01 — Persona-driven entry:
Never make the user choose their context at the door. The product should determine that from what it knows and route accordingly. This applies to any multi-persona platform where the right starting point depends on who you are. The fork at entry is always a product abdication.

Pattern 02 — Intelligence before output:
Don't surface results before you've collected the inputs that make those results meaningful. The quality of the output is determined before the first recommendation appears. Build the intake layer with conviction — the output layer earns its trust there.

Pattern 03 — The intel → delivery → tracking loop:
Gather context. Deliver with conviction. Track the outcome. This three-phase loop works for any decision-support product: hiring, investing, sourcing, risk evaluation. The platform that owns all three phases owns the relationship. The platform that only owns delivery is a search engine.

---

What I'd do next: Build the cross-project intelligence layer — where insights from one project's decision record inform recommendations in the next. The data is already there. The pattern is established. The next version of this platform is one that gets smarter across every project you've ever run, turning individual decisions into compound organizational knowledge.

Feynman check: "Can I explain what I learned to someone who knows nothing about this project?" — Yes: the product that tells you why is more valuable than the product that gives you results. Decision-support is not about output — it's about confidence in the output. Those are different problems requiring different architectures.

---

## Closing

"A product that returns results is a search engine. A product that helps you think through them, track what happened, and learn from what you decided — that's a platform. That's what we built."

Product identity. IA from first principles. Decision intelligence with a memory. Not as separate features — as one coherent point of view about what this kind of product is supposed to do.
