import { NetworkMap } from './NetworkMap'

/** Quiet blueprint-grid + dotted-map backdrop for dark page heroes. Parent must be `relative overflow-hidden`. */
export function HeroBackdrop({ map = true }: { map?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="bg-grid-ink absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      {map && (
        <div className="absolute inset-y-0 right-0 flex w-full items-center justify-end opacity-40 [mask-image:linear-gradient(to_right,transparent,black_60%)] lg:w-[75%]">
          <NetworkMap className="w-[160%] max-w-none sm:w-[120%] lg:w-full" />
        </div>
      )}
    </div>
  )
}
