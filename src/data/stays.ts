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
    area: 'Ηλιούπολη',
    title: 'Phoenix Apartment',
    heroTitle: 'Phoenix Apartment',
    short: 'Διαμέρισμα 40 τ.μ. σε ήσυχο δρόμο, για ζευγάρια, city break και επαγγελματικά ταξίδια.',
    description: 'Διαμέρισμα 40 τ.μ. στον δεύτερο όροφο, με ένα υπνοδωμάτιο και σαλόνι, σε ήσυχο δρόμο της Θεσσαλονίκης. Έχει ιδιαίτερο design, πάρκετ, κλιματισμό, μπαλκόνι για τον πρωινό καφέ και πλήρως εξοπλισμένη κουζίνα. Δίπλα στην Πλατεία Ηλιούπολης και στο Πάρκο Δενδροποτάμου, με εύκολο πάρκινγκ στη γειτονιά.',
    facts: { guests: '2', bedrooms: '1', beds: '2', baths: '1' },
    priceFrom: '60',
    tags: ['Ήσυχος δρόμος', 'Ιδανικό για ζευγάρια', 'Μπαλκόνι', 'Εύκολο πάρκινγκ'],
    amenities: ['Δωρεάν Wi-Fi', 'Κλιματισμός', 'Πλήρης κουζίνα (φούρνος, εστίες, ψυγείο)', 'Καφετιέρα και βραστήρας', 'Πλυντήριο ρούχων', 'Ανελκυστήρας', 'Τηλεόραση επίπεδης οθόνης', 'Μπαλκόνι', 'Διπλό κρεβάτι και καναπές-κρεβάτι', 'Τραπεζαρία'],
    rules: [
      { label: 'Άφιξη', value: '15:00 – 00:00' },
      { label: 'Αναχώρηση', value: '08:00 – 11:00' },
      { label: 'Κατοικίδια', value: 'Δεν επιτρέπονται' },
      { label: 'Κάπνισμα', value: 'Δεν επιτρέπεται' },
      { label: 'Πάρτι και εκδηλώσεις', value: 'Δεν επιτρέπονται' },
      { label: 'Ώρες κοινής ησυχίας', value: '23:00 – 07:00' },
      { label: 'Ακύρωση', value: '[ΠΟΛΙΤΙΚΗ ΑΚΥΡΩΣΗΣ]' },
    ],
    ama: '00003851528',
    photos: ['Σαλόνι', 'Υπνοδωμάτιο', 'Κουζίνα', 'Μπάνιο', 'Μπαλκόνι'],
    nearby: [
      { name: 'Πλατεία Ηλιούπολης', time: '450 μ.' },
      { name: 'Πάρκο Δενδροποτάμου', time: '600 μ.' },
      { name: 'Πλατεία Αριστοτέλους', time: '5 χλμ.' },
      { name: 'Λευκός Πύργος', time: '6 χλμ.' },
      { name: 'Σιδηροδρομικός σταθμός', time: '3,9 χλμ.' },
      { name: 'Αεροδρόμιο Μακεδονία', time: '19 χλμ.' },
    ],
    mapQuery: 'Κοσμά Αιτωλού 9, Θεσσαλονίκη 564 30',
    links: { airbnb: '', booking: 'https://www.booking.com/hotel/gr/phoenix-studio-9.html', vrbo: '' },
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

// "2 άτομα · 1 υπνοδωμάτιο · 2 κρεβάτια · 1 μπάνιο" (singular when the number is 1)
export function factsLine(f: Stay['facts'], withBeds = true) {
  const w = (n: string, one: string, many: string) => `${n} ${n === '1' ? one : many}`;
  const parts = [w(f.guests, 'άτομο', 'άτομα'), w(f.bedrooms, 'υπνοδωμάτιο', 'υπνοδωμάτια')];
  if (withBeds) parts.push(w(f.beds, 'κρεβάτι', 'κρεβάτια'));
  parts.push(w(f.baths, 'μπάνιο', 'μπάνια'));
  return parts.join(' · ');
}

export const guides = [
  { tag: 'ΘΕΣΣΑΛΟΝΙΚΗ', title: '[Ένα Σαββατοκύριακο στη Θεσσαλονίκη]' },
  { tag: 'ΧΑΛΚΙΔΙΚΗ', title: '[Οι παραλίες κοντά στο διαμέρισμα]' },
  { tag: 'ΠΡΑΚΤΙΚΑ', title: '[Πώς θα έρθετε από το αεροδρόμιο]' },
];

// Real reviews only, copied from Airbnb or Booking with the guest's first name.
export const reviews = [
  { text: 'Καθαρό, μοντέρνο περιβάλλον, ευρύχωρο, εύκολο parking, συννενοήσιμοι και διακριτικοί οικοδεσπότες. Το προτείνω ανεπιφύλακτα και θα το ξαναπροτιμήσουμε κι εμείς. Ευχαριστούμε', who: 'Δημήτρης · Booking.com', stay: 'Θεσσαλονίκη' },
  { text: 'Πολύ καθαρό και προσεγμένο διαμέρισμα σε ήσυχη περιοχή, με ιδιαίτερο design. Ο χώρος είναι όμορφα διαμορφωμένος, ζεστός και πολύ ευχάριστος. Ο πρωινός καφές στο μπαλκόνι ήταν πραγματικά απολαυστικός!', who: 'Apostoloudis · Booking.com', stay: 'Θεσσαλονίκη' },
  { text: '[Πραγματική κριτική επισκέπτη από Airbnb ή Booking]', who: '[Όνομα] · [Μήνας Έτος]', stay: 'Χαλκιδική' },
];
export const ratings = '10/10 στο Booking.com από 7 κριτικές · [Χ,ΧΧ] στο Airbnb';
