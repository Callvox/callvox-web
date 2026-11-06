import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing the supply of telecommunications services by CALLVOX OÜ to business customers: voice, A2P SMS, airtime top-ups, eSIM and DIDs.',
  alternates: { canonical: '/terms' },
}

type Table = { head: string[]; rows: string[][] }

type Clause = {
  n?: string
  title?: string
  text?: string
  items?: string[]
  after?: string
  table?: Table
}

type Article = {
  title: string
  intro?: string
  defs?: [string, string][]
  clauses?: Clause[]
  text?: string
}

const LINK_RE = /([A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-z]{2,}|callvox\.net\/(?:privacy|dpa))/g

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
    defs: [
      ['Affiliate', `any entity that controls, is controlled by, or is under common control with a Party, where control means owning more than 50% of the shares or the power to appoint the majority of the board.`],
      ['Agreement', `these Terms, each Order Form and Service Annex, the DPA, and any appendix or addendum signed or accepted by both Parties.`],
      ['API Credentials', `the API keys, usernames, passwords, IP whitelists and other credentials Callvox issues to access the Services.`],
      ['Confidential Information', `all non-public information disclosed by a Party under the Agreement, including rates, traffic data, business plans, technical details and personal data, and the terms of the Agreement itself.`],
      ['DPA', `Callvox's data processing agreement, available at callvox.net/dpa and incorporated into the Agreement.`],
      ['Order Form', `the document, signed or accepted online, that selects Services and sets prices, currency, term, settlement mode and any credit limit.`],
      ['Operational Date', `for each Service, the date on which both Parties confirm in writing, including by email, that provisioning and test traffic succeeded.`],
      ['Platform', `Callvox's website, customer portal, developer portal, APIs and sandbox.`],
      ['Services', `the voice termination, A2P SMS, airtime top-up, eSIM provisioning, and DID (telephone number) services, and any related services, described in a Service Annex or Order Form.`],
      ['Service Annex', `a service description or product schedule for a specific Service, including technical specifications, and each Order Form.`],
      ['Traffic', `any call, message, top-up request, eSIM request or other transaction that the Customer or its end users submit through the Services.`],
      ['Upstream Providers', `the carriers, SMS aggregators, airtime providers, mobile network operators, eSIM and SM-DP+ providers and other suppliers Callvox uses to deliver the Services.`],
    ],
  },
  {
    title: '2. Scope and order of precedence',
    clauses: [
      { n: '2.1', text: `Callvox supplies, and the Customer purchases, the Services listed in each Order Form on a non-exclusive basis. Neither Party has to buy or supply minimum volumes unless an Order Form says so.` },
      { n: '2.2', text: `The Agreement is the entire agreement between the Parties on its subject matter and replaces all earlier proposals, negotiations and representations. The Customer confirms it has not relied on any statement that is not written in the Agreement.` },
      { n: '2.3', text: `If documents conflict, this order applies: (a) the Order Form; (b) the Service Annex for the relevant Service; (c) these Terms; (d) the DPA, for data protection matters only. Despite this, the provisions of these Terms on confidentiality, warranties, indemnities, limitation of liability and termination apply to every Service Annex.` },
      { n: '2.4', text: `Where the Parties also sign a bilateral agreement under which each supplies services to the other, such as a reciprocal SMS agreement, that agreement's specific terms apply to the services it covers, and these Terms apply to everything else.` },
    ],
  },
  {
    title: '3. Services, accounts and onboarding',
    clauses: [
      { n: '3.1', title: 'Onboarding.', text: `Before activating Services, Callvox may require company documents, beneficial ownership details, a signatory's proof of authority, sanctions screening information, and a description of the Customer's business and intended traffic. Callvox may refuse or limit Services where this information is incomplete, inaccurate, or raises a legal or fraud risk.` },
      { n: '3.2', title: 'Accounts and credentials.', text: `The Customer is responsible for all activity under its API Credentials and portal accounts, including activity by its own customers and end users. The Customer must keep credentials confidential, rotate them if compromised, restrict them to the products and IP addresses it needs, and tell Callvox immediately at support@callvox.net of any suspected misuse. Callvox may revoke credentials it reasonably believes are compromised.` },
      { n: '3.3', title: 'Resellers.', text: `If the Customer resells or sub-licenses the Services, it remains fully responsible to Callvox for its downstream customers' use, must bind them to terms at least as protective as the Agreement on acceptable use, fraud and compliance, and must not present itself as an agent of Callvox.` },
      { n: '3.4', title: 'Operational Date and test traffic.', text: `Services start on the Operational Date. Test and sandbox traffic is provided without commitment and may be limited or reset at any time. Sandbox results do not guarantee production performance.` },
      { n: '3.5', title: 'Performance.', text: `Callvox provides the Services with reasonable skill and care using industry-standard techniques, but does not guarantee a specific result, answer-seizure ratio, delivery rate, delivery time, or availability unless an Order Form or Service Annex states a service level. Any service level credit stated there is the Customer's only remedy for missing it.` },
      { n: '3.6', title: 'Upstream dependency.', text: `The Services depend on networks and systems operated by Upstream Providers and destination operators. Callvox is not liable for their acts, omissions, filtering, outages or surcharges, but will use reasonable efforts to reroute traffic and to pass on any remedies it obtains.` },
      { n: '3.7', title: 'Changes to Services.', text: `Callvox may modify, reroute, replace or withdraw routes, Upstream Providers, features and technical specifications, provided it gives reasonable written notice of any change that materially reduces a Service the Customer is using, except where the change is needed urgently for security, fraud prevention, legal compliance or because an Upstream Provider has changed or withdrawn a route.` },
      {
        n: '3.8',
        title: 'Product-specific terms.',
        text: `In addition to the Service Annex for each product:`,
        table: {
          head: ['Service', 'Specific terms'],
          rows: [
            ['Voice termination', `Calls must carry valid, unaltered calling line identification where technically supported. Callvox may block calls that spoof, hide or manipulate caller ID, or that show unusual call duration, answer-rate or destination patterns. Time of record is UTC.`],
            ['A2P SMS', `The Customer is responsible for sender ID registration, local regulatory requirements, and for having lawful consent from message recipients. Delivery receipts are provided by destination operators and may be delayed, inaccurate or unavailable. Operators and aggregators may filter, block or reroute content, and Callvox cannot guarantee delivery.`],
            ['Airtime top-up', `A top-up that the destination operator reports as delivered is final. Callvox cannot cancel or reverse a transaction once submitted to an Upstream Provider unless that provider supports it, and then only for the amount actually recovered. The Customer must verify recipient numbers and product selection.`],
            ['eSIM provisioning', `Profiles are issued under the applicable GSMA standard and the rules of the underlying operator. A profile that has been downloaded, installed or activated cannot be reissued or refunded unless the operator allows it. Coverage and data speeds depend on the underlying operator.`],
            ['DIDs and numbers', `Numbers are allocated or leased, not owned. The Customer must satisfy local regulator requirements for each number, including end-user identity, address or local presence where required, and must not port, resell or reassign numbers in breach of local rules. Callvox may reclaim numbers that the regulator or provider withdraws.`],
          ],
        },
      },
    ],
  },
  {
    title: '4. Prices, invoicing and payment',
    clauses: [
      { n: '4.1', title: 'Prices and currency.', text: `Prices are stated in the Order Form in the currency shown there. Where amounts are owed in more than one currency, each is settled in its own currency, with no conversion, unless the Parties agree otherwise in writing.` },
      { n: '4.2', title: 'Rate changes.', text: `Callvox may change its prices by sending a new rate sheet from rates@callvox.net to the Customer's rates contact. Increases take effect after five (5) business days, and decreases take effect on the date stated in the notice. Traffic sent after the effective date is charged at the new price, and the Customer may avoid an increase by stopping Traffic before it takes effect. A fixed price in an Order Form stays in force for the period it states.` },
      { n: '4.3', title: 'Taxes.', text: `Prices exclude VAT and other taxes, duties and levies. Where the Customer is established outside Estonia and the supply is a business-to-business service taxed in the Customer's country, the Customer accounts for VAT under the reverse charge where the law allows, and must give Callvox its valid VAT number. If any withholding or deduction is required by law, the Customer must increase its payment so that Callvox receives the full amount it would have received without the deduction, and must give Callvox the official certificate of the amount withheld within thirty (30) days.` },
      { n: '4.4', title: 'Usage records.', text: `Callvox's records of Traffic are the basis for invoicing. Callvox will provide detail records on request. All times are in UTC.` },
      { n: '4.5', title: 'Invoices.', text: `Callvox invoices monthly in arrears, or at the interval stated in the Order Form, for Traffic in the period. Invoices are issued electronically and sent to the Customer's billing contact. An invoice is valid without signature. Callvox may bill late-discovered usage within six (6) months after the end of the month in which it occurred, and neither Party may issue a corrective invoice later than six (6) months after the end of the month of the original invoice.` },
      { n: '4.6', title: 'Payment.', text: `Unless the Order Form says otherwise, invoices are due thirty (30) days from the invoice date, and payable in full in the invoice currency by bank transfer to the account stated on the invoice. The Customer bears its own bank charges. Callvox will confirm any change to its bank details only in writing from legal@callvox.net, and the Customer should verify any change request by phone before paying.` },
      { n: '4.7', title: 'Prepaid and postpaid settlement.', text: `The Order Form states whether the Customer is on a prepaid or postpaid basis. Under prepaid settlement, Services are available only while the Customer's balance covers the Traffic, and Callvox may block Traffic when the balance is exhausted. Under postpaid settlement, Callvox sets a credit limit, which it may reduce or require security for at any time on reasonable credit grounds. Traffic above the credit limit may be blocked.` },
      { n: '4.8', title: 'Late payment.', text: `Overdue amounts bear interest at one and a half percent (1.5%) per month, or the maximum rate the law allows if lower, from the due date until payment, together with Callvox's reasonable collection costs. Callvox may suspend Services under Article 12 while any undisputed amount is overdue.` },
      { n: '4.9', title: `No dependency on the Customer's customers.`, text: `The Customer must pay in full whether or not its own customers pay it, and whether or not Traffic was fraudulent or unauthorised. Callvox is not required to credit amounts the Customer could not collect.` },
      { n: '4.10', title: 'Set-off.', text: `Callvox may set off any undisputed overdue amount the Customer owes against any amount Callvox owes the Customer under any agreement between them. Where both Parties supply services to each other, they will settle undisputed amounts net, but netting does not extend a due date.` },
      { n: '4.11', title: 'Payment security.', text: `Callvox may require a deposit, prepayment, bank guarantee or other security, as set out in the Order Form or reasonably requested on credit grounds, including when the Customer's traffic volumes grow, its payments are late, or control of the Customer changes.` },
    ],
  },
  {
    title: '5. Invoice disputes',
    clauses: [
      { n: '5.1', title: 'Notice.', text: `The Customer must dispute an invoice in writing to billing@callvox.net before its due date, stating the invoice number, date and period, the disputed amount, the Service, destinations or routes concerned, and the reasons. A dispute not raised before the due date is waived.` },
      { n: '5.2', title: 'Undisputed amounts.', text: `The Customer must pay all undisputed amounts by the due date. Disputes under the lower of one percent (1%) of the invoice total or one thousand euros (EUR 1,000) cannot be raised.` },
      { n: '5.3', title: 'Procedure.', text: `Within four (4) weeks of the notice, the Customer must send its detail records and evidence. Callvox then has eight (8) weeks to respond with supporting evidence. The Parties then have two (2) weeks to settle. If the Customer misses its deadline, the dispute is closed in Callvox's favour and the amount is payable. If Callvox misses its deadline, the dispute is closed in the Customer's favour and the amount is credited.` },
      { n: '5.4', title: 'Escalation.', text: `A dispute not resolved by then goes to senior management of both Parties, without prejudice to either Party's right to bring proceedings under Article 14.` },
      { n: '5.5', title: 'Credit notes.', text: `Where a dispute is settled for the Customer, Callvox will issue a credit note within thirty (30) days. If it does not, the Customer may charge no more than the interest in Article 4.8 on the agreed credit.` },
    ],
  },
  {
    title: '6. Acceptable use and fraud prevention',
    clauses: [
      {
        n: '6.1',
        title: 'Acceptable use.',
        text: `The Customer must not, and must not allow others to, use the Services:`,
        items: [
          `for fraud, artificial inflation of traffic (including SMS pumping), revenue-share abuse, number or caller ID spoofing, SIM-box or grey-route bypass, wangiri or similar schemes;`,
          `to send unsolicited or unlawful messages, including spam, phishing, smishing, malware, or content that is illegal, deceptive, threatening or harassing;`,
          `to send marketing messages to recipients without the consent that local law requires, or in breach of recipient opt-out requests;`,
          `in breach of the laws, numbering rules and operator policies of the origin or destination country;`,
          `to interfere with, overload or test the security of the Platform or any network, or to access it other than through the interfaces Callvox provides; or`,
          `to resell or terminate Traffic in a way that disguises its true origin.`,
        ],
      },
      { n: '6.2', title: 'Traffic quality.', text: `The Customer must submit only genuine, lawful Traffic, with accurate sender, origin and routing information, and must maintain reasonable controls to detect and stop abuse in its own network and among its own customers.` },
      { n: '6.3', title: 'Monitoring and blocking.', text: `Callvox may monitor Traffic patterns and, where lawful, screen message content and numbers for fraud and abuse. Callvox may block, hold, reroute, throttle or reject any Traffic, sender ID, number range or destination that it reasonably suspects is fraudulent, abusive, unlawful, or likely to harm the Platform, Upstream Providers or their relationships, and may withhold amounts under investigation, to the extent the law permits.` },
      { n: '6.4', title: 'Cooperation.', text: `Each Party will inform the other promptly of suspected fraud or abuse affecting the Services, exchange the relevant information needed to investigate it, including customer, route and traffic details, to the extent the law permits, and work together on measures to prevent or stop it. The Customer must report suspected fraud to support@callvox.net, and urgent or high-priority matters to legal@callvox.net.` },
      { n: '6.5', title: 'Charges for abusive Traffic.', text: `The Customer is responsible for the charges for all Traffic sent through its credentials, including fraudulent Traffic. Where Traffic is later found to be abusive, the Customer must also pay any charges, penalties or fines that Upstream Providers or operators levy on Callvox as a result, and Callvox may recover them from the Customer.` },
    ],
  },
  {
    title: '7. Legal and regulatory compliance',
    clauses: [
      { n: '7.1', title: 'Compliance with laws.', text: `Each Party will comply with all laws and regulations that apply to its performance, including those on telecommunications, consumer and data protection, electronic marketing, number portability, lawful interception, and emergency calling where relevant.` },
      { n: '7.2', title: 'Regulatory status.', text: `Each Party confirms that, on the date the Agreement takes effect, it holds the licences, registrations and authorisations it needs to perform it, and no legal or regulatory restriction prevents either Party from contracting. Each Party will tell the other promptly if this changes.` },
      { n: '7.3', title: 'Sanctions and export controls.', text: `Each Party will comply with all applicable economic and trade sanctions, embargoes, and export control laws, including those of the European Union, Estonia, the United Nations, the United States and the United Kingdom. The Customer must not use the Services in or for any sanctioned person, entity or territory, and must not do anything that would cause Callvox or its Affiliates to breach sanctions. The Customer will give Callvox the end customer, destination and intended-use information Callvox reasonably asks for, and will tell Callvox in writing immediately of any sanctions listing, investigation, or loss of a licence affecting it. A breach of this Article entitles Callvox to terminate immediately and to recover its direct losses.` },
      { n: '7.4', title: 'Anti-corruption.', text: `Each Party confirms that neither it nor its directors, officers or employees has offered, given, requested or accepted any undue advantage in connection with the Agreement, and each will comply with applicable anti-bribery laws and take reasonable steps to ensure that its subcontractors and agents do the same.` },
      { n: '7.5', title: 'Anti-money-laundering.', text: `Callvox may carry out due diligence on the Customer at any time, including re-verification of ownership and source of funds, and may refuse, suspend or terminate Services where the Customer does not cooperate or where Callvox reasonably suspects money laundering or terrorist financing.` },
      { n: '7.6', title: 'Cooperation with authorities.', text: `Callvox may disclose information and cooperate with courts, regulators and law enforcement as the law requires, and will not be liable for doing so.` },
    ],
  },
  {
    title: '8. Confidentiality',
    clauses: [
      { n: '8.1', text: `Each Party will keep the other's Confidential Information confidential, use it only to perform or exercise rights under the Agreement, and not disclose it to anyone except its Affiliates, employees, advisers, auditors, insurers, subcontractors and Upstream Providers who need to know it and are bound by equivalent duties.` },
      { n: '8.2', text: `This Article does not apply to information that: (a) becomes public other than through a breach; (b) the recipient lawfully received from a third party without a duty of confidence; (c) the recipient developed independently without using the Confidential Information; or (d) must be disclosed to prevent or investigate fraud, abuse, or damage affecting the Parties' networks or the Services.` },
      { n: '8.3', text: `A Party may disclose Confidential Information that a law, court or competent authority requires it to disclose. It will, where lawful, notify the other Party first so that it can seek protection, and disclose only what is required. No notice is needed for requests from authorities with competence in telecommunications, data protection or end-user protection.` },
      { n: '8.4', text: `These duties continue for three (3) years after the Agreement ends, and for as long as the information remains a trade secret or personal data.` },
    ],
  },
  {
    title: '9. Intellectual property',
    clauses: [
      { n: '9.1', text: `Each Party keeps all rights in its own intellectual property. Callvox owns the Platform, documentation, rate sheets, software and know-how, and nothing in the Agreement transfers ownership of them to the Customer.` },
      { n: '9.2', text: `Callvox grants the Customer, for the term of the Agreement, a limited, non-exclusive, non-transferable, revocable right to access and use the Platform and any software, SDKs or APIs Callvox provides, solely to receive the Services. The Customer must not sublicense them, copy or modify them, reverse engineer or decompile them, build a competing service from them, or use them to circumvent usage limits.` },
      { n: '9.3', text: `Neither Party may use the other's name, logo or trademarks without prior written consent, except that Callvox may identify the Customer as a customer in a customer list. Any press release or published case study requires both Parties' approval.` },
    ],
  },
  {
    title: '10. Data protection and security',
    clauses: [
      { n: '10.1', title: 'Roles.', text: `Each Party processes personal data it receives in connection with the Services as an independent controller, except that Callvox acts as the Customer's processor for the content of messages and other end-user content the Customer submits for delivery. Callvox's processing as processor is governed by the DPA. Callvox's handling of personal data as a controller is described in its Privacy Notice at callvox.net/privacy.` },
      { n: '10.2', title: 'Customer responsibilities.', text: `The Customer is responsible for giving the notices to, and obtaining the consents from, its end users and recipients that the law requires for the processing of their data through the Services, including consent to receive messages. It must not submit special-category personal data or payment card data to the Services unless the Service Annex expressly allows it.` },
      { n: '10.3', title: 'Delivery chains.', text: `Passing Traffic and related data to Upstream Providers and destination operators to deliver it is part of the Services and is not sub-processing. Callvox may process data in any country where it, its Affiliates or its Upstream Providers operate, in line with the DPA and applicable data transfer rules.` },
      { n: '10.4', title: 'Security.', text: `Each Party will maintain appropriate technical and organisational measures to protect the Services and the information exchanged under the Agreement, and appropriate business continuity arrangements. Each Party will tell the other without undue delay after becoming aware of a security incident that affects the other or the Services, and will cooperate to contain it.` },
    ],
  },
  {
    title: '11. Warranties, liability and indemnity',
    clauses: [
      { n: '11.1', title: 'Authority.', text: `Each Party confirms that it is duly organised and has the power, authority and technical, organisational, legal and financial ability to perform the Agreement.` },
      { n: '11.2', title: 'Disclaimer.', text: `Except as the Agreement expressly states, the Services are provided as they are and as available, and Callvox gives no other warranty, whether express or implied, including on merchantability, fitness for a particular purpose, uninterrupted or error-free operation, or the delivery, timing or quality of any call, message, top-up, eSIM or number. This disclaimer does not apply to the extent the law does not allow it.` },
      { n: '11.3', title: 'No liability for content.', text: `Callvox is not liable for the content of calls, messages or information sent by or to the Customer or its end users, for third-party services reachable through the Services, or for bills those third parties issue.` },
      { n: '11.4', title: 'Exclusion of indirect loss.', text: `Neither Party is liable to the other for indirect, consequential, special or punitive loss, or for loss of profit, revenue, business, customers, contracts, goodwill or data, however caused.` },
      { n: '11.5', title: 'Cap.', text: `Each Party's total liability to the other in any calendar year, for all claims arising from or in connection with the Agreement, is limited to the greater of (a) the fees paid and payable under the Agreement in the twelve (12) months before the event giving rise to the claim, and (b) fifty thousand euros (EUR 50,000). The Customer's obligation to pay fees is not subject to this cap.` },
      { n: '11.6', title: 'Unlimited liability.', text: `Nothing in the Agreement limits or excludes liability for fraud, wilful misconduct, gross negligence, death or personal injury caused by negligence, or any liability that cannot lawfully be limited.` },
      { n: '11.7', title: 'Customer indemnity.', text: `The Customer will indemnify and hold harmless Callvox, its Affiliates, and their directors, employees and agents against all losses, fines, penalties, and reasonable legal costs arising from third-party claims or regulatory action that result from: (a) the Customer's or its end users' Traffic or content; (b) a breach of Article 6 or 7; or (c) the Customer's use of the Services in breach of the Agreement or the law. Callvox will give prompt notice of the claim, reasonable cooperation, and control of the defence, except that the Customer may not settle a claim in a way that admits fault for Callvox without its consent.` },
    ],
  },
  {
    title: '12. Term, suspension and termination',
    clauses: [
      { n: '12.1', title: 'Term.', text: `The Agreement starts on the earlier of the date the first Order Form is signed or accepted and the date the Customer first sends Traffic, and continues until terminated. Each Order Form runs for the initial term it states and then renews for successive periods of equal length, unless either Party gives at least thirty (30) days' written notice of non-renewal, or the Order Form states a different notice period. If an Order Form states no term, either Party may end it for convenience on thirty (30) days' written notice.` },
      { n: '12.2', title: 'Termination for cause.', text: `Either Party may terminate the Agreement or a Service Annex immediately by written notice if the other Party: (a) materially breaches the Agreement and does not remedy the breach within thirty (30) days after written notice describing it; or (b) becomes insolvent, enters liquidation, bankruptcy or any similar proceeding, makes an arrangement with its creditors, or has a receiver or administrator appointed over its assets, or an equivalent event occurs in its jurisdiction.` },
      { n: '12.3', title: 'Immediate termination by Callvox.', text: `Callvox may also terminate immediately by written notice if the Customer breaches Article 6 or 7 in a way that cannot be remedied, loses a licence or authorisation it needs, becomes subject to sanctions, undergoes a change of control that Callvox reasonably considers unacceptable on credit or compliance grounds, or fails to provide the security Callvox has requested.` },
      {
        n: '12.4',
        title: 'Suspension.',
        text: `Callvox may suspend the Services, in whole or in part, including particular routes, destinations, credentials or Traffic:`,
        items: [
          `immediately and without prior notice where it reasonably suspects fraud, abusive or unlawful Traffic, a security threat, or a breach of Article 6 or 7, or where a regulator, court, Upstream Provider or the law requires it;`,
          `after five (5) business days' written notice, if the Customer has not paid an undisputed amount by its due date, or has not provided requested security or reduced exposure above its credit limit; or`,
          `where Callvox's own supply of the underlying Service is suspended or ends.`,
        ],
        after: `Callvox will lift a suspension once the cause is remedied. Fees for Services remain payable during a suspension caused by the Customer.`,
      },
      { n: '12.5', title: 'Effects of termination.', text: `On termination or expiry, the Customer must stop sending Traffic and pay all amounts due, including amounts for Traffic up to the end date and any early-termination charges stated in the Order Form. If the Customer terminates during an initial or renewal term other than under Article 12.2(a) or (b), it must pay the recurring charges for the remainder of that term and Callvox's reasonable unrecoverable costs of setting up the Service. Termination of a Service Annex does not end the Agreement or other Service Annexes. Termination does not affect rights and liabilities that have accrued.` },
      { n: '12.6', title: 'Survival.', text: `Articles 4, 5, 8, 9, 10, 11, 12.5, 12.6 and 14, and any other provision that by its nature should continue, survive termination.` },
    ],
  },
  {
    title: '13. Force majeure',
    text: `Neither Party is liable for delay or failure to perform caused by events beyond its reasonable control, including natural disasters, fire, flood, epidemic, war, terrorism, riot, strikes, embargoes, government or regulatory action, power or network failure, fibre or cable cuts, and failures of Upstream Providers or of public networks that it could not reasonably have avoided. The affected Party must tell the other promptly and use reasonable efforts to resume. Payment obligations for Services already supplied are not excused. If a force majeure event lasts more than sixty (60) days, either Party may terminate the affected Service on written notice.`,
  },
  {
    title: '14. General',
    clauses: [
      {
        n: '14.1',
        title: 'Notices.',
        text: `Notices under the Agreement must be in writing and sent by email, or by courier or registered post, to the contacts below and to the contacts stated in the Order Form. A notice is received on the next business day after an email is sent, and on delivery for courier or post. Each Party must keep its contacts up to date.`,
        table: {
          head: ['Subject', 'Callvox contact'],
          rows: [
            ['Legal notices, contract matters, and high-priority or fraud escalations', 'legal@callvox.net'],
            ['Billing, invoices and disputes', 'billing@callvox.net'],
            ['New rates and rate changes', 'rates@callvox.net'],
            ['NOC and technical support', 'support@callvox.net'],
            ['Commercial', 'ben@callvox.net'],
          ],
        },
        after: `Postal address: CALLVOX OÜ, Lootsa tn 5, Tallinn, 11415, Estonia.`,
      },
      { n: '14.2', title: 'Amendments.', text: `Except for price changes under Article 4.2 and changes to the Platform or Services under Article 3.7, any change to the Agreement must be agreed in writing by both Parties. Callvox may update these Terms by giving thirty (30) days' written notice, and the update applies to Order Forms signed or renewed after that date, and to existing Order Forms at their next renewal, unless the update is required by law, in which case it applies from the date the law requires.` },
      { n: '14.3', title: 'Assignment and subcontracting.', text: `Neither Party may assign or transfer its rights or obligations without the other's prior written consent, which may not be unreasonably withheld, except that Callvox may assign to an Affiliate or to a successor to its business. Callvox may use Affiliates and subcontractors to perform the Services and remains responsible for their performance.` },
      { n: '14.4', title: 'Independent parties.', text: `The Parties are independent contractors. Nothing in the Agreement creates a partnership, joint venture, agency or employment relationship.` },
      { n: '14.5', title: 'No waiver.', text: `A failure or delay in exercising a right is not a waiver of it, and a waiver of one breach is not a waiver of any other.` },
      { n: '14.6', title: 'Severability.', text: `If a provision is held invalid or unenforceable, the rest of the Agreement stays in force, and the Parties will replace the provision with a valid one that is as close as possible to its intent.` },
      { n: '14.7', title: 'Third parties.', text: `Only the Parties and, for Articles 11.7 and 11.3, Callvox's Affiliates may rely on the Agreement. No end user or other third party has any right to enforce it.` },
      { n: '14.8', title: 'Counterparts and electronic acceptance.', text: `The Agreement may be signed in counterparts and electronically, and acceptance through the Platform is binding. Each signatory confirms it has authority to bind its Party.` },
      { n: '14.9', title: 'Language.', text: `The Agreement is made in English, and any translation is for convenience only.` },
      { n: '14.10', title: 'Governing law.', text: `The Agreement and any dispute or claim arising from or in connection with it, including non-contractual disputes, are governed by the laws of Estonia, excluding its conflict-of-laws rules and the United Nations Convention on Contracts for the International Sale of Goods.` },
      { n: '14.11', title: 'Jurisdiction.', text: `The Parties will first try to settle any dispute in good faith through senior management. If they cannot do so within thirty (30) days, the courts of Tallinn, Estonia, have exclusive jurisdiction, except that Callvox may bring proceedings to collect unpaid amounts or to obtain urgent injunctive relief in any competent court.` },
    ],
  },
]

function ClauseView({ c }: { c: Clause }) {
  return (
    <div className="mt-4">
      <p>
        {c.n && <span className="mr-2 font-medium text-navy-DEFAULT">{c.n}</span>}
        {c.title && <strong className="text-navy-DEFAULT">{c.title} </strong>}
        {c.text && linkify(c.text)}
      </p>
      {c.table && <DataTable {...c.table} />}
      {c.items && (
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {c.items.map((item, i) => (
            <li key={i}>{linkify(item)}</li>
          ))}
        </ul>
      )}
      {c.after && <p className="mt-3">{linkify(c.after)}</p>}
    </div>
  )
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-paper">
        <div className="mx-auto max-w-page px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <div>
            <h1 className="display-h1 text-navy-DEFAULT">Terms of Service</h1>
            <p className="mt-4 text-sm text-navy-400">Effective date: October 2, 2026</p>

            <div className="mt-12 space-y-12 text-[15px] leading-relaxed text-navy-600">
              <section>
                <p>
                  These Terms of Service (the &ldquo;Terms&rdquo;) govern the supply of telecommunications and related
                  services by CALLVOX OÜ, an Estonian private limited company, registry code 17467209, VAT no.
                  EE102976692, registered office Lootsa tn 5, Tallinn, 11415, Estonia (&ldquo;Callvox&rdquo;), to the
                  business customer named in the applicable Order Form (the &ldquo;Customer&rdquo;). Callvox and the
                  Customer are each a &ldquo;Party&rdquo; and together the &ldquo;Parties&rdquo;.
                </p>
                <p className="mt-4">
                  The Services are for businesses only. By signing an Order Form, accepting these Terms online, creating
                  an account or sending traffic to Callvox, the Customer agrees to these Terms. Our handling of personal
                  data is described in the{' '}
                  <Link href="/privacy" className="text-cyan-DEFAULT underline">
                    Privacy Notice
                  </Link>
                  .
                </p>
              </section>

              {articles.map((a) => (
                <section key={a.title}>
                  <h2 className="display-h2 text-navy-DEFAULT">{a.title}</h2>
                  {a.text && <p className="mt-4">{linkify(a.text)}</p>}
                  {a.defs && (
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      {a.defs.map(([term, def]) => (
                        <li key={term}>
                          <strong className="text-navy-DEFAULT">{term}:</strong> {linkify(def)}
                        </li>
                      ))}
                    </ul>
                  )}
                  {a.clauses?.map((c, i) => (
                    <ClauseView key={c.n ?? i} c={c} />
                  ))}
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
