'use client';

import { useMemo, useState } from 'react';

type ShippingMethod = 'standard' | 'express';
type PaymentMethod = 'card' | 'paypal';

const SHIPPING_OPTIONS: Record<
  ShippingMethod,
  { label: string; description: string; cost: number; eta: string }
> = {
  standard: {
    label: 'Standard Shipping',
    description: 'Best for routine deliveries',
    cost: 6.5,
    eta: 'Arrives in 4-5 business days',
  },
  express: {
    label: 'Express Shipping',
    description: 'Priority handling and tracking',
    cost: 18.0,
    eta: 'Arrives in 1-2 business days',
  },
};

const BASE_SUBTOTAL = 128.0;
const TAX_RATE = 0.0825;

function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function EcommerceCheckoutDemo() {
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('standard');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [showSupportDrawer, setShowSupportDrawer] = useState(false);

  const promoSavings = promoApplied ? 15 : 0;
  const shippingCost = SHIPPING_OPTIONS[shippingMethod].cost;
  const tax = useMemo(() => (BASE_SUBTOTAL - promoSavings) * TAX_RATE, [promoSavings]);
  const total = BASE_SUBTOTAL - promoSavings + shippingCost + tax;

  return (
    <div className="bg-[#040404] border border-green-400/40 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.08)]">
      <div className="border-b border-green-400/20 bg-black/60 px-6 py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-green-400">Live Prototype</p>
            <h3 className="mt-2 font-semibold text-zinc-100">
              Transparent, experiment-ready checkout experience
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400/70"></span>
            </span>
            <span>Guided demo — adjust options to see trust cues update</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-[2fr,1fr] lg:px-8 lg:py-8">
        <div className="space-y-6">
          <StepCard
            step="01"
            title="Shipping & Delivery"
            description="Surface cost clarity early so there are no surprises downstream."
          >
            <div className="space-y-4">
              {(Object.keys(SHIPPING_OPTIONS) as ShippingMethod[]).map((optionKey) => {
                const option = SHIPPING_OPTIONS[optionKey];
                const isSelected = shippingMethod === optionKey;
                return (
                  <button
                    key={optionKey}
                    onClick={() => setShippingMethod(optionKey)}
                    className={`w-full rounded-lg border px-4 py-4 text-left transition-colors ${
                      isSelected
                        ? 'border-green-400 bg-green-400/10'
                        : 'border-green-400/20 hover:border-green-300/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-zinc-100">{option.label}</p>
                        <p className="text-xs text-zinc-400">{option.description}</p>
                        <p className="mt-2 text-xs text-green-400">{option.eta}</p>
                      </div>
                      <div className="text-sm font-semibold text-zinc-100">
                        {formatCurrency(option.cost)}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </StepCard>

          <StepCard
            step="02"
            title="Payment Selection"
            description="Let customers use their trusted wallets without breaking flow."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <SelectableTile
                label="Card"
                description="Visa, Mastercard, Amex"
                active={paymentMethod === 'card'}
                onSelect={() => setPaymentMethod('card')}
              />
              <SelectableTile
                label="PayPal"
                description="Quick hand-off with buyer protection"
                active={paymentMethod === 'paypal'}
                onSelect={() => setPaymentMethod('paypal')}
              />
            </div>
            <div className="mt-5 space-y-3 rounded-lg border border-green-400/10 bg-black/40 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-green-400">
                Inline Validation
              </p>
              <p className="text-sm text-zinc-300">
                {paymentMethod === 'card'
                  ? 'We validate card number, expiry, and CVV in real time with accessible messaging.'
                  : 'We keep the promo context alive when we hand off to PayPal, then resume the flow seamlessly.'}
              </p>
            </div>
          </StepCard>

          <StepCard
            step="03"
            title="Promos & Support"
            description="Support the conversion moment with proactive reassurance."
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex-1">
                <label className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Promo Code
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    value={promoCode}
                    onChange={(event) => {
                      setPromoCode(event.target.value.toUpperCase());
                      setPromoApplied(false);
                    }}
                    placeholder="e.g. LOYAL20"
                    className="flex-1 rounded-md border border-green-400/30 bg-black/40 px-3 py-2 text-sm text-green-100 placeholder:text-zinc-500 focus:border-green-400 focus:outline-none"
                  />
                  <button
                    onClick={() => setPromoApplied(promoCode === 'LOYAL20')}
                    className="rounded-md border border-green-400 px-4 py-2 text-sm font-medium text-green-400 transition-colors hover:bg-green-400 hover:text-black"
                  >
                    Apply
                  </button>
                </div>
                <p className="mt-2 text-xs text-zinc-400">
                  {promoApplied
                    ? 'Savings locked in. The order summary updates instantly.'
                    : 'We pre-validate codes so customers know what qualifies.'}
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 rounded-lg border border-green-400/20 bg-black/50 px-4 py-4 text-sm text-zinc-300 lg:w-60">
                <div className="flex items-start gap-3">
                  <span className="text-green-400">?</span>
                  <div>
                    <p className="font-semibold text-zinc-100">Need clarity?</p>
                    <p className="text-xs text-zinc-400">
                      Chat in context or browse short answers without leaving checkout.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSupportDrawer(!showSupportDrawer)}
                  className="flex items-center justify-between rounded-md border border-green-400/30 px-3 py-2 text-xs uppercase tracking-[0.3em] text-green-400 transition-colors hover:border-green-300"
                >
                  Support Drawer
                  <span className="text-base">{showSupportDrawer ? '−' : '+'}</span>
                </button>
                {showSupportDrawer && (
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">▹</span>
                      Shipping fees include insurance coverage.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">▹</span>
                      Promo applies to full order before tax.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">▹</span>
                      Returns are free within 30 days.
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </StepCard>
        </div>

        <aside className="space-y-5 rounded-xl border border-green-400/30 bg-black/60 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-green-400">Order Summary</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <SummaryRow label="Subtotal" value={formatCurrency(BASE_SUBTOTAL)} />
              <SummaryRow label="Shipping" value={formatCurrency(shippingCost)} />
              {promoApplied && (
                <SummaryRow label="Loyalty savings" value={`−${formatCurrency(promoSavings)}`} />
              )}
              <SummaryRow label="Estimated tax" value={formatCurrency(tax)} />
            </div>
          </div>

          <div className="rounded-lg border border-green-400/20 bg-black/40 px-4 py-3 text-xs text-zinc-300">
            <p className="font-semibold text-zinc-100">Trust Indicators</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                256-bit encryption active
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                24/7 live chat during checkout
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                Free returns within 30 days
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-green-400/20 pt-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-green-400">Total Due</p>
              <p className="text-2xl font-semibold text-zinc-100">{formatCurrency(total)}</p>
            </div>
            <button className="rounded-md bg-green-400 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-green-300">
              Complete secure payment
            </button>
          </div>

          <div className="rounded-lg border border-green-400/20 bg-black/30 px-4 py-4 text-xs text-zinc-400">
            <p>
              Every change in this panel fires analytics events so the team can monitor friction in real
              time.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function StepCard({ step, title, description, children }: StepCardProps) {
  return (
    <section className="space-y-4 rounded-xl border border-green-400/30 bg-black/60 p-5 shadow-[0_0_25px_rgba(34,197,94,0.08)]">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-green-400">
          {step} • {title}
        </p>
        <p className="mt-2 text-sm text-zinc-300">{description}</p>
      </div>
      {children}
    </section>
  );
}

type SelectableTileProps = {
  label: string;
  description: string;
  active: boolean;
  onSelect: () => void;
};

function SelectableTile({ label, description, active, onSelect }: SelectableTileProps) {
  return (
    <button
      onClick={onSelect}
      className={`flex h-full flex-col items-start rounded-lg border px-4 py-4 text-left transition-colors ${
        active ? 'border-green-400 bg-green-400/10' : 'border-green-400/20 hover:border-green-300/70'
      }`}
    >
      <p className="font-semibold text-zinc-100">{label}</p>
      <p className="mt-1 text-xs text-zinc-400">{description}</p>
      {active && (
        <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-green-400">
          Selected — inline validation ready
        </p>
      )}
    </button>
  );
}

type SummaryRowProps = {
  label: string;
  value: string;
};

function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between text-xs text-zinc-300">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}


