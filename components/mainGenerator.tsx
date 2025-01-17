'use client'

import { useState, useEffect, useCallback } from "react";
import * as XLSX from 'xlsx';
import HeaderLogo from "./headerLogo";
import CountrySelect from "./CountrySelect";
import OptionToggles from "./OptionToggles";
import { countryCode } from "../data/countryCode";
import type { Locale } from "../app/i18n/config";

// 定义翻译对象的类型
interface Translations {
  app: {
    title: string
    description: string
    copy: string
    excel: string
    total: string
    generate: string
    options: {
      plusSymbol: string
      countryPrefix: string
      separateByComma: string
    }
  }
}

interface MainGeneratorProps {
  locale: Locale
  translations: Translations
}

export default function MainGenerator({ locale, translations }: MainGeneratorProps) {
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

  const contentFill = useCallback(() => {
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
  }, [numberList, withOption, countrySelect]);

  useEffect(() => {
    contentFill();
    setIsCopied(false);
  }, [contentFill]);

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
    // 创建工作簿
    const wb = XLSX.utils.book_new();
    
    // 准备数据
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

    // 添加表头
    data.unshift(['Phone Numbers']);
    
    // 创建工作表
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // 设置列宽
    const columnWidth = Math.max(...data.map(row => row[0].length));
    ws['!cols'] = [{ wch: columnWidth + 2 }];
    
    // 将工作表添加到工作簿
    XLSX.utils.book_append_sheet(wb, ws, 'Phone Numbers');
    
    // 生成文件名
    const fileName = `phone_numbers_${new Date().toISOString().split('T')[0]}.xlsx`;
    
    // 导出文件
    XLSX.writeFile(wb, fileName);
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-base-200 rounded-2xl shadow-lg border border-base-300">
        {/* Header Section */}
        <div className="flex flex-col items-center pt-8 pb-6 border-b border-base-300">
          <div className="w-16 h-16 mb-4">
            <HeaderLogo />
          </div>
          <h1 className="text-xl font-semibold text-primary">
            {translations.app.title}
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="p-6 space-y-6">
          {/* Text Area Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <textarea
              className="flex-1 textarea textarea-bordered min-h-[160px] text-base resize-none font-mono bg-base-100"
              placeholder={translations.app.description}
              value={content}
              readOnly
            />
            <div className="flex sm:flex-col gap-2">
              <button
                onClick={copyText}
                className={`btn btn-primary ${isCopied ? 'btn-outline' : ''} flex-1 sm:flex-none justify-center`}
                title={translations.app.copy}
              >
                <i className="fa-regular fa-copy text-lg" />
                <span>{translations.app.copy}</span>
              </button>
              <button
                onClick={exportToExcel}
                className="btn btn-primary flex-1 sm:flex-none justify-center"
                title={translations.app.excel}
                disabled={numberList.length === 0}
              >
                <i className="fa-regular fa-file-excel text-lg" />
                <span>{translations.app.excel}</span>
              </button>
            </div>
          </div>

          {/* Controls Section */}
          <div className="grid gap-6">
            {/* Country and Total Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-full sm:w-2/3">
                <CountrySelect
                  value={countrySelect}
                  onChange={setCountrySelect}
                  locale={locale}
                />
              </div>
              <div className="w-full sm:w-1/3 flex items-center gap-4">
                <label className="text-base whitespace-nowrap">{translations.app.total}:</label>
                <input
                  type="text"
                  placeholder={translations.app.total}
                  value={totalNum}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (/^\d*$/.test(newValue) && newValue.length <= 4) {
                      setTotalNum(newValue);
                    }
                  }}
                  className="input input-bordered w-full text-center bg-base-100"
                />
              </div>
            </div>

            {/* Options Section */}
            <div className="bg-base-300/30 rounded-xl p-4">
              <OptionToggles
                withPlus={withOption.withPlus}
                withPrefix={withOption.withPrefix}
                withComma={withOption.withComma}
                onToggle={handleOptionToggle}
                translations={translations.app.options}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateNumber}
              disabled={totalNum === "0" || totalNum === ""}
              className="btn btn-primary w-full text-lg h-14"
            >
              <i className="fa-solid fa-arrows-rotate text-xl mr-2" />
              <span>{translations.app.generate}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
