import React,{Component} from 'react';
import {connect} from 'react-redux';
import Cart from '../../common/cart/cart';
import Buy from '../../common/buy/buy';
import GoodsDetail from './goodsDetail';
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
      goodDetail:false,
      scrollY: 0,
      cartHeight:48,
      listH: [],
      foodList:{},
      classMap: [],
      scroll: {
        menu: {
          scrollY: 0,
          recordY: 0,
          listY: [],
          index:0,
          el: this.refs.menu,
          cls: '.menuItem',
        },
        foods: {
          scrollY: 0,
          recordY: 0,
          listY: [],
          el: this.refs.foods,
          cls: '.foodList',
        }
      }
    }
    this.onlineScroll = this.onlineScroll.bind(this);
    this.getCartHeight = this.getCartHeight.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.goodDetail = this.goodDetail.bind(this);
    this.acquire = this.acquire.bind(this);
  }

  componentDidMount () {
    let scroll = this.state.scroll;     
    scroll.menu.el = this.refs.menu;          // 元素初始化
    scroll.foods.el = this.refs.foods;        
    this.setState({                           // 状态保存
      scroll,
      classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee'] // 定义 菜单栏优惠图标
    });
    this.calculateHeight();  // 初始化商品栏高度数据
    this.switchMenuIndex(); //初始化菜单栏 选中状态
  }

  onlineScroll (event,item) {                 //商品类型 + 商品  滚动效果 
    let type = event.type;
    let scroll = this.state.scroll;
    let elem;
    elem = scroll.foods;
    if (item === 'menu') {
      elem = scroll.menu
    }
    switch (type) {
      case 'touchstart':
        this.initScrollData(event,elem)
        break;
      case 'touchmove':
        this.startScroll(event,elem,scroll)  
        break;
      default:
        this.entScroll(elem,scroll)
    }
  }

  initScrollData (event,elem) {
    this.setState({initY : Math.ceil(event.changedTouches[0].clientY) + Math.abs(elem.recordY)});
    event.stopPropagation();
  }

  startScroll (event,elem,scroll) {
    event.stopPropagation();
    let moveElm = elem.el; // 获取事件元素
    let scrollY = this.state.scrollY;
    scrollY = elem.scrollY  = elem.recordY =  Math.ceil(event.changedTouches[0].clientY - this.state.initY)
    this.setState({
      scroll,
      scrollY                  // 保存滚动距离
    })
    if (elem.scrollY < 0) {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(elem.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(elem.scrollY) + 'px';
    }
  }

  entScroll (elem,scroll) {
    let moveElm = elem.el;
    let cartGoodsH = this.refs.goods;  //获取滚动元素 父级
    let ul =elem.el.querySelector('.'+ elem.el.className + '>ul'); //获取滚动元素
    if (elem.scrollY < 0) {        // 判断元素滚动方向
      let YY = cartGoodsH.clientHeight - this.state.cartHeight - ul.scrollHeight; //获取 元素滚动后底部 和 父级底部的 差距
      if (Math.abs(elem.scrollY) >= Math.abs(YY)) { //判断元素滚动距离是否 大于 差距
        elem.recordY = elem.scrollY = YY;
        moveElm.style.top = YY + 'px';
        moveElm.style.transition = 'all 0.2s';
      }
    } else {
      if (moveElm.getBoundingClientRect().top > 174) {    // getBoundingClientRect获取元素位置
        moveElm.style.top = elem.recordY = 0;
        moveElm.style.transition = 'all 0.2s';
      }
    }
    if (elem.cls === '.foodList') {     //判断事件元素是否为
      this.calculateHeight();           // 实时获取高度，保证菜单栏 选中状态 处于对应
      this.switchMenuIndex();             // 实时获取 选中状态的index
    }
    this.setState(scroll);              //保存 滚动状态数据
  }

  calculateHeight () {
    let height = 0;
    let scroll = this.state.scroll;
    let foodList = scroll.foods.el.querySelectorAll(scroll.foods.cls); // 获取商品栏 各大类  高度
    let listH = this.state.listH;          // 存储 高度，用于和 判断选中 菜单
    listH = [];
    scroll.foods.listY = [];
    this.setState({
      listH,
      scroll
    })
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i];
      height += item.clientHeight;
      scroll.foods.listY.push(height);
      listH.push(height);
    };
    this.setState({
      listH,
      scroll                        // 存储 高度，用于和 判断选中 菜单
    })
  }

  switchMenuIndex () {            // 利用 商品栏滚动高度 和 菜单栏index对应的商品栏高度 判断处于某个菜单类 
    let scroll = this.state.scroll;
    for (let i = 0; i < this.state.listH.length; i++) {
      let height = this.state.listH[i];
      if (Math.abs(this.state.scrollY) <= height) {
        scroll.menu.index = i;
        this.setState(scroll)
        return;                 // 只要 进入一次，就打断，保证在某高度内  输出同一个index
      }
    }
  }

  toggleNav (index) {         // 菜单栏 点击 切换商品栏滚动高度
    this.calculateHeight();   // 实时获取高度
    let scroll = this.state.scroll;
    let scrollFoods = scroll.foods.el;
    if (index === 0) {
      scrollFoods.style.top = 0 + 'px';
      scrollFoods.style.transition = 'all 0.2s';
      scroll.foods.recordY = 0
      scroll.menu.index = index;
      this.setState( preState => ({
        scrollY:0,
        scroll
      }))
    } else {                      // index 大于 0 时，商品大类为第二个大类，这时滚动距离应为第一个大类的高度
      let itemIndex = index - 1; // 所以获取的高度应为当前 index的前一个数据，这里 index-1
      scroll.menu.index = index;
      scroll.foods.recordY = this.state.listH[itemIndex];
      scrollFoods.style.top = -this.state.listH[itemIndex] + 'px';
      scrollFoods.style.transition = 'all 0.2s';
      this.setState( preState => ({
        scrollY:this.state.listH[index],
        scroll          //保存状态
      }))
    }
  }

  getCartHeight(H) {  // 传入cart 组件，获取购物车高度；
    this.setState({
      cartHeight:H
    })
  }

  goodDetail() {          // 控制详情页的显示
    this.setState(preState => ({
      goodDetail:!preState.goodDetail
    }))
  }

  acquire (food) {             //获取商品信息
    this.setState({foodList:food});
  }

  foodItem = (val) => {   // 渲染单个商品
     let foodItem = val.map((item, index) => {
       let oldPrice ='';
       if (item.oldPrice) {
         oldPrice = <span  className="p-floor">￥{item.oldPrice}</span>
       }
       return (
         <li  className="foodItem" key={index} onClick={() => this.acquire(item)}>
           <div className="icon" onClick={this.goodDetail}>
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

  foodsBar = () => { // 渲染商品大类
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

  typesBar = () => { // 渲染菜单栏
    let typesBar = this.state.goods.map((item, index) => {
      let cl = '';
      if (item.type > 0) {
        cl =  <span className={"icon " + this.state.classMap[0]}></span>
      }
      return (
        <li className={"menuItem " + ( this.state.scroll.menu.index === index ? 'current' : '')} key={index}  onClick={() => this.toggleNav(index)}>
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
    let cartList = this.props.cartList;
    return (
      <div className="goods" ref='goods'>
        <div className="menu"  ref="menu" onTouchStart={(event) =>this.onlineScroll(event,'menu')} onTouchMove={(event) =>this.onlineScroll(event,'menu')} onTouchEnd={(event) =>this.onlineScroll(event,'menu')}>
          <ul>
            {this.typesBar()}
          </ul>
        </div>
        <div className="foods" ref="foods" onTouchStart={this.onlineScroll} onTouchMove={this.onlineScroll} onTouchEnd={this.onlineScroll}>
          <ul>
            {this.foodsBar()}
          </ul>
        </div>
        <Cart selectFoods={cartList} getCartHeight={this.getCartHeight}></Cart>
        <GoodsDetail  good={this.state.foodList} isActive={this.state.goodDetail} goodDetail={this.goodDetail}/>
      </div>  
    );
  }
}
 
export default connect(state =>({
  cartList:state.sellerCart.sellerCart
}))(Good)