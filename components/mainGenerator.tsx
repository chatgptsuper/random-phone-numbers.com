// 主要功能组件，负责生成随即电话号码

'use client'

import { useState, useEffect, useCallback } from 'react'
import * as XLSX from 'xlsx'
import { countryCode } from '@/data/countryCode'

interface MainGeneratorProps {
  defaultCountry?: string
}

export default function MainGenerator({ defaultCountry = "US" }: MainGeneratorProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [totalNum, setTotalNum] = useState("100");
  const [numberList, setNumberList] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [withOption, setWithOption] = useState({
    withPlus: true,
    withPrefix: true,
    withComma: false,
  });

  function generateNumber() {
    setIsCopied(false);
    const upperCountry = defaultCountry.toUpperCase();
    if (upperCountry in countryCode) {
      const tmpNumberList = [];
      setNumberList([""]);

      const countryData = countryCode[upperCountry as keyof typeof countryCode];
      const tmpSuffix = countryData.suffix;
      const tmpPrefix = countryData.prefix;
      const tmpLength = countryData.length;
      
      // 计算需要生成的剩余数字位数
      // 对于 UK，如果前缀是 "44" 且后缀是 "7x"，那么还需要生成 8 位数字
      const lastDigits = tmpLength - tmpPrefix.length - tmpSuffix[0].length;

      for (let j = 0; j < Number(totalNum); j++) {
        let newNumber = "";
        // 随机选择一个后缀
        const suffixIndex = Math.floor(Math.random() * tmpSuffix.length);
        newNumber += tmpSuffix[suffixIndex];

        // 生成剩余的随机数字
        for (let i = 0; i < lastDigits; i++) {
          newNumber += Math.floor(Math.random() * 10);
        }

        tmpNumberList.push(newNumber);
      }

      setNumberList(tmpNumberList);
    }
  }

  const contentFill = useCallback(() => {
    const formatNumber = (num: string) => {
      let formattedNumber = num;
      if (withOption.withPrefix) {
        const prefix = countryCode[defaultCountry.toUpperCase() as keyof typeof countryCode].prefix;
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
  }, [numberList, withOption, defaultCountry]);

  useEffect(() => {
    contentFill();
    setIsCopied(false);
  }, [numberList, withOption, contentFill]);

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
        const prefix = countryCode[defaultCountry as keyof typeof countryCode].prefix;
        formattedNumber = prefix + formattedNumber;
      }
      if (withOption.withPlus) {
        formattedNumber = `+${formattedNumber}`;
      }
      return [formattedNumber];
    });

    data.unshift(['Phone Numbers']);
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    ws['!cols'] = [{ wch: Math.max(...data.map(row => row[0].length)) + 2 }];
    
    XLSX.utils.book_append_sheet(wb, ws, 'Phone Numbers');
    
    const fileName = `${defaultCountry.toLowerCase()}_phone_numbers_${new Date().toISOString().split('T')[0]}.xlsx`;
    
    XLSX.writeFile(wb, fileName);
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* 选项和控制区域 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* 左侧：数量选择和生成按钮 */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Number of phone numbers to generate
            </label>
            <input
              type="number"
              value={totalNum}
              onChange={(e) => setTotalNum(e.target.value)}
              className="input input-bordered w-full"
              min="1"
              max="1000"
            />
          </div>
          <button
            onClick={generateNumber}
            className="btn btn-primary w-full"
          >
            Generate Numbers
          </button>
        </div>

        {/* 右侧：格式选项 */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium mb-2">Format Options</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={withOption.withPlus}
                onChange={() => handleOptionToggle('withPlus')}
              />
              <span>Add + prefix</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={withOption.withPrefix}
                onChange={() => handleOptionToggle('withPrefix')}
              />
              <span>Include country code</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={withOption.withComma}
                onChange={() => handleOptionToggle('withComma')}
              />
              <span>Separate with commas</span>
            </label>
          </div>
        </div>
      </div>

      {/* 生成结果区域 */}
      {numberList.length > 0 && (
        <div className="space-y-4">
          <div className="relative">
            <textarea
              value={content}
              readOnly
              className="textarea textarea-bordered w-full h-64 font-mono text-sm"
            />
            <div className="absolute top-2 right-2 space-x-2">
              <button
                onClick={copyText}
                className={`btn btn-sm ${isCopied ? 'btn-success' : 'btn-ghost'}`}
                title="Copy to clipboard"
              >
                {isCopied ? (
                  <span>Copied ✓</span>
                ) : (
                  <span>Copy</span>
                )}
              </button>
              <button
                onClick={exportToExcel}
                className="btn btn-sm btn-ghost"
                title="Export to Excel"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
