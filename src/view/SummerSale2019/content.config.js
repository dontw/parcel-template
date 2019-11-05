module.exports = {
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
            url: 'header_web_banner.png',
            mobileUrl: 'header_app_banner.png'
          }
        ]
      }
    },
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
