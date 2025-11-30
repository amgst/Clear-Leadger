import { 
  Calculator, 
  FileText, 
  Building2, 
  Briefcase, 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp, 
  Users,
  PiggyBank,
  FileBadge
} from 'lucide-react';
import { Service, TeamMember, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'bookkeeping-payroll',
    title: 'Bookkeeping & Payroll',
    shortDescription: 'Comprehensive bookkeeping and payroll solutions to keep your business running smoothly.',
    fullDescription: 'Managing your books shouldn’t be a burden. Our dedicated team ensures your financial records are accurate, up-to-date, and fully compliant with current regulations. From day-to-day transaction recording to complex payroll management, we handle the details so you can focus on growth.',
    icon: Calculator,
    benefits: ['Accurate financial records', 'Timely payroll processing', 'Compliance with ATO regulations', 'Cloud accounting setup (Xero, MYOB, QuickBooks)'],
    targetAudience: ['Small Businesses', 'Startups', 'Medium Enterprises'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'individual-tax',
    title: 'Individual Tax Returns',
    shortDescription: 'Expert preparation of personal income tax returns ensuring maximum refunds and compliance.',
    fullDescription: 'Navigating personal tax can be complex. We help individuals optimize their tax position, ensuring all eligible deductions are claimed while maintaining full compliance. Whether you have rental properties, investments, or crypto assets, we have the expertise to help.',
    icon: FileText,
    benefits: ['Maximized legal deductions', 'Review of prior year returns', 'Advice on capital gains tax', 'Quick turnaround times'],
    targetAudience: ['Individuals', 'Sole Traders', 'Property Investors'],
    imageUrl: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'business-tax',
    title: 'Company & Trust Tax',
    shortDescription: 'Specialized tax and accounting services for companies, trusts, and partnerships.',
    fullDescription: 'Corporate tax structures require a strategic approach. We work closely with company directors and trustees to manage tax obligations efficiently. Our services include annual financial statement preparation, tax return lodgement, and strategic tax planning to support business continuity and growth.',
    icon: Building2,
    benefits: ['Strategic tax planning', 'Financial statement preparation', 'FBT and GST compliance', 'Trust distribution advice'],
    targetAudience: ['Private Companies', 'Family Trusts', 'Partnerships'],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'smsf-services',
    title: 'SMSF Accounting',
    shortDescription: 'Self-Managed Super Fund compliance, auditing, and administrative support.',
    fullDescription: 'Managing an SMSF involves strict regulatory requirements. clearLedger provides end-to-end administration, including financial accounts preparation, tax return lodgement, and coordination of independent audits. We help trustees stay compliant while they build their retirement wealth.',
    icon: PiggyBank,
    benefits: ['Annual compliance & tax returns', 'Audit coordination', 'Pension commencement advice', 'Regulatory reporting'],
    targetAudience: ['SMSF Trustees', 'Retirees', 'Wealth Accumulators'],
    imageUrl: 'https://images.unsplash.com/photo-1623227413713-35a420b9e82e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'not-for-profit',
    title: 'Not-for-Profit Services',
    shortDescription: 'Dedicated accounting support for charities and NFP organizations.',
    fullDescription: 'We understand the unique challenges faced by the NFP sector, including grant acquittals, ACNC compliance, and special tax concessions. Our team supports charities and community organizations with transparent reporting and governance advice.',
    icon: HeartHandshake,
    benefits: ['ACNC reporting compliance', 'Grant acquittal audits', 'FBT exemption advice', 'Governance support'],
    targetAudience: ['Charities', 'Community Groups', 'Associations'],
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    shortDescription: 'Strategic advice for business structuring, growth, and succession planning.',
    fullDescription: 'Beyond the numbers, we act as your strategic partner. From choosing the right business structure (Company, Trust, Sole Trader) to planning for succession or sale, our advisory services are designed to maximize value and minimize risk throughout your business lifecycle.',
    icon: TrendingUp,
    benefits: ['Business structuring advice', 'Cash flow forecasting', 'Succession planning', 'Virtual CFO services'],
    targetAudience: ['Growing Businesses', 'Entrepreneurs', 'Established Firms'],
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'secretarial',
    title: 'Corporate Secretarial',
    shortDescription: 'ASIC compliance and company registry maintenance services.',
    fullDescription: 'Stay on top of your corporate governance obligations. We handle ASIC annual reviews, changes to company details, share transfers, and minute preparation, ensuring your company remains compliant with the Corporations Act.',
    icon: ShieldCheck,
    benefits: ['ASIC annual reviews', 'Share registry maintenance', 'Director appointments/resignations', 'Registered office services'],
    targetAudience: ['Company Directors', 'Boards', 'Company Secretaries'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ndis-services',
    title: 'NDIS Plan Management',
    shortDescription: 'Specialized accounting and plan management for NDIS participants and providers.',
    fullDescription: 'We offer specialized financial services for the NDIS sector. For participants, we provide plan management to pay providers efficiently. For service providers, we offer business accounting to ensure sustainable operations and compliance.',
    icon: Users,
    benefits: ['Invoice processing', 'Budget tracking', 'Provider payment management', 'NDIS portal claims'],
    targetAudience: ['NDIS Participants', 'Disability Service Providers'],
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Principal Accountant & Partner',
    bio: 'With over 15 years of experience in public practice, Sarah specializes in business structuring and complex tax matters. She is a Chartered Accountant committed to helping local businesses thrive.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Tax Advisor',
    bio: 'Michael brings deep expertise in corporate tax and SMSF compliance. He enjoys simplifying complex tax legislation for clients and ensuring they achieve the best possible outcomes.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Emily Ross',
    role: 'Client Services Manager',
    bio: 'Emily ensures every client receives timely and personalized attention. She manages our bookkeeping division and oversees payroll services for our small business clients.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    client: 'David Thompson',
    company: 'Thompson Construction',
    quote: 'ClearLedger transformed how we handle our finances. Their advice on business structure saved us significantly on tax, and their bookkeeping is flawless.'
  },
  {
    id: 2,
    client: 'Jessica Lee',
    company: 'Creative Studio Co.',
    quote: 'Professional, approachable, and incredibly knowledgeable. I finally feel in control of my tax obligations thanks to Sarah and the team.'
  },
  {
    id: 3,
    client: 'Robert Vance',
    company: 'Vance Logistics',
    quote: 'We moved our entire payroll and tax portfolio to ClearLedger last year. The transition was seamless, and the ongoing support has been exceptional.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I really need an accountant for my small business?",
    answer: "While you can manage finances yourself, a professional accountant ensures compliance, identifies tax-saving opportunities, and provides strategic advice to help your business grow, often saving you more money than the cost of the service."
  },
  {
    question: "What documents do I need for my individual tax return?",
    answer: "Generally, you'll need your payment summaries (income statements), details of any other income (bank interest, dividends), and receipts for work-related expenses. We provide a full checklist to all clients before their appointment."
  },
  {
    question: "How often should I review my business structure?",
    answer: "It's recommended to review your structure whenever your business undergoes significant change—such as a large increase in profit, taking on partners, or preparing for sale. We typically review this annually with our business clients."
  },
  {
    question: "Can you help with setting up Xero or MYOB?",
    answer: "Absolutely. We are certified partners with major cloud accounting platforms including Xero, MYOB, and QuickBooks. We can handle the setup, migration, and training for your team."
  }
];