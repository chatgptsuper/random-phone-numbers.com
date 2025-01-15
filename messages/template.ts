export const messages = {
  metadata: {
    title: 'Phone Number Generator - Free International Phone Number Generator Tool',
    description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more. Perfect for testing and development purposes.',
    keywords: 'phone number generator, random phone numbers, international phone numbers, test data generator',
  },
  ui: {
    title: 'Phone Number Generator',
    subtitle: 'Generate random phone numbers for different countries',
    placeholder: 'Phone Number List Goes Here',
    buttons: {
      copy: 'Copy',
      excel: 'Excel',
      generate: 'Generate',
    },
    labels: {
      total: 'Total:',
      options: {
        title: 'Options',
        plusSymbol: 'Plus Symbol (+)',
        countryCode: 'Country Prefix Code',
        separator: 'Separate by Comma',
      },
    },
    tooltips: {
      copy: 'Copy to clipboard',
      excel: 'Export to Excel',
      generate: 'Generate new numbers',
    },
  },
} as const; 