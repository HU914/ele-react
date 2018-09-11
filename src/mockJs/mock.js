import Mock from 'mockjs';


// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
            img: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            score:Random.natural(0, 5),
            sellCount:Random.natural(0, 2000),
            minPrice:Random.natural(15, 40),
            deliveryPrice:Random.natural(0,10),
            deliveryTime:Random.natural(0,60),
            
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(/http:/, 'get', produceNewsData);
