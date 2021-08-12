import * as Puppeteer from 'puppeteer'
import { cookies , localStorageData} from './constants';


export const checkInBrowser = async({shopAddress}) =>{
   try{
    const browser = await Puppeteer.launch({defaultViewport: null, headless: false})
    const context = await browser.createIncognitoBrowserContext();
const page = await context.newPage();
    await page.goto('https://www.rappi.com.co/restaurantes/900093909');
    // await page.goto('https://www.rappi.com.co');
    await page.deleteCookie(...cookies)
    await page.setCookie(...cookies)
    await page.evaluate(localStorageData => {
        for (const key in localStorageData) {
          localStorage.setItem(key, localStorageData[key]);
        }
      }, localStorageData);
    
    await page.goto('https://www.rappi.com.co/restaurantes/900093909',{
        // waitUntil: 'networkidle0',
    });  
    console.log(shopAddress)
    await page.screenshot({ path: `./${shopAddress.trim()}.png` });
    await browser.close();
    // await page.goto('https://www.rappi.com.co');
   }
   catch(error){
       console.log("Error",error)
   }
   
}




(async ()=>{
    
    const browser = await Puppeteer.launch({defaultViewport: null, headless: false})
    const page = await browser.newPage();
    
    await page.goto('https://www.rappi.com.co/restaurantes/900093909');
    // await page.goto('https://www.rappi.com.co');
    await page.setCookie(...cookies)
    
    
    await page.evaluate(() => {
      const localStorageData = {
        "AvoInspectorEvents": "[]",
        "ab.storage.userId.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":{\"g\":\"CO_183320559\",\"c\":1616042208517,\"l\":1616042208517}}",
        "firebase_push_token": "null",
        "firebase:host:rappi-positions-co.firebaseio.com": "\"s-usc1c-nss-299.firebaseio.com\"",
        "firebase:host:rappi-eta-co.firebaseio.com": "\"s-usc1c-nss-206.firebaseio.com\"",
        "_lr_id_": "{\"userID\":\"916a7366-ab0f-40f9-9c8d-dd2cc2237ac2\"}",
        "AF_SESSION": "1622514665863",
        "amplitude_unsent_101be7b7fdda892d329579012e8dd69a": "[]",
        "rappi.refresh_token": "ZnQuZ0FBQUFBQmdVdGpmWnJSQkhmeVA1YlVKaU81YTRfSWtqQ0NPUGRTdkpvVFBrZS02YjV0ZjJvZTM0S1Y2WGttSlM2Q0xULWc2a2w4OEhwVFF2dS1Uc3dSY0JhMWdoR1g5ZDBxeGpxRnQ4RVlOU0dYcDRUSVZWSmIwN1hrLVNMOV9fVTZQVGtjTG9CYmVaRkc1MEpKeEs4T05hNWJsdzB4R0lSbVMyVmR2TnMyek1hMUo2cU9YWlMzS3g1dG9KTHVyZ0w2N2Excm5fSjNOcXF4UGphRVdtYWw5d3FjX0JIZDJFNC1QX0U1VHJEZ05obzJqcGNXTUJwMDdKWUlQVzk1LUhTYW1GNG1JTzk4VmNyenA0Z040WktKdnZjUk5fTVNLN3pIRUJPQk1XR3dCUThiTHJnWmd3dzNNZDQ2eHBNeXpxMEZVQ2JNcUV0SjYzZkhKblFuNE5acVJsbi1MYlQ2Mmx5U1JocmtKanUtZC1Md1o5SFFOWDNjPQ==",
        "guest_token": "eGNTU1ZHSDFjWERXM01OMkVySVNUSlVVeUNiMzVF",
        "ab.storage.messagingSessionStart.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":1622514661132}",
        "firebase:host:rappi-fallback.firebaseio.com": "\"s-usc1c-nss-289.firebaseio.com\"",
        "rappi.type": "1",
        "AvoInstallationId": "\"a5fcd163-3404-4a20-8201-d6bb9e4ecf1d\"",
        "ab.storage.triggers.ts.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":1622514662066}",
        "notification_permission_box": "1616042219622",
        "AvoInspectorSessionTimestamp": "1628644664909",
        "AvoInspectorSessionId": "\"ecb87a21-8cfa-4f98-a686-eb08d4c9d23b\"",
        "ab.storage.deviceId.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":{\"g\":\"1c1b9b41-ce9e-d3bf-9c55-969df0930944\",\"c\":1615154749170,\"l\":1615154749170}}",
        "ab.storage.sessionId.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":{\"g\":\"073e8dca-8ccd-59d8-7836-01e7bf356928\",\"e\":1622516465842,\"c\":1622514661130,\"l\":1622514665842}}",
        "ab.storage.device.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":{\"browser\":\"Chrome\",\"browser_version\":\"90.0.4430.212\",\"os_version\":\"Mac\",\"resolution\":\"1440x900\",\"locale\":\"es-419\",\"time_zone\":\"America/Bogota\",\"user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36\"}}",
        "amplitude_unsent_identify_101be7b7fdda892d329579012e8dd69a": "[]",
        "ab.storage.triggers.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":[{\"i\":\"60afc5662b48bf4488b241ac\",\"c\":[{\"t\":\"custom_event_property\",\"d\":{\"e\":\"SELECT_STORE_TYPE\",\"pf\":[[{\"k\":\"VERTICAL_SUB_GROUP\",\"t\":\"string\",\"c\":1,\"v\":\"Turbo\"},{\"k\":\"VERTICAL_GROUP\",\"t\":\"string\",\"c\":1,\"v\":\"Turbo\"},{\"k\":\"STORE_NAME\",\"t\":\"string\",\"c\":1,\"v\":\"Turbo\"}]]}}],\"s\":\"2018-11-08T20:45:00.000Z\",\"e\":null,\"p\":2028028000,\"t\":\"inapp\",\"da\":{\"message\":\"Bienvenido a la experiencia Turbo. Todo en menos de 10 min. ⚡️\",\"click_action\":\"NONE\",\"open_target\":\"NONE\",\"type\":\"SLIDEUP\",\"text_align_message\":null,\"slide_from\":\"TOP\",\"message_close\":\"AUTO_DISMISS\",\"duration\":30000,\"image_url\":\"https://appboy-images.com/appboy/communication/marketing/slide_up/slide_up_message_parameters/images/60afc5652b48bf4488b24193/39f56abd8766a967e4872dd5fec33a78907ca802/original.png?1622247222\",\"close_btn_color\":4278631276,\"bg_color\":4294440951,\"text_color\":4280624421,\"btns\":[{\"bg_color\":4280274813,\"text_color\":4294967295,\"border_color\":4279990479}],\"trigger_id\":\"NjBhZmM1NjYyYjQ4YmY0NDg4YjI0MWFjXyRfbXY9NjBhZmM1NjUyYjQ4YmY0NDg4YjI0MTk5JnBpPWNtcA==\"},\"d\":0,\"r\":-1,\"tm\":30000,\"ld\":null}]}",
        "_hjid": "7229fd40-f342-4e9e-a0bb-94058e6312ef",
        "ab.storage.serverConfig.f6a1117f-52de-444c-9fbd-49d465e7f80e": "{\"v\":{\"s\":\"2.4.3\",\"l\":1622156492,\"e\":[\"Test\"],\"a\":[\"array_attribute\"],\"p\":[\"000000\",\"[, 1000008453]\",\"[, 1000019664]\"],\"m\":21600,\"v\":\"BF3xLYG5euX73lrNlOO1N4TG-WMuh1dgDBA5bFpZGIQHrFEdS8w4N4_is2-YoBa0lWIz0tSoqNtMI3jhqtJfF5U=\",\"c\":{}}}",
        "_grecaptcha": "09AOfuzD2wXb5p2CdLui2M_aP8PeU8sfmuvK1Z9PBqUGqceYrAuWRH9Zsg1ccz6oF3pdO_gasQvdwr32INVgp6Jsg"
    }
        Object.keys(localStorageData).forEach(item=>{
            localStorage.setItem(item,localStorageData[item])
        })
        
      });
      await page.goto('https://www.rappi.com.co/restaurantes/900093900',{
        // waitUntil: 'networkidle0',
      });
      // const shops = [{
      //   id:"149564072",
      //   name:"Carrera 85A ### 14"
      // },{
      //     id:"149564121",
      //     name:"Centro Comercial Ga"
      // },{
      //     id:"149564198",
      //     name:"Productos de"
      // }]

    //   await page.waitForFunction(
    //     `document.querySelector("body").innerText.includes("${shops[0].name}")`
    //   );
    //   const element = await page.$('rappi-mf-address');
    //   await element.click()
    // page.on('console', msg => {
    //     for (let i = 0; i < msg.args.length; ++i)
    //       console.log(`HELLO${i}: ${msg.args[i]}`);
    //   });
    // await page.evaluate(async()=>{
    //     // const response = await fetch("https://services.grability.rappi.com/api/ms/users-address/addresses")
    //     console.log("NAVEGADORRR")
    // })

    //   const response = await fetch('https://example.com');
    //   const text = await response.text();
    //   const [button] = await page.$x("//label[contains(., 'Centro Comercial')]");
    //   if (button) {
    //       await button.click();
    //   }
    // await page.waitForFunction(
    //     'document.querySelector("body").innerText.includes("foodology")'
    //   );
    // const firstShop1 = await page.$(`label[for="${shops[1].id}"]`)
    // await firstShop1.click()
    
    // await page.waitForFunction(
    //     `document.querySelector("body").innerText.includes("${shops[1].name}")`
    //   );
    //   const element1 = await page.$('rappi-mf-address');
    //   await element1.click()
    //   const [button] = await page.$x("//label[contains(., 'Centro Comercial')]");
    //   if (button) {
    //       await button.click();
    //   }
    // await page.waitForFunction(
    //     'document.querySelector("body").innerText.includes("foodology")'
    //   );
    // const firstShop = await page.$(`label[for="${shops[2].id}"]`)
    // await firstShop.click()
    //   await checkRestaurants(page,shops[0],shops[1].id)
    //   await checkRestaurants(page,shops[1],shops[2].id)
    //   await checkRestaurants(page,shops[2],shops[3].id)
    //   await checkRestaurants(page,shops[0],shops[0].id)

    //   await page.waitForNavigation({ waitUntil: 'networkidle0' })
    


    // await page.screenshot({ path: 'example.png' });
  
    // await page.screenshot({ path: 'example.png' });
  
    // await browser.close();


})