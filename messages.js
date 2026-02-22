/* ============================================
   CRISISUNHEARD.ORG — EMAIL TEMPLATES
   8 rotating versions per target to avoid spam filters.
   Rotates every 7 minutes based on clock time.
   ============================================ */

const SENATOR_MESSAGES = [
  {
    subject: "Urgent Action Needed — Eritrean Refugees Facing Torture in Egypt",
    body: `Dear Senator,

I am writing to urge you to take immediate action regarding the ongoing crisis facing Eritrean refugees in Egypt. Credible reports from human rights organizations document severe torture, sexual assault, and extortion targeting these refugees — including being forced to pay money simply to lie down and sleep.

This is a humanitarian emergency that has received little international attention. I urge you to:

1. Call on the U.S. State Department to raise this issue directly with Egyptian authorities.
2. Support increased funding and protection measures through UNHCR for refugees in Egypt.
3. Publicly acknowledge this crisis and use your platform to bring it to wider attention.

These are human beings in desperate need. Please act now.

Sincerely,
[Your Name]
[Your Address]`
  },
  {
    subject: "Please Act — Refugees in Egypt Are Being Tortured Right Now",
    body: `Dear Senator,

I am a constituent reaching out about a humanitarian crisis that is being largely ignored by the international community. Eritrean refugees in Egypt are being subjected to torture, sexual violence, and systematic extortion. The situation is urgent and ongoing.

Human rights organizations have documented these abuses. People are being forced to pay simply for basic human dignities. The silence from governments around the world is unacceptable.

I am asking you to:
1. Raise this issue with the State Department and demand diplomatic pressure on Egypt.
2. Advocate for stronger UNHCR intervention and funding in Egypt.
3. Use your voice to make this crisis visible.

Please do not let this continue in silence.

Respectfully,
[Your Name]
[Your Address]`
  },
  {
    subject: "A Crisis You Can Help Stop — Eritrean Refugees in Egypt",
    body: `Dear Senator,

I am writing about an urgent and largely unreported humanitarian emergency. Eritrean refugees currently in Egypt are facing documented torture, sexual assault, and extortion. Basic dignities are being sold to them for money they do not have.

As my elected representative, I am asking you to take the following steps:

1. Request a formal briefing from the State Department on the situation in Egypt.
2. Push for increased international monitoring and protection of refugees in Egypt through the UNHCR.
3. Issue a public statement calling attention to this crisis.

Every day without action is another day of preventable suffering. Please act.

With urgency,
[Your Name]
[Your Address]`
  },
  {
    subject: "Human Rights Emergency — Your Voice Is Needed Now",
    body: `Dear Senator,

I am reaching out as a concerned constituent about a serious human rights emergency affecting Eritrean refugees in Egypt. Reports from credible organizations confirm ongoing torture, sexual violence, and extortion. These are real people whose suffering has gone unacknowledged for too long.

The United States has both the moral authority and the diplomatic tools to pressure for change. I urge you to use them.

Specifically, I am asking you to:
1. Contact the State Department about this crisis and request immediate action.
2. Support expanded UNHCR funding and presence in Egypt.
3. Speak publicly about what is happening so that more people become aware.

Your voice matters enormously here. Please use it.

Sincerely,
[Your Name]
[Your Address]`
  },
  {
    subject: "Don't Look Away — Eritrean Refugees Need Your Help",
    body: `Dear Senator,

I am writing to bring to your attention a humanitarian crisis that is happening right now and receiving almost no international coverage. Eritrean refugees in Egypt are being tortured, sexually abused, and extorted. They are being denied basic human dignities and have nowhere to turn.

I believe you have the power to help change this, and I am asking you to act.

What I am asking:
1. Urge the State Department to formally address this with Egyptian officials.
2. Push for greater UNHCR involvement and resources in Egypt.
3. Make a public statement — visibility is one of the most powerful tools against this kind of abuse.

Thank you for your service. Please do not let this crisis be ignored.

Respectfully,
[Your Name]
[Your Address]`
  },
  {
    subject: "Constituent Request — Address Refugee Crisis in Egypt",
    body: `Dear Senator,

As your constituent, I am asking you to address the ongoing humanitarian crisis affecting Eritrean refugees in Egypt. Human rights groups have documented widespread torture, sexual violence, and extortion targeting this vulnerable population. The situation demands urgent international attention.

I respectfully request that you:
1. Ask the State Department to formally engage Egyptian authorities on this issue.
2. Support increased protections and resources through UNHCR for refugees in Egypt.
3. Publicly acknowledge this crisis and bring it to the attention of your colleagues.

The people affected by this crisis have no platform. You do. Please use it on their behalf.

Sincerely,
[Your Name]
[Your Address]`
  },
  {
    subject: "Silence Is Complicity — Act on the Eritrean Refugee Crisis in Egypt",
    body: `Dear Senator,

I am a constituent writing to you about a humanitarian emergency that the international community has failed to adequately address. Eritrean refugees in Egypt are currently being subjected to documented torture, sexual assault, and systematic extortion. The scale and severity of these abuses demand a response.

I urge you to take the following concrete steps:
1. Formally request that the U.S. State Department address this with Egyptian authorities.
2. Advocate within the Senate for increased funding and accountability for UNHCR operations in Egypt.
3. Issue a public statement naming this crisis and calling for action.

People are suffering right now. History will judge how we responded. Please act with urgency.

With respect,
[Your Name]
[Your Address]`
  },
  {
    subject: "Urgent — Please Help Refugees Being Tortured in Egypt",
    body: `Dear Senator,

I am writing to urge immediate action on a crisis that has gone largely unnoticed. Eritrean refugees in Egypt are facing severe abuse — including torture, sexual assault, and extortion. Verified reports exist. What is missing is political will.

I am asking you, as my representative, to bring that will.

Three things you can do today:
1. Direct the State Department to raise this issue urgently with Egypt.
2. Champion increased international monitoring and aid through UNHCR.
3. Speak out publicly — awareness is the first step toward accountability.

These are human beings. They deserve to be seen and protected. Please help.

Sincerely,
[Your Name]
[Your Address]`
  }
];

const UNHCR_MESSAGES = [
  {
    subject: "Urgent Protection Concern — Eritrean Refugees in Egypt",
    body: `Dear UNHCR Egypt Protection Team,

I am writing to formally raise a protection concern regarding Eritrean refugees currently in Egypt. Credible reports indicate that individuals in this community are being subjected to torture, sexual assault, and systematic extortion. People are being denied basic dignities and forced to pay for fundamental necessities.

I urge UNHCR Egypt to:
1. Conduct an urgent assessment of the situation facing Eritrean refugees in detention and informal settlements.
2. Activate emergency protection mechanisms for the most vulnerable individuals.
3. Publicly report on the conditions being documented so that international pressure can be applied.

UNHCR has a mandate to protect these people. I am asking that mandate to be fulfilled urgently.

Sincerely,
[Your Name]`
  },
  {
    subject: "Protection Failure — Eritrean Refugees Facing Abuse in Egypt",
    body: `Dear UNHCR Egypt Protection Team,

I am writing to report a serious and ongoing protection failure affecting Eritrean refugees in Egypt. Documented abuses include torture, sexual violence, and extortion. These individuals are among the most vulnerable people in your care.

I ask that your team:
1. Prioritize outreach and registration for Eritrean refugees currently in vulnerable situations.
2. Engage Egyptian authorities directly on reported abuses and demand accountability.
3. Issue a public statement on the situation so international attention can be mobilized.

The people being harmed deserve immediate intervention. I urge you to act now.

Regards,
[Your Name]`
  },
  {
    subject: "Urgent — Eritrean Refugees Require Emergency Protection",
    body: `Dear UNHCR Egypt Protection Team,

I am contacting you about what appears to be a serious and ongoing human rights crisis affecting Eritrean refugees in Egypt. Reports from survivors and community members describe systematic torture, sexual assault, and extortion. These are not isolated incidents.

I am asking UNHCR Egypt to:
1. Launch an emergency review of protection conditions for Eritrean refugees.
2. Coordinate with Egyptian authorities to end documented abuses immediately.
3. Report publicly on findings so that the international community can respond.

UNHCR's mandate exists for exactly this situation. Please act on it.

With urgency,
[Your Name]`
  }
];

const IGO_MESSAGES = [
  {
    subject: "Protection Failure Report — Eritrean Refugees in Egypt",
    body: `Dear UNHCR Inspector General's Office,

I am writing to report what appears to be a serious protection failure by UNHCR Egypt regarding Eritrean refugees. Credible accounts describe ongoing torture, sexual assault, and extortion affecting this population — conditions that UNHCR has a mandate to prevent and address.

It is my understanding that UNHCR has been aware of conditions affecting this community and has not taken adequate action. I am requesting that the Inspector General's Office:

1. Launch an independent review of UNHCR Egypt's protection response for Eritrean refugees.
2. Investigate whether the protection mandate is being fulfilled for this group.
3. Report publicly on findings and corrective actions taken.

I understand that reports to your office are treated confidentially. I am filing this report because I believe accountability is essential when vulnerable people are being harmed.

Respectfully,
[Your Name]`
  },
  {
    subject: "Formal Complaint — Inadequate Protection of Eritrean Refugees in Egypt",
    body: `Dear Inspector General's Office,

I am submitting a formal concern regarding the protection situation of Eritrean refugees in Egypt and UNHCR's response to it. Multiple credible accounts describe severe abuse — including torture, sexual violence, and extortion — that appear to be ongoing and insufficiently addressed.

I am requesting that the IGO:
1. Conduct an independent review of UNHCR Egypt's protection activities for Eritrean refugees.
2. Assess whether current resources and interventions match the scale of the crisis.
3. Make findings and recommendations available to the public.

People are being harmed. I am asking for accountability.

Sincerely,
[Your Name]`
  },
  {
    subject: "IGO Report — Eritrean Refugees Not Adequately Protected in Egypt",
    body: `Dear Inspector General's Office,

I am writing to raise a protection concern for your investigation. Eritrean refugees in Egypt are reportedly experiencing systematic torture, sexual assault, and extortion. Community members and advocates have raised these concerns without receiving adequate response.

I am asking the Inspector General's Office to:
1. Investigate whether UNHCR Egypt is meeting its protection obligations for Eritrean refugees.
2. Review internal reporting and escalation of known risks affecting this population.
3. Issue recommendations to ensure immediate corrective action.

I trust this report will be treated with the confidentiality your office guarantees. Thank you for your attention to this matter.

Respectfully,
[Your Name]`
  }
];

const HRW_MESSAGES = [
  {
    subject: "Tip: Eritrean Refugees in Egypt — Torture, Sexual Assault, Extortion",
    body: `Dear Human Rights Watch — Middle East & North Africa Team,

I am submitting a tip regarding an urgent and underreported human rights crisis. Eritrean refugees in Egypt are reportedly being subjected to systematic torture, sexual assault, and extortion. Survivors describe being forced to pay for basic necessities and subjected to violence when unable to comply.

This crisis has received little to no international media coverage. I believe this is exactly the kind of situation that requires HRW's investigative attention and public reporting.

I am asking your team to:
1. Prioritize an investigation into conditions facing Eritrean refugees in Egypt.
2. Interview survivors and community members to document abuses.
3. Publish a public report that can force governments and UNHCR to respond.

The people affected have no platform. HRW does. Please use it.

Regards,
[Your Name]`
  },
  {
    subject: "Urgent Tip — Human Rights Crisis, Eritrean Refugees in Egypt",
    body: `Dear HRW MENA Team,

I am writing to flag an urgent situation that has gone largely unreported. Eritrean refugees in Egypt are facing documented and ongoing abuses — including torture, sexual violence, and systematic extortion. The international community has not responded.

This case appears to meet the threshold for an HRW investigation and report. I urge your team to:
1. Assign a researcher to document conditions for Eritrean refugees in Egypt.
2. Engage directly with survivors and advocates.
3. Publish findings to bring international pressure.

Silence is enabling this abuse to continue. A HRW report could change that.

Sincerely,
[Your Name]`
  }
];

/* ============================================
   ROTATION LOGIC
   Returns message index based on current time window.
   All users in the same 7-min window get same version
   (so senators get varied emails across time, not identical ones).
   ============================================ */

function getRotatingMessage(messageArray) {
  const randomIndex = Math.floor(Math.random() * messageArray.length);
  return messageArray[randomIndex];
}

function formatMessage(msgObj) {
  return `Subject: ${msgObj.subject}\n\n${msgObj.body}`;
}
