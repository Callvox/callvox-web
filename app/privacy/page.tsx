import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'How Callvox OÜ handles personal data across its website, customer portal, recruitment and telecommunications services.',
  alternates: { canonical: '/privacy' },
}

const EMAIL = 'legal@callvox.net'

function Mail() {
  return (
    <a href={`mailto:${EMAIL}`} className="text-cyan-DEFAULT underline">
      {EMAIL}
    </a>
  )
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="display-h2 text-navy-DEFAULT">{children}</h2>
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-navy-DEFAULT">{children}</h3>
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4">{children}</p>
}

function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
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
                <td key={j} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const purposeHead = ['Purpose', 'Data', 'Legal basis']

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-paper">
        <div className="mx-auto max-w-page px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <div>
            <h1 className="display-h1 text-navy-DEFAULT">Privacy Notice</h1>
            <p className="mt-4 text-sm text-navy-400">Last updated: October 1, 2026</p>

            <div className="mt-12 space-y-12 text-[15px] leading-relaxed text-navy-600">
              <section>
                <P>
                  Callvox OÜ (&ldquo;Callvox&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a private limited company
                  registered in Estonia, registry code 17467209, registered office Lootsa tn 5, Tallinn, 11415, VAT no.
                  EE102976692. This Notice explains how we handle personal data when you visit our websites, use our
                  customer portal or APIs, deal with us as a business contact, apply for a job, or when personal data is
                  processed as part of the telecommunications services we deliver.
                </P>
                <P>
                  &ldquo;You&rdquo; means the individual visiting our website or portal (for yourself or on behalf of a
                  company), a business contact, a job applicant, or an individual whose data is processed in our
                  Services, such as the recipient of an SMS, the user of a phone number or eSIM, or the beneficiary of
                  an airtime top-up.
                </P>
              </section>

              <section>
                <H2>1. Who we are and our role</H2>
                <P>
                  Callvox is a wholesale telecommunications platform. We provide voice termination, A2P SMS, airtime
                  top-ups, eSIM provisioning and DID (telephone number) services to carriers, mobile operators, MVNOs,
                  resellers and enterprises (&ldquo;Customers&rdquo;). We route traffic and transactions between
                  Customers and upstream carriers, SMS aggregators, airtime providers and mobile operators, who deliver
                  them to the end user.
                </P>
                <P>Our role under the GDPR depends on the activity:</P>
                <Table
                  head={['Activity', 'Our role']}
                  rows={[
                    [
                      'Website, customer portal and API account administration, business contacts, recruitment',
                      <strong key="r" className="text-navy-DEFAULT">Controller</strong>,
                    ],
                    [
                      'Billing, fraud prevention, regulatory compliance and security relating to traffic and transactions, including call and message detail records',
                      <strong key="r" className="text-navy-DEFAULT">Controller</strong>,
                    ],
                    [
                      'Content of SMS messages and other end-user content that Customers submit for delivery',
                      <>
                        <strong className="text-navy-DEFAULT">Processor</strong> on the Customer&rsquo;s instructions
                        under our{' '}
                        <Link href="/dpa" className="text-cyan-DEFAULT underline">data processing agreement</Link>; <strong className="text-navy-DEFAULT">controller</strong>{' '}
                        only where we screen content ourselves for fraud or legal compliance
                      </>,
                    ],
                  ]}
                />
                <P>
                  If you are an end user of one of our Customers, that Customer decides why your data is sent to us and
                  is usually your first point of contact.
                </P>
              </section>

              <section>
                <H2>2. Scope</H2>
                <P>This Notice covers personal data processed:</P>
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>
                    through our websites, customer portal, developer portal and APIs (the &ldquo;Website&rdquo;);
                  </li>
                  <li>for recruitment (&ldquo;Job Applications&rdquo;);</li>
                  <li>
                    to deliver our Services to Customers, where end-user data is personal data
                    (&ldquo;Services&rdquo;); and
                  </li>
                  <li>
                    about business contacts such as Customer representatives, prospects, suppliers and partners
                    (&ldquo;Business Contacts&rdquo;).
                  </li>
                </ol>
              </section>

              <section>
                <H2>3. What we collect, why, and on what legal basis</H2>

                <H3>3.1 Website and customer portal</H3>
                <P>
                  <strong className="text-navy-DEFAULT">You give us:</strong> name, job title, company, business email
                  and phone, country, products and corridors of interest, and anything else you choose to share in forms
                  such as Get a Quote, Become a Partner, API access applications or rate deck downloads.
                </P>
                <P>
                  <strong className="text-navy-DEFAULT">Collected automatically:</strong> IP address, device type and
                  identifiers, browser, approximate location (country or city level), pages viewed, links clicked,
                  timestamps, via server logs, cookies and similar technologies.
                </P>
                <P>
                  <strong className="text-navy-DEFAULT">Portal and API data:</strong> account credentials, user roles,
                  API key identifiers and scopes, IP addresses used or whitelisted for API access, usage logs, support
                  tickets.
                </P>
                <Table
                  head={purposeHead}
                  rows={[
                    [
                      'Responding to enquiries, quote requests and partner applications',
                      'Contact details, company, enquiry content',
                      'Legitimate interest (Art. 6(1)(f))',
                    ],
                    [
                      'Creating and administering Customer accounts, portal users and API keys',
                      'Registration data, credentials, API identifiers, usage logs',
                      'Contract or pre-contract steps (Art. 6(1)(b)); legitimate interest (Art. 6(1)(f))',
                    ],
                    [
                      'Gated content such as rate deck downloads, and related follow-up',
                      'Contact details, company',
                      'Legitimate interest in B2B lead follow-up; consent where law requires',
                    ],
                    [
                      'Securing and improving the Website and platform',
                      'Log data, online identifiers',
                      'Legitimate interest (Art. 6(1)(f))',
                    ],
                    [
                      'Non-essential cookies and analytics',
                      'Cookie and device data',
                      'Consent (Art. 6(1)(a))',
                    ],
                  ]}
                />

                <H3>3.2 Services</H3>
                <P>
                  Depending on the Services a Customer uses, and only to the extent it is personal data, we process:
                </P>
                <UL
                  items={[
                    <><strong className="text-navy-DEFAULT">Voice:</strong> calling and called numbers, SIP signalling data, routing parameters.</>,
                    <><strong className="text-navy-DEFAULT">A2P SMS:</strong> sender IDs, recipient numbers, message content, delivery receipts.</>,
                    <><strong className="text-navy-DEFAULT">Airtime top-ups:</strong> recipient number, operator, product and amount, transaction references, and beneficiary details where a Customer supplies them.</>,
                    <><strong className="text-navy-DEFAULT">eSIM:</strong> ICCID, EID, profile and activation data, device information given at provisioning, status and data usage.</>,
                    <><strong className="text-navy-DEFAULT">DIDs:</strong> numbers assigned and, where a local regulator requires it, identity and address details of the end user or business holding the number.</>,
                    <><strong className="text-navy-DEFAULT">Support data:</strong> logs, screenshots and other material Customers send us for troubleshooting.</>,
                    <><strong className="text-navy-DEFAULT">Generated by us:</strong> call and message detail records (origin, destination, date, time, duration or size, route, price, result codes). These never include the content of voice calls. Also fraud and risk indicators, such as traffic anomalies, flagged numbers or sender IDs, and reports of suspected or confirmed fraud, including SMS pumping.</>,
                  ]}
                />
                <Table
                  head={purposeHead}
                  rows={[
                    [
                      'Delivering the Services: routing, termination, delivery, provisioning, number assignment, top-up fulfilment',
                      'Traffic and transaction data, end-user identifiers, message content (as processor)',
                      'Customer instructions (Art. 28); legitimate interest in routing and delivering communications (Art. 6(1)(f))',
                    ],
                    [
                      'Billing, invoicing, rate reconciliation, disputes',
                      'Detail records, transaction records, Customer contacts',
                      'Contract (Art. 6(1)(b)); legitimate interest; legal obligation for accounting records (Art. 6(1)(c))',
                    ],
                    [
                      'Preventing, detecting and investigating fraud, abuse and unlawful traffic, which may include screening message content and number patterns',
                      'Traffic metadata, flagged identifiers, screened content, third-party fraud intelligence',
                      'Legitimate interest in protecting Callvox, Customers, upstream partners and end users (Art. 6(1)(f)); legal obligation where applicable',
                    ],
                    [
                      'Customer due diligence: KYC, sanctions and anti-money-laundering checks on Customers and their representatives; number and airtime regulatory requirements',
                      'Identity and company data of representatives and beneficial owners, screening results',
                      'Legal obligation (Art. 6(1)(c)); legitimate interest in counterparty risk (Art. 6(1)(f))',
                    ],
                    [
                      'Responding to lawful requests from authorities and complying with telecom regulation',
                      'Traffic and Customer data as legally required',
                      'Legal obligation (Art. 6(1)(c))',
                    ],
                    [
                      'Protecting the platform and meeting agreed service levels',
                      'Log data, traffic metadata, Customer contacts',
                      'Legitimate interest (Art. 6(1)(f))',
                    ],
                  ]}
                />
                <P>We do not use end-user message content for advertising and we do not sell personal data.</P>

                <H3>3.3 Business contacts</H3>
                <P>
                  We collect business contact data (name, business email and phone, job title, company, professional
                  profile links), enquiry data and marketing preferences, from you or from sources such as your
                  employer, public business directories, industry events and professional networks.
                </P>
                <Table
                  head={purposeHead}
                  rows={[
                    [
                      'Managing relationships with Customers, suppliers and partners: contract notices, policy updates, surveys',
                      'Contact and enquiry data',
                      'Legitimate interest (Art. 6(1)(f))',
                    ],
                    [
                      'B2B outreach about our products, corridors and events',
                      'Contact data, preferences',
                      'Legitimate interest, subject to your right to object and to opt out of every message; consent where local law requires',
                    ],
                    [
                      'Office and event access management',
                      'Name, company, ID where required',
                      'Legitimate interest in security (Art. 6(1)(f))',
                    ],
                  ]}
                />

                <H3>3.4 Recruitment</H3>
                <P>
                  If you apply for a role we collect what you provide (identity and contact details, CV, employment and
                  education history, referees, right-to-work information where relevant) and, where lawful, information
                  from referees, recruitment agencies and public professional profiles. We do not seek sensitive
                  categories of data. If you choose to provide any, we rely on your explicit consent or a legal
                  requirement.
                </P>
                <P>
                  Legal basis: legitimate interest in recruiting suitable candidates (Art. 6(1)(f)); steps before an
                  employment contract (Art. 6(1)(b)); legal obligation (Art. 6(1)(c)); consent where stated. If you are
                  hired, your data becomes part of your personnel record. If not, we may keep your application for up to
                  12 months for other openings unless you ask us to delete it.
                </P>
              </section>

              <section>
                <H2>4. Who we share personal data with</H2>
                <P>
                  We share personal data only as needed for the purposes above, and never with third parties for their
                  own direct marketing.
                </P>
                <UL
                  items={[
                    <><strong className="text-navy-DEFAULT">Upstream carriers, SMS aggregators, airtime and top-up providers, eSIM and SM-DP+ partners, and mobile operators</strong> that carry, deliver or fulfil the traffic and transactions submitted through us. Delivery to the destination operator is the service, so these recipients necessarily receive the relevant numbers, message content and metadata.</>,
                    <><strong className="text-navy-DEFAULT">Callvox group companies</strong>, including Offist Telecommunications Services Ltd (United Kingdom), where needed to run the Services, billing, support and compliance.</>,
                    <><strong className="text-navy-DEFAULT">Service providers acting on our instructions:</strong> cloud hosting and database providers, background job and messaging infrastructure, email and CRM tools, analytics, invoicing and payment providers, KYC and sanctions screening providers, auditors and advisers. A current list is available on request at <Mail />.</>,
                    <><strong className="text-navy-DEFAULT">Customers</strong>, regarding their own traffic, detail records, invoices, delivery receipts and webhooks.</>,
                    <><strong className="text-navy-DEFAULT">Authorities and other third parties</strong> where disclosure is required by law, regulation, court order or government request, or is needed to establish, exercise or defend legal claims or to prevent fraud and abuse. Where lawful we will tell the affected party.</>,
                    <><strong className="text-navy-DEFAULT">Successors</strong> in a merger, acquisition, financing, reorganisation or asset sale, subject to confidentiality and this Notice.</>,
                  ]}
                />
                <P>We may share aggregated or de-identified data that does not identify you.</P>
              </section>

              <section>
                <H2>5. International transfers</H2>
                <P>
                  Our Services are international by nature. Routing a call, SMS, top-up or eSIM request to a destination
                  outside the European Economic Area (EEA), including in Africa, Latin America, South Asia and the
                  Middle East, requires sending the relevant data to carriers and operators there. Some of our service
                  providers are also outside the EEA.
                </P>
                <P>
                  For transfers outside the EEA we rely on: an adequacy decision of the European Commission (which
                  currently includes the United Kingdom); the Commission&rsquo;s Standard Contractual Clauses with
                  supplementary measures where needed; or, where a transfer is necessary to perform a contract with you
                  or in your interest, or to establish, exercise or defend legal claims, the derogations in Article 49
                  of the GDPR. You can request a copy of the applicable safeguards by contacting us.
                </P>
              </section>

              <section>
                <H2>6. How long we keep personal data</H2>
                <P>
                  We keep personal data only as long as needed for the purposes in this Notice, then delete or
                  anonymise it.
                </P>
                <Table
                  head={['Data', 'Retention']}
                  rows={[
                    ['Website enquiries and business contact data', 'Up to 24 months after last interaction, unless a relationship continues'],
                    ['Customer account and portal data', 'Length of the contract plus 6 years'],
                    ['Detail records, transaction records, invoices', 'Detailed records for 12 months for operations and disputes; accounting records for 7 years as Estonian accounting law requires'],
                    ['Message content', 'Not kept beyond delivery and a technical window of 180 days, unless needed for fraud screening, a dispute or a legal obligation'],
                    ['KYC and AML records', '5 years after the relationship ends, or as the law requires'],
                    ['Recruitment data', '12 months after the process ends'],
                  ]}
                />
                <P>
                  Data may be kept longer where the law requires it, or for a pending claim or investigation. Data in
                  backups is deleted as backup cycles allow and is isolated from other use meanwhile.
                </P>
              </section>

              <section>
                <H2>7. Security</H2>
                <P>
                  We use technical and organisational measures designed to protect personal data against unauthorised
                  access, loss, misuse and alteration, including access controls and least-privilege permissions,
                  encryption in transit, logging and monitoring, supplier due diligence and staff confidentiality
                  obligations. No system is completely secure and we cannot guarantee that a breach will never occur. If
                  a breach puts your rights and freedoms at risk, we will notify you and the competent authority as the
                  law requires.
                </P>
              </section>

              <section>
                <H2>8. Your rights</H2>
                <P>Under the GDPR and applicable local law you may have the right to:</P>
                <UL
                  items={[
                    'access your personal data and receive a copy;',
                    'have inaccurate data corrected or incomplete data completed;',
                    'have your data erased;',
                    'restrict our processing;',
                    'receive your data in a portable format;',
                    'object at any time to processing based on our legitimate interests, including direct marketing;',
                    'withdraw consent where we rely on it, without affecting earlier processing; and',
                    'not be subject to a decision based solely on automated processing that has legal or similarly significant effects. We use automated tools to detect fraud and abusive traffic, and you can ask for a person to review a decision that affects you.',
                  ]}
                />
                <P>
                  These rights are not absolute. We may refuse or limit a request where it would reveal another
                  person&rsquo;s data, conflict with a duty to retain data (such as accounting, AML or telecom rules),
                  or prejudice a fraud investigation. We will explain our reasons if we do.
                </P>
                <P>
                  To exercise your rights, write to <Mail />. We may ask you to verify your identity, and we aim to
                  reply within one month. If you are an end user of a Customer, we may forward your request to that
                  Customer where we act as its processor.
                </P>
                <P>
                  You may also complain to a supervisory authority. Our lead authority is the Estonian Data Protection
                  Inspectorate (Andmekaitse Inspektsioon), Tatari 39, 10134 Tallinn, Estonia,{' '}
                  <a href="mailto:info@aki.ee" className="text-cyan-DEFAULT underline">info@aki.ee</a>,{' '}
                  <a href="https://www.aki.ee" className="text-cyan-DEFAULT underline" rel="noopener noreferrer" target="_blank">www.aki.ee</a>.
                  You may instead contact the authority in the EU/EEA country where you live or work.
                </P>
              </section>

              <section>
                <H2>9. Marketing choices</H2>
                <P>
                  You can opt out of marketing emails at any time through the unsubscribe link in any message or by
                  writing to <Mail />. We will still send service and contractual messages such as invoices, security
                  notices and changes to terms.
                </P>
              </section>

              <section>
                <H2>10. Children</H2>
                <P>
                  Our websites and Services are intended for businesses and are not directed at children. We do not
                  knowingly collect children&rsquo;s personal data through the Website. End-user data that Customers
                  submit to us is the Customer&rsquo;s responsibility.
                </P>
              </section>

              <section>
                <H2>11. Third-party links</H2>
                <P>Our Website may link to third-party sites. We are not responsible for their privacy practices.</P>
              </section>

              <section>
                <H2>12. Changes to this Notice</H2>
                <P>
                  We may update this Notice from time to time. We will change the &ldquo;Last updated&rdquo; date and,
                  for material changes, tell you through the Website or by email.
                </P>
              </section>

              <section>
                <H2>13. Contact us</H2>
                <address className="mt-4 not-italic">
                  Callvox OÜ, Privacy Office
                  <br />
                  Lootsa tn 5, Tallinn, 11415, Estonia
                  <br />
                  Email: <Mail />
                  <br />
                  Data protection contact: <Mail />
                </address>
                <P>
                  Law enforcement and regulatory requests: <Mail />
                </P>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
