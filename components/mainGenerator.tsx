'use client'

import { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import HeaderLogo from "./headerLogo";
import CountrySelect from "./CountrySelect";
import OptionToggles from "./OptionToggles";
import { countryCode } from "../data/countryCode";

export default function MainGenerator() {
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
    contentFill();
    setIsCopied(false);
  }, [numberList, withOption, contentFill, countrySelect]);

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
        {/* Header Section - 优化标题和描述 */}
        <div className="flex flex-col items-center pt-8 pb-6 border-b border-base-300">
          <div className="w-16 h-16 mb-4">
            <HeaderLogo />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">
            Random Phone Number Generator
          </h1>
          <p className="text-center text-base-content/80 px-4">
            Generate random phone numbers for US, UK, China and other countries. Free tool for testing and development.
          </p>
        </div>

        {/* Main Content Section - 添加更多描述性文本 */}
        <div className="p-6 space-y-6">
          {/* Features Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-base-300/30 rounded-lg">
              <i className="fa-solid fa-globe text-xl mb-2"></i>
              <p className="text-sm">Multiple Countries</p>
            </div>
            <div className="text-center p-3 bg-base-300/30 rounded-lg">
              <i className="fa-solid fa-file-excel text-xl mb-2"></i>
              <p className="text-sm">Excel Export</p>
            </div>
            <div className="text-center p-3 bg-base-300/30 rounded-lg">
              <i className="fa-solid fa-copy text-xl mb-2"></i>
              <p className="text-sm">Copy to Clipboard</p>
            </div>
          </div>

          {/* Text Area Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <textarea
              className="flex-1 textarea textarea-bordered min-h-[160px] text-base resize-none font-mono bg-base-100"
              placeholder="Generated phone numbers will appear here..."
              value={content}
              readOnly
              aria-label="Generated phone numbers"
            />
            <div className="flex sm:flex-col gap-2">
              <button
                onClick={copyText}
                className={`btn btn-primary ${isCopied ? 'btn-outline' : ''} flex-1 sm:flex-none justify-center`}
                title="Copy numbers to clipboard"
                aria-label="Copy to clipboard"
              >
                <i className="fa-regular fa-copy text-lg" />
                <span>Copy</span>
              </button>
              <button
                onClick={exportToExcel}
                className="btn btn-primary flex-1 sm:flex-none justify-center"
                title="Export numbers to Excel"
                aria-label="Export to Excel"
                disabled={numberList.length === 0}
              >
                <i className="fa-regular fa-file-excel text-lg" />
                <span>Excel</span>
              </button>
            </div>
          </div>

          {/* Controls Section - 添加更清晰的标签 */}
          <div className="grid gap-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-full sm:w-2/3">
                <label className="block text-sm mb-2" htmlFor="country-select">
                  Select Country
                </label>
                <CountrySelect
                  value={countrySelect}
                  onChange={setCountrySelect}
                  id="country-select"
                />
              </div>
              <div className="w-full sm:w-1/3">
                <label className="block text-sm mb-2" htmlFor="total-input">
                  Number of Phone Numbers
                </label>
                <input
                  id="total-input"
                  type="text"
                  placeholder="Enter quantity"
                  value={totalNum}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (/^\d*$/.test(newValue) && newValue.length <= 4) {
                      setTotalNum(newValue);
                    }
                  }}
                  className="input input-bordered w-full text-center bg-base-100"
                  aria-label="Total numbers to generate"
                />
              </div>
            </div>

            {/* Options Section */}
            <div className="bg-base-300/30 rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-3">Format Options</h2>
              <OptionToggles
                withPlus={withOption.withPlus}
                withPrefix={withOption.withPrefix}
                withComma={withOption.withComma}
                onToggle={handleOptionToggle}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateNumber}
              disabled={totalNum === "0" || totalNum === ""}
              className="btn btn-primary w-full text-lg h-14"
              aria-label="Generate phone numbers"
            >
              <i className="fa-solid fa-arrows-rotate text-xl mr-2" />
              <span>Generate Random Numbers</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
