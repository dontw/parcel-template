module.exports ={
  title: '某某活動的 title@@!!!',
  description: '某某活動的 description 在這',
  url: process.env.URL,
  imageUrl: 'https://fakeimg.pl/600x314/282828/eae0d0/?retina=1',
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
            name: 'shiba',
            url:
              'https://fakeimg.pl/1600x900/?text=Desktop%20Image&font=lobster',
            mobileUrl:
              'https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster'
          },
          {
            name: 'shiba',
            url:
              'https://fakeimg.pl/1600x900/?text=Desktop%20Image&font=lobster',
            mobileUrl:
              'https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster'
          },
          {
            name: 'shiba',
            url:
              'https://fakeimg.pl/1600x900/?text=Desktop%20Image&font=lobster',
            mobileUrl:
              'https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster'
          }
        ]
      }
    },
    // 大圖
    {
      tagName: 'SquareImage',
      data: {
        mobileImageUrl: 'https://fakeimg.pl/400x500/?text=Mobile&font=lobster',
        imageUrl: 'https://fakeimg.pl/1024x1024/?text=1024&font=lobster'
      }
    },

    {
      tagName: 'SquareImage',
      data: {
        mobileImageUrl: 'https://fakeimg.pl/400x500/?text=Mobile&font=lobster',
        imageUrl: 'https://fakeimg.pl/1024x1024/?text=1024&font=lobster'
      }
    },

    // 促銷卡牌
    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo1',
        promotionHeader: '上身',
        promotionBarcodes: [
          'Q92020002021',
          'Q92020802021',
          'Q92020001617',
          'Q92020801617',
          'Q92010001613',
          'Q92010801613',
          'Q92010002229',
          'Q92010802229'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#333333'
      }
    },
    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo2',
        promotionHeader: '下著',
        promotionBarcodes: [
          'Q92020003638',
          'Q92020803638',
          'Q92010574622',
          'Q92010644622',
          'Q92020133635',
          'Q92020573635',
          'Q92010004625',
          'Q92010804625'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#FFFFFF'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo3',
        promotionHeader: '外套',
        promotionBarcodes: [
          'Q92010912228',
          'Q92010802228',
          'Q92020591411',
          'Q92020761411'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#FFFFFF'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo4',
        promotionHeader: '配件',
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
        promotionId: 'promo5',
        promotionHeader: '眼鏡',
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
      tagName: 'Promotion',
      data: {
        promotionId: 'promo6',
        promotionHeader: '襪子',
        promotionBarcodes: [
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
      tagName: 'Footer'
    },
    {
      tagName: 'SideNav',
      data: {
        linkList: [
          {
            name: '上身',
            icon: 'shirt',
            targetId: '#promo1'
          },
          {
            name: '下著',
            icon: 'pants',
            targetId: '#promo2'
          },
          {
            name: '外套',
            icon: 'coat',
            targetId: '#promo3'
          },
          {
            name: '配件',
            icon: 'accessories',
            targetId: '#promo4'
          },
          {
            name: '眼鏡',
            icon: 'glasses',
            targetId: '#promo5'
          },
          {
            name: '襪子',
            icon: 'socks',
            targetId: '#promo6'
          }
        ]
      }
    }
  ]
}
