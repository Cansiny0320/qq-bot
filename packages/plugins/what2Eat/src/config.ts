export interface Food {
  type: string;
  restaurants: string[];
}

export const foods: Food[] = [
  {
    type: '面/粉',
    restaurants: [
      '延生凉面',
      '延生新疆炒粉',
      '莘莘食堂',
      '中心食堂',
      '天桥面',
      '嬢嬢汤圆',
      '湖南卤面',
      '罐罐米线',
      '花甲米线',
    ],
  },
  {
    type: '快餐',
    restaurants: ['华莱士'],
  },
  {
    type: '鸡公煲',
    restaurants: ['新校门红色牌子'],
  },
  {
    type: '串串',
    restaurants: ['老九门'],
  },
  {
    type: '炒菜',
    restaurants: [
      '大米小面',
      '天香饭庄',
      '乡村下饭菜',
      '延生食堂',
      '莘莘食堂',
      '中心食堂',
    ],
  },
  {
    type: '大盘鸡',
    restaurants: ['新疆大盘鸡'],
  },
  {
    type: '烧烤',
    restaurants: ['三姐烧烤'],
  },
  {
    type: '鱼',
    restaurants: ['纸包鱼', '豆花鱼'],
  },
  {
    type: '抄手/馄饨',
    restaurants: ['李麻抄手', '延生食堂', '福建千里香馄饨'],
  },
  {
    type: '煎饼',
    restaurants: ['山东菜煎饼'],
  },
  {
    type: '粥',
    restaurants: ['李海粥王', '延生食堂'],
  },
  {
    type: '烤肉',
    restaurants: ['铁炙子'],
  },
  {
    type: '猪脚饭',
    restaurants: ['隆江猪脚饭'],
  },
  {
    type: '麻辣烫',
    restaurants: ['大骨麻辣烫'],
  },
];

export const neverEatFoods: Food[] = [
  {
    type: '麻辣烫',
    restaurants: ['杨国福'],
  },
  {
    type: '螺蛳粉',
    restaurants: ['堕落街里', '堕落街外'],
  },
  {
    type: '炒菜',
    restaurants: ['无届'],
  },
  {
    type: '火锅',
    restaurants: ['六婶火锅'],
  },
];
