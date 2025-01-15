import type { Messages } from '../messages/types'

type OptionTogglesProps = {
  messages: Messages['ui']['labels']['options']
  withPlus: boolean
  withPrefix: boolean
  withComma: boolean
  onToggle: (option: string) => void
}

export default function OptionToggles({ 
  messages,
  withPlus, 
  withPrefix, 
  withComma, 
  onToggle 
}: OptionTogglesProps) {
  return (
    <div className="grid gap-3">
      <label className="flex items-center justify-between cursor-pointer hover:bg-base-300 rounded-lg p-2 transition-colors">
        <span className="label-text text-base">{messages.plusSymbol}</span>
        <input
          type="checkbox"
          className="toggle toggle-secondary"
          checked={withPlus}
          onChange={() => onToggle('withPlus')}
        />
      </label>

      <label className="flex items-center justify-between cursor-pointer hover:bg-base-300 rounded-lg p-2 transition-colors">
        <span className="label-text text-base">{messages.countryCode}</span>
        <input
          type="checkbox"
          className="toggle toggle-secondary"
          checked={withPrefix}
          onChange={() => onToggle('withPrefix')}
        />
      </label>

      <label className="flex items-center justify-between cursor-pointer hover:bg-base-300 rounded-lg p-2 transition-colors">
        <span className="label-text text-base">{messages.separator}</span>
        <input
          type="checkbox"
          className="toggle toggle-secondary"
          checked={withComma}
          onChange={() => onToggle('withComma')}
        />
      </label>
    </div>
  )
} 