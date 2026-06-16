# Inspo — Opus Intelligence
## From a 1-way street to a creative playground

This one didn't start with a product review or a design brief. It started with reading user logs. The logs told me everything I needed to know — and what they said was: we had the assets, we had the data, and we were making our users pretend we didn't. This is what happened when we stopped doing that.

---

METADATA
- Type: Product Design / Feature 0→1
- Domain: AI-powered creative marketing
- Role: Product Designer & Design Strategist
- Company: Opus Intelligence
- Timeline: 3 sprint cycles — Q3 2024
- Team: PM, Engineering, Design
- Product: Inspo — an AI campaign idea generator using user-owned creative assets
- What I actually did: Identified a structural product architecture failure from user behavior data and designed + built the Inspo feature from scratch

---

## 01 — Observe
Goal: Understand reality as it is, not as you think it is

I didn't start with a user interview. I started with logs.

Users were fighting the agent. They had brand assets, product pages, audience data — everything the system needed to generate good campaigns — and they were manually typing all of it into the chat, over and over, because the product wasn't using what it already had. They were doing the AI's job for it.

That is not confusion. That is a behavior signal. Users weren't struggling to understand the tool — they were working around a gap the tool should have closed.

What I observed:

- Users re-entering brand voice, product descriptions, and audience details that already existed as system assets — every session, from scratch
- Campaign generation happening one idea at a time inside a chat thread, with no visual output
- No memory between sessions — every new campaign started with a blank prompt
- The agent returned text; users wanted options, visuals, something to react to and compare — a workspace, not a conversation
- The product assumed "talk to it enough" solved the problem. The logs showed it didn't.

[IMAGE SLOT 1 — full width]
User behavior pattern in logs — repeated manual asset re-entry across sessions
Caption: The logs — users manually re-entering what the system already knew

Feynman check: "Can I explain what I observed to someone outside this domain?" — Yes: the users were doing manually what the product should have been doing automatically. The product knew things it wasn't using. That's not a UX problem. That's a product architecture problem.

---

## 02 — Question
Goal: Define the real problem, not the symptom

The easy read was: users find the agent interface hard to use. That's the wrong diagnosis.

Symptom: Output quality is inconsistent. Users feel like they're fighting the tool. Adoption isn't sticky.

Disease: The product was a 1-way street. Input → output, one idea at a time, no context carried between sessions, no visual feedback. We built an agent and assumed conversation was the right interface for every job. It wasn't. The real job was: collect the right intelligence from the user's existing assets once, then give them a playground to mix, match, and generate ideas at scale — without starting from scratch every time.

Evidence: The logs showed exactly which assets users were re-entering. Brand tone. Product descriptions. Audience profiles. These were all assets the system had already collected and stored. The agent was ignoring them. That is not an interface problem. That is an architecture failure — and the users were solving it manually because we hadn't solved it for them.

Core problem statement:
"How might we give creative teams a playground where their existing assets generate a range of campaign ideas — so every session starts with context, not a blank page, and output gets better with every asset they build?"

Feynman check: "Am I solving the problem I want to solve, or the actual problem?" — The temptation was to improve the agent. The actual problem was that the agent was the wrong interface for this job. A playground with asset context was the answer. Those are fundamentally different products.

---

## 03 — Hypothesis
Goal: Form testable predictions before designing anything

Every design decision is a bet. I made mine explicit before opening a design tool.

H1: If we collect user assets before generation — brand, product, persona, goal, visual direction — the AI has enough context to produce campaign ideas that are usable out of the box, not just impressive on first glance.
Principle: Output quality is determined before generation starts. Context is the unlock.

H2: If we generate 4 ideas simultaneously instead of 1, users will engage differently — comparing, combining, iterating — instead of accepting or rejecting a single output.
Principle: Plurality creates judgment. One idea forces a yes/no. Four ideas create a workshop.

H3: If the playground makes iteration fast and frictionless, users will keep generating. The compounding engagement of "one more run" makes the platform stickier than any single great output.
Principle: The best creative tool is one users want to keep using. Stickiness is designed, not assumed.

H4: If assets are built once and reused across every campaign, users stop re-entering the same information — and the platform becomes a compound investment. The more they build, the better it gets.
Principle: Every input should have permanent value. Nothing in a creative system should be throwaway.

Explicit tradeoff: H1 requires upfront asset creation before users see any output. That's friction at the start. I accepted it deliberately — because the alternative is generating without context, which produces generic ideas that erode trust faster than a well-designed intake flow does. One session of context setup. Every session after that starts stronger.

Feynman check: "Can these hypotheses be proven wrong?" — H3 is proven wrong if users generate once and don't return. H4 is proven wrong if users re-enter the same information anyway, ignoring the asset system. Both are measurable. Both were tracked.

---

## 04 — Experiment
Goal: Build only what you need to validate or invalidate

I built Inspo from scratch. Five asset types, each with a dedicated workflow — designed to collect exactly what the AI needed to generate ideas worth keeping.

Build stats:
- 0→1 feature — no prior design system for this surface
- 5 asset types built and shipped
- 3 sprint cycles from concept to production

---

Asset 01 — Brand:

Not a text field. A URL scraper. Point it at your brand's website and it pulls tone, language, positioning, and visual direction — structured and fed directly into the model. The user doesn't describe their brand. The platform reads it.

[IMAGE SLOT 2 — full width]
Brand asset creation — URL input and scraped output
Caption: Brand asset — the product reads your brand so you don't have to describe it

---

Asset 02 — Product:

Same architecture. Point it at a product detail page (PDP) and it scrapes everything: feature copy, positioning, product language, imagery context. Every campaign Inspo generates starts with a product the model actually understands — not a generic description a user typed into a field.

[IMAGE SLOT 3 — full width]
Product asset — PDP URL scraper and structured output
Caption: Product asset — scraped from source, not typed from memory

---

Asset 03 — Persona:

An audience analyzer. Connect your social media platforms and the tool builds data-driven personas from real audience behavior — preferred brands, behavioral patterns, content consumption habits. Not guesswork. Not a template. Actual data from the people who already follow you.

[IMAGE SLOT 4 — full width]
Persona asset — audience analyzer with social platform connection
Caption: Persona — built from real audience behavior, not assumptions

---

Asset 04 — Goal:

A local asset the user fills intentionally. Campaign intent, success criteria, what this is for. Simple, structured, and grounding — keeps every generation anchored to a real objective rather than a creative direction with no target.

[IMAGE SLOT 5 — full width]
Goal asset creation interface
Caption: Goal — a clear intent that keeps generation purposeful

---

Asset 05 — Visual Direction:

The user either freehands what they want aesthetically — describing feel, texture, color energy, references — or selects from Opus-created presets that encode a specific visual language. The model has aesthetic direction before it generates anything.

[IMAGE SLOT 6 — full width]
Visual direction — freehand input and preset selection
Caption: Visual direction — aesthetic intent, not just a blank canvas

---

The Inspo playground:

Select your assets. Run the generator. Get 4 ideas simultaneously — each with campaign concept, copy direction, visual language, and rationale. Compare them. Mix them. Reject one, combine two, regenerate a third. The blank page problem is gone. The one-idea-at-a-time problem is gone. The re-entering-the-same-data problem is gone.

[IMAGE SLOT 7 — full width]
Inspo playground — 4 simultaneous campaign ideas with assets visible
Caption: Inspo — a playground, not a conversation. Four ideas, full context, zero starting from scratch.

---

Feynman check: "Am I building what users need, or what I think is clever?" — The URL scraper for brand and product was the highest-leverage single decision in the build. Users don't want to describe their brand. They want the platform to know it. The scraper eliminated the most friction-heavy input in the entire flow. Would I have cut it if it was technically too costly? Yes — but it wasn't.

---

## 05 — Analyze
Goal: Learn what worked, what didn't, and why

H1 — Validated: Asset-grounded generation produced campaign ideas users described as "actually on brand" and "specific to what we're doing." Context was the differentiator. Generic ideas from context-free prompts didn't survive the comparison.

H2 — Validated: Four simultaneous ideas changed the behavior entirely. Users stopped accepting or rejecting. They started workshopping — comparing outputs, identifying what worked in one idea and what worked in another, combining them into something new. One idea at a time never produced that behavior.

H3 — Validated: Users preferred Inspo over the agent for creative work. Consistently, clearly, and by a wide margin. One idea, no visuals, no comparison — the old model lost every time. The slot machine effect was real. Users kept generating.

H4 — Validated: Reusable assets changed the platform's value proposition. Every session started stronger because of what the previous session built. The upfront investment compounded. Users who built all five assets generated at a measurably higher quality than those who used partial context.

Unexpected finding:

Inspo became the most requested feature of the entire platform. Not just for campaigns — users were treating it as the creative center of gravity. What started as a solution to the agent's limitations became the primary reason people returned. That changed the roadmap. We are now building more and more to support Inspo — new asset types, deeper integrations, expansion of what the playground can generate. The feature didn't just validate; it reorganized what the product is.

Feynman check: "Am I interpreting evidence to fit my theory, or updating my theory based on evidence?" — The scale of the response to Inspo surprised us. We built a feature; users told us we built the product. We followed that signal. The roadmap reflects it now.

---

## 06 — Synthesize
Goal: Extract principles. Feed them back into the system.

Three reusable patterns emerged from this work. Each one now runs through the rest of the Opus product.

Pattern 01 — Context before output:
Always collect the assets that make output meaningful before generation starts. One-time asset creation that persists across sessions is more valuable than any individual output it produces. This pattern transfers to any AI product where quality is determined by context richness. The intake layer is not overhead — it is the product.

Pattern 02 — Plurality creates judgment:
Never give one answer when you can give four. Multiple simultaneous outputs shift the user from accepting or rejecting to comparing and refining — which is a fundamentally different and more powerful creative mode. This is the difference between a vending machine and a workshop.

Pattern 03 — The tool that knows you gets used again:
Stickiness comes from compounding value. Every asset created makes the next session stronger. Every session builds on the last. Design for the second session, not just the first — and the second session will bring back a third. This pattern now runs through every surface in Opus.

---

What I'd do next: Build cross-campaign learning — where patterns from successful campaigns (high engagement, brand fit, performance data) feed back into asset recommendations for future runs. The data is already there. The assets are already there. The next version of Inspo is one that tells you what worked and why — making the playground not just generative, but intelligent about its own history.

Feynman check: "Can I explain what I learned to someone who knows nothing about this project?" — Yes: the best AI tool is one that already knows what it needs to know. Context is the product. Output is just the proof that the context was good. Build the context layer first and build it right — everything downstream gets better automatically.

---

## Closing

"We built a tool that turned existing knowledge into new ideas. Not by making the AI smarter — by making the inputs it already had access to actually count."

Asset design. Context architecture. Compound creative value. Not as separate features — as one coherent system that makes every session better than the last.
