'use client'

import { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import HeaderLogo from "./headerLogo";
import CountrySelect from "./CountrySelect";
import OptionToggles from "./OptionToggles";
import { countryCode } from "../data/countryCode";
import type { Messages } from "../messages/types";

type Props = {
  messages: Messages['ui']
}

export default function MainGenerator({ messages }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [totalNum, setTotalNum] = useState("1");
  const [countrySelect, setCountrySelect] = useState("ID");
  const [numberList, setNumberList] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [withOption, setWithOption] = useState({
    withPlus: true,
    withPrefix: true,
    withComma: false,
  });

  function generateNumber() {
    setIsCopied(false);
    if (countrySelect in countryCode) {
      const tmpNumberList = [];
      setNumberList([""]);

      const tmpSuffix = countryCode[countrySelect as keyof typeof countryCode].suffix;
      const tmpPrefix = countryCode[countrySelect as keyof typeof countryCode].prefix;
      const tmpLength = countryCode[countrySelect as keyof typeof countryCode].length;
      const lastDigits = tmpLength - tmpPrefix.length - tmpSuffix[0].length;

      for (let j = 0; j < Number(totalNum); j++) {
        let newNumber = "";
        const suffixIndex = Math.floor(Math.random() * tmpSuffix.length);
        newNumber += tmpSuffix[suffixIndex];

        for (let i = 0; i < lastDigits; i++) {
          newNumber += Math.floor(Math.random() * 10);
        }

        tmpNumberList.push(newNumber);
      }

      setNumberList(tmpNumberList);
    }
  }

  useEffect(() => {
    function contentFill() {
      const formatNumber = (num: string) => {
        let formattedNumber = num;
        if (withOption.withPrefix) {
          const prefix = countryCode[countrySelect as keyof typeof countryCode].prefix;
          formattedNumber = prefix + formattedNumber;
        }
        if (withOption.withPlus) {
          formattedNumber = `+${formattedNumber}`;
        }
        return formattedNumber;
      };

      const separator = withOption.withComma ? ", " : "\n";
      const formattedList = numberList.map(formatNumber);
      setContent(formattedList.join(separator));
    }

    contentFill();
    setIsCopied(false);
  }, [numberList, withOption, countrySelect]);

  function copyText() {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
  }

  function handleOptionToggle(option: string) {
    setWithOption(prev => ({
      ...prev,
      [option]: !prev[option as keyof typeof prev]
    }));
  }

  function exportToExcel() {
    const wb = XLSX.utils.book_new();
    const data = numberList.map((num) => {
      let formattedNumber = num;
      if (withOption.withPrefix) {
        const prefix = countryCode[countrySelect as keyof typeof countryCode].prefix;
        formattedNumber = prefix + formattedNumber;
      }
      if (withOption.withPlus) {
        formattedNumber = `+${formattedNumber}`;
      }
      return [formattedNumber];
    });

    data.unshift(['Phone Numbers']);
    const ws = XLSX.utils.aoa_to_sheet(data);
    const columnWidth = Math.max(...data.map(row => row[0].length));
    ws['!cols'] = [{ wch: columnWidth + 2 }];
    XLSX.utils.book_append_sheet(wb, ws, 'Phone Numbers');
    const fileName = `phone_numbers_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }

  return (
    <main className="w-full max-w-2xl mx-auto px-4" role="main" aria-label="Random Phone Number Generator">
      <article className="bg-base-200 rounded-2xl shadow-lg border border-base-300">
        <header className="flex flex-col items-center pt-8 pb-6 border-b border-base-300">
          <div className="w-16 h-16 mb-4" role="img" aria-label="Phone Number Generator Logo">
            <HeaderLogo />
          </div>
          <h1 className="text-xl font-semibold text-primary">
            {messages?.title || 'Random Phone Number Generator'}
          </h1>
          <p className="text-sm text-base-content/70">
            {messages?.subtitle || 'Generate random phone numbers for US, UK, and worldwide. Free phone number generator tool.'}
          </p>
        </header>

        <section className="p-6 space-y-6" aria-label="Phone Number Generator Tool">
          <div className="flex flex-col sm:flex-row gap-4">
            <textarea
              className="flex-1 textarea textarea-bordered min-h-[160px] text-base resize-none font-mono bg-base-100"
              placeholder={messages?.placeholder || 'Generated random phone numbers will appear here'}
              value={content}
              readOnly
              aria-label="Generated Phone Numbers"
            />
            <div className="flex sm:flex-col gap-2" role="group" aria-label="Action Buttons">
              <button
                onClick={copyText}
                className={`btn btn-primary ${isCopied ? 'btn-outline' : ''} flex-1 sm:flex-none justify-center`}
                title={messages?.tooltips?.copy || 'Copy phone numbers to clipboard'}
                aria-label="Copy to clipboard"
              >
                <i className="fa-regular fa-copy text-lg" aria-hidden="true" />
                <span>{messages?.buttons?.copy || 'Copy'}</span>
              </button>
              <button
                onClick={exportToExcel}
                className="btn btn-primary flex-1 sm:flex-none justify-center"
                title={messages?.tooltips?.excel || 'Export phone numbers to Excel'}
                aria-label="Export to Excel"
                disabled={numberList.length === 0}
              >
                <i className="fa-regular fa-file-excel text-lg" aria-hidden="true" />
                <span>{messages?.buttons?.excel || 'Excel'}</span>
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <section className="flex flex-col sm:flex-row gap-4 items-center" aria-label="Generator Settings">
              <div className="w-full sm:w-2/3">
                <CountrySelect
                  value={countrySelect}
                  onChange={setCountrySelect}
                  aria-label="Select country for phone number format"
                />
              </div>
              <div className="w-full sm:w-1/3 flex items-center gap-4">
                <label className="text-base whitespace-nowrap" htmlFor="total-numbers">
                  {messages?.labels?.total || 'Total Numbers:'}
                </label>
                <input
                  id="total-numbers"
                  type="text"
                  placeholder="Total"
                  value={totalNum}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (/^\d*$/.test(newValue) && newValue.length <= 4) {
                      setTotalNum(newValue);
                    }
                  }}
                  className="input input-bordered w-full text-center bg-base-100"
                  aria-label="Number of phone numbers to generate"
                />
              </div>
            </section>

            <section className="bg-base-300/30 rounded-xl p-4" aria-label="Format Options">
              <OptionToggles
                messages={messages?.labels?.options || {
                  title: 'Phone Number Format Options',
                  plusSymbol: 'Add Plus Symbol (+)',
                  countryCode: 'Include Country Code',
                  separator: 'Separate by Comma'
                }}
                withPlus={withOption.withPlus}
                withPrefix={withOption.withPrefix}
                withComma={withOption.withComma}
                onToggle={handleOptionToggle}
              />
            </section>

            <button
              onClick={generateNumber}
              disabled={totalNum === "0" || totalNum === ""}
              className="btn btn-primary w-full text-lg h-14"
              title={messages?.tooltips?.generate || 'Generate random phone numbers'}
              aria-label="Generate random phone numbers"
            >
              <i className="fa-solid fa-arrows-rotate text-xl mr-2" aria-hidden="true" />
              <span>{messages?.buttons?.generate || 'Generate Random Phone Numbers'}</span>
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}
