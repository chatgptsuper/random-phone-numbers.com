type CountrySelectProps = {
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

export default function CountrySelect({ value, onChange, id }: CountrySelectProps) {
  return (
    <select
      id={id}
      className="select select-secondary w-full text-base h-12 min-h-12"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="ID" className="text-base">🇮🇩 ID / +62</option>
      <option value="US" className="text-base">🇺🇸 US / +1</option>
      <option value="GB" className="text-base">🇬🇧 UK / +44</option>
      <option value="CN" className="text-base">🇨🇳 CN / +86</option>
      <option value="IN" className="text-base">🇮🇳 IN / +91</option>
      <option value="MY" className="text-base">🇲🇾 MY / +60</option>
      <option value="BR" className="text-base">🇧🇷 BR / +55</option>
      <option value="DE" className="text-base">🇩🇪 DE / +49</option>
      <option value="FR" className="text-base">🇫🇷 FR / +33</option>
      <option value="JP" className="text-base">🇯🇵 JP / +81</option>
      <option value="SG" className="text-base">🇸🇬 SG / +65</option>
      <option value="PH" className="text-base">🇵🇭 PH / +63</option>
    </select>
  );
} 