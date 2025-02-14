// 主要功能组件，负责生成随即电话号码

'use client'

import { useState, useEffect, useCallback } from 'react'
import * as XLSX from 'xlsx'
import { countryCode } from '@/data/countryCode'

// 定义生成器属性接口
interface MainGeneratorProps {
  defaultCountry?: string;
}

// 定义选项接口
interface FormatOptions {
  withPlus: boolean;
  withPrefix: boolean;
  withComma: boolean;
  withSpace: boolean;
}

export default function MainGenerator({ defaultCountry = "US" }: MainGeneratorProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [totalNum, setTotalNum] = useState("100");
  const [numberList, setNumberList] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [withOption, setWithOption] = useState<FormatOptions>({
    withPlus: true,
    withPrefix: true,
    withComma: false,
    withSpace: true,
  });

  function generateNumber() {
    setIsCopied(false);
    const upperCountry = defaultCountry.toUpperCase();
    const countryData = countryCode[upperCountry];

    if (!countryData) {
      console.error(`Country code ${upperCountry} not found`);
      return;
    }

    const tmpNumberList: string[] = [];
    const { prefix, length, suffix, format } = countryData;

    for (let j = 0; j < Number(totalNum); j++) {
      // 选择后缀
      const selectedSuffix = suffix[Math.floor(Math.random() * suffix.length)];
      
      // 生成剩余数字
      const remainingLength = length - selectedSuffix.length;
      const remainingDigits = Array.from(
        { length: remainingLength }, 
        () => Math.floor(Math.random() * 10)
      ).join('');

      // 组合完整号码
      const fullNumber = selectedSuffix + remainingDigits;

      // 格式化号码（不包含前缀）
      const digits = fullNumber.split('');
      let digitIndex = 0;
      let formattedNumber = format.replace(/X+/g, (match: string) => {
        const segment = digits.slice(digitIndex, digitIndex + match.length).join('');
        digitIndex += match.length;
        return segment;
      });

      // 如果不使用空格，移除所有空格
      if (!withOption.withSpace) {
        formattedNumber = formattedNumber.replace(/\s+/g, '');
      }

      // 根据选项添加前缀
      if (withOption.withPrefix) {
        formattedNumber = prefix + (withOption.withSpace ? ' ' : '') + formattedNumber;
      }
      if (withOption.withPlus) {
        formattedNumber = '+' + formattedNumber;
      }

      // 特殊国家处理
      if (upperCountry === 'BR' && !formattedNumber.includes('9')) {
        formattedNumber = formattedNumber.replace(/(\d{2})/, '$1 9');
      }

      tmpNumberList.push(formattedNumber);
    }

    setNumberList(tmpNumberList);
  }

  const contentFill = useCallback(() => {
    const formatNumber = (num: string) => {
      return num; // 不需要再处理，因为生成时已经处理过了
    };

    const separator = withOption.withComma ? ", " : "\n";
    const formattedList = numberList.map(formatNumber);
    setContent(formattedList.join(separator));
  }, [numberList, withOption]);

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
                checked={withOption.withSpace}
                onChange={() => handleOptionToggle('withSpace')}
              />
              <span>Add spaces between numbers</span>
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
