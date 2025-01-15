export const messages = {
  metadata: {
    title: '電話號碼產生器 - 免費國際電話號碼產生工具',
    description: '為多個國家產生隨機電話號碼，包括美國、英國、中國、印度等。完美適用於測試和開發目的。',
    keywords: '電話號碼產生器, 隨機電話號碼, 國際電話號碼, 測試數據產生器',
  },
  ui: {
    title: '電話號碼產生器',
    subtitle: '產生不同國家的隨機電話號碼',
    placeholder: '產生的電話號碼將顯示在這裡',
    buttons: {
      copy: '複製',
      excel: '匯出',
      generate: '產生',
    },
    labels: {
      total: '數量：',
      options: {
        title: '選項',
        plusSymbol: '添加加號 (+)',
        countryCode: '添加國家代碼',
        separator: '使用逗號分隔',
      },
    },
    tooltips: {
      copy: '複製到剪貼簿',
      excel: '匯出至 Excel',
      generate: '產生新號碼',
    },
  },
} as const; 