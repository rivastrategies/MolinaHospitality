export type FAQ = { question: string; answer: string };

export type AudiencePage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  reality: string;
  priorities: { title: string; text: string }[];
  services: string[];
  faqs: FAQ[];
};

export const audiences: AudiencePage[] = [
  {
    slug: "independent-restaurants",
    name: "Independent Restaurants",
    title: "Restaurant Consulting for Independent Operators",
    description: "Practical operating support for independent restaurant owners who need stronger margins, managers, systems, and freedom from daily intervention.",
    reality: "Independent restaurants compete through character, hospitality, and owner commitment. Those strengths can also create operating dependence on the owner. MHG helps translate what makes the restaurant special into standards and leadership routines the team can carry consistently.",
    priorities: [
      { title: "Reduce owner dependence", text: "Move decisions, standards, and accountability into a capable management structure." },
      { title: "Protect the concept", text: "Document the operating choices that define quality and guest experience without making hospitality feel scripted." },
      { title: "Strengthen the economics", text: "Give managers practical ownership of labor, food cost, waste, and weekly performance." },
      { title: "Build the next layer of leadership", text: "Develop managers who can lead the restaurant—not simply cover the schedule." },
    ],
    services: ["restaurant-operations-consulting", "profitability-improvement", "leadership-development", "operational-assessments"],
    faqs: [
      { question: "When should an independent restaurant hire an operations consultant?", answer: "An outside operating perspective becomes useful when ownership is repeatedly solving the same problems, profitability does not reflect sales, manager accountability is unclear, or growth is being delayed by owner dependence." },
      { question: "Will consulting make an independent restaurant feel corporate?", answer: "It should not. MHG builds only the structure needed to protect quality, accountability, and consistency. The objective is to preserve the restaurant’s identity while making execution less dependent on individual memory or heroics." },
      { question: "Can MHG work with an existing general manager?", answer: "Yes. Most engagements are designed to strengthen the leaders already responsible for the business through clearer expectations, routines, decision tools, and direct coaching." },
    ],
  },
  {
    slug: "restaurant-groups",
    name: "Restaurant Groups",
    title: "Operations Consulting for Restaurant Groups",
    description: "Build consistent operating standards, field leadership, performance visibility, and accountability across a growing restaurant group.",
    reality: "As a restaurant group grows, informal communication stops being enough. MHG helps ownership create an operating model that gives every location clear standards while giving leaders enough judgment to run the business in front of them.",
    priorities: [
      { title: "Create one operating language", text: "Align locations around the same performance expectations, definitions, and management routines." },
      { title: "Strengthen field leadership", text: "Make district and regional visits more useful than inspection tours or problem lists." },
      { title: "See performance early", text: "Connect scorecards, operating reviews, and escalation paths to action before problems compound." },
      { title: "Scale leadership capacity", text: "Clarify what changes as a leader moves from one restaurant to several." },
    ],
    services: ["multi-unit-operations", "fractional-coo-services", "training-development", "profitability-improvement"],
    faqs: [
      { question: "What changes when a restaurant company becomes multi-unit?", answer: "The business needs clearer decision rights, common operating measures, repeatable training, field leadership routines, and a dependable way to identify performance drift across locations." },
      { question: "Can MHG help standardize locations without ignoring local differences?", answer: "Yes. The work separates non-negotiable brand and operating standards from decisions that should remain with the local leader based on market, staffing, or building conditions." },
      { question: "Does MHG replace the operations team?", answer: "No. MHG can fill a temporary executive gap through Fractional COO support, but the long-term objective is stronger internal leadership and operating ownership." },
    ],
  },
  {
    slug: "hospitality-investors",
    name: "Hospitality Investors",
    title: "Restaurant Operating Advisory for Hospitality Investors",
    description: "Objective restaurant operating assessment, turnaround planning, leadership evaluation, and execution support for hospitality investors and ownership groups.",
    reality: "Financial reporting shows what happened. Operating review explains why. MHG helps investors understand the leadership, systems, and execution behind restaurant performance and turn findings into a practical operating agenda.",
    priorities: [
      { title: "Establish the operating baseline", text: "Assess how standards, controls, leadership, and unit-level execution actually function." },
      { title: "Separate leadership from system issues", text: "Determine whether performance is being limited by capability, structure, priorities, or all three." },
      { title: "Build an executable value-creation plan", text: "Translate investment priorities into work the restaurant leadership team can own." },
      { title: "Create useful reporting", text: "Connect investor visibility to the leading operating indicators that managers can influence." },
    ],
    services: ["operational-assessments", "restaurant-turnarounds", "fractional-coo-services", "multi-unit-operations"],
    faqs: [
      { question: "What does an operational assessment add beyond financial diligence?", answer: "It examines the management behaviors, controls, workflows, training, and guest-facing execution that create financial performance. It helps explain the operating causes behind the numbers." },
      { question: "Can MHG support execution after an assessment?", answer: "Yes. Assessment findings can move into implementation support, a focused turnaround, leadership development, or a Fractional COO engagement depending on the situation." },
      { question: "Does MHG provide investment advice?", answer: "No. MHG provides restaurant operating perspective and execution support. Legal, tax, valuation, and investment decisions remain with the investor and their qualified advisors." },
    ],
  },
  {
    slug: "franchise-operators",
    name: "Franchise Operators",
    title: "Restaurant Operations Consulting for Franchise Operators",
    description: "Improve unit execution, field leadership, profitability, and accountability while operating within established franchise standards.",
    reality: "A franchise system provides a model, but local operating performance still depends on leadership, staffing, cost control, and disciplined execution. MHG works inside the established brand framework to strengthen the operator’s business.",
    priorities: [
      { title: "Close the execution gap", text: "Make brand standards observable and consistently reinforced by local leaders." },
      { title: "Improve unit economics", text: "Strengthen ownership of controllable costs without compromising required standards." },
      { title: "Build field accountability", text: "Create productive routines between ownership, multi-unit leaders, and general managers." },
      { title: "Prepare for responsible growth", text: "Confirm that leadership and operating systems can support another location." },
    ],
    services: ["multi-unit-operations", "labor-optimization", "profitability-improvement", "leadership-development"],
    faqs: [
      { question: "How does MHG work within franchise requirements?", answer: "MHG treats the franchisor’s standards and approved systems as operating requirements. The focus is the franchisee’s leadership, routines, cost ownership, and consistency within that framework." },
      { question: "Can MHG help a franchisee prepare for additional units?", answer: "Yes. The work can assess leadership depth, multi-unit routines, training capacity, performance visibility, and the owner’s ability to manage a larger organization." },
      { question: "Does MHG negotiate with franchisors?", answer: "No. The role is restaurant operations consulting, not franchise legal representation or contract negotiation." },
    ],
  },
  {
    slug: "growth-stage-restaurants",
    name: "Restaurants Preparing to Grow",
    title: "Restaurant Growth and Scalability Consulting",
    description: "Prepare restaurant leadership, systems, training, and financial discipline before adding locations or operational complexity.",
    reality: "Growth magnifies whatever already exists. Strong habits become leverage; weak controls become risk. MHG helps restaurant owners determine what must be built, clarified, or strengthened before the next stage.",
    priorities: [
      { title: "Prove repeatability", text: "Identify which operating results can be reproduced without the founder in every decision." },
      { title: "Define the management model", text: "Clarify roles, decision rights, reporting, and field support before the organization expands." },
      { title: "Make training transferable", text: "Build role-based systems that prepare new people without relying on one expert trainer." },
      { title: "Sequence growth responsibly", text: "Align openings and expansion with the organization’s real leadership and operating capacity." },
    ],
    services: ["new-restaurant-openings", "multi-unit-operations", "training-development", "fractional-coo-services"],
    faqs: [
      { question: "How do we know if a restaurant is ready for a second location?", answer: "Readiness requires more than demand or capital. The original unit should demonstrate stable performance, capable leadership, transferable standards, management visibility, and the ability to operate without constant founder intervention." },
      { question: "What should be standardized before growth?", answer: "Core guest and product standards, manager routines, training, cost controls, reporting definitions, decision rights, and the opening-to-steady-state transition should all be clear enough to teach and inspect." },
      { question: "Can MHG help both before and during an opening?", answer: "Yes. MHG can assess readiness, build the opening critical path and operating playbooks, prepare leaders, and support the transition into stable daily operations." },
    ],
  },
  {
    slug: "restaurants-needing-turnaround",
    name: "Restaurants Needing a Turnaround",
    title: "Restaurant Turnaround Consulting",
    description: "Stabilize restaurant operations, focus leadership, protect cash, and build a disciplined recovery plan grounded in daily execution.",
    reality: "A turnaround cannot wait for perfect information, but urgency without priorities creates more disruption. MHG helps ownership establish the facts, stabilize the operation, and create a recovery cadence leaders can execute every week.",
    priorities: [
      { title: "Stop avoidable deterioration", text: "Address the immediate operating issues that threaten cash, service, safety, or team stability." },
      { title: "Create one recovery agenda", text: "Replace competing explanations and disconnected initiatives with a focused plan." },
      { title: "Reset leadership expectations", text: "Clarify who owns each priority and how progress will be reviewed." },
      { title: "Rebuild operating confidence", text: "Use early, visible execution wins to restore discipline with the team and ownership." },
    ],
    services: ["restaurant-turnarounds", "operational-assessments", "profitability-improvement", "fractional-coo-services"],
    faqs: [
      { question: "What happens first in a restaurant turnaround?", answer: "The first step is a rapid fact base: cash and cost pressure, leadership capacity, guest-impacting failures, standards, staffing, and the few issues that must be stabilized immediately." },
      { question: "How is turnaround consulting different from a normal assessment?", answer: "A turnaround compresses the assessment and moves directly into a recovery cadence. The work balances immediate stabilization with the systems and leadership changes required to prevent relapse." },
      { question: "Can every restaurant be turned around?", answer: "No consultant can responsibly promise that. Viability depends on the concept, obligations, market, capital, leadership, and severity of the situation. MHG provides an objective operating view and a practical path when recovery is supportable." },
    ],
  },
];

export const audienceMap = Object.fromEntries(audiences.map((item) => [item.slug, item]));

export type LocationPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  markets: string[];
  considerations: { title: string; text: string }[];
  faqs: FAQ[];
};

export const locations: LocationPage[] = [
  {
    slug: "texas",
    name: "Texas",
    title: "Restaurant Operations Consulting in Texas",
    description: "Texas restaurant operations consulting for independent owners, multi-unit groups, franchisees, investors, and growth-stage hospitality companies.",
    intro: "MHG supports Texas restaurant ownership teams with practical operating leadership—from independent concepts and family-owned groups to multi-unit and investor-backed organizations. Engagements are shaped around the restaurant’s operating reality, leadership team, and stage of growth.",
    markets: ["Houston", "Dallas–Fort Worth", "Austin", "San Antonio", "Corpus Christi", "Rio Grande Valley", "East Texas", "Statewide multi-unit support"],
    considerations: [
      { title: "Scale across large markets", text: "Field leadership and reporting must work across distance without reducing every decision to a spreadsheet." },
      { title: "Compete for capable leaders", text: "Clear roles, development, and operating support help restaurants retain and grow stronger managers." },
      { title: "Protect margins during volatility", text: "Restaurant leaders need weekly ownership of labor, purchasing, waste, and execution—not delayed reaction." },
      { title: "Grow without diluting hospitality", text: "Standards should protect the guest promise while giving leaders enough judgment to lead." },
    ],
    faqs: [
      { question: "Does MHG work throughout Texas?", answer: "Yes. MHG is positioned to support restaurant owners and groups across Texas, with engagement structure determined by location count, scope, on-site needs, and leadership cadence." },
      { question: "Can MHG support both independent and multi-unit restaurants in Texas?", answer: "Yes. Services range from individual restaurant assessments and leadership development to multi-unit operating systems and Fractional COO support." },
      { question: "Is the work performed on-site or remotely?", answer: "Operating assessments and implementation work often benefit from on-site observation. Coaching, leadership reviews, reporting, and portions of implementation can also be handled remotely when practical." },
    ],
  },
  {
    slug: "gulf-coast",
    name: "Texas Gulf Coast",
    title: "Restaurant Consulting on the Texas Gulf Coast",
    description: "Restaurant operations consulting for hospitality owners and groups across the Texas Gulf Coast, including Houston, Galveston, Corpus Christi, and surrounding markets.",
    intro: "The Texas Gulf Coast combines major metropolitan restaurant markets, tourism-driven demand, destination hospitality, and seasonal operating pressure. MHG helps ownership teams build the leadership and systems required to perform through those conditions.",
    markets: ["Greater Houston", "Galveston County", "Beaumont and Golden Triangle", "Coastal Bend", "Corpus Christi", "Victoria and Crossroads", "Destination and seasonal concepts", "Regional restaurant groups"],
    considerations: [
      { title: "Manage demand swings", text: "Labor planning, inventory discipline, and manager decision-making must respond without becoming reactive." },
      { title: "Build operating resilience", text: "Clear communication, leadership coverage, and contingency routines matter in coastal markets." },
      { title: "Protect destination hospitality", text: "High-volume and seasonal pressure cannot be allowed to erase the guest experience." },
      { title: "Connect dispersed locations", text: "Regional groups need field routines that create visibility without constant owner travel." },
    ],
    faqs: [
      { question: "Which Gulf Coast restaurant markets does MHG serve?", answer: "MHG’s intended service area includes Greater Houston, Galveston, Beaumont and the Golden Triangle, Victoria, Corpus Christi, the Coastal Bend, and other Texas Gulf Coast markets." },
      { question: "Can MHG help seasonal or tourism-driven restaurants?", answer: "Yes. Work can focus on demand-based labor planning, training readiness, inventory and cost control, leadership coverage, high-volume execution, and transition between peak and off-peak periods." },
      { question: "Can one engagement cover multiple Gulf Coast locations?", answer: "Yes. Multi-location work can combine representative site assessments, common performance measures, leadership reviews, and a field operating cadence across the group." },
    ],
  },
];

export const locationMap = Object.fromEntries(locations.map((item) => [item.slug, item]));

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  takeaway: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
  questions: FAQ[];
  relatedServices: string[];
};

export const insights: Insight[] = [
  {
    slug: "improve-restaurant-operations",
    title: "How to Improve Restaurant Operations Without Adding More Complexity",
    description: "A practical framework for improving restaurant execution, management accountability, operating consistency, and profitability.",
    category: "Restaurant Operations",
    takeaway: "Operational improvement is usually less about adding programs and more about making expectations, ownership, and follow-through unmistakably clear.",
    sections: [
      { heading: "Start with observable reality", paragraphs: ["A restaurant cannot improve from reports alone. Watch the handoffs, manager decisions, production flow, pre-shift communication, line checks, labor moves, guest recovery, and closing discipline. These reveal where standards are understood and where they depend on memory or individual effort.", "The assessment should end with a small number of operating causes—not an overwhelming list of symptoms."], points: ["What changes by shift or manager?", "Which decisions always return to the owner?", "Where does the team work around the system?", "Which controls produce information too late?"] },
      { heading: "Put the management week in writing", paragraphs: ["Strong restaurants run on a dependable management cadence. Leaders should know what is reviewed daily, weekly, and monthly; which decisions belong to them; and what requires escalation.", "A useful cadence connects shift execution to financial performance. It should include operating observations, people priorities, cost measures, guest feedback, and commitments from the prior review."] },
      { heading: "Build accountability around commitments", paragraphs: ["Accountability is not a scorecard by itself. It is the repeated practice of naming an expectation, assigning ownership, reviewing evidence, and addressing missed commitments directly.", "When every priority has an owner and a review date, fewer issues survive by moving from meeting to meeting without resolution."] },
      { heading: "Simplify before you automate", paragraphs: ["Technology can make a good process faster, but it cannot make an unclear process useful. Define the operating decision, required information, owner, and review rhythm first. Then determine whether a tool would improve speed or visibility."], points: ["One definition for each core measure", "One owner for each routine", "One place to review performance", "One escalation path when standards drift"] },
    ],
    questions: [
      { question: "What is the first step in improving restaurant operations?", answer: "Begin with direct observation and a fact-based assessment of leadership, standards, controls, workflow, costs, and guest experience. Prioritize the few root causes creating repeated problems." },
      { question: "How long does restaurant operational improvement take?", answer: "The timing depends on the issue, leadership capacity, and number of locations. Immediate controls can change quickly; durable leadership behavior and operating consistency require repeated implementation and reinforcement." },
      { question: "What restaurant operations should be reviewed every week?", answer: "At minimum, leadership commitments, staffing and labor, sales patterns, food and beverage cost signals, waste, guest feedback, maintenance risk, training progress, and major execution gaps should be reviewed." },
    ],
    relatedServices: ["restaurant-operations-consulting", "operational-assessments", "leadership-development"],
  },
  {
    slug: "reduce-restaurant-owner-dependence",
    title: "How to Build a Restaurant That Does Not Depend on the Owner Every Day",
    description: "Reduce restaurant owner dependence by strengthening management roles, operating standards, decision rights, and accountability routines.",
    category: "Leadership",
    takeaway: "Owner freedom is not created by stepping away first. It is created by building leaders and systems that can carry the standard before the owner steps away.",
    sections: [
      { heading: "Identify where the owner is still the system", paragraphs: ["List the decisions, approvals, relationships, and quality judgments that stop when the owner is absent. Separate work the owner chooses to keep from work the organization has never learned to own.", "The most important gaps are often not tasks. They are judgment, confidence, and accountability."], points: ["Vendor and purchasing decisions", "Manager conflict and discipline", "Scheduling exceptions", "Guest recovery", "Quality and maintenance calls"] },
      { heading: "Clarify what good management owns", paragraphs: ["A general manager should understand the business results, people decisions, operating standards, and guest outcomes they are expected to own. Clear authority must accompany clear accountability.", "Owners undermine delegation when they assign responsibility but continue to reverse decisions, bypass the manager, or solve issues before the leader can act."] },
      { heading: "Replace constant access with a management cadence", paragraphs: ["The goal is not less communication. It is more useful communication. Daily escalation rules, weekly operating reviews, and defined decision thresholds reduce the need for continuous texts and interruptions."] },
      { heading: "Test independence deliberately", paragraphs: ["Owner absence should be increased in planned stages. Review what happened, where decisions stalled, and which standards drifted. Use each gap to improve role clarity, training, or the operating system—not as proof that delegation cannot work."] },
    ],
    questions: [
      { question: "Why do restaurant owners struggle to step away?", answer: "The operation may rely on the owner’s undocumented judgment, relationships, approvals, and quality control. Managers may have responsibility without decision authority or a clear way to review performance." },
      { question: "What should a restaurant general manager fully own?", answer: "Within defined authority, the general manager should own daily execution, staffing, team accountability, controllable costs, guest recovery, facility readiness, and delivery of agreed operating priorities." },
      { question: "Can an owner-dependent restaurant still grow?", answer: "It can add locations, but owner dependence usually becomes a larger constraint. Growth should be paired with stronger leadership layers, transferable standards, and clearer operating visibility." },
    ],
    relatedServices: ["leadership-development", "fractional-coo-services", "restaurant-operations-consulting"],
  },
  {
    slug: "fractional-coo-for-restaurants",
    title: "When a Restaurant Group Needs a Fractional COO",
    description: "Understand when Fractional COO leadership can help a restaurant group align priorities, strengthen accountability, and prepare for growth.",
    category: "Executive Leadership",
    takeaway: "A Fractional COO is most useful when the business needs executive operating leadership now, but the role, scale, or economics do not yet support a permanent full-time hire.",
    sections: [
      { heading: "The business has outgrown informal coordination", paragraphs: ["Ownership, finance, marketing, culinary, operations, and development may all be working hard while priorities compete. A Fractional COO creates one operating agenda and a cadence for decisions and follow-through."], points: ["Projects stall between departments", "Owners resolve routine cross-functional conflict", "Leadership meetings report activity instead of making decisions", "Growth work competes with current-unit performance"] },
      { heading: "The organization needs a bridge", paragraphs: ["Fractional leadership can stabilize the operating model during growth, a turnaround, a leadership transition, or the design of a future permanent role. The assignment should have a defined mandate and a clear path to internal ownership."] },
      { heading: "The role should create leverage—not another layer", paragraphs: ["The right Fractional COO clarifies priorities, improves decision speed, strengthens existing leaders, and builds systems the organization keeps. The role should not collect every unresolved task or become a permanent workaround for weak accountability."] },
      { heading: "Define the mandate before the hours", paragraphs: ["Scope should begin with outcomes and authority: what decisions the role can make, which leaders it directs, what ownership retains, and how progress will be reviewed. Time commitment follows the operating need."] },
    ],
    questions: [
      { question: "What does a Fractional COO do for a restaurant group?", answer: "A Fractional COO aligns operating priorities, leads the management cadence, strengthens accountability, coordinates cross-functional execution, and builds scalable systems alongside ownership and the leadership team." },
      { question: "Is a Fractional COO the same as an operations consultant?", answer: "Not exactly. A consultant may assess and advise. A Fractional COO typically carries an ongoing executive operating mandate and participates directly in leadership decisions and implementation." },
      { question: "When should a restaurant hire a full-time COO instead?", answer: "A full-time role becomes more appropriate when operating scale, leadership complexity, workload, and economics justify a permanent executive with continuous organizational responsibility." },
    ],
    relatedServices: ["fractional-coo-services", "multi-unit-operations", "executive-coaching"],
  },
  {
    slug: "restaurant-turnaround-priorities",
    title: "The First Operating Priorities in a Restaurant Turnaround",
    description: "A disciplined sequence for stabilizing a struggling restaurant, protecting cash, resetting leadership, and building a practical recovery plan.",
    category: "Turnarounds",
    takeaway: "A turnaround gains momentum when ownership stops treating every problem as equally urgent and organizes the recovery around stability, cash, leadership, and execution.",
    sections: [
      { heading: "Establish the facts quickly", paragraphs: ["Start with cash pressure, sales pattern, prime-cost behavior, staffing, leadership capacity, guest-impacting failures, and immediate compliance or facility risk. The goal is enough truth to act—not a perfect historical explanation."], points: ["What can cause immediate harm?", "Where is cash leaving unnecessarily?", "Which operating failures drive guest loss?", "Who can lead the recovery?"] },
      { heading: "Stabilize the shift before redesigning the company", paragraphs: ["Set minimum non-negotiable standards for staffing, product, cleanliness, service, cash control, purchasing, and manager presence. A team under pressure needs fewer priorities stated more clearly."] },
      { heading: "Create a weekly recovery room", paragraphs: ["Use one short scorecard and one leadership review to track actions, leading indicators, cash impact, people risks, and unresolved decisions. Commitments need named owners and dates."] },
      { heading: "Build beyond emergency mode", paragraphs: ["Cost cuts without operating redesign can damage the guest experience and team capacity. The recovery plan should include leadership development, role clarity, training, menu or labor decisions, and the controls required to prevent regression."] },
    ],
    questions: [
      { question: "What should a restaurant turnaround address first?", answer: "Immediate safety or compliance risk, cash leakage, critical staffing and leadership gaps, product and service failures, and the minimum controls needed to stabilize daily operations." },
      { question: "Should a struggling restaurant cut labor immediately?", answer: "Not without understanding demand, deployment, service requirements, and management behavior. Unplanned cuts can deepen guest and team problems. Labor must be actively managed, but decisions should protect the operating model." },
      { question: "How do you measure restaurant turnaround progress?", answer: "Use a focused mix of cash and cost indicators, sales and traffic signals, staffing stability, guest feedback, execution standards, and completion of specific recovery commitments." },
    ],
    relatedServices: ["restaurant-turnarounds", "profitability-improvement", "operational-assessments"],
  },
  {
    slug: "restaurant-labor-optimization",
    title: "Restaurant Labor Optimization Without Sacrificing Service",
    description: "Improve restaurant labor productivity through better forecasting, scheduling, deployment, management, and skill—not reactive cuts.",
    category: "Profitability",
    takeaway: "Labor optimization means matching capable people to the work at the right time. It is not simply scheduling fewer hours.",
    sections: [
      { heading: "Separate scheduling from deployment", paragraphs: ["A schedule is a plan. Deployment is what managers do with actual demand, callouts, reservations, production, breaks, and guest flow. Restaurants need standards for both."], points: ["Demand-based schedule construction", "Role and station deployment", "Manager adjustment thresholds", "Post-shift learning"] },
      { heading: "Give managers better leading information", paragraphs: ["A labor percentage reviewed after payroll is too late to manage. Leaders need scheduled hours, forecast demand, real-time sales signals, overtime risk, early clock-ins, break execution, and productivity expectations they can influence during the week."] },
      { heading: "Fix process before removing capacity", paragraphs: ["Poor layout, weak prep planning, inconsistent training, unnecessary menu complexity, and unclear side work all create labor demand. Removing hours without addressing the work can transfer cost into longer tickets, overtime, turnover, or lost guests."] },
      { heading: "Protect the moments guests feel", paragraphs: ["Optimization should distinguish between labor that creates guest value, labor that prevents failure, and labor created by inefficient process. This keeps cost decisions connected to the concept’s service promise."] },
    ],
    questions: [
      { question: "What is restaurant labor optimization?", answer: "It is the disciplined alignment of forecasting, scheduling, deployment, skill mix, workflow, and manager decisions with the demand and service requirements of the restaurant." },
      { question: "How can a restaurant reduce labor cost without hurting service?", answer: "Improve forecast accuracy, schedule to demand, train managers on deployment, reduce avoidable work, strengthen cross-training, control overtime and clock behavior, and measure service outcomes alongside productivity." },
      { question: "Why is labor percentage alone not enough?", answer: "Labor percentage is affected by sales and does not explain productivity, skill mix, service quality, or workflow. Managers need hours, demand, deployment, overtime, and guest-impact measures to make better decisions." },
    ],
    relatedServices: ["labor-optimization", "profitability-improvement", "training-development"],
  },
  {
    slug: "multi-unit-restaurant-systems",
    title: "The Operating Systems a Multi-Unit Restaurant Group Needs",
    description: "Build the standards, field leadership, scorecards, training, and accountability required for consistent multi-unit restaurant performance.",
    category: "Multi-Unit Operations",
    takeaway: "Multi-unit consistency comes from a clear operating model and capable field leaders—not from asking every location to copy the strongest general manager.",
    sections: [
      { heading: "Define what must be consistent", paragraphs: ["Not every choice belongs at the center. Define the guest, product, safety, financial, people, and brand standards that cannot vary. Give local leaders clear authority around the rest."] },
      { heading: "Build a field leadership system", paragraphs: ["Area leaders need a repeatable way to prepare for visits, observe the operation, coach the general manager, review performance, and follow up. Site visits should build leadership capability, not just create correction lists."], points: ["Pre-visit performance review", "Operating observation", "General manager coaching", "Commitment tracking"] },
      { heading: "Use one scorecard to start conversations", paragraphs: ["A multi-unit scorecard should make differences visible and guide questions. It should combine financial and operating indicators without turning every number into an equal priority."] },
      { heading: "Create a leadership pipeline before opening", paragraphs: ["Growth consumes leaders. Identify role readiness, development assignments, trainers, opening support, and successor coverage before the next unit needs them. Training content is only one part of the system; validation and coaching matter just as much."] },
    ],
    questions: [
      { question: "What systems does a multi-unit restaurant group need?", answer: "Core standards, role and decision clarity, field visit routines, location scorecards, management meeting cadences, training and certification, escalation paths, and a leadership pipeline." },
      { question: "How do restaurant groups improve consistency across locations?", answer: "Define non-negotiable standards, train and validate them, give field leaders effective coaching routines, use common measures, and address differences through local leadership rather than only central directives." },
      { question: "What should a restaurant area manager do during a site visit?", answer: "Review performance before arrival, observe guest and operating execution, inspect priority controls, coach the general manager, agree on a small number of commitments, and follow up after the visit." },
    ],
    relatedServices: ["multi-unit-operations", "leadership-development", "training-development"],
  },
];

export const insightMap = Object.fromEntries(insights.map((item) => [item.slug, item]));

export function faqSchema(faqs: FAQ[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
}
