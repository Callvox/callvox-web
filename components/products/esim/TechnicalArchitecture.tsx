"use client";

import { m as motion } from "framer-motion";
import { TrafficFlow, type FlowStep, EASE } from "@/components/TrafficFlow";
import { Section, SectionHeader } from "@/components/Section";

const layers: FlowStep[] = [
  ["Your Platform / MVNO / Device"],
  ["LPA (Local Profile Assistant)", "device-side"],
  ["SM-DP+", "profile server"],
  ["eUICC", "embedded SIM chip in device"],
];

export function TechnicalArchitecture() {
  return (
    <Section>
      <SectionHeader
        title="The eSIM stack, explained."
        intro="eSIM provisioning involves several layers, from your platform to the chip in the device. Profiles are provisioned through an SM-DP+ (Subscription Manager Data Preparation+) server."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        viewport={{ once: true }}
        className="surface-ink relative overflow-hidden rounded-xl bg-navy-DEFAULT"
      >
        <div
          aria-hidden
          className="bg-grid-ink pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
        />
        <div className="relative border-b border-white/10 px-6 py-4 lg:px-10">
          <span className="label text-navy-200">eSIM provisioning stack</span>
        </div>
        <div className="relative">
          <TrafficFlow steps={layers} highlight={2} />
        </div>
      </motion.div>
    </Section>
  );
}
