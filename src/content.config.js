export default {
  //網頁 tab 標題
  title: "The Event Website!!!",

  components: [
    //導航列
    {
      tagName: "Nav"
    },
    //輪播
    {
      tagName: "Carousel",
      data: {
        id: 1,
        images: [
          {
            name: "shiba",
            url:
              "https://fakeimg.pl/1600x800/?text=Desktop%20Image&font=lobster",
            mobileUrl:
              "https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster"
          },
          {
            name: "shiba",
            url:
              "https://fakeimg.pl/1600x800/?text=Desktop%20Image&font=lobster",
            mobileUrl:
              "https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster"
          },
          {
            name: "shiba",
            url:
              "https://fakeimg.pl/1600x800/?text=Desktop%20Image&font=lobster",
            mobileUrl:
              "https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster"
          }
        ]
      }
    },
    // 大圖
    {
      tagName: "SquareImage",
      data: {
        mobileImageUrl:
          "https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster",
        imageUrl:
          "https://d1icd6shlvmxi6.cloudfront.net/gsc/9HAKSQ/fa/bf/39/fabf392329944c818228eddb2bfb4eea/images/web/u67.jpg?token=17a4a17d6c34a15f3ac57299212eaa7c3dad6142a4acf8bac4bb74be7695fffa"
      }
    },

    {
      tagName: "SquareImage",
      data: {
        mobileImageUrl:
          "https://fakeimg.pl/1024x768/?text=Mobile%20Image&font=lobster",
        imageUrl:
          "https://d1icd6shlvmxi6.cloudfront.net/gsc/9HAKSQ/fa/bf/39/fabf392329944c818228eddb2bfb4eea/images/web/u67.jpg?token=17a4a17d6c34a15f3ac57299212eaa7c3dad6142a4acf8bac4bb74be7695fffa"
      }
    },

    // 促銷卡牌
    {
      tagName: "Promotion",
      data: {
        promotionId: "promo1",
        promotionHeader: "很推薦ㄛ",
        promotionBarcodes: [
          "Q91020461701S",
          "Q91020002210S",
          "Q91020102213M",
          "Q91020804606M",
          "Q91020562803S",
          "Q91020002229S",
        ],
        headerBgColor: "#9A999A",
        contentBgColor: "#333333"
      }
    },
    {
      tagName: "Promotion",
      data: {
        promotionId: "promo2",
        promotionHeader: "超推薦ㄛ",
        promotionBarcodes: [
          "Q91020002229S",
          "Q91020702233L",
          "Q91020102241L",
        ],
        headerBgColor: "#9A999A",
        contentBgColor: "#FFFFFF"
      }
    },
    {
      tagName: "Footer"
    },
    {
      tagName: "SideNav",
      data:{
        linkList:[
          {
            name: '很推薦ㄛ',
            targetId: '#promo1'
          },
          {
            name: '超推薦ㄛ',
            targetId: '#promo2'
          }
        ]
      }
    }
  ]
};
