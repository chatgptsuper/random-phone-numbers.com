export const messages = {
  metadata: {
    title: 'Telefonnummer-Generator - Kostenloses Tool zur Generierung internationaler Telefonnummern',
    description: 'Generieren Sie zufällige Telefonnummern für verschiedene Länder, einschließlich USA, Großbritannien, China, Indien und mehr. Perfekt für Test- und Entwicklungszwecke.',
    keywords: 'Telefonnummer-Generator, zufällige Telefonnummern, internationale Telefonnummern, Testdaten-Generator',
  },
  ui: {
    title: 'Telefonnummer-Generator',
    subtitle: 'Generieren Sie Telefonnummern für verschiedene Länder',
    placeholder: 'Telefonnummernliste erscheint hier',
    buttons: {
      copy: 'Kopieren',
      excel: 'Excel',
      generate: 'Generieren',
    },
    labels: {
      total: 'Gesamt:',
      options: {
        title: 'Optionen',
        plusSymbol: 'Plus-Symbol (+)',
        countryCode: 'Ländervorwahl',
        separator: 'Mit Komma trennen',
      },
    },
    tooltips: {
      copy: 'In die Zwischenablage kopieren',
      excel: 'Nach Excel exportieren',
      generate: 'Neue Nummern generieren',
    },
  },
} as const; 