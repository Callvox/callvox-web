const methods = [
  { product: 'Voice', how: 'SIP trunk or IP peering', what: 'Termination and origination' },
  { product: 'SMS', how: 'SMPP or REST', what: 'A2P messaging' },
  { product: 'Airtime', how: 'REST API', what: 'Mobile top-ups' },
  { product: 'eSIM', how: 'REST API', what: 'Profile provisioning' },
  { product: 'DIDs', how: 'API or portal', what: 'Number search and provisioning' },
]

export default function ConnectionMethods() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <h2 className="display-h2 text-navy-DEFAULT">How you connect.</h2>
        <p className="mt-4 text-lg text-navy-600">
          Each product has its own connection method. Use one, some or all.
        </p>
        <dl className="mt-12 divide-y divide-navy-100 border-y border-navy-100">
          {methods.map((m) => (
            <div
              key={m.product}
              className="grid gap-1 py-5 sm:grid-cols-[10rem_16rem_1fr] sm:items-baseline sm:gap-6"
            >
              <dt className="font-semibold text-navy-DEFAULT">{m.product}</dt>
              <dd className="font-data text-sm text-navy-DEFAULT">{m.how}</dd>
              <dd className="text-sm text-navy-600">{m.what}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
