import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);
const XIcon = () => (
  <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const WarnIcon = () => <span className="text-amber-500 font-bold text-sm block text-center">⚠</span>;

// ── Comparison table data ──────────────────────────────────────────────────
const rows = [
  {
    label: "Integrated with Your Platform",
    tooltip: "Financing offered natively inside the software you already use",
    wisetack:  { type: "text", value: "✓ Built into Contractor+" },
    acorn:     { type: "text", value: "Joist & JobTread only" },
    hearth:    { type: "x" },
    enhancify: { type: "x" },
    greensky:  { type: "x" },
  },
  {
    label: "Merchant Cost Model",
    tooltip: "How you pay to offer financing",
    wisetack:  { type: "text", value: "3.9% per transaction — no subscription, no setup" },
    acorn:     { type: "text", value: "Free for standard loans (lenders pay Acorn)" },
    hearth:    { type: "text", value: "$1,499–$4,999/yr + $99 setup" },
    enhancify: { type: "text", value: "$1,149–$2,299/yr subscription" },
    greensky:  { type: "text", value: "Per-transaction fee (% not publicly disclosed)" },
  },
  {
    label: "0% APR — True vs. Deferred Interest",
    tooltip: "True 0% means no interest ever. Deferred means retroactive interest if unpaid by promo end.",
    wisetack:  { type: "text", value: "✓ True 0% — no retroactive interest" },
    acorn:     { type: "text", value: "True 0% promo (coming soon / qualified contractors)" },
    hearth:    { type: "text", value: "Credit card intro only (6–18 mo)" },
    enhancify: { type: "text", value: "Credit card intro only (varies)" },
    greensky:  { type: "text", value: "Deferred interest — NOT true 0%*", warn: true },
  },
  {
    label: "0% APR Term Options",
    tooltip: "Available 0% repayment lengths",
    wisetack:  { type: "text", value: "3, 6, 12, or 24 months" },
    acorn:     { type: "text", value: "TBD / varies by lender" },
    hearth:    { type: "text", value: "6–18 months (credit card intro only)" },
    enhancify: { type: "text", value: "Varies by lender" },
    greensky:  { type: "text", value: "6–24 months (deferred interest)", warn: true },
  },
  {
    label: "Merchant Fee for 0% Offer",
    tooltip: "What the contractor pays when a customer selects a 0% plan",
    wisetack:  { type: "text", value: "3.9% (3-mo) up to 9.9% (24-mo)" },
    acorn:     { type: "text", value: "Additional fee (not publicly disclosed)" },
    hearth:    { type: "text", value: "None — annual subscription is your only cost" },
    enhancify: { type: "text", value: "None — annual subscription is your only cost" },
    greensky:  { type: "text", value: "Yes — fee varies, not publicly disclosed" },
  },
  {
    label: "Max Loan Amount",
    tooltip: "Highest single-project amount a customer can finance",
    wisetack:  { type: "text", value: "$25,000 (increasing to $65K soon)" },
    acorn:     { type: "text", value: "$100,000" },
    hearth:    { type: "text", value: "$250,000" },
    enhancify: { type: "text", value: "$200,000" },
    greensky:  { type: "text", value: "$100,000" },
  },
  {
    label: "Min Loan Amount",
    tooltip: "Smallest job that can be financed",
    wisetack:  { type: "text", value: "$500" },
    acorn:     { type: "text", value: "Not publicly disclosed" },
    hearth:    { type: "text", value: "$1,000" },
    enhancify: { type: "text", value: "Not publicly disclosed" },
    greensky:  { type: "text", value: "Not publicly disclosed" },
  },
  {
    label: "Repayment Term Range",
    tooltip: "Full range of loan lengths available to customers",
    wisetack:  { type: "text", value: "3–60 months (up to 120 mo qualifying merchants)" },
    acorn:     { type: "text", value: "Up to 20 years" },
    hearth:    { type: "text", value: "2–12 years" },
    enhancify: { type: "text", value: "Varies by lender" },
    greensky:  { type: "text", value: "Varies by program" },
  },
  {
    label: "Customer APR Range",
    tooltip: "Interest rates customers may qualify for",
    wisetack:  { type: "text", value: "0%–35.9%" },
    acorn:     { type: "text", value: "Varies (lenders compete)" },
    hearth:    { type: "text", value: "~4.9%–35.99%" },
    enhancify: { type: "text", value: "Varies (lenders compete)" },
    greensky:  { type: "text", value: "Varies + deferred interest risk", warn: true },
  },
  {
    label: "Minimum FICO Score",
    tooltip: "Lowest credit score eligible for any offer",
    wisetack:  { type: "text", value: "Low 500s (interest-bearing); ~700 for 0%" },
    acorn:     { type: "text", value: "550+ (marketplace incl. bad credit lenders)" },
    hearth:    { type: "text", value: "550+" },
    enhancify: { type: "text", value: "550+" },
    greensky:  { type: "text", value: "Not publicly disclosed" },
  },
  {
    label: "Number of Lender Partners",
    tooltip: "How many lenders compete to approve your customer",
    wisetack:  { type: "text", value: "Single lending network" },
    acorn:     { type: "text", value: "30+ lenders compete" },
    hearth:    { type: "text", value: "17–18 lenders" },
    enhancify: { type: "text", value: "30+ lenders compete" },
    greensky:  { type: "text", value: "Single bank (Synovus)" },
  },
  {
    label: "Credit Pull Type (Pre-qual)",
    tooltip: "Does checking eligibility hurt the customer's credit score?",
    wisetack:  { type: "text", value: "Soft pull — no credit score impact" },
    acorn:     { type: "text", value: "Soft pull — no credit score impact" },
    hearth:    { type: "text", value: "Soft pull — no credit score impact" },
    enhancify: { type: "text", value: "Soft pull — no credit score impact" },
    greensky:  { type: "text", value: "Hard pull on full application", warn: true },
  },
  {
    label: "Time to Fund",
    tooltip: "When the contractor/customer receives money after approval",
    wisetack:  { type: "text", value: "1–3 business days (contractor, post-job)" },
    acorn:     { type: "text", value: "As fast as 1 business day to customer" },
    hearth:    { type: "text", value: "24–48 hours to customer" },
    enhancify: { type: "text", value: "Next business day to customer" },
    greensky:  { type: "text", value: "Same day possible (upon approval)" },
  },
  {
    label: "Application Approval Rate",
    tooltip: "% of applicants who receive a financing offer",
    wisetack:  { type: "text", value: "74%" },
    acorn:     { type: "text", value: "Not disclosed" },
    hearth:    { type: "text", value: "Not disclosed" },
    enhancify: { type: "text", value: "Not disclosed" },
    greensky:  { type: "text", value: "Not disclosed" },
  },
  {
    label: "Offer Acceptance Rate",
    tooltip: "% of approved customers who lock in their loan",
    wisetack:  { type: "text", value: "70% of approved customers accept" },
    acorn:     { type: "text", value: "Not disclosed" },
    hearth:    { type: "text", value: "Not disclosed" },
    enhancify: { type: "text", value: "Not disclosed" },
    greensky:  { type: "text", value: "Not disclosed" },
  },
  {
    label: "Avg Job Size — Financed vs. Non-Financed",
    tooltip: "How much larger financed jobs are vs. average",
    wisetack:  { type: "text", value: "4.5× — avg financed job $4,500 vs. $1,000 avg" },
    acorn:     { type: "text", value: "30–50% larger (Acorn claim)" },
    hearth:    { type: "text", value: "~30% larger (Enerbank study)" },
    enhancify: { type: "text", value: "Not disclosed" },
    greensky:  { type: "text", value: "Not disclosed" },
  },
  {
    label: "Merchants Who Won a Job via Financing",
    tooltip: "% of merchants who attributed ≥1 won job to financing",
    wisetack:  { type: "text", value: "87% of merchants won ≥1 job via financing" },
    acorn:     { type: "text", value: "Not disclosed" },
    hearth:    { type: "text", value: "Not disclosed" },
    enhancify: { type: "text", value: "Not disclosed" },
    greensky:  { type: "text", value: "Not disclosed" },
  },
  {
    label: "End Customer Satisfaction",
    tooltip: "% of customers happy financing was offered",
    wisetack:  { type: "text", value: "88% of customers happy & relieved it was offered" },
    acorn:     { type: "text", value: "Not disclosed" },
    hearth:    { type: "text", value: "Not disclosed" },
    enhancify: { type: "text", value: "Not disclosed" },
    greensky:  { type: "text", value: "300+ CFPB complaints (3 yrs)", warn: true },
  },
  {
    label: "Merchant NPS",
    tooltip: "Net Promoter Score — how likely merchants are to recommend the platform",
    wisetack:  { type: "text", value: "79 (published by Wisetack)" },
    acorn:     { type: "text", value: "Not disclosed" },
    hearth:    { type: "text", value: "Not disclosed" },
    enhancify: { type: "text", value: "Not disclosed" },
    greensky:  { type: "text", value: "Not disclosed" },
  },
];

const cols = [
  { key: "wisetack",  label: "Wisetack",      sub: "via Contractor+", highlight: true },
  { key: "acorn",     label: "Acorn Finance",  sub: "Joist / JobTread" },
  { key: "hearth",    label: "Hearth",         sub: "standalone" },
  { key: "enhancify", label: "Enhancify",      sub: "standalone" },
  { key: "greensky",  label: "GreenSky",       sub: "standalone" },
];

function Cell({ data }) {
  if (!data) return <td className="py-3 px-3 text-center text-gray-300 text-xs">—</td>;
  if (data.type === "check") return <td className="py-3 px-3 text-center"><CheckIcon /></td>;
  if (data.type === "x") return <td className="py-3 px-3 text-center"><XIcon /></td>;
  return (
    <td className={`py-3 px-3 text-center text-xs leading-snug ${data.warn ? "text-amber-700 font-medium" : "text-gray-600"}`}>
      {data.warn && <WarnIcon />}{data.value}
    </td>
  );
}
function WisetackCell({ data }) {
  if (!data) return <td className="py-3 px-3 text-center bg-blue-50 text-gray-300 text-xs">—</td>;
  if (data.type === "check") return <td className="py-3 px-3 text-center bg-blue-50"><CheckIcon /></td>;
  if (data.type === "x") return <td className="py-3 px-3 text-center bg-blue-50"><XIcon /></td>;
  return (
    <td className="py-3 px-3 text-center text-xs leading-snug font-semibold text-blue-900 bg-blue-50">
      {data.value}
    </td>
  );
}

// ── Slider helper ──────────────────────────────────────────────────────────
function Slider({ label, value, min, max, step, onChange, display }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-lg min-w-16 text-center">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-blue-600 bg-gray-200" />
      <div className="flex justify-between text-xs text-gray-400 mt-0.5">
        <span>{typeof min === "number" && min >= 1000 ? "$" + min.toLocaleString() : min}</span>
        <span>{typeof max === "number" && max >= 1000 ? "$" + max.toLocaleString() : max}</span>
      </div>
    </div>
  );
}

// ── Revenue Calculator ─────────────────────────────────────────────────────
function Calculator() {
  const [estimates, setEstimates] = useState(25);
  const [avgJob,    setAvgJob]    = useState(4200);
  const [closeRate, setCloseRate] = useState(32);
  const [annualRev, setAnnualRev] = useState(380000);

  const FINANCING_ADOPTION = 0.25;
  const JOB_MULT           = 4.5;
  const APPROVAL           = 0.74;
  const ACCEPT             = 0.70;
  const FEE                = 0.039;
  const CLOSE_LIFT         = 0.12;

  const cr = closeRate / 100;
  const currentAnnualJobs  = estimates * cr * 12;
  const lostLeadsAnnual    = estimates * (1 - cr) * 12;

  // New jobs from financing unlocking hesitant leads
  const newJobs     = lostLeadsAnnual * CLOSE_LIFT * APPROVAL * ACCEPT;
  const newJobsRev  = newJobs * avgJob;

  // Upsell on existing jobs that get financed (they go 4.5× bigger)
  const financedJobs    = currentAnnualJobs * FINANCING_ADOPTION;
  const upsellRev       = financedJobs * avgJob * (JOB_MULT - 1);

  const grossNew        = annualRev + newJobsRev + upsellRev;

  // Fee on total financed volume
  const financedVol     = (financedJobs * avgJob * JOB_MULT) + (newJobs * avgJob);
  const feeTotal        = financedVol * FEE;

  const netNew          = grossNew - feeTotal;
  const uplift          = netNew - annualRev;
  const upliftPct       = annualRev > 0 ? (uplift / annualRev) * 100 : 0;
  const onePct          = annualRev * 0.01;
  const feeOffset       = Math.min(100, (onePct / feeTotal) * 100);

  const fmt  = n => "$" + Math.round(n).toLocaleString();
  const barW = v => annualRev > 0 ? Math.min(100, (Math.abs(v) / (annualRev * 2)) * 100) : 0;

  return (
    <div className="mt-10 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-5">
        <h2 className="text-xl font-bold text-white">Calculate the Impact on Your Business</h2>
        <p className="text-blue-100 text-sm mt-1">Enter your numbers — see your upside in real time.</p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Your Business Today</p>
          <Slider label="Estimates / quotes sent per month" value={estimates} min={5} max={150} step={5}
            onChange={setEstimates} display={estimates} />
          <Slider label="Average job size" value={avgJob} min={500} max={25000} step={100}
            onChange={setAvgJob} display={"$" + avgJob.toLocaleString()} />
          <Slider label="Current close rate" value={closeRate} min={5} max={80} step={1}
            onChange={setCloseRate} display={closeRate + "%"} />
          <Slider label="Current annual gross revenue" value={annualRev} min={50000} max={3000000} step={10000}
            onChange={setAnnualRev} display={"$" + annualRev.toLocaleString()} />

          <div className="mt-4 bg-gray-50 rounded-xl p-4 text-xs text-gray-500 border border-gray-100 space-y-1">
            <p className="font-semibold text-gray-600 mb-1">Model assumptions (Wisetack published data)</p>
            <p>• <strong>1 in 4</strong> closed jobs get financed by active merchants</p>
            <p>• Financed jobs are <strong>4.5× your avg job size</strong></p>
            <p>• <strong>74%</strong> of customers who apply get approved</p>
            <p>• <strong>70%</strong> of approved customers accept their offer</p>
            <p>• Wisetack fee: <strong>3.9%</strong> on financed volume (base rate)</p>
            <p className="text-gray-400 pt-1">† Close-rate lift on lost leads is a conservative model estimate, not a Wisetack-published stat.</p>
          </div>
        </div>

        {/* Results */}
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Your Revenue With Wisetack</p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-5 text-center">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-1">Projected Annual Revenue Uplift</p>
            <p className="text-4xl font-extrabold text-emerald-600">{fmt(uplift)}</p>
            <p className="text-sm text-emerald-700 mt-1">+{upliftPct.toFixed(1)}% above your current revenue</p>
          </div>

          <div className="space-y-3 mb-5">
            {[
              { label: "Your current revenue",           val: annualRev,   color: "bg-gray-300",  neg: false },
              { label: "Upsell on financed jobs (4.5×)", val: upsellRev,   color: "bg-blue-400",  neg: false },
              { label: "New jobs won via financing",      val: newJobsRev,  color: "bg-blue-600",  neg: false },
              { label: "Wisetack fee (3.9% financed vol)",val: feeTotal,   color: "bg-red-300",   neg: true  },
            ].map(({ label, val, color, neg }) => (
              <div key={label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600 font-medium">{label}</span>
                  <span className={`font-bold ${neg ? "text-red-500" : "text-gray-800"}`}>
                    {neg ? "−" : ""}{fmt(Math.abs(val))}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-2 rounded-full ${neg ? "bg-red-300" : color} transition-all duration-500`}
                    style={{ width: barW(val) + "%" }} />
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
              <span className="text-sm font-bold text-gray-800">Net annual revenue</span>
              <span className="text-xl font-extrabold text-blue-700">{fmt(netNew)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "New jobs won/yr",        val: Math.round(newJobs) + " jobs" },
              { label: "Total Wisetack fee/yr",  val: fmt(feeTotal) },
              { label: "Financed volume/yr",     val: fmt(financedVol) },
              { label: "1% price bump covers",   val: feeOffset.toFixed(0) + "% of fee" },
            ].map(({ label, val }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                <p className="text-sm font-bold text-gray-800">{val}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700 text-center">
            💡 Raising your prices by just <strong>1%</strong> ({fmt(onePct)}/yr) covers <strong>{feeOffset.toFixed(0)}%</strong> of your total annual Wisetack fee — before counting a dollar of upside.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────
export default function Comparison() {
  const [tip, setTip] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Contractor+ Financing
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Why Wisetack Is the Smart Choice</h1>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Wisetack is built directly into Contractor+. Here's how it compares to the financing options in competing platforms — all stats sourced from each company's own published data.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 mb-6 text-sm text-amber-800 text-center">
          <strong>👀 Switching from Joist or JobTread?</strong> Those platforms offer Acorn Finance — but Wisetack has published approval rates, acceptance rates, and job-size data that Acorn hasn't matched publicly.
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4">
          {[
            { stat: "4.5×", label: "Avg financed job vs. non-financed" },
            { stat: "74%",  label: "Customer approval rate" },
            { stat: "70%",  label: "Approved customers accept" },
            { stat: "87%",  label: "Merchants won ≥1 job via financing" },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stat}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider w-44">Feature</th>
                {cols.map(c => (
                  <th key={c.key} className={`py-4 px-3 text-center text-sm font-bold ${c.highlight ? "bg-blue-600 text-white" : "text-gray-600"}`}>
                    <div>{c.label}</div>
                    <div className={`text-xs font-normal mt-0.5 ${c.highlight ? "text-blue-200" : "text-gray-400"}`}>{c.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="py-3 px-4 text-xs font-medium text-gray-800 cursor-help relative"
                    onMouseEnter={() => setTip(i)} onMouseLeave={() => setTip(null)}>
                    {row.label}
                    {tip === i && (
                      <div className="absolute left-0 top-full z-10 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 w-52 shadow-lg mt-1">
                        {row.tooltip}
                      </div>
                    )}
                  </td>
                  <WisetackCell data={row.wisetack} />
                  <Cell data={row.acorn} />
                  <Cell data={row.hearth} />
                  <Cell data={row.enhancify} />
                  <Cell data={row.greensky} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-gray-400 space-y-1.5">
          <p>* GreenSky promo offers use <strong>deferred interest</strong> — unpaid balances trigger retroactive interest for the full promo period. Wisetack's 0% carries no retroactive charges.</p>
          <p>† All Wisetack stats sourced from wisetack.com and Wisetack's "Impact of Financing" report. Competitor stats from each company's own pricing pages and partner docs as of early 2026.</p>
          <p>‡ Hearth and Enhancify annual subscriptions apply regardless of financing volume used. At low volume, Wisetack's per-transaction model is more cost-effective.</p>
          <p>§ "Not disclosed" means the stat wasn't found in the company's own published materials.</p>
        </div>

        {/* Calculator */}
        <Calculator />

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-center text-white shadow-lg">
          <div className="text-xl font-bold mb-1">Ready to capture this revenue?</div>
          <p className="text-blue-200 text-sm mb-4">
            Wisetack is already built into Contractor+. Setup takes less than 5 minutes — no subscription, no setup fee.
          </p>
          <button className="bg-white text-blue-700 font-bold px-6 py-2.5 rounded-full text-sm hover:bg-blue-50 transition-colors shadow">
            Enable Wisetack in Contractor+
          </button>
        </div>

      </div>
    </div>
  );
}
