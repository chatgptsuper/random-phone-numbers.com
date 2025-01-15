export const messages = {
  metadata: {
    title: '전화번호 생성기 - 무료 국제 전화번호 생성 도구',
    description: '미국, 영국, 중국, 인도 등 여러 국가의 전화번호를 무작위로 생성합니다. 테스트 및 개발 목적에 적합합니다.',
    keywords: '전화번호 생성기, 무작위 전화번호, 국제 전화번호, 테스트 데이터 생성기',
  },
  ui: {
    title: '전화번호 생성기',
    subtitle: '다양한 국가의 전화번호 생성',
    placeholder: '생성된 전화번호가 여기에 표시됩니다',
    buttons: {
      copy: '복사',
      excel: 'Excel',
      generate: '생성',
    },
    labels: {
      total: '총계:',
      options: {
        title: '옵션',
        plusSymbol: '플러스 기호 (+)',
        countryCode: '국가 코드',
        separator: '쉼표로 구분',
      },
    },
    tooltips: {
      copy: '클립보드에 복사',
      excel: 'Excel로 내보내기',
      generate: '새 번호 생성',
    },
  },
} as const; 