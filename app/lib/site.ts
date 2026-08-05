export const site = {
  name: "Molina Hospitality Group",
  shortName: "MHG",
  description:
    "Restaurant operations consulting and fractional executive leadership for independent operators, multi-unit groups, and hospitality ownership teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rivastrategies.github.io/MolinaHospitality",
};

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  overview: string;
  challenges: string[];
  process: { title: string; text: string }[];
  deliverables: string[];
  outcomes: string[];
  audience: string[];
  related: string[];
};

const sharedProcess = [
  { title: "Assess", text: "See the operation as it is—through observation, interviews, reporting, and frontline reality." },
  { title: "Prioritize", text: "Separate urgent symptoms from the few operating issues that are driving them." },
  { title: "Implement", text: "Put practical standards, routines, and ownership in place alongside the team." },
  { title: "Sustain", text: "Build leadership follow-through so improvements hold after the engagement." },
];

const makeService = (
  slug: string,
  name: string,
  eyebrow: string,
  summary: string,
  challenges: string[],
  deliverables: string[],
  outcomes: string[],
  audience: string[],
  related: string[],
): Service => ({
  slug,
  name,
  eyebrow,
  summary,
  overview: `${name} is not a report that sits on a shelf. MHG works with ownership and restaurant leaders to diagnose the operating reality, set clear priorities, and turn better practices into daily habits. The work is grounded in the floor, the numbers, and the way leaders actually lead.`,
  challenges,
  process: sharedProcess,
  deliverables,
  outcomes,
  audience,
  related,
});

export const services: Service[] = [
  makeService("restaurant-operations-consulting", "Restaurant Operations Consulting", "Stronger daily execution", "Build a more disciplined, consistent, and profitable restaurant operation.", ["Standards vary by shift or manager", "Ownership is trapped in daily problem-solving", "Costs, service, and accountability drift", "Managers react instead of leading"], ["Operating assessment and priority map", "Core standards and management rhythms", "KPI and accountability framework", "Implementation support"], ["More consistent execution", "Clearer management ownership", "Better visibility into performance", "Less owner dependence"], ["Independent restaurants", "Restaurant groups", "Operators preparing to scale"], ["operational-assessments", "leadership-development", "profitability-improvement"]),
  makeService("fractional-coo-services", "Fractional COO Services", "Executive operating leadership", "Add seasoned operating leadership without immediately adding a full-time executive role.", ["Ownership lacks an operating counterpart", "Multiple priorities compete without resolution", "Department leaders operate in silos", "Growth is outpacing systems"], ["Executive operating cadence", "Priority and decision framework", "Leadership-team accountability", "Owner and stakeholder reporting"], ["Stronger cross-functional execution", "Faster operating decisions", "Aligned leadership priorities", "A more scalable organization"], ["Growth-stage restaurant groups", "Investor-backed concepts", "Owners needing executive leverage"], ["multi-unit-operations", "leadership-development", "restaurant-turnarounds"]),
  makeService("restaurant-turnarounds", "Restaurant Turnarounds", "Stabilize, focus, rebuild", "Bring clarity and operating discipline to restaurants under sustained performance pressure.", ["Cash pressure is driving short-term decisions", "Guest trust or team confidence has slipped", "Labor and food controls are inconsistent", "Leadership lacks a single recovery plan"], ["Rapid operational diagnostic", "Stabilization plan and weekly scorecard", "Leadership reset", "90-day execution roadmap"], ["A focused recovery path", "Tighter cost and labor controls", "Renewed management accountability", "Improved operating stability"], ["Underperforming restaurants", "Ownership groups after leadership change", "Investors evaluating a recovery"], ["operational-assessments", "profitability-improvement", "fractional-coo-services"]),
  makeService("new-restaurant-openings", "New Restaurant Openings", "Open with discipline", "Prepare the operation, leaders, and team to execute well from the first service forward.", ["Opening responsibilities are fragmented", "Training is compressed or inconsistent", "Systems are untested before launch", "Leaders are managing tasks without a readiness plan"], ["Opening critical path", "Operating playbooks and checklists", "Leadership readiness plan", "Training and opening support"], ["Clear launch ownership", "Better-prepared managers and teams", "Fewer avoidable opening-day failures", "A stronger transition to steady operations"], ["First-time owners", "Experienced groups opening a new concept", "Franchise and multi-unit operators"], ["training-development", "leadership-development", "restaurant-operations-consulting"]),
  makeService("multi-unit-operations", "Multi-Unit Operations", "Consistency at scale", "Create the field leadership and operating systems required to perform across locations.", ["Every location operates differently", "District leaders lack effective routines", "Reporting does not lead to action", "Growth exposes gaps in training and standards"], ["Multi-unit operating model", "Field visit and review routines", "Location scorecards", "Role clarity and escalation paths"], ["More consistent unit performance", "Stronger field leadership", "Clearer visibility across locations", "Repeatable growth systems"], ["Restaurant groups", "Franchise operators", "Concepts moving beyond one location"], ["fractional-coo-services", "training-development", "operational-assessments"]),
  makeService("leadership-development", "Leadership Development", "Build leaders who lead", "Strengthen the judgment, communication, and accountability of restaurant leaders.", ["Managers avoid difficult conversations", "Standards are stated but not reinforced", "High performers are promoted without support", "Teams depend too heavily on one leader"], ["Leadership capability assessment", "Role-based development plan", "Coaching tools and meeting rhythms", "Practical leader workshops"], ["More confident managers", "Better team accountability", "Stronger bench depth", "More consistent leadership behavior"], ["General managers", "Multi-unit leaders", "Emerging restaurant leaders"], ["executive-coaching", "training-development", "multi-unit-operations"]),
  makeService("executive-coaching", "Executive Coaching", "Clarity at the top", "Help owners and senior leaders make better decisions, lead through change, and hold the line on priorities.", ["The leader has no objective operating thought partner", "Urgency crowds out strategic work", "Delegation and accountability are uneven", "Leadership habits no longer fit the organization"], ["Leadership goals and operating context review", "Confidential one-to-one sessions", "Decision and accountability tools", "Progress reviews"], ["Clearer executive decisions", "More effective delegation", "Stronger leadership presence", "Greater alignment between intent and execution"], ["Restaurant owners", "COOs and senior operators", "Leaders stepping into larger roles"], ["fractional-coo-services", "leadership-development", "multi-unit-operations"]),
  makeService("profitability-improvement", "Profitability Improvement", "Turn operating discipline into margin", "Find and address the operational causes behind weak restaurant profitability.", ["Sales are healthy but profit remains weak", "Prime cost lacks active ownership", "Discounts, waste, and purchasing erode margin", "Managers see financials too late to act"], ["Profitability diagnostic", "Controllable-cost action plan", "Management scorecard", "Weekly margin routines"], ["Better cost visibility", "Stronger manager ownership of margin", "Reduced preventable waste", "More disciplined financial execution"], ["Restaurants with compressed margins", "Growth concepts needing controls", "Ownership teams seeking operating clarity"], ["menu-engineering", "labor-optimization", "operational-assessments"]),
  makeService("menu-engineering", "Menu Engineering", "A menu that performs", "Evaluate menu performance through the practical realities of demand, contribution, execution, and guest value.", ["Popular items contribute too little", "The menu creates unnecessary kitchen complexity", "Pricing decisions lack an operating lens", "Teams struggle to execute the menu consistently"], ["Menu performance review", "Item role and contribution analysis", "Complexity and execution assessment", "Prioritized menu recommendations"], ["Clearer menu decisions", "Better margin awareness", "Reduced operational complexity", "Improved alignment between value and execution"], ["Independent operators", "Concepts preparing a menu change", "Groups needing menu discipline"], ["profitability-improvement", "labor-optimization", "guest-experience-improvement"]),
  makeService("labor-optimization", "Labor Optimization", "Right labor, stronger shifts", "Align labor planning, deployment, and management with the needs of the business and guest.", ["Schedules repeat regardless of demand", "Overtime and early clock-ins go unmanaged", "Managers cut labor reactively", "Productivity expectations are unclear"], ["Labor pattern and scheduling review", "Deployment standards", "Manager labor routines", "Productivity scorecard"], ["More intentional scheduling", "Better shift deployment", "Stronger labor accountability", "Labor decisions that protect service"], ["Restaurants with volatile labor cost", "Multi-unit operators", "Concepts changing service models"], ["profitability-improvement", "restaurant-operations-consulting", "training-development"]),
  makeService("guest-experience-improvement", "Guest Experience Improvement", "Consistency guests can feel", "Translate hospitality intent into repeatable service behavior at every point of the visit.", ["Service depends on who is working", "Recovery is inconsistent", "Leaders lack useful observation routines", "Standards feel scripted instead of hospitable"], ["Guest journey assessment", "Service and recovery standards", "Leader observation tools", "Team coaching plan"], ["More consistent hospitality", "Better service recovery", "Stronger leader presence", "Clearer guest-experience accountability"], ["Full-service restaurants", "Fast-casual concepts", "Groups protecting brand consistency"], ["training-development", "leadership-development", "operational-assessments"]),
  makeService("operational-assessments", "Operational Assessments", "See the real operation", "Gain an objective, prioritized view of what is working, what is at risk, and what to address first.", ["Ownership receives conflicting explanations", "Performance problems lack a clear root cause", "Standards exist but execution is uncertain", "The team needs an objective baseline"], ["On-site operational review", "Leadership and workflow interviews", "Performance and control review", "Prioritized findings and action roadmap"], ["A fact-based baseline", "Clear operating priorities", "Earlier visibility into risk", "A practical path forward"], ["Owners seeking clarity", "Investors and hospitality groups", "Restaurants before a major change"], ["restaurant-operations-consulting", "restaurant-turnarounds", "profitability-improvement"]),
  makeService("training-development", "Training & Development", "Train for the operation you expect", "Build practical training systems that prepare people to perform—not simply complete a checklist.", ["Training varies by trainer or location", "Materials do not match the real job", "New managers learn through trial and error", "Completion is tracked but capability is not"], ["Training-needs assessment", "Role-based learning paths", "Trainer and certification tools", "Reinforcement and validation plan"], ["More consistent onboarding", "Faster role readiness", "Stronger training ownership", "Better transfer from classroom to shift"], ["Restaurants standardizing onboarding", "Multi-unit groups", "Concepts preparing to grow"], ["leadership-development", "new-restaurant-openings", "multi-unit-operations"]),
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));

export const coreServiceSlugs = [
  "restaurant-operations-consulting",
  "fractional-coo-services",
  "restaurant-turnarounds",
  "new-restaurant-openings",
  "multi-unit-operations",
  "leadership-development",
];

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
