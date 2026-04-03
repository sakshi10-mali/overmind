export const AUTOMATION_QUIZ_QUESTIONS = [
  {
    q: 'What type of business do you run?',
    sub: 'Helps us tailor the recommendation.',
    opts: [
      { t: 'Real estate / property', d: 'Agents, brokers, developers', s: { fit: 3, urg: 2, bud: 2 } },
      { t: 'E-commerce / retail', d: 'Online or offline sales', s: { fit: 3, urg: 3, bud: 2 } },
      { t: 'Education / coaching', d: 'Schools, institutes, tutors', s: { fit: 2, urg: 2, bud: 1 } },
      { t: 'Services / consulting', d: 'Agencies, clinics, finance', s: { fit: 2, urg: 2, bud: 2 } }
    ]
  },
  {
    q: 'How big is your team?',
    sub: 'Automation ROI scales with team size.',
    opts: [
      { t: '1–5 people', d: 'Solo or micro-business', s: { fit: 1, urg: 2, bud: 1 } },
      { t: '6–20 people', d: 'Small but growing', s: { fit: 2, urg: 2, bud: 2 } },
      { t: '21–100 people', d: 'Mid-size operation', s: { fit: 3, urg: 3, bud: 3 } },
      { t: '100+ people', d: 'Large enterprise', s: { fit: 3, urg: 3, bud: 3 } }
    ]
  },
  {
    q: "What's your biggest bottleneck?",
    sub: 'Pick the one that hurts most right now.',
    opts: [
      { t: 'Slow lead follow-up', d: 'Leads go cold before we respond', s: { fit: 3, urg: 3, bud: 2 } },
      { t: 'Manual data entry', d: 'Staff wasting hours on repetitive tasks', s: { fit: 3, urg: 2, bud: 2 } },
      { t: 'No business visibility', d: "Can't see real-time numbers", s: { fit: 2, urg: 2, bud: 3 } },
      { t: 'Customer support overload', d: 'Same questions repeated daily', s: { fit: 3, urg: 3, bud: 1 } }
    ]
  },
  {
    q: 'How do you manage leads today?',
    sub: 'Be honest — this shapes your recommendation.',
    opts: [
      { t: 'WhatsApp / phone only', d: 'No CRM, fully manual', s: { fit: 3, urg: 3, bud: 1 } },
      { t: 'Spreadsheets', d: 'Excel or Google Sheets', s: { fit: 3, urg: 2, bud: 1 } },
      { t: 'Basic CRM (Zoho etc.)', d: 'Not fully configured', s: { fit: 2, urg: 2, bud: 2 } },
      { t: 'Advanced CRM', d: 'Mostly sorted, want add-ons', s: { fit: 1, urg: 1, bud: 3 } }
    ]
  },
  {
    q: 'How many leads do you get per month?',
    sub: 'Rough estimate is fine.',
    opts: [
      { t: 'Less than 50', d: 'Early stage', s: { fit: 1, urg: 1, bud: 1 } },
      { t: '50 – 200', d: 'Steady volume', s: { fit: 2, urg: 2, bud: 2 } },
      { t: '200 – 1000', d: 'High volume', s: { fit: 3, urg: 3, bud: 2 } },
      { t: '1000+', d: 'Very high — hard to manage', s: { fit: 3, urg: 3, bud: 3 } }
    ]
  },
  {
    q: "What's your automation budget?",
    sub: 'Helps us suggest the right starting point.',
    opts: [
      { t: 'Under ₹50,000', d: 'Want to start very small', s: { fit: 1, urg: 1, bud: 1 } },
      { t: '₹50K – ₹2L', d: 'Ready for a focused module', s: { fit: 2, urg: 2, bud: 2 } },
      { t: '₹2L – ₹10L', d: 'Serious investment planned', s: { fit: 3, urg: 2, bud: 3 } },
      { t: '₹10L+', d: 'Full transformation project', s: { fit: 3, urg: 3, bud: 3 } }
    ]
  }
];

