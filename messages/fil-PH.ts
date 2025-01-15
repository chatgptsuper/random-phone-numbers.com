export const messages = {
  metadata: {
    title: 'Phone Number Generator - Libreng Tool para sa Paggawa ng International Phone Numbers',
    description: 'Gumawa ng random na phone numbers para sa iba\'t ibang bansa kabilang ang US, UK, China, India, at iba pa. Perpekto para sa testing at development.',
    keywords: 'phone number generator, random phone numbers, international phone numbers, test data generator',
  },
  ui: {
    title: 'Phone Number Generator',
    subtitle: 'Gumawa ng random na phone numbers para sa iba\'t ibang bansa',
    placeholder: 'Dito Lalabas ang Listahan ng Phone Numbers',
    buttons: {
      copy: 'Kopyahin',
      excel: 'Excel',
      generate: 'Gumawa',
    },
    labels: {
      total: 'Kabuuan:',
      options: {
        title: 'Mga Opsyon',
        plusSymbol: 'Plus Symbol (+)',
        countryCode: 'Country Code',
        separator: 'Paghiwalayin ng Kuwit',
      },
    },
    tooltips: {
      copy: 'Kopyahin sa clipboard',
      excel: 'I-export sa Excel',
      generate: 'Gumawa ng bagong mga numero',
    },
  },
} as const; 