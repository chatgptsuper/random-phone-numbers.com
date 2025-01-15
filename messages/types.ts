export type Messages = {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  ui: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttons: {
      copy: string;
      excel: string;
      generate: string;
    };
    labels: {
      total: string;
      options: {
        title: string;
        plusSymbol: string;
        countryCode: string;
        separator: string;
      };
    };
    tooltips: {
      copy: string;
      excel: string;
      generate: string;
    };
  };
}; 