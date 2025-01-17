type CountrySelectProps = {
  value: string;
  onChange: (value: string) => void;
  locale: string;
}

const countryNames = {
  en: {
    ID: "🇮🇩 ID / +62",
    US: "🇺🇸 US / +1",
    GB: "🇬🇧 UK / +44",
    CN: "🇨🇳 CN / +86",
    IN: "🇮🇳 IN / +91",
    MY: "🇲🇾 MY / +60",
    BR: "🇧🇷 BR / +55",
    DE: "🇩🇪 DE / +49",
    FR: "🇫🇷 FR / +33",
    JP: "🇯🇵 JP / +81",
    SG: "🇸🇬 SG / +65",
    PH: "🇵🇭 PH / +63"
  },
  zh: {
    ID: "🇮🇩 印度尼西亚 / +62",
    US: "🇺🇸 美国 / +1",
    GB: "🇬🇧 英国 / +44",
    CN: "🇨🇳 中国 / +86",
    IN: "🇮🇳 印度 / +91",
    MY: "🇲🇾 马来西亚 / +60",
    BR: "🇧🇷 巴西 / +55",
    DE: "🇩🇪 德国 / +49",
    FR: "🇫🇷 法国 / +33",
    JP: "🇯🇵 日本 / +81",
    SG: "🇸🇬 新加坡 / +65",
    PH: "🇵🇭 菲律宾 / +63"
  },
  es: {
    ID: "🇮🇩 Indonesia / +62",
    US: "🇺🇸 Estados Unidos / +1",
    GB: "🇬🇧 Reino Unido / +44",
    CN: "🇨🇳 China / +86",
    IN: "🇮🇳 India / +91",
    MY: "🇲🇾 Malasia / +60",
    BR: "🇧🇷 Brasil / +55",
    DE: "🇩🇪 Alemania / +49",
    FR: "🇫🇷 Francia / +33",
    JP: "🇯🇵 Japón / +81",
    SG: "🇸🇬 Singapur / +65",
    PH: "🇵🇭 Filipinas / +63"
  },
  fr: {
    ID: "🇮🇩 Indonésie / +62",
    US: "🇺🇸 États-Unis / +1",
    GB: "🇬🇧 Royaume-Uni / +44",
    CN: "🇨🇳 Chine / +86",
    IN: "🇮🇳 Inde / +91",
    MY: "🇲🇾 Malaisie / +60",
    BR: "🇧🇷 Brésil / +55",
    DE: "🇩🇪 Allemagne / +49",
    FR: "🇫🇷 France / +33",
    JP: "🇯🇵 Japon / +81",
    SG: "🇸🇬 Singapour / +65",
    PH: "🇵🇭 Philippines / +63"
  },
  ja: {
    ID: "🇮🇩 インドネシア / +62",
    US: "🇺🇸 アメリカ / +1",
    GB: "🇬🇧 イギリス / +44",
    CN: "🇨🇳 中国 / +86",
    IN: "🇮🇳 インド / +91",
    MY: "🇲🇾 マレーシア / +60",
    BR: "🇧🇷 ブラジル / +55",
    DE: "🇩🇪 ドイツ / +49",
    FR: "🇫🇷 フランス / +33",
    JP: "🇯🇵 日本 / +81",
    SG: "🇸🇬 シンガポール / +65",
    PH: "🇵🇭 フィリピン / +63"
  },
  de: {
    ID: "🇮🇩 Indonesien / +62",
    US: "🇺🇸 USA / +1",
    GB: "🇬🇧 Großbritannien / +44",
    CN: "🇨🇳 China / +86",
    IN: "🇮🇳 Indien / +91",
    MY: "🇲🇾 Malaysia / +60",
    BR: "🇧🇷 Brasilien / +55",
    DE: "🇩🇪 Deutschland / +49",
    FR: "🇫🇷 Frankreich / +33",
    JP: "🇯🇵 Japan / +81",
    SG: "🇸🇬 Singapur / +65",
    PH: "🇵🇭 Philippinen / +63"
  },
  hi: {
    ID: "🇮🇩 इंडोनेशिया / +62",
    US: "🇺🇸 अमेरिका / +1",
    GB: "🇬🇧 ब्रिटेन / +44",
    CN: "🇨🇳 चीन / +86",
    IN: "🇮🇳 भारत / +91",
    MY: "🇲🇾 मलेशिया / +60",
    BR: "🇧🇷 ब्राज़ील / +55",
    DE: "🇩🇪 जर्मनी / +49",
    FR: "🇫🇷 फ्रांस / +33",
    JP: "🇯🇵 जापान / +81",
    SG: "🇸🇬 सिंगापुर / +65",
    PH: "🇵🇭 फिलीपींस / +63"
  },
  id: {
    ID: "🇮🇩 Indonesia / +62",
    US: "🇺🇸 Amerika Serikat / +1",
    GB: "🇬🇧 Inggris / +44",
    CN: "🇨🇳 Tiongkok / +86",
    IN: "🇮🇳 India / +91",
    MY: "🇲🇾 Malaysia / +60",
    BR: "🇧🇷 Brasil / +55",
    DE: "🇩🇪 Jerman / +49",
    FR: "🇫🇷 Prancis / +33",
    JP: "🇯🇵 Jepang / +81",
    SG: "🇸🇬 Singapura / +65",
    PH: "🇵🇭 Filipina / +63"
  },
  tl: {
    ID: "🇮🇩 Indonesia / +62",
    US: "🇺🇸 Estados Unidos / +1",
    GB: "🇬🇧 United Kingdom / +44",
    CN: "🇨🇳 Tsina / +86",
    IN: "🇮🇳 India / +91",
    MY: "🇲🇾 Malaysia / +60",
    BR: "🇧🇷 Brasil / +55",
    DE: "🇩🇪 Alemanya / +49",
    FR: "🇫🇷 Pransya / +33",
    JP: "🇯🇵 Hapon / +81",
    SG: "🇸🇬 Singapore / +65",
    PH: "🇵🇭 Pilipinas / +63"
  },
  pt: {
    ID: "🇮🇩 Indonésia / +62",
    US: "🇺🇸 Estados Unidos / +1",
    GB: "🇬🇧 Reino Unido / +44",
    CN: "🇨🇳 China / +86",
    IN: "🇮🇳 Índia / +91",
    MY: "🇲🇾 Malásia / +60",
    BR: "🇧🇷 Brasil / +55",
    DE: "🇩🇪 Alemanha / +49",
    FR: "🇫🇷 França / +33",
    JP: "🇯🇵 Japão / +81",
    SG: "🇸🇬 Singapura / +65",
    PH: "🇵🇭 Filipinas / +63"
  }
} as const;

export default function CountrySelect({ value, onChange, locale }: CountrySelectProps) {
  const names = countryNames[locale as keyof typeof countryNames] || countryNames.en;
  
  return (
    <select
      className="select select-secondary w-full text-base h-12 min-h-12"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {Object.entries(names).map(([code, name]) => (
        <option key={code} value={code} className="text-base">
          {name}
        </option>
      ))}
    </select>
  );
} 