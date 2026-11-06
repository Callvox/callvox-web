import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Data Processing Agreement',
  description:
    'How CALLVOX OU processes personal data on behalf of business customers as a processor under the GDPR.',
  alternates: { canonical: '/dpa' },
}

type Table = { head: string[]; rows: string[][] }

type Clause = {
  n?: string
  title?: string
  text?: string
}

type Article = {
  title: string
  intro?: string
  defs?: [string, string][]
  clauses?: Clause[]
}

type Annex = {
  title: string
  intro?: string
  table: Table
  after?: string
}

const LINK_RE = /([A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-z]{2,}|callvox\.net\/(?:privacy|terms))/g

/** Turns bare email addresses and site paths into links. */
function linkify(text: string): ReactNode {
  return text.split(LINK_RE).map((part, i) => {
    if (i % 2 === 0) return part
    if (part.startsWith('callvox.net/')) {
      return (
        <Link key={i} href={part.replace('callvox.net', '')} className="text-cyan-DEFAULT underline">
          {part}
        </Link>
      )
    }
    return (
      <a key={i} href={`mailto:${part}`} className="text-cyan-DEFAULT underline">
        {part}
      </a>
    )
  })
}

function DataTable({ head, rows }: Table) {
  return (
    <div className="mt-4 overflow-x-auto rounded-sm border border-navy-200 bg-white">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <thead className="bg-paper text-navy-DEFAULT">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-navy-200 align-top">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-medium text-navy-DEFAULT' : ''}`}>
                  {linkify(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const articles: Article[] = [
  {
    title: '1. Definitions',
    intro: `Terms such as "controller", "processor", "data subject", "personal data", "personal data breach", "processing" and "supervisory authority" have the meaning given in the GDPR. In this DPA:`,
    defs: [
      ['Agreement', `the Terms of Service, the Order Form and the Service Annexes between the Parties.`],
      ['Customer Personal Data', `personal data contained in message content and other end-user content that the Customer submits to Callvox for delivery through the Services, and any other personal data that Callvox processes on the Customer's behalf under the Agreement.`],
      ['Data Protection Law', `the GDPR (Regulation (EU) 2016/679), the Estonian Personal Data Protection Act, the ePrivacy rules applicable to electronic communications, and, where they apply to the processing, the UK GDPR and the Data Protection Act 2018 and any other applicable data protection law.`],
      ['Services', `the voice, A2P SMS, airtime top-up, eSIM and DID services Callvox provides under the Agreement.`],
      ['Sub-processor', `a third party that Callvox engages to process Customer Personal Data on the Customer's behalf, excluding the delivery chain described in Article 4.4.`],
      ['Standard Contractual Clauses', `the clauses annexed to Commission Implementing Decision (EU) 2021/914, and, for the United Kingdom, the International Data Transfer Addendum issued by the UK Information Commissioner.`],
    ],
  },
  {
    title: '2. Roles and scope',
    clauses: [
      { n: '2.1', title: 'Callvox as processor.', text: `For Customer Personal Data, the Customer is the controller, or a processor acting for its own customers, and Callvox is a processor, or a sub-processor where the Customer is itself a processor. Annex I describes the subject matter, duration, nature and purpose of the processing, the types of personal data and the categories of data subjects.` },
      { n: '2.2', title: 'Callvox as controller.', text: `Callvox acts as an independent controller, and not under this DPA, for: (a) call and message detail records, billing and traffic metadata; (b) fraud prevention and detection; (c) customer due diligence, sanctions and anti-money-laundering checks; (d) legal and regulatory compliance; (e) security and operation of the Platform; and (f) the personal data of the Customer's own staff and representatives. Callvox's Privacy Notice describes this processing at callvox.net/privacy.` },
      { n: '2.3', title: 'Customer as controller.', text: `The Customer remains responsible for the lawfulness of its processing, including having a lawful basis for the Customer Personal Data it submits, giving data subjects the required notices, and obtaining any required consent, including consent to receive electronic marketing messages. The Customer's instructions to Callvox must comply with Data Protection Law.` },
      { n: '2.4', title: 'No special categories.', text: `The Customer must not submit special categories of personal data, criminal conviction data, government identification numbers, or payment card data through the Services unless the Service Annex expressly allows it.` },
    ],
  },
  {
    title: "3. Callvox's obligations as processor",
    clauses: [
      { n: '3.1', title: 'Documented instructions.', text: `Callvox will process Customer Personal Data only on the Customer's documented instructions, which are the Agreement, the Customer's use of the Services and API, and any further written instruction the Parties agree. Callvox will tell the Customer if it believes an instruction infringes Data Protection Law. Callvox may also process Customer Personal Data where the law requires, in which case it will tell the Customer beforehand unless the law forbids it.` },
      { n: '3.2', title: 'Confidentiality.', text: `Callvox ensures that everyone it authorises to process Customer Personal Data is bound by a duty of confidentiality and has access only as needed to provide the Services.` },
      { n: '3.3', title: 'Security.', text: `Callvox implements the technical and organisational measures in Annex II, taking into account the state of the art, the cost, the nature, scope and purpose of the processing and the risk to data subjects. Callvox may update these measures, provided it does not materially reduce the overall level of protection.` },
      { n: '3.4', title: 'Assistance to the Customer.', text: `Taking into account the nature of the processing, Callvox will help the Customer, by appropriate measures and at the Customer's reasonable cost where the help goes beyond what is standard, to: (a) respond to data subject requests for access, correction, erasure, restriction, portability or objection; (b) meet its security, breach notification, data protection impact assessment and prior consultation duties; and (c) demonstrate compliance with this DPA. If Callvox receives a data subject request about Customer Personal Data, it will pass it to the Customer promptly and will not respond except to say that it has forwarded the request.` },
      { n: '3.5', title: 'Personal data breaches.', text: `Callvox will notify the Customer without undue delay, and where feasible within seventy-two (72) hours, after becoming aware of a personal data breach affecting Customer Personal Data. The notice will go to the Customer's contact on file and describe, as far as then known, the nature of the breach, the categories and approximate numbers of data subjects and records concerned, the likely consequences, and the measures taken or proposed. Callvox will provide further information as it becomes available and will take reasonable steps to contain the breach. Callvox's notice is not an admission of fault or liability.` },
      { n: '3.6', title: 'Return and deletion.', text: `Callvox does not retain message content beyond delivery and a technical window of one hundred eighty (180) days, unless a longer period is needed to investigate fraud, resolve a dispute, or comply with the law. After the Agreement ends, and within sixty (60) days of the Customer's written request, Callvox will delete or return Customer Personal Data still held, and delete existing copies, unless the law requires it to keep them. Callvox will then continue to protect any data it must retain and process it only for the legal purpose that requires retention.` },
      { n: '3.7', title: 'Audits and information.', text: `Callvox will make available to the Customer the information reasonably necessary to show compliance with this DPA, including a summary of its security measures and answers to a reasonable security questionnaire once per year. If that is not sufficient, or a supervisory authority or Data Protection Law requires it, the Customer may carry out an audit, by itself or through an independent auditor bound by confidentiality, on at least thirty (30) days' written notice, during business hours, no more than once in any twelve (12) months, in a way that does not disrupt Callvox's operations or compromise other customers' data or Callvox's security. The Customer bears the cost of the audit, and Callvox will bear its own costs of assistance unless the audit reveals a material breach of this DPA by Callvox.` },
      { n: '3.8', title: 'Fraud and security processing.', text: `The Customer agrees that Callvox may screen and analyse Customer Personal Data, including message content, to the extent necessary to detect and prevent fraud, abuse, spam and security threats affecting the Services, the Upstream Providers or end users, and to comply with law. Callvox does this as an independent controller as described in Article 2.2.` },
    ],
  },
  {
    title: '4. Sub-processors and international transfers',
    clauses: [
      { n: '4.1', title: 'General authorisation.', text: `The Customer gives Callvox general authorisation to engage Sub-processors, including Callvox's Affiliates, to process Customer Personal Data. The categories of Sub-processors in use on the effective date are listed in Annex III. Callvox will make a current named list available on request at legal@callvox.net.` },
      { n: '4.2', title: 'Safeguards.', text: `Callvox will bind each Sub-processor by a written contract that imposes data protection obligations no less protective than those in this DPA, and remains responsible to the Customer for each Sub-processor's performance.` },
      { n: '4.3', title: 'Changes and objections.', text: `Callvox will give the Customer at least thirty (30) days' notice, by email to the Customer's contact on file or on its website, before a new Sub-processor starts processing Customer Personal Data. The Customer may object on reasonable data protection grounds by writing to legal@callvox.net within that period. The Parties will then discuss in good faith. If they cannot resolve the objection, the Customer may terminate the affected Service on written notice, without penalty, and Callvox will refund any prepaid fees for the period after termination.` },
      { n: '4.4', title: 'Delivery chain.', text: `The Services work by passing calls, messages, top-ups and related requests to carriers, SMS aggregators, airtime providers, mobile network operators, eSIM and SM-DP+ providers and other suppliers who deliver them to the end user ("Upstream Providers"). Passing Customer Personal Data to them for that purpose is part of the Services as instructed by the Customer, and is not sub-processing. Those Upstream Providers act as independent controllers, or as the Customer's own processors, for their delivery role, and Callvox cannot control what they do with the data after handing it over.` },
      { n: '4.5', title: 'Transfers outside the EEA.', text: `The Customer authorises Callvox to transfer Customer Personal Data to countries outside the European Economic Area (EEA), including countries without an adequacy decision, where this is needed to provide the Services, including to deliver Traffic to destination operators and to use Sub-processors. Callvox will carry out such transfers only: (a) to countries covered by an adequacy decision of the European Commission, including the United Kingdom; (b) under the Standard Contractual Clauses, with supplementary measures where needed; or (c) where another transfer mechanism in Chapter V of the GDPR applies.` },
      { n: '4.6', title: 'Standard Contractual Clauses.', text: `Because Callvox is established in the EEA, the Customer's submission of Customer Personal Data to Callvox does not by itself require the Standard Contractual Clauses. Callvox will enter into the Standard Contractual Clauses (Module Three, processor to processor, or Module Two, controller to processor, as applicable), together with the UK Addendum where the UK GDPR applies, with each Sub-processor located in a country without an adequacy decision. If a Data Protection Law requires the Parties to put a transfer mechanism in place between them, the Standard Contractual Clauses (Module Two or Module Three, as applicable) are incorporated by reference with these choices: clause 7 (docking clause) applies; in clause 9, option 2 (general authorisation) applies with the notice period in Article 4.3; the optional independent dispute resolution language in clause 11 does not apply; in clauses 17 and 18, the law and courts of Estonia apply; Annex I.A is completed from the Order Form, Annex I.B from Annex I below, Annex I.C names the Estonian Data Protection Inspectorate as competent supervisory authority, and Annex II is Annex II below. Callvox will give the Customer a copy of the applicable clauses on request.` },
      { n: '4.7', title: 'Government access.', text: `If a public authority requests Customer Personal Data, Callvox will, where the law allows, tell the Customer promptly, challenge a request that it reasonably considers unlawful, and disclose only the minimum data required.` },
    ],
  },
  {
    title: '5. Liability, term and general terms',
    clauses: [
      { n: '5.1', title: 'Liability.', text: `Each Party's liability under or in connection with this DPA is subject to the exclusions and limits in Article 11 of the Terms of Service, and amounts paid under this DPA count towards the cap in Article 11.5 of the Terms of Service. Nothing in this DPA limits liability to data subjects or either Party's liability that cannot lawfully be limited, or affects a data subject's rights under the Standard Contractual Clauses where they apply.` },
      { n: '5.2', title: 'Term.', text: `This DPA applies for as long as Callvox processes Customer Personal Data on the Customer's behalf, and ends when the Agreement ends and Callvox has deleted or returned the data as Article 3.6 requires. Articles 3.5, 3.6, 5.1 and this Article 5 survive for as long as Callvox holds Customer Personal Data.` },
      { n: '5.3', title: 'Order of precedence.', text: `If this DPA conflicts with the Terms of Service or an Order Form on the processing of Customer Personal Data, this DPA prevails. If it conflicts with the Standard Contractual Clauses, where they apply, the Standard Contractual Clauses prevail.` },
      { n: '5.4', title: 'Changes.', text: `Callvox may update this DPA to reflect changes in Data Protection Law, supervisory authority guidance, or its Services, by giving the Customer at least thirty (30) days' written notice, provided the update does not materially reduce the protection of Customer Personal Data. The Parties may also agree changes in writing at any time.` },
      { n: '5.5', title: 'Governing law and jurisdiction.', text: `This DPA is governed by the law of Estonia, and the courts of Tallinn have exclusive jurisdiction, as provided in Articles 14.10 and 14.11 of the Terms of Service, except where the Standard Contractual Clauses or Data Protection Law provide otherwise.` },
      { n: '5.6', title: 'Contact.', text: `Questions about this DPA, requests under it, and notices of objection or audit go to legal@callvox.net. Callvox, Lootsa tn 5, Tallinn, 11415, Estonia.` },
    ],
  },
]

const annexes: Annex[] = [
  {
    title: 'Annex I: Description of the processing',
    table: {
      head: ['Item', 'Description'],
      rows: [
        ['Controller (data exporter)', 'The Customer named in the Order Form'],
        ['Processor (data importer)', 'CALLVOX OU, Lootsa tn 5, Tallinn, 11415, Estonia. Contact: legal@callvox.net'],
        ['Subject matter', 'Delivery of voice, A2P SMS, airtime top-up, eSIM and DID services to the Customer and its end users'],
        ['Nature of processing', 'Receiving, routing, transmitting, delivering, storing for a limited time, and deleting the data needed to provide the Services'],
        ['Purpose', "To provide the Services under the Agreement and follow the Customer's instructions"],
        ['Duration', 'The term of the Agreement. Message content is deleted after delivery and a technical window of 180 days, unless a longer period is needed under Article 3.6'],
        ['Categories of data subjects', "The Customer's end users and message recipients, callers and called parties, airtime top-up recipients, eSIM and DID users, and the Customer's staff who use the Platform"],
        ['Types of personal data', 'Telephone numbers and other identifiers, sender IDs, message content, delivery and status data, top-up recipient and transaction data, eSIM identifiers (ICCID, EID) and profile status, DID assignment data and, where local rules require, end-user identity and address details'],
        ['Special categories', 'None intended. Message content may incidentally contain such data, which the Customer is responsible for under Article 2.4'],
        ['Frequency', 'Continuous, for as long as the Customer sends Traffic'],
        ['Competent supervisory authority', 'Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallinn, Estonia'],
      ],
    },
  },
  {
    title: 'Annex II: Technical and organisational measures',
    intro: 'Callvox maintains the following measures to protect Customer Personal Data:',
    table: {
      head: ['Area', 'Measures'],
      rows: [
        ['Access control', 'Role-based access with least privilege. Individual accounts for staff, with strong authentication on administrative systems. Access reviewed regularly and removed promptly when staff leave or change roles'],
        ['Customer access', 'Per-product API keys that the Customer can create, scope, rotate and revoke. Optional IP whitelisting. Credentials kept confidential by Callvox, with secrets stored in managed secret stores and never in source code'],
        ['Encryption', "Encryption in transit between the Customer, the Platform and Callvox's sub-processors, using current protocols"],
        ['Logging and monitoring', 'Logging of access to production systems and administrative actions. Monitoring and alerting for unusual traffic and access patterns'],
        ['Separation', 'Customer data logically separated by account. Development and test environments separate from production'],
        ['Minimisation and retention', "Message content kept only for the retention window in Article 3.6. Detail records kept only for the periods in Callvox's Privacy Notice"],
        ['Availability and recovery', 'Backups of operational data and documented procedures for restoring service after an incident'],
        ['Incident response', 'Documented process to detect, assess, contain and report security incidents, including notice to Customers under Article 3.5'],
        ['Supplier management', 'Due diligence on Sub-processors and Upstream Providers before use, written data protection terms, and periodic review'],
        ['Personnel', 'Confidentiality undertakings for staff and contractors, and data protection and security awareness for those who handle personal data'],
        ['Secure development', 'Code review and change control for changes to production systems, and dependency and vulnerability management'],
      ],
    },
  },
  {
    title: 'Annex III: Sub-processors',
    intro: 'Callvox uses the following categories of Sub-processors. A current named list is available on request from legal@callvox.net, and Callvox gives notice of changes under Article 4.3.',
    table: {
      head: ['Category', 'Purpose', 'Processing location'],
      rows: [
        ['Cloud hosting and compute', 'Hosting the Platform, APIs and backend services', 'EEA and United States'],
        ['Database and storage', 'Storing account, transaction and operational data', 'EEA and United States'],
        ['Background job and messaging infrastructure', 'Queueing, retrying and delivering webhooks, notifications and jobs', 'EEA and United States'],
        ['Email and communications tools', 'Sending service, billing and security emails', 'EEA and United States'],
        ['Customer relationship and support tools', 'Managing customer accounts, quotes and support tickets', 'EEA and United States'],
        ['Monitoring and analytics', 'Service monitoring, error tracking and usage analytics', 'EEA and United States'],
        ['Identity, sanctions and fraud screening', 'Customer due diligence and fraud prevention (Callvox as controller, listed for transparency)', 'EEA, United Kingdom and United States'],
        ['Callvox Affiliates', 'Support, billing and operations, including Offist Telecommunications Services Ltd', 'United Kingdom'],
      ],
    },
    after: 'Upstream Providers (carriers, SMS aggregators, airtime providers, mobile operators, and eSIM providers) are not Sub-processors. See Article 4.4.',
  },
]

export default function DpaPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-paper">
        <div className="mx-auto max-w-page px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <div>
            <h1 className="display-h1 text-navy-DEFAULT">Callvox OU Data Processing Agreement</h1>
            <p className="mt-4 text-sm text-navy-400">Effective date: October 2, 2026</p>

            <div className="mt-12 space-y-12 text-[15px] leading-relaxed text-navy-600">
              <section>
                <p>
                  This Data Processing Agreement (the &ldquo;DPA&rdquo;) forms part of the agreement between CALLVOX OU,
                  registry code 17467209, VAT no. EE102976692, Lootsa tn 5, Tallinn, 11415, Estonia
                  (&ldquo;Callvox&rdquo;), and the business customer that has signed an Order Form or accepted
                  Callvox&rsquo;s{' '}
                  <Link href="/terms" className="text-cyan-DEFAULT underline">
                    Terms of Service
                  </Link>{' '}
                  (the &ldquo;Customer&rdquo;). It applies when Callvox processes personal data on the Customer&rsquo;s
                  behalf as a processor. It is incorporated into the Terms of Service by reference and takes effect on
                  the same date as the Customer&rsquo;s Order Form, or on the effective date above if later.
                </p>
              </section>

              {articles.map((a) => (
                <section key={a.title}>
                  <h2 className="display-h2 text-navy-DEFAULT">{a.title}</h2>
                  {a.intro && <p className="mt-4">{linkify(a.intro)}</p>}
                  {a.defs && (
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      {a.defs.map(([term, def]) => (
                        <li key={term}>
                          <strong className="text-navy-DEFAULT">{term}:</strong> {linkify(def)}
                        </li>
                      ))}
                    </ul>
                  )}
                  {a.clauses?.map((c) => (
                    <p key={c.n} className="mt-4">
                      <span className="mr-2 font-medium text-navy-DEFAULT">{c.n}</span>
                      <strong className="text-navy-DEFAULT">{c.title} </strong>
                      {c.text && linkify(c.text)}
                    </p>
                  ))}
                </section>
              ))}

              {annexes.map((a) => (
                <section key={a.title}>
                  <h2 className="display-h2 text-navy-DEFAULT">{a.title}</h2>
                  {a.intro && <p className="mt-4">{linkify(a.intro)}</p>}
                  <DataTable {...a.table} />
                  {a.after && <p className="mt-4">{linkify(a.after)}</p>}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
