export const messages = {
  metadata: {
    title: 'Генератор Телефонных Номеров - Бесплатный Инструмент для Генерации Международных Номеров',
    description: 'Генерируйте случайные телефонные номера для разных стран, включая США, Великобританию, Китай, Индию и другие. Идеально подходит для тестирования и разработки.',
    keywords: 'генератор телефонных номеров, случайные номера телефонов, международные номера, генератор тестовых данных',
  },
  ui: {
    title: 'Генератор Телефонных Номеров',
    subtitle: 'Генерация телефонных номеров для разных стран',
    placeholder: 'Список Номеров Появится Здесь',
    buttons: {
      copy: 'Копировать',
      excel: 'Excel',
      generate: 'Генерировать',
    },
    labels: {
      total: 'Всего:',
      options: {
        title: 'Опции',
        plusSymbol: 'Символ Плюс (+)',
        countryCode: 'Код Страны',
        separator: 'Разделять Запятой',
      },
    },
    tooltips: {
      copy: 'Копировать в буфер обмена',
      excel: 'Экспорт в Excel',
      generate: 'Сгенерировать новые номера',
    },
  },
} as const; 