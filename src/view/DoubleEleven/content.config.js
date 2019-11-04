module.exports = {
  title: 'Good Buy Summer 全館85折最後倒數！台灣設計師原創服飾平台-Halfme',
  description:
    '結合設計、原創、共享的服飾平台，為台灣在地新銳設計師提供盡情揮灑的創作舞台，將時尚伸展台延伸到每個人的衣櫃裡，在日常生活中實踐繽紛多元的穿搭美學。',
  keywords:
    'vogue、時尚、設計、原創、品牌、設計師、時裝、服飾、男裝、女裝、購物、流行、品牌、穿搭、形象、日常、逛街、shopping、ootd、獨家、優惠、折扣、消費、風格、style、態度、藝術、跨界、品味、名人、文化、潮流、話題、焦點、城市、city、輕奢、現代、當代、趨勢、美學、春夏、秋冬、訂製、系列、款式、旗艦店、旗艦館、概念',
  components: [
    //導航列
    {
      tagName: 'Nav'
    },
    //輪播
    {
      tagName: 'Carousel',
      data: {
        id: 1,
        images: [
          {
            name: 'image1',
            url: 'https://assets.change.org/photos/9/dt/lf/jIdtlFZXljLNqDZ-800x450-noPad.jpg?1529319417',
            mobileUrl: 'header_app_banner.png'
          },
        ]
      }
    },
    // 大圖
    // {
    //   tagName: 'SquareImage',
    //   data: {
    //     mobileImageUrl: 'https://fakeimg.pl/400x500/?text=Mobile&font=lobster',
    //     imageUrl: 'https://fakeimg.pl/1024x1024/?text=1024&font=lobster'
    //   }
    // },

    // 促銷卡牌
    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo1',
        promotionHeader: '魅力女裝',
        promotionBarcodes: [
          'Q91020722235S',
          'Q91020002801S',
          'Q91020572245S',
          'Q91020702239S',
          'Q91020563618S',
          'Q91020133612S',
          'Q91020724605S',
          'Q91020574627S',
          'Q91020002014S',
          'Q91020912012S',
          'Q91020102005S',
          'Q91020804607S'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#FFFFFF'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo2',
        promotionHeader: '時尚男裝',
        promotionBarcodes: [
          'Q91010722219S',
          'Q91010802219S',
          'Q91010432210S',
          'Q91010632210S',
          'Q91010001602S',
          'Q91010911602S',
          'Q91010504615S',
          'Q91010564615S',
          'Q91010434610S',
          'Q91010564610S',
          'Q91010564603S',
          'Q91010724603S'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#FFFFFF'
      }
    },

    {
      tagName: 'Footer'
    },
    {
      tagName: 'SideNav',
      data: {
        linkList: [
          {
            name: '魅力女裝',
            icon: 'dress',
            targetId: '#promo1'
          },
          {
            name: '時尚男裝',
            icon: 'pants',
            targetId: '#promo2'
          }
        ]
      }
    }
  ]
};
