const puppeteer = require('puppeteer');

async function main() {
    console.log('begin')
    const browser = await puppeteer.launch({
        headless: true,   //有浏览器界面启动
        slowMo: 100,       //放慢浏览器执行速度，方便测试观察
        args: [            //启动 Chrome 的参数，详见上文中的介绍
            '–no-sandbox',
            '--window-size=1280,960'
        ],
    });    
    const page = await browser.newPage();
    await page.setViewport({'width':1280,'height':960})
    await page.goto('http://mibb005.cn');
    const links = await page.$$(".post-title-link");
    links[0].click()
    console.log('links',links)
    // await page.close();
    // await browser.close();
}

main()
