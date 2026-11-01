const img = (name: string) => encodeURI(`/images/${name}`)

export type Author = {
  name: string
  avatar?: string
}

export type Article = {
  title: string
  href: string
  image?: string
  deck?: string
  author?: Author
  date?: string
}

export const navLinks = [
  {label: 'world', href: '#'},
  {label: 'india', href: '#'},
  {label: 'analysis', href: '#'},
  {label: 'debate', href: '#'},
  {label: 'statement', href: '#'},
  {label: 'classics', href: '#'},
  {label: 'pdf', href: '#'},
  {label: 'archive', href: '#'},
  {label: 'all', href: '#', muted: true},
]

export const shareActions = ['facebook', 'x', 'whatsapp', 'link', 'comments', 'bookmark'] as const

const authors = {
  mohon: {name: 'Mohon Sharif', avatar: img('Mohon Sharif.png')},
  bhaskar: {name: 'Bhaskar Ganguly', avatar: img('Bhaskar Ganguly.png')},
  trotsky: {name: 'Leon Trotsky', avatar: img('Leon Trotsky.png')},
} satisfies Record<string, Author>

export const leadStory = {
  kicker: 'Statement / Kolkata',
  title: 'Stand Up Against the Fascist Attack at Jadavpur University!',
  href: '#',
  deck: 'A Revolutionary Manifesto Against Fascist Attacks, Bureaucrat Betrayal, and Petty-Bourgeois Opportunism at Jadavpur University.',
  image: img('Jadavpur Protest.png'),
  author: authors.mohon,
  date: 'Nov 07, 2026',
  related: [
    {
      title: 'Exam Scandals, State Terror, and Bourgeois Betrayal',
      href: '#1',
      image: img('Exam Scandals.png'),
    },
    {
      title: 'Recent Student Movements: A Trotskyist Evaluation',
      href: '#2',
      image: img('Farmers Movement.png'),
    },
    {
      title: 'Netaji Subhash Chandra Bose: A Trotskyist Assessment',
      href: '#3',
      image: img('Subhash Chandra Bose.png'),
    },
  ],
}

export const sidebar = {
  video: {
    title: 'The Questions We Must Face',
    href: '#6',
    image: img('Featured Video.jpg'),
  },
  tabs: ['LATEST ARTICLES', 'MOST VIEWED', 'MOST SHARED'],
  latest: [
    {
      title:
        'The Cost of Commercialised Culture: What the Durga Puja Stampede Reveals About Public Safety and Urban Capitalism in Kolkata',
      href: '#7',
      image: img('Durga Puja Stampede.png'),
    },
    {
      title:
        "Corridors for Capital: Deconstructing India's Integrated Transport & Logistics Authority",
      href: '#8',
      image: img('Transport and Logistics.png'),
    },
    {
      title:
        'Sub-Imperial Rivalries and Regional Cauldrons: A Marxist Critique of the Delhi Declaration',
      href: '#9',
      image: img('Delhi Declaration.png'),
    },
    {
      title:
        'The Global Care Deficit: Paid Leave Disparities and the Gendered Division of Unpaid Labor',
      href: '#10',
      image: img('Global Care Deficit.png'),
    },
    {
      title:
        "Climate Loss, Capital Accounting, and the Illusion of the '2030 Poverty Eradication' Target",
      href: '#11',
      image: img('Climate and Poverty.png'),
    },
  ] satisfies Article[],
  quote: {
    text: 'Worker-Communists, you are hundreds of thousands, millions; you cannot leave for anyplace; there are not enough passports for you. Should fascism come to power, it will ride over your skulls and spines like a terrific tank. Your salvation lies in merciless struggle. And only a fighting unity with the Social Democratic workers can bring victory. Make haste, Worker-Communists, you have very little time left!',
    attribution: "Leon Trotsky, For a Workers' United Front Against Fascism",
    date: 'December 1931',
    href: '#12',
    image: img('Workers United Front.png'),
  },
  program: {
    title: 'Program and Constitution of the Communist League',
    href: '#13',
    image: img('Communist League.png'),
  },
  classic: {
    kicker: 'Politics / Classics',
    title: 'On the Causes for the Defeat of the Spanish Revolution',
    href: '#14',
    deck: 'Under the Popular Front Umbrella: Sheltering Capital, Strangling Revolution',
    image: img('Spanish Revolution.png'),
    author: authors.trotsky,
    date: 'March 24, 1939',
  },
}

export const leftColumn = {
  campaigns: [
    {
      title: 'Students and Worker-Youth! Join the Young Bolshevik Leninists!',
      href: '#',
      image: img('Young Bolshevik Leninists.jpg'),
      ctaLabel: 'KNOW MORE',
    },
    {
      title: 'Subscribe to the central organ of the Bolshevik Leninist Party',
      href: '#',
      image: img('Party Publication.png'),
      ctaLabel: 'KNOW MORE',
    },
  ],
  studentPolitics: {
    title: 'Student Death and Student Politics at Jadavpur University: Our Perspective',
    href: '#',
    image: img('Jadavpur Student Politics.png'),
  },
  worldwideSocialism: {
    title:
      'Strengthen the Struggle to Establish Worldwide Socialism to Destroy Imperialism, Hegemonism, and Capitalism',
    deck: 'From imperialist aggression in Venezuela to state-led disenfranchisement in Bengal: \nWhy international working-class unity is our only way forward.',
    href: '#',
    image: img('Worldwide Socialism.png'),
  },
}

export const centerColumn = {
  gramsci: {
    title: 'Gramscian Challenge, Trotskyist Answer',
    href: '#',
    deck: "Why Searching for Socialism in Gramsci's Prison Notebooks Will Only Rebuild Stalinism...",
    image: img('Gramsci and Stalin.png'),
    author: authors.bhaskar,
    date: '1997',
  } satisfies Article,
  electionBulletin: {
    title: 'ELECTION BULLETIN: Assembly Election 2026',
    href: '#',
    deck: 'Inside a revolutionary manifesto urging Bengal to vote for the Left—"as a rope supports a hanged man."',
    image: img('Assembly Election.png'),
    author: authors.bhaskar,
    date: 'April 2026',
  } satisfies Article,
  analysisRow: [
    {
      title: 'Context: The Recent Mass Uprising in Bangladesh',
      href: '#bangladesh-uprising',
      deck: "From Hasina's Fall to the Yunus Government: Why the July Uprising Demands a Revolutionary Socialist Alternative",
      image: img('Bangladesh Uprising.png'),
    },
    {
      title:
        'Beware of the Liquidationist Politics of the Pseudo-Trotskyist Militant Group – Isolate Them',
      href: '#beware-liquidationist',
      deck: "A Marxist-Leninist critique of Naya Disha's liquidationist politics and the crisis of revolutionary leadership",
      image: img('Naya Disha.jpg'),
    },
  ] satisfies Article[],
  unitedFront: {
    title:
      "Not the Circus of 'Bharat Jodo Yatra', What is Needed to Stop Fascism is a United Front of Workers, Peasants, and Working-Class People",
    href: '#',
    image: img('United Front Rally.png'),
  },
}

export const featureBanner = {
  title: 'Nepal — Which Way Forward?',
  href: '#',
  deck: 'Class Dynamics, Political Degeneration, and the Search for a Genuine Revolutionary Path',
  image: img('Nepal Protest.png'),
}

export const articleRow: Article[] = [
  {
    title: 'Israel-Palestine War – Which Path to a Solution?',
    href: '#israel-palestine',
    image: img('Israel-Palestine War.png'),
  },
  {
    title: 'INDIA Alliance – How Will the Working Class View It?',
    href: '#india-alliance',
    image: img('INDIA Alliance.png'),
  },
  {
    title:
      'To fight fascism, do not form a front with the bourgeoisie; advance along the path of socialist revolution.',
    href: '#fight-fascism',
    image: img('Socialist Struggle.png'),
  },
  {
    title:
      "Everyone speak out against the attack on the stall of 'Naya Antarjatik Prakashani' by the Gautam Pal led militant group at the Book Fair",
    href: '#book-fair-attack',
    image: img('Publisher Attack.png'),
  },
]

export const splitFeatures: Article[] = [
  {
    title: 'Kavita Krishnan\'s Liberal "Marxism" and the Pseudo-Trotskyism of the Militant Group',
    href: '#kavita-krishnan',
    image: img('Kavita Krishnan.png'),
  },
  {
    title:
      'The Interrelationship Between the Communist Party and the Young Communist League and the Pseudo-Trotskyism of the Militant Group',
    href: '#party-and-ycl',
    image: img('Communist Party & YCL.png'),
  },
]

export const footer = {
  newsletterPlaceholder: 'Email address for mailing',
  columns: [
    {
      title: 'CATEGORIES',
      links: ['Front Page', 'Economics', 'History', 'Politics', 'Philosophy', 'Video'],
    },
    {
      title: 'Downloads',
      links: ['Magazine', 'Pamphlet', 'Podcasts', 'Power', 'Reading', 'Meetings'],
    },
    {title: 'FRONT PAGE', links: ['World', 'India', 'Analysis / Debate', 'Classics']},
    {title: 'MARXIST CLASSICS', links: ['Marx and Engels', 'Lenin', 'Trotsky', 'Luxemburg']},
    {
      title: 'ARCHIVES & RESOURCES',
      links: ['Archives', 'Study Guides', 'Reading Lists', 'Audio / Video'],
    },
    {title: 'ABOUT & CONTRIBUTIONS', links: ['About', 'Submit', 'Support', 'Translations']},
  ],
  shareAndRead: {
    title: 'SHARE & READ',
    text: 'Copyleft Marxist essays for critical study and collective discussion. Read, share, and keep ideas in circulation.',
  },
  copyright: '© 2026 Naya Antarjatik Prakashani',
  legal: ['Contact Us', 'Work With Us', 'Privacy', 'Sitemap', 'Help', 'Site feedback'],
  credit: 'Made With ♥ by @devadvist',
}
