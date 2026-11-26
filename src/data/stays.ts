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
  // Photos: name = file in photos/<folder>/ without extension (run npm run images).
  // Without a name the slot shows a grey placeholder with the text. First = the big one.
  photos: { name?: string; alt: string }[];
  cardPhoto?: string; // photo for the card on the homepage
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
    photos: [
      { name: 'thessaloniki/bedroom', alt: 'Υπνοδωμάτιο με διπλό κρεβάτι και πίνακα με δέντρο' },
      { name: 'thessaloniki/dining', alt: 'Τραπεζαρία δίπλα στην κουζίνα' },
      { name: 'thessaloniki/kitchen', alt: 'Κουζίνα και τραπεζαρία' },
      { name: 'thessaloniki/bathroom', alt: 'Μπάνιο με ντουζιέρα και φωτιζόμενο καθρέφτη' },
      { name: 'thessaloniki/balcony', alt: 'Μπαλκόνι με τραπεζάκι και δύο καρέκλες' },
      { name: 'thessaloniki/bedroom-art', alt: 'Ο πίνακας πάνω από το κρεβάτι' },
      { name: 'thessaloniki/bedroom-wardrobe', alt: 'Ντουλάπα με καθρέφτη στο υπνοδωμάτιο' },
    ],
    cardPhoto: 'thessaloniki/dining',
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
    area: 'Νέα Μουδανιά',
    title: 'Nostos Apartment',
    heroTitle: 'Nostos Apartment',
    short: 'Διαμέρισμα με αυλή-κήπο στα Νέα Μουδανιά, για καλοκαιρινές διακοπές και ήσυχα Σαββατοκύριακα.',
    description: 'Στο Nostos Apartment έχουμε σκεφτεί κάθε λεπτομέρεια για να νιώσετε σαν στο σπίτι σας. Άνετο υπνοδωμάτιο για ξεκούραστο ύπνο, πλήρως εξοπλισμένη κουζίνα για τα αγαπημένα σας φαγητά και ζεστό σαλόνι για να χαλαρώσετε μετά την παραλία. Η αυλή-κήπος είναι ιδανική για τον πρωινό καφέ ή ένα ποτήρι κρασί το βράδυ.',
    facts: { guests: '[Χ]', bedrooms: '1', beds: '[Χ]', baths: '[Χ]' },
    priceFrom: '[ΤΙΜΗ]',
    isNew: true,
    tags: ['Αυλή-κήπος', 'Κοντά στη θάλασσα', '[π.χ. Για οικογένειες]'],
    amenities: ['Δωρεάν Wi-Fi', 'Κλιματισμός', 'Πλήρως εξοπλισμένη κουζίνα', 'Σαλόνι', 'Αυλή-κήπος με καθιστικό', '[Πλυντήριο ρούχων]', '[Στάθμευση]', '[Πετσέτες θαλάσσης]'],
    rules: [
      { label: 'Άφιξη', value: 'από [ΩΡΑ]' },
      { label: 'Αναχώρηση', value: 'έως [ΩΡΑ]' },
      { label: 'Κατοικίδια', value: '[Ναι / Όχι]' },
      { label: 'Κάπνισμα', value: '[Ναι / Όχι]' },
      { label: 'Ακύρωση', value: '[ΠΟΛΙΤΙΚΗ ΑΚΥΡΩΣΗΣ]' },
    ],
    ama: '[ΑΡΙΘΜΟΣ]',
    photos: [{ alt: 'Αυλή-κήπος' }, { alt: 'Σαλόνι' }, { alt: 'Υπνοδωμάτιο' }, { alt: 'Κουζίνα' }, { alt: 'Μπάνιο' }],
    nearby: [
      { name: '[Κοντινότερη παραλία]', time: '[Χ] μ.' },
      { name: 'Κέντρο Νέων Μουδανιών', time: '[Χ] χλμ.' },
      { name: 'Κέντρο Θεσσαλονίκης', time: '[Χ] χλμ.' },
      { name: 'Αεροδρόμιο Μακεδονία', time: '[Χ] χλμ.' },
    ],
    mapQuery: 'Καλόλιμνου 51, Νέα Μουδανιά 632 00',
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

// Area guides (articles). Titles in [BRACKETS] are ideas for articles still to be written.
// place: which apartment the guide is for ('thessaloniki' | 'chalkidiki' | 'both').
export const guides = [
  { tag: 'ΘΕΣΣΑΛΟΝΙΚΗ', place: 'thessaloniki', title: '[Ένα Σαββατοκύριακο στη Θεσσαλονίκη]', text: '[Τι να δείτε σε 2–3 μέρες: Λευκός Πύργος, παραλία, Άνω Πόλη, αγορές.]' },
  { tag: 'ΘΕΣΣΑΛΟΝΙΚΗ', place: 'thessaloniki', title: '[Πού θα φάτε κοντά στο Phoenix]', text: '[Τα αγαπημένα σας μαγαζιά, καφέ και φούρνοι στη γειτονιά.]' },
  { tag: 'ΘΕΣΣΑΛΟΝΙΚΗ', place: 'thessaloniki', title: '[Θεσσαλονίκη τον χειμώνα]', text: '[Χριστουγεννιάτικη αγορά, μουσεία, εκδηλώσεις και φεστιβάλ.]' },
  { tag: 'ΧΑΛΚΙΔΙΚΗ', place: 'chalkidiki', title: '[Οι παραλίες κοντά στα Νέα Μουδανιά]', text: '[Οι καλύτερες παραλίες σε απόσταση 5–30 λεπτών με το αυτοκίνητο.]' },
  { tag: 'ΧΑΛΚΙΔΙΚΗ', place: 'chalkidiki', title: '[Μονοήμερες εκδρομές στην Κασσάνδρα]', text: '[Άφυτος, Σάνη, Ποτίδαια: πού να πάτε και πότε.]' },
  { tag: 'ΠΡΑΚΤΙΚΑ', place: 'both', title: '[Πώς θα έρθετε από το αεροδρόμιο]', text: '[Ταξί, λεωφορείο, ενοικίαση αυτοκινήτου: χρόνοι και κόστος.]' },
];

// Real reviews only, copied from Airbnb or Booking with the guest's first name.
export const reviews = [
  { text: 'Καθαρό, μοντέρνο περιβάλλον, ευρύχωρο, εύκολο parking, συννενοήσιμοι και διακριτικοί οικοδεσπότες. Το προτείνω ανεπιφύλακτα και θα το ξαναπροτιμήσουμε κι εμείς. Ευχαριστούμε', who: 'Δημήτρης · Booking.com', stay: 'Θεσσαλονίκη' },
  { text: 'Πολύ καθαρό και προσεγμένο διαμέρισμα σε ήσυχη περιοχή, με ιδιαίτερο design. Ο χώρος είναι όμορφα διαμορφωμένος, ζεστός και πολύ ευχάριστος. Ο πρωινός καφές στο μπαλκόνι ήταν πραγματικά απολαυστικός!', who: 'Apostoloudis · Booking.com', stay: 'Θεσσαλονίκη' },
  { text: 'Είχαμε μια υπέροχη διαμονή και μείναμε πραγματικά ενθουσιασμένοι με όλα. Οι οικοδεσπότες είναι απίστευτα ευγενικοί, φιλόξενοι και εξυπηρετικοί.', who: 'Dmitriy · Google', stay: 'Χαλκιδική' },
];
export const ratings = '10/10 στο Booking.com από 7 κριτικές · [Χ,ΧΧ] στο Airbnb';
