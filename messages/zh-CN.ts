export const messages = {
  metadata: {
    title: '电话号码生成器 - 免费国际电话号码生成工具',
    description: '为多个国家生成随机电话号码，包括美国、英国、中国、印度等。完美适用于测试和开发目的。',
    keywords: '电话号码生成器, 随机电话号码, 国际电话号码, 测试数据生成器',
  },
  ui: {
    title: '电话号码生成器',
    subtitle: '生成不同国家的随机电话号码',
    placeholder: '生成的电话号码将显示在这里',
    buttons: {
      copy: '复制',
      excel: '导出',
      generate: '生成',
    },
    labels: {
      total: '数量：',
      options: {
        title: '选项',
        plusSymbol: '添加加号 (+)',
        countryCode: '添加国家代码',
        separator: '使用逗号分隔',
      },
    },
    tooltips: {
      copy: '复制到剪贴板',
      excel: '导出到 Excel',
      generate: '生成新号码',
    },
  },
} as const; 