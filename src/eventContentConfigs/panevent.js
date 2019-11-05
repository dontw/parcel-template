export default {
  eventId: 'panevent',
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
            url: 'panevent-images/BBN-1.jpg',
            mobileUrl: 'panevent-images/BBN-1.jpg'
          },
          {
            name: 'image2',
            url: 'panevent-images/BBN-2.jpg',
            mobileUrl: 'panevent-images/BBN-2.jpg'
          },
          {
            name: 'image3',
            url: 'panevent-images/BBN-3.jpg',
            mobileUrl: 'panevent-images/BBN-3.jpg'
          }
        ]
      }
    },
    // 大圖
    {
      tagName: 'SquareImage',
      data: {
        imageUrl: 'panevent-images/BN-1.jpg',
        bgColor: '#000000'
      }
    },

    {
      tagName: 'SquareImage',
      data: {
        imageUrl: 'panevent-images/BN-2.jpg',
        bgColor: '#000000'
      }
    },

    {
      tagName: 'SquareImage',
      data: {
        imageUrl: 'panevent-images/BN-3.jpg',
        bgColor: '#000000'
      }
    },

    {
      tagName: 'SquareImage',
      data: {
        imageUrl: 'panevent-images/BN-4.jpg',
        bgColor: '#000000'
      }
    },

    {
      tagName: 'SquareImage',
      data: {
        imageUrl: 'panevent-images/BN-5.jpg',
        bgColor: '#000000'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo1',
        promotionHeader: '上身',
        promotionBarcodes: [
          'Q92020002021S',
          'Q92020802021S',
          'Q92020001617S',
          'Q92020801617S',
          'Q92010801613S',
          'Q92010001613S',
          'Q92010802229S',
          'Q92010002229S'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#000000'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo2',
        promotionHeader: '下著',
        promotionBarcodes: [
          'Q92020003638S',
          'Q92020803638S',
          'Q92010574622S',
          'Q92010644622S',
          'Q92020133635S',
          'Q92020573635S',
          'Q92010004625S',
          'Q92010804625S'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#000000'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo3',
        promotionHeader: '外套',
        promotionBarcodes: [
          'Q92010912228S',
          'Q92010802228S',
          'Q92020591411S',
          'Q92020761411S'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#000000'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo4',
        promotionHeader: '眼鏡',
        promotionBarcodes: [
          'W9102056641400',
          'W9102013640600',
          'W9102080641200',
          'W9102080641300',
          'W9102045641100',
          'W9102045641000',
          'W9102099640100',
          'W9102090640200'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#000000'
      }
    },

    {
      tagName: 'Promotion',
      data: {
        promotionId: 'promo5',
        promotionHeader: '襪子',
        promotionBarcodes: [
          'W9102095580100',
          'W9102057580700',
          'W9102055580800',
          'W9102080580900',
          'W9102000582600',
          'W9102091582800',
          'W9102042582900',
          'W9102033583000'
        ],
        headerBgColor: '#9A999A',
        contentBgColor: '#000000'
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
            name: '眼鏡',
            icon: 'glasses',
            targetId: '#promo4'
          },
          {
            name: '襪子',
            icon: 'socks',
            targetId: '#promo5'
          }
        ]
      }
    }
  ]
};
