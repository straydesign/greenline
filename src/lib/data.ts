export const SITE = {
  name: 'Greenline Lawn Care',
  tagline: 'Your Lawn, Handled.',
  phone: '(814) 555-0147',
  email: 'hello@greenlinelawn.com',
  address: 'Erie, PA',
  hours: 'Mon–Sat 7am–7pm',
  serviceArea: 'Erie County & surrounding areas',
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export const SERVICES = [
  {
    title: 'Weekly Mowing',
    description: 'Precise cutting at the optimal height for your grass type. Clippings mulched or bagged — your call.',
    icon: '🌿',
  },
  {
    title: 'Edging & Trimming',
    description: 'Clean lines along driveways, walkways, and beds. The detail that separates good from great.',
    icon: '✂️',
  },
  {
    title: 'Fertilization',
    description: 'Seasonal nutrient programs tailored to your soil. Thick, green, weed-resistant turf year-round.',
    icon: '🧪',
  },
  {
    title: 'Seasonal Cleanup',
    description: 'Spring debris removal and fall leaf cleanup. Your yard stays sharp through every season change.',
    icon: '🍂',
  },
  {
    title: 'Mulching',
    description: 'Fresh mulch in beds and tree rings. Moisture retention, weed suppression, and curb appeal in one.',
    icon: '🪵',
  },
  {
    title: 'Irrigation',
    description: 'Sprinkler install, repair, and seasonal blowouts. Water smarter, not harder.',
    icon: '💧',
  },
];

export const PORTFOLIO_ITEMS = [
  {
    title: 'Overgrown to Pristine',
    description: 'Full restoration of a neglected quarter-acre lot in Millcreek.',
    beforeImage: '/images/before-1.jpg',
    afterImage: '/images/after-1.jpg',
  },
  {
    title: 'Curb Appeal Transformation',
    description: 'Edging, mulching, and weekly maintenance brought this front yard back to life.',
    beforeImage: '/images/before-2.jpg',
    afterImage: '/images/after-2.jpg',
  },
  {
    title: 'Commercial Property Care',
    description: 'Year-round grounds maintenance for a 2-acre office park.',
    beforeImage: '/images/before-3.jpg',
    afterImage: '/images/after-3.jpg',
  },
];

export const STATS = [
  { value: 12, suffix: '+', label: 'Years in Business' },
  { value: 400, suffix: '+', label: 'Lawns Maintained' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 24, suffix: 'hr', label: 'Response Time' },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Walkthrough',
    description: 'We visit your property, assess the lawn, and listen to what you want.',
  },
  {
    step: 2,
    title: 'Plan',
    description: 'You get a clear proposal — services, schedule, price. No surprises.',
  },
  {
    step: 3,
    title: 'Work',
    description: 'Our crew shows up on time, every time. Consistent results you can count on.',
  },
  {
    step: 4,
    title: 'Ongoing Care',
    description: 'Seasonal adjustments, proactive communication, and a lawn that keeps getting better.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Karen Mitchell',
    location: 'Millcreek, PA',
    text: 'Greenline turned our patchy backyard into the best-looking lawn on the block. The crew is always on time and incredibly thorough.',
    rating: 5,
  },
  {
    name: 'Dave Kowalski',
    location: 'Harborcreek, PA',
    text: "Been using them for three years now. I don't even think about my lawn anymore — it just looks great. That's exactly what I wanted.",
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    location: 'Erie, PA',
    text: 'They fixed drainage issues my last company ignored for two seasons. Professional, responsive, and they actually care about the result.',
    rating: 5,
  },
  {
    name: 'Tom Briggs',
    location: 'Fairview, PA',
    text: "My neighbors keep asking who does my lawn. Greenline's attention to detail — the edging, the patterns — it's next level for a residential service.",
    rating: 5,
  },
  {
    name: 'Lisa Park',
    location: 'Edinboro, PA',
    text: "Switched from a big franchise to Greenline and the difference is night and day. They treat my yard like it's their own.",
    rating: 5,
  },
];

export const PRICING_TIERS = [
  {
    name: 'Basic',
    price: 49,
    period: '/wk',
    description: 'Essential maintenance for a clean, healthy lawn.',
    features: [
      'Weekly mowing',
      'String trimming',
      'Blow-off walkways & drive',
      'Seasonal height adjustment',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: 79,
    period: '/wk',
    description: 'The full package — most popular for a reason.',
    features: [
      'Everything in Basic',
      'Precision edging',
      'Bi-weekly bed maintenance',
      'Quarterly fertilization',
      'Seasonal cleanup (spring & fall)',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 119,
    period: '/wk',
    description: 'White-glove care for homeowners who want the best.',
    features: [
      'Everything in Standard',
      'Weekly edging & detailing',
      'Mulch refresh (2x/year)',
      'Irrigation monitoring',
      'Aeration & overseeding',
      'Priority scheduling',
    ],
    highlighted: false,
  },
];

export const HERO_IMAGES = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
];
