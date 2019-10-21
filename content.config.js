module.exports ={
  title: 'Goodbye Summer',
  description: 'Goodbye Summer description',
  url: process.env.URL,
  imageUrl: 'https://i.imgur.com/ZbzvX3N.png',
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
            url:
              'image01.png',
            mobileUrl:
              'image01.png'
          },
          {
            name: 'image2',
            url:
              'image02.png',
            mobileUrl:
              'image02.png'
          },
          {
            name: 'image3',
            url:
              'image03.png',
            mobileUrl:
              'image03.png'
          }
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
        promotionHeader: '男裝',
        promotionBarcodes: [
          'W9102080641200',
          'W9102080641300',
          'W9102045641100',
          'W9102045641000',
          'W9102095580100',
          'W9102057580700',
          'W9102055580800',
          'W9102080580900'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#FFFFFF'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo2',
        promotionHeader: '女裝',
        promotionBarcodes: [
          'W9102080641200',
          'W9102080641300',
          'W9102045641100',
          'W9102045641000'
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
            name: '男裝',
            icon: 'pants',
            targetId: '#promo1'
          },
          {
            name: '女裝',
            icon: 'dress',
            targetId: '#promo2'
          }
        ]
      }
    }
  ]
}
