"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  m as motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const loadMax = () =>
  import("@/lib/motion-features-max").then((x) => x.default);
import { STATS } from "@/lib/stats";
import { EASE, TrafficFlow } from "@/components/TrafficFlow";

type Product = {
  id: string;
  name: string;
  pitch: string;
  stat: string;
  href: string;
  title: string;
  panel: React.ReactNode;
};

const AUTO_MS = 6000;

// Panels describe how each product is delivered. No performance figures, no example payloads.
const products: Product[] = [
  {
    id: "voice",
    name: "Voice",
    pitch: "Terminate and originate traffic over direct routes, by SIP trunk or IP peering.",
    stat: `${STATS.routes.value} direct routes`,
    href: "/products/voice",
    title: "How your traffic flows",
    panel: (
      <TrafficFlow
        steps={[
          ["Your traffic", "SIP trunk or IP peering"],
          ["Callvox network", "Route optimisation"],
          ["Termination", "Direct interconnect"],
        ]}
        status="Connected"
      />
    ),
  },
  {
    id: "sms",
    name: "SMS / Messaging",
    pitch: "Send A2P messages over SMPP or REST and get delivery receipts back.",
    stat: "SMPP & REST",
    href: "/products/sms",
    title: "How messages are delivered",
    panel: (
      <TrafficFlow
        steps={[
          ["Your platform", "SMPP or REST"],
          ["Callvox messaging routes", "Direct operator routes"],
          ["Handset", "Delivery receipts back to you"],
        ]}
        status="Delivered"
      />
    ),
  },
  {
    id: "airtime",
    name: "Airtime Top-Ups",
    pitch: `Top up ${STATS.operators.value} operators worldwide from one API.`,
    stat: `${STATS.operators.value} operators`,
    href: "/products/airtime",
    title: "How a top-up is delivered",
    panel: (
      <TrafficFlow
        steps={[
          ["Your system", "Top-up request by API"],
          ["Callvox", "Routes to the destination operator"],
          ["Subscriber", "Balance credited, status returned"],
        ]}
        status="Credited"
      />
    ),
  },
  {
    id: "esim",
    name: "eSIMs",
    pitch: "Order eSIM profiles by API and receive activation codes back.",
    stat: "Provisioned by API",
    href: "/products/esim",
    title: "Provisioning flow",
    panel: (
      <TrafficFlow
        steps={[
          ["Order a profile", "By API"],
          ["Receive activation code", "LPA string"],
          ["Device downloads profile", "SM-DP+"],
          ["Profile active", "Status returned to you"],
        ]}
        status="Active"
      />
    ),
  },
  {
    id: "dids",
    name: "DIDs / Numbers",
    pitch: "Order virtual numbers by country and route them to your trunk.",
    stat: "Ordered by API or portal",
    href: "/products/dids",
    title: "Number provisioning",
    panel: (
      <TrafficFlow
        steps={[
          ["Choose country & type", "Search inventory"],
          ["Order numbers", "API or portal"],
          ["Route to your trunk", "Voice & SMS"],
        ]}
        status="Routed"
      />
    ),
  },
];

export function ProductGrid() {
  const [active, setActive] = useState(products[0].id);
  const current = products.find((p) => p.id === active) ?? products[0];
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.4 });
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);
  const auto = !reduce && !manual && inView;

  const advance = () => {
    const i = products.findIndex((p) => p.id === active);
    setActive(products[(i + 1) % products.length].id);
  };

  return (
    <LazyMotion features={loadMax}>
      <section className="bg-paper py-28 lg:py-40">
        <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-12">
              <h2 className="display-h2 text-navy-DEFAULT">
                Voice first. <em>Now the full stack.</em>
              </h2>
              <p className="mt-6 text-lg text-navy-600">
                Carrier-grade voice is the foundation. Add messaging, airtime,
                eSIM and numbers through the same integration, invoice and
                support team.
              </p>
            </div>
          </div>

          <motion.div
            ref={rootRef}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            className="mt-16 grid gap-px overflow-hidden rounded-md border border-navy-100 bg-navy-100 lg:grid-cols-2"
          >
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Products"
              className="bg-paper"
            >
              {products.map((p) => {
                const on = p.id === active;
                return (
                  <button
                    key={p.id}
                    role="tab"
                    id={`tab-${p.id}`}
                    aria-selected={on}
                    aria-controls={`panel-${p.id}`}
                    onClick={() => {
                      setManual(true);
                      setActive(p.id);
                    }}
                    className={`group relative flex w-full items-start gap-5 border-b border-navy-100 px-6 py-5 text-left transition-colors last:border-b-0 ${
                      on ? "bg-white" : "hover:bg-white/60"
                    }`}
                  >
                    {on && (
                      <motion.span
                        aria-hidden
                        layoutId="product-tab-bar"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                        }}
                        className="absolute inset-y-0 left-0 w-0.5 bg-cyan-DEFAULT"
                      />
                    )}
                    {on && auto && (
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-transparent"
                      >
                        <span
                          key={active}
                          onAnimationEnd={advance}
                          style={{
                            animation: `tab-progress ${AUTO_MS}ms linear forwards`,
                            animationPlayState: paused ? "paused" : "running",
                          }}
                          className="block h-full origin-left bg-cyan-DEFAULT"
                        />
                      </span>
                    )}
                    <span
                      className={`flex-1 transition-opacity duration-300 ${on ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
                    >
                      <span className="block font-display text-3xl leading-none text-navy-DEFAULT">
                        {p.name}
                      </span>
                      <span className="mt-2 block text-[15px] text-navy-600">
                        {p.pitch}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`pt-1 text-xl transition-transform ${on ? "translate-x-1 text-cyan-DEFAULT" : "text-navy-300"}`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              className="surface-ink bg-navy-DEFAULT"
            >
              <div className="relative flex h-full min-h-[20rem] flex-col overflow-hidden">
                <div
                  aria-hidden
                  className="bg-grid-ink pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
                />
                <div className="relative border-b border-white/10 px-6 py-4 lg:px-10">
                  <span className="label text-navy-200">{current.title}</span>
                </div>
                <div className="relative flex flex-1 items-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current.id}
                      className="w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {current.panel}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="relative flex flex-col gap-4 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                  <p className="label text-navy-200">{current.stat}</p>
                  <Link
                    href={current.href}
                    className="group/cta inline-flex h-9 items-center justify-center gap-2 self-start rounded-control border border-signal/50 px-5 text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-navy-DEFAULT sm:self-auto"
                  >
                    Explore {current.name}{" "}
                    <span
                      aria-hidden
                      className="transition-transform group-hover/cta:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
