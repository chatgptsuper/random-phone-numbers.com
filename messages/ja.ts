export const messages = {
  metadata: {
    title: '電話番号ジェネレーター - 無料の国際電話番号生成ツール',
    description: '米国、英国、中国、インドなど、複数の国の電話番号をランダムに生成します。テストや開発目的に最適です。',
    keywords: '電話番号ジェネレーター, ランダム電話番号, 国際電話番号, テストデータジェネレーター',
  },
  ui: {
    title: '電話番号ジェネレーター',
    subtitle: '各国の電話番号をランダムに生成',
    placeholder: '生成された電話番号がここに表示されます',
    buttons: {
      copy: 'コピー',
      excel: 'Excel',
      generate: '生成',
    },
    labels: {
      total: '合計:',
      options: {
        title: 'オプション',
        plusSymbol: 'プラス記号 (+)',
        countryCode: '国番号',
        separator: 'カンマ区切り',
      },
    },
    tooltips: {
      copy: 'クリップボードにコピー',
      excel: 'Excelにエクスポート',
      generate: '新しい番号を生成',
    },
  },
} as const; 