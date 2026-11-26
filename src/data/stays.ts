// The two apartments. Each one gets its own page at /<slug>.
// Everything in [BRACKETS] is still to be filled in.
//
// theme: 'city' = charcoal and honey, straight corners (Thessaloniki)
//        'sea'  = light pine, round buttons (Chalkidiki)
// bookingEngineUrl: when the Hosthub booking engine is ready, put its address
//   here. Until then the booking box sends an email with the dates filled in.

export interface Stay {
  slug: string;
  theme: 'city' | 'sea';
  place: string;
  area: string;
  title: string;
  heroTitle: string;
  short: string;
  description: string;
  facts: { guests: string; bedrooms: string; beds: string; baths: string };
  priceFrom: string;
  isNew?: boolean;
  tags: string[];
  amenities: string[];
  rules: { label: string; value: string }[];
  ama: string;
  photos: string[]; // labels for the photo slots, first one is the big one
  nearby: { name: string; time: string }[];
  mapQuery: string;
  links: { airbnb: string; booking: string; vrbo: string };
  bookingEngineUrl: string;
}

export const stays: Stay[] = [
  {
    slug: 'thessaloniki',
    theme: 'city',
    place: 'Θεσσαλονίκη',
    area: '[ΠΕΡΙΟΧΗ]',
    title: 'Διαμέρισμα στην πόλη',
    heroTitle: 'Διαμέρισμα στην πόλη',
    short: 'Για city break, επαγγελματικά ταξίδια και αποδράσεις όλο τον χρόνο.',
    description: '[Περιγραφή σε 3–4 προτάσεις: τι κάνει το διαμέρισμα ξεχωριστό, σε ποιον ταιριάζει, πώς είναι η γειτονιά.]',
    facts: { guests: '[Χ]', bedrooms: '[Χ]', beds: '[Χ]', baths: '[Χ]' },
    priceFrom: '[ΤΙΜΗ]',
    tags: ['[π.χ. Κέντρο πόλης]', '[π.χ. Για δουλειά]', '[π.χ. Self check-in]'],
    amenities: ['[Wi-Fi]', '[Κλιματισμός]', '[Θέρμανση]', '[Πλήρης κουζίνα]', '[Πλυντήριο ρούχων]', '[Χώρος εργασίας]', '[Smart TV]', '[Στάθμευση]'],
    rules: [
      { label: 'Άφιξη', value: 'από [ΩΡΑ]' },
      { label: 'Αναχώρηση', value: 'έως [ΩΡΑ]' },
      { label: 'Κατοικίδια', value: '[Ναι / Όχι]' },
      { label: 'Κάπνισμα', value: '[Ναι / Όχι]' },
      { label: 'Ακύρωση', value: '[ΠΟΛΙΤΙΚΗ ΑΚΥΡΩΣΗΣ]' },
    ],
    ama: '[ΑΡΙΘΜΟΣ]',
    photos: ['Σαλόνι', 'Υπνοδωμάτιο', 'Κουζίνα', 'Μπάνιο', 'Θέα / γειτονιά'],
    nearby: [
      { name: 'Λευκός Πύργος', time: '[Χ] λεπτά' },
      { name: 'Πλατεία Αριστοτέλους', time: '[Χ] λεπτά' },
      { name: 'ΔΕΘ / Helexpo', time: '[Χ] λεπτά' },
      { name: 'Αεροδρόμιο Μακεδονία', time: '[Χ] λεπτά' },
    ],
    mapQuery: 'Θεσσαλονίκη',
    links: { airbnb: '', booking: '', vrbo: '' },
    bookingEngineUrl: '',
  },
  {
    slug: 'chalkidiki',
    theme: 'sea',
    place: 'Χαλκιδική',
    area: '[ΠΕΡΙΟΧΗ]',
    title: 'Διαμέρισμα στη Χαλκιδική',
    heroTitle: 'Διαμονή στη Χαλκιδική',
    short: 'Για καλοκαιρινές διακοπές και ήσυχα Σαββατοκύριακα εκτός σεζόν.',
    description: '[Περιγραφή σε 3–4 προτάσεις: πόσο κοντά είναι η θάλασσα, τι κάνει τη διαμονή ξεχωριστή, σε ποιον ταιριάζει.]',
    facts: { guests: '[Χ]', bedrooms: '[Χ]', beds: '[Χ]', baths: '[Χ]' },
    priceFrom: '[ΤΙΜΗ]',
    isNew: true,
    tags: ['[π.χ. Κοντά στη θάλασσα]', '[π.χ. Για οικογένειες]', '[π.χ. Κατοικίδια ευπρόσδεκτα]'],
    amenities: ['[Wi-Fi]', '[Κλιματισμός]', '[Μπαλκόνι / αυλή]', '[Πλήρης κουζίνα]', '[Πλυντήριο ρούχων]', '[Ψησταριά]', '[Στάθμευση]', '[Πετσέτες θαλάσσης]'],
    rules: [
      { label: 'Άφιξη', value: 'από [ΩΡΑ]' },
      { label: 'Αναχώρηση', value: 'έως [ΩΡΑ]' },
      { label: 'Κατοικίδια', value: '[Ναι / Όχι]' },
      { label: 'Κάπνισμα', value: '[Ναι / Όχι]' },
      { label: 'Ακύρωση', value: '[ΠΟΛΙΤΙΚΗ ΑΚΥΡΩΣΗΣ]' },
    ],
    ama: '[ΑΡΙΘΜΟΣ]',
    photos: ['Εξωτερικός χώρος / θέα', 'Σαλόνι', 'Υπνοδωμάτιο', 'Κουζίνα', 'Παραλία κοντά'],
    nearby: [
      { name: '[Κοντινότερη παραλία]', time: '[Χ] λεπτά' },
      { name: '[Σούπερ μάρκετ]', time: '[Χ] λεπτά' },
      { name: 'Κέντρο Θεσσαλονίκης', time: '[Χ] λεπτά' },
      { name: 'Αεροδρόμιο Μακεδονία', time: '[Χ] λεπτά' },
    ],
    mapQuery: 'Χαλκιδική',
    links: { airbnb: '', booking: '', vrbo: '' },
    bookingEngineUrl: '',
  },
];

export const guides = [
  { tag: 'ΘΕΣΣΑΛΟΝΙΚΗ', title: '[Ένα Σαββατοκύριακο στη Θεσσαλονίκη]' },
  { tag: 'ΧΑΛΚΙΔΙΚΗ', title: '[Οι παραλίες κοντά στο διαμέρισμα]' },
  { tag: 'ΠΡΑΚΤΙΚΑ', title: '[Πώς θα έρθετε από το αεροδρόμιο]' },
];

// Real reviews only, copied from Airbnb or Booking with the guest's first name.
export const reviews = [
  { text: '[Πραγματική κριτική επισκέπτη από Airbnb ή Booking]', who: '[Όνομα] · [Μήνας Έτος]', stay: 'Θεσσαλονίκη' },
  { text: '[Πραγματική κριτική επισκέπτη από Airbnb ή Booking]', who: '[Όνομα] · [Μήνας Έτος]', stay: 'Θεσσαλονίκη' },
  { text: '[Πραγματική κριτική επισκέπτη από Airbnb ή Booking]', who: '[Όνομα] · [Μήνας Έτος]', stay: 'Χαλκιδική' },
];
export const ratings = '[Χ,Χ] στο Booking · [Χ,ΧΧ] στο Airbnb';
