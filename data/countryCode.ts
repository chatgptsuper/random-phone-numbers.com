// 定义统一的国家代码接口
interface CountryCodeInfo {
  prefix: string;
  length: number;
  suffix: string[];
  format: string;
  flag: string;
  name: string;
}

export const countryCode: Record<string, CountryCodeInfo> = {
  ID: {
    prefix: "62",
    length: 12,
    suffix: ["811", "812", "813", "821", "822", "823", "852", "853", "851", "814", "815", "816"],
    format: "XXX XXXX XXXX",
    flag: "🇮🇩",
    name: "Indonesia"
  },

  MY: {
    prefix: "60",
    length: 9,
    suffix: ["01", "012", "013", "014", "015", "016", "017", "018", "019"],
    format: "XX XXXX XXXX",
    flag: "🇲🇾",
    name: "Malaysia"
  },

  CN: {
    prefix: "86",
    length: 11,
    suffix: ["130", "131", "132", "133", "134", "135", "136", "137", "138", "139"],
    format: "XXX XXXX XXXX",
    flag: "🇨🇳",
    name: "China"
  },

  IN: {
    prefix: "91",
    length: 10,
    suffix: ["89", "90", "70", "98", "99", "80", "97", "96", "95", "94", "93", "91"],
    format: "XXXXX XXXXX",
    flag: "🇮🇳",
    name: "India"
  },

  US: {
    prefix: "1",
    length: 10,
    suffix: ["201", "202", "203", "205", "206", "207", "208", "209", "210"],
    format: "XXX XXX XXXX",
    flag: "🇺🇸",
    name: "United States"
  },

  GB: {
    prefix: "44",
    length: 10,  // 英国手机号10位，不含国家代码
    suffix: ["7"],  // 手机号以7开头
    format: "XXXX XXXXXX",
    flag: "🇬🇧",
    name: "United Kingdom"
  },

  BR: {
    prefix: "55",
    length: 11,
    suffix: ["11", "21", "31", "41", "51", "61"],
    format: "XX XXXXX XXXX",
    flag: "🇧🇷",
    name: "Brazil"
  },

  DE: {
    prefix: "49",
    length: 11,
    suffix: ["150", "151", "152", "155", "156", "157", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170"],
    format: "+49 XXX XXXX XXXX",
    flag: "🇩🇪",
    name: "Germany"
  },

  FR: {
    prefix: "33",
    length: 11,
    suffix: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    format: "+33 X XX XX XX XX",
    flag: "🇫🇷",
    name: "France"
  },

  JP: {
    prefix: "81",
    length: 10,
    suffix: ["070", "080", "090"],
    format: "XX XXXX XXXX",
    flag: "🇯🇵",
    name: "Japan"
  },
  
  SG: {
    prefix: "65",
    length: 8,
    suffix: ["8", "9"],
    format: "XXXX XXXX",
    flag: "🇸🇬",
    name: "Singapore"
  },

  PH: {
    prefix: "63",
    length: 10,
    suffix: ["917", "918", "919", "905", "906", "915", "916"],
    format: "XXX XXX XXXX",
    flag: "🇵🇭",
    name: "Philippines"
  },

  UK: {
    prefix: "44",
    suffix: ["71", "72", "73", "74", "75", "77", "78", "79"],  // 英国手机号前缀
    length: 11,  // 包含前缀的总长度
    format: "+44 XXXX XXXXXX",
    flag: "🇬🇧",
    name: "United Kingdom"
  },

  GH: {
    prefix: "233",
    length: 9,
    suffix: ["24", "20", "27", "54", "55", "50", "57"],
    format: "XX XXX XXXX",
    flag: "🇬🇭",
    name: "Ghana"
  },

  NG: {
    prefix: "234",
    length: 10,
    suffix: ["803", "806", "805", "807", "802", "808", "809", "817", "818"],
    format: "XXX XXX XXXX",
    flag: "🇳🇬",
    name: "Nigeria"
  },

  CA: {
    prefix: "1",
    length: 10,
    suffix: ["416", "647", "604", "514", "403", "613"],
    format: "XXX XXX XXXX",
    flag: "🇨🇦",
    name: "Canada"
  },

  AU: {
    prefix: "61",
    length: 9,
    suffix: ["4"],
    format: "4XX XXX XXX",
    flag: "🇦🇺",
    name: "Australia"
  }
};
