// Contact details and settings used across the whole site.
// Change them here once and every page updates.
// Everything in [BRACKETS] is still to be filled in.
export const site = {
  name: '[ΤΟ ΟΝΟΜΑ ΣΟΥ]',
  url: 'https://example.com',
  description: 'Δύο διαμερίσματα, ένα στη Θεσσαλονίκη κι ένα στη Χαλκιδική. Κλείστε απευθείας με τον ιδιοκτήτη.',
  email: '[EMAIL]',
  phoneDisplay: '[ΤΗΛΕΦΩΝΟ]',
  phoneHref: '', // e.g. 'tel:+306900000000'
  host: {
    name: '[ΟΝΟΜΑ]',
    bio: '[Λίγα λόγια για σένα και γιατί φιλοξενείς, σε 2–3 προτάσεις.]',
    languages: '[ΓΛΩΣΣΕΣ]',
  },
  // What guests get when they book here instead of on a platform.
  directPerk: {
    title: '[ΠΡΟΝΟΜΙΟ ΑΠΕΥΘΕΙΑΣ ΚΡΑΤΗΣΗΣ]',
    text: 'π.χ. έκπτωση ή δώρο καλωσορίσματος για όσους κλείνουν εδώ.',
  },
  paymentMethod: '[ΤΡΟΠΟΣ ΠΛΗΡΩΜΗΣ]',
  // true: search engines are asked not to list the site. When the site goes
  // live, set this to false and delete the first block of public/_headers.
  hideFromSearch: true,
};

export const nav = [
  { href: '/#stays', label: 'Τα καταλύματα' },
  { href: '/#guides', label: 'Οδηγοί περιοχής' },
  { href: '/#host', label: 'Ο οικοδεσπότης' },
  { href: '#contact', label: 'Επικοινωνία' },
];
