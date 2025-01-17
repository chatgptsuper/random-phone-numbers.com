type OptionTogglesProps = {
  withPlus: boolean;
  withPrefix: boolean;
  withComma: boolean;
  onToggle: (option: string) => void;
  translations: {
    plusSymbol: string;
    countryPrefix: string;
    separateByComma: string;
  };
}

export default function OptionToggles({ 
  withPlus, 
  withPrefix, 
  withComma, 
  onToggle,
  translations
}: OptionTogglesProps) {
  return (
    <div className="grid gap-3">
      <label className="flex items-center justify-between cursor-pointer hover:bg-base-300 rounded-lg p-2 transition-colors">
        <span className="label-text text-base">{translations.plusSymbol}</span>
        <input
          type="checkbox"
          className="toggle toggle-secondary"
          checked={withPlus}
          onChange={() => onToggle('withPlus')}
        />
      </label>

      <label className="flex items-center justify-between cursor-pointer hover:bg-base-300 rounded-lg p-2 transition-colors">
        <span className="label-text text-base">{translations.countryPrefix}</span>
        <input
          type="checkbox"
          className="toggle toggle-secondary"
          checked={withPrefix}
          onChange={() => onToggle('withPrefix')}
        />
      </label>

      <label className="flex items-center justify-between cursor-pointer hover:bg-base-300 rounded-lg p-2 transition-colors">
        <span className="label-text text-base">{translations.separateByComma}</span>
        <input
          type="checkbox"
          className="toggle toggle-secondary"
          checked={withComma}
          onChange={() => onToggle('withComma')}
        />
      </label>
    </div>
  );
} 