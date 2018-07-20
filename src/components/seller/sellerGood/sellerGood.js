import React,{Component} from 'react';
import Cart from '../../common/cart/cart';
import Buy from '../../common/buy/buy';
import './sellerGood.less';

class Good extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
          {
            "name": "热销榜",
            "type": -1,
            "foods": [
              {
                "name": "皮蛋瘦肉粥",
                "price": 10,
                "oldPrice": "",
                "description": "咸粥",
                "sellCount": 229,
                "rating": 100,
                "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "很喜欢的粥",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 1,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "扁豆焖面",
                "price": 14,
                "oldPrice": "",
                "description": "",
                "sellCount": 188,
                "rating": 96,
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 1,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "info": "",
                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "葱花饼",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 124,
                "rating": 85,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 1,
                    "text": "没啥味道",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 1,
                    "text": "很一般啊",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "牛肉馅饼",
                "price": 14,
                "oldPrice": "",
                "description": "",
                "sellCount": 114,
                "rating": 91,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 1,
                    "text": "难吃不推荐",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "招牌猪肉白菜锅贴/10个",
                "price": 17,
                "oldPrice": "",
                "description": "",
                "sellCount": 101,
                "rating": 78,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 1,
                    "text": "不脆,不好吃",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "南瓜粥",
                "price": 9,
                "oldPrice": "",
                "description": "甜粥",
                "sellCount": 91,
                "rating": 100,
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "红豆薏米美肤粥",
                "price": 12,
                "oldPrice": "",
                "description": "甜粥",
                "sellCount": 86,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "八宝酱菜",
                "price": 4,
                "oldPrice": "",
                "description": "",
                "sellCount": 84,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "红枣山药糙米粥",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 81,
                "rating": 91,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "糊塌子",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 80,
                "rating": 93,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "单人精彩套餐",
            "type": 2,
            "foods": [
              {
                "name": "红枣山药粥套餐",
                "price": 29,
                "oldPrice": 36,
                "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                "sellCount": 17,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "冰爽饮品限时特惠",
            "type": 1,
            "foods": [
              {
                "name": "VC无限橙果汁",
                "price": 8,
                "oldPrice": 10,
                "description": "",
                "sellCount": 15,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "还可以",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "精选热菜",
            "type": -1,
            "foods": [
              {
                "name": "娃娃菜炖豆腐",
                "price": 17,
                "oldPrice": "",
                "description": "",
                "sellCount": 43,
                "rating": 92,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "菜量还可以,味道还可以",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "手撕包菜",
                "price": 16,
                "oldPrice": "",
                "description": "",
                "sellCount": 29,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "香酥黄金鱼/3条",
                "price": 11,
                "oldPrice": "",
                "description": "",
                "sellCount": 15,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "爽口凉菜",
            "type": -1,
            "foods": [
              {
                "name": "八宝酱菜",
                "price": 4,
                "oldPrice": "",
                "description": "",
                "sellCount": 84,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "拍黄瓜",
                "price": 9,
                "oldPrice": "",
                "description": "",
                "sellCount": 28,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "精选套餐",
            "type": -1,
            "foods": [
              {
                "name": "红豆薏米粥套餐",
                "price": 37,
                "oldPrice": "",
                "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                "sellCount": 3,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "皮蛋瘦肉粥套餐",
                "price": 31,
                "oldPrice": "",
                "description": "",
                "sellCount": 12,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "果拼果汁",
            "type": -1,
            "foods": [
              {
                "name": "蜜瓜圣女萝莉杯",
                "price": 6,
                "oldPrice": "",
                "description": "",
                "sellCount": 1,
                "rating": "",
                "info": "",
                "ratings": [],
                "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "加多宝",
                "price": 6,
                "oldPrice": "",
                "description": "",
                "sellCount": 7,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "VC无限橙果汁",
                "price": 8,
                "oldPrice": 10,
                "description": "",
                "sellCount": 15,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "还可以",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "小吃主食",
            "type": -1,
            "foods": [
              {
                "name": "扁豆焖面",
                "price": 14,
                "oldPrice": "",
                "description": "",
                "sellCount": 188,
                "rating": 96,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 1,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "葱花饼",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 124,
                "rating": 85,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 1,
                    "text": "没啥味道",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 1,
                    "text": "很一般啊",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "牛肉馅饼",
                "price": 14,
                "oldPrice": "",
                "description": "",
                "sellCount": 114,
                "rating": 91,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 1,
                    "text": "难吃不推荐",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "招牌猪肉白菜锅贴/10个",
                "price": 17,
                "oldPrice": "",
                "description": "",
                "sellCount": 101,
                "rating": 78,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 1,
                    "text": "不脆,不好吃",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "糊塌子",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 80,
                "rating": 93,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          },
          {
            "name": "特色粥品",
            "type": -1,
            "foods": [
              {
                "name": "皮蛋瘦肉粥",
                "price": 10,
                "oldPrice": "",
                "description": "咸粥",
                "sellCount": 229,
                "rating": 100,
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "很喜欢的粥",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 1,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "南瓜粥",
                "price": 9,
                "oldPrice": "",
                "description": "甜粥",
                "sellCount": 91,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "红豆薏米美肤粥",
                "price": 12,
                "oldPrice": "",
                "description": "甜粥",
                "sellCount": 86,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "红枣山药糙米粥",
                "price": 10,
                "oldPrice": "",
                "description": "",
                "sellCount": 81,
                "rating": 91,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "鲜蔬菌菇粥",
                "price": 11,
                "oldPrice": "",
                "description": "咸粥",
                "sellCount": 56,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": ""
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
              },
              {
                "name": "田园蔬菜粥",
                "price": 10,
                "oldPrice": "",
                "description": "咸粥",
                "sellCount": 33,
                "rating": 100,
                "info": "",
                "ratings": [
                  {
                    "username": "3******c",
                    "rateTime": 1469281964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "2******3",
                    "rateTime": 1469271264000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  },
                  {
                    "username": "3******b",
                    "rateTime": 1469261964000,
                    "rateType": 0,
                    "text": "",
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                  }
                ],
                "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
              }
            ]
          }
        ],
      selectFoods:[0,1,2,3,4],
      initY: 0,
      scrollY: 0,
      cartHeight:0,
      listH: [],
      classMap: [],
      scroll: {
        // menu: {
        //   scrollY: 0,
        //   recordY: 0,
        //   listY: [],
        //   el: this.$refs.menu,
        //   cls: '.menuItem',
        //   parent: '.menu',
        //   index: 0
        // },
        // foods: {
        //   scrollY: 0,
        //   recordY: 0,
        //   listY: [],
        //   el: this.$refs.foods,
        //   cls: '.foodsList',
        //   parent: '.foods'
        // }
      }
    }
    this.initScrollData = this.initScrollData.bind(this);
    this.startScroll = this.startScroll.bind(this);
    this.entScroll = this.entScroll.bind(this);
    this.getCartHeight = this.getCartHeight.bind(this);
    // this.fliter = this.fliter.bind(this);
  }

  componentWillMount () {
    // let goods = store.getState().sellerCart.sellerCart;
    let scroll = this.state.scroll;
    scroll.el = this.refs.goodItem;
    this.setState({
      scroll,
      // goods
    });
  }
  componentDidMount () {
    this.setState({
      classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee']
    })
    // console.log(store.getState());
  }
  // ShowBlock () {
  //   if (!this.props.selectFoods.length) {
  //     this.setState({isActive:false});
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return {isActive:!prevState.isActive}
  //   })
  // }

  // fliter (productId) {
  //   this.state.goods.filter(item => item.productId===productId)
  // }

  initScrollData (event) {
    this.setState({initY : Math.ceil(event.changedTouches[0].clientY) + Math.abs(this.state.scroll.recordY)});
  }
  startScroll (event) {
    let moveElm = this.state.scroll.el;
    let scroll = this.state.scroll;
    let scrollY = this.state.scrollY;
    scrollY = scroll.scrollY  = scroll.recordY =  Math.ceil(event.changedTouches[0].clientY - this.state.initY)
    this.setState({
      scroll,
      scrollY
    })
    if (this.state.scroll.scrollY < 0) {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    }
  }
  entScroll () {
    let moveElm = this.state.scroll.el;
    let cartGoodsH = this.refs.goodsType;
    let ul = this.state.scroll.el.querySelector(this.state.scroll.cls + '>ul');
    let scroll = this.state.scroll;
    if (this.state.scroll.scrollY < 0) {
      let YY = cartGoodsH.clientHeight - this.acquireHeight() - ul.scrollHeight;
      console.log(YY);
      if (Math.abs(this.state.scroll.scrollY) >= Math.abs(YY)) {
        scroll.recordY = scroll.scrollY = YY;
        moveElm.style.top = YY + 'px';
        moveElm.style.transition = 'all 0.2s';
      }
    } else {
      if (moveElm.getBoundingClientRect().top > 174) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.2s';
      }
    }
    this.setState(scroll);
  }
  getCartHeight(H) {
    this.setState({
      cartHeight:H
    })
    console.log(this.state.cartHeight);
  }
  foodItem = (val) => {
     let foodItem = val.map((item, index) => {
       let oldPrice ='';
       if (item.oldPrice) {
         oldPrice = <span  className="p-floor">￥{item.oldPrice}</span>
       }
       return (
         <li  className="foodItem" key={index}>
           <div className="icon">
             <img src={item.icon} alt=''/>
           </div>
           <div className="f-conent">
             <h2 className="name">{item.name}</h2>
             <p className="desc">{item.description}</p>
             <div className="extra">
               <span>月售{item.sellCount}份</span>
               <span>好评率{item.rating}%</span>
             </div>
             <div className="price">
               <span>￥<span className="p-price"></span>{item.price}</span>
               {oldPrice}
               <Buy  good={item}/>
             </div>
           </div>
         </li>
       )
     })
     return foodItem;
   }
  foodsBar = () => {
    let foodsBar = this.state.goods.map((item, index) => {
      return (
        <li key={index} className='foodList'>
          <h1 className="title">{item.name}</h1>
          <ul>
            {this.foodItem(item.foods)}
          </ul>
        </li>
      )
    })
    return foodsBar
  }

  typesBar = () => {
    let typesBar = this.state.goods.map((item, index) => {
      let cl = '';
      if (item.type > 0) {
        cl =  <span className={"icon " + this.state.classMap[0]}></span>
      }
      return (
        <li className="menuItem" key={index}>
          <p className="text">
            {cl}
            <span>{item.name}</span>
          </p>
        </li>
      )
    })
    return typesBar
  }
  render() { 

    return (
      <div className="goods" ref='goods'>
        <div className="menu"  ref="menu">
          <ul>
            {this.typesBar()}
          </ul>
        </div>
        <div className="foods" ref="foods">
          <ul>
            {this.foodsBar()}
          </ul>
        </div>
        <Cart selectFoods={this.state.selectFoods} getCartHeight={this.getCartHeight}></Cart>
          {/*  <goodsDetail ref="goodWrapper"></goodsDetail> */}
      </div>  
    );
  }
}
 
export default Good;