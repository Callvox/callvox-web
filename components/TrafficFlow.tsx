"use client";

import { m as motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export type FlowStep = [title: string, detail?: string];

/**
 * Animated vertical flow used on dark "ink" surfaces: staggered glass cards, a drawn
 * connector line and a travelling signal dot. Plays when scrolled into view.
 * `highlight` marks one step (e.g. the Callvox hop) with a signal border.
 */
export function TrafficFlow({
  steps,
  status,
  highlight,
}: {
  steps: FlowStep[];
  status?: string;
  highlight?: number;
}) {
  const reduce = useReducedMotion();
  const STEP = 0.09;
  return (
    <ol className="w-full px-6 py-8 lg:px-10">
      {steps.map(([title, detail], i) => {
        const last = i === steps.length - 1;
        const hot = highlight === i;
        return (
          <motion.li
            key={title}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: EASE, delay: i * STEP },
              },
            }}
            className="relative flex gap-5 pb-7 last:pb-0"
          >
            {!last && (
              <span
                aria-hidden
                className="absolute bottom-[-16px] left-[19px] top-14 w-px overflow-hidden"
              >
                <motion.span
                  variants={{
                    hidden: { scaleY: 0 },
                    show: {
                      scaleY: 1,
                      transition: {
                        duration: 0.4,
                        ease: EASE,
                        delay: i * STEP + 0.15,
                      },
                    },
                  }}
                  style={{ transformOrigin: "top" }}
                  className="absolute inset-0 bg-signal/40"
                />
                {!reduce && (
                  <motion.span
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: ["-100%", "400%"], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.8,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 1.4,
                      delay: 0.9 + i * 0.5,
                    }}
                    className="absolute left-0 h-4 w-px bg-signal"
                  />
                )}
              </span>
            )}
            <span
              aria-hidden
              className={`font-data relative z-10 mt-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-navy-900 text-xs text-signal shadow-[0_0_0_4px_rgba(14,28,52,0.9)] ${
                hot ? "border-signal" : "border-signal/50"
              }`}
            >
              {i + 1}
            </span>
            <div
              className={`flex min-h-[4.5rem] flex-1 flex-col justify-center rounded-md border px-5 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm ${
                hot
                  ? "border-signal/60 bg-signal/[0.07]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-xl font-medium leading-tight tracking-[-0.01em] text-white">
                  {title}
                </p>
                {last && status && (
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: EASE,
                          delay: i * STEP + 0.35,
                        },
                      },
                    }}
                    className="label inline-flex shrink-0 items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 text-signal"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-signal"
                    />
                    {status}
                  </motion.span>
                )}
              </div>
              {detail && (
                <p className="mt-1 text-[15px] text-navy-200">{detail}</p>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
