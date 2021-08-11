import * as Puppeteer from 'puppeteer'



(async ()=>{
    
    const browser = await Puppeteer.launch({defaultViewport: null, headless: false})
    const page = await browser.newPage();
    
    await page.goto('https://www.rappi.com.co/restaurantes/900093900');
    const cookies  = [
        {
          "domain": ".www.rappi.com.co",
          "expirationDate": 1660197392.061346,
          "hostOnly": false,
          "httpOnly": false,
          "name": "deviceid",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "2579136f-5aa7-4ba1-831a-03c5c9761f15",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".rappi.com.co",
          "expirationDate": 1691717012,
          "hostOnly": false,
          "httpOnly": false,
          "name": "_ga",
          "path": "/",
            
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "GA1.3.1209070925.1628640442",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".rappi.com.co",
          "expirationDate": 1628731412,
          "hostOnly": false,
          "httpOnly": false,
          "name": "_gid",
          "path": "/",
            
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "GA1.3.2128248881.1628640442",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": "www.rappi.com.co",
          "hostOnly": true,
          "httpOnly": false,
          "name": "_lr_uf_-ttasrx",
          "path": "/",
           
          "secure": false,
          "session": true,
          "storeId": "0",
          "value": "1a8e450c-f370-4596-8ab1-4859ec22284e",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".www.rappi.com.co",
          "expirationDate": 1629249275,
          "hostOnly": false,
          "httpOnly": false,
          "name": "rappi.id",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "eyJhY2Nlc3NfdG9rZW4iOiJmdC5nQUFBQUFCaEV5UjVEOWFqQnJfWUV4OEp3OF9oNEJhUG1yRDR3RmNiR2FSWE1lVk4yRm9Nd2xyeHNadm9OM0prU0p6S3lROWQ1WG5pbnVzVElIRnAtU2dHbWpYWkc1a1ZiTW1uY2dEdjRUM0lvbTlpUzNLSDFFVVJqQnpIQVJ1QzM0aVJGRnJSU3JjSXJjOVZ6R3ZZdkFXZkNpdjNhQW0yY1FHdEhxb2hwcmlpNUdRYjhrcm5WempQd2tzWGlkc0h4aG04dlpaMkRUZldWWmdIYnVEdTJrb0UwOXNqNlVUOFZMSVJ0ZGNaVlRESU9aTW95ZFhnOG1RXzVRR0VoOEFZMGE4TkpfNE9fWm92RDlLcl8zeHhPcVIyS0JfSkxTcDYwdkZneFVhR1VkN002dU9iSTNTSk5xMnR6MDFJaTJRMXFYZ04wNC1pVm45bDRkNzNXekowM3B4MFd6MVFEZVp0ZmlWQWUtWGtnUDhUMGx4LU8xMzE4QmM9IiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImV4cGlyZXNfaW4iOjYwNDgwMCwicmVmcmVzaF90b2tlbiI6ImZ0LmdBQUFBQUJoRXlSNTNRTmRYWTBKMnM1VWYtc0RDTTBZS2ZudGpma0s2NjBDTGhFQkFKa2htRzZaQldGTFNhbXpsR2NYWFVSOUIya2w5RkVwM2JRdWFwYzBaUkFUYXpyNTIxUFRxOGQzcDV0bUVkaWJOR0xwdk5PRVRnbkFIOFdQblJRUG50OC1zWkRpT2hMVlYtdTNQaXdTeVZ2T0ZYZThfMnFJU3IyWVFkVzN1UzRfR0R0QVd6SmRxLTFiQm9vdEZJQ1lvUFhEalhtM3JaeW1TVGJQZWZXY3VlSE1yLVk5OHcxZjc3NVJNMmhzRmNFaE10bDNHWW1MYzNkSlllT3lXeTZZQVFzSnBNOFZ5c3B3d1ZRNlJ4a2lfaXlld0FvcXBjZEkxdl95VDR0M2lHVDVXZmtrM0JXYnc3TE0wX3dDTjg1eGpoNTRUakQ5OUxCT3F3S05vTGI1UWNqc2VvOGk2M0RkZ1AtaXBBRlNhQmxWdUhsSzc2cz0iLCJmaXJzdF9sb2dpbiI6ZmFsc2V9",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".www.rappi.com.co",
          "expirationDate": 1629249275,
          "hostOnly": false,
          "httpOnly": false,
          "name": "rappi.type",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "1",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".www.rappi.com.co",
          "expirationDate": 1629249275,
          "hostOnly": false,
          "httpOnly": false,
          "name": "rappi_refresh_token",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "ZnQuZ0FBQUFBQmhFeVI1M1FOZFhZMEoyczVVZi1zRENNMFlLZm50amZrSzY2MENMaEVCQUpraG1HNlpCV0ZMU2FtemxHY1hYVVI5QjJrbDlGRXAzYlF1YXBjMFpSQVRhenI1MjFQVHE4ZDNwNXRtRWRpYk5HTHB2Tk9FVGduQUg4V1BuUlFQbnQ4LXNaRGlPaExWVi11M1Bpd1N5VnZPRlhlOF8ycUlTcjJZUWRXM3VTNF9HRHRBV3pKZHEtMWJCb290RklDWW9QWERqWG0zclp5bVNUYlBlZldjdWVITXItWTk4dzFmNzc1Uk0yaHNGY0VoTXRsM0dZbUxjM2RKWWVPeVd5NllBUXNKcE04VnlzcHd3VlE2UnhraV9peWV3QW9xcGNkSTF2X3lUNHQzaUdUNVdma2szQldidzdMTTBfd0NOODV4amg1NFRqRDk5TEJPcXdLTm9MYjVRY2pzZW84aTYzRGRnUC1pcEFGU2FCbFZ1SGxLNzZzPQ==",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".www.rappi.com.co",
          "expirationDate": 1629249275,
          "hostOnly": false,
          "httpOnly": false,
          "name": "rappi.user",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "eyJuYW1lIjoiRGFuaWlsIFNodXNocGFub3YiLCJpZCI6MTgzMzIwNTU5fQ==",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": "www.rappi.com.co",
          "hostOnly": true,
          "httpOnly": false,
          "name": "rappi.basketSyncGuest",
          "path": "/",
            
          "secure": false,
          "session": true,
          "storeId": "0",
          "value": "1",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": "www.rappi.com.co",
          "hostOnly": true,
          "httpOnly": false,
          "name": "currentLocation",
          "path": "/",
            
          "secure": false,
          "session": true,
          "storeId": "0",
          "value": "eyJpZCI6MTM3NTQ0NzEyLCJhcHBsaWNhdGlvbl91c2VyX2lkIjoxODMzMjA1NTksImFkZHJlc3MiOiJDYXJyZXJhIDIwICMgMTMyIEEgLSAyMCIsImFjdGl2ZSI6ZmFsc2UsImxhdCI6NC43MTY0MjQxMzUwNDMsImxuZyI6LTc0LjA0ODg3MTI1MzI5MiwiZGVzY3JpcHRpb24iOiIiLCJ0YWciOiJPdHJvcyIsImNpdHkiOnsiaWQiOjEsImNpdHkiOiJCb2dvdOEiLCJsYXQiOjQuNjc2Nzc3LCJsbmciOi03NC4wNTY3NDgsImNvdW50cnlfaWQiOjEsImRlc2NyaXB0aW9uIjoiSW5ncmVzYSB0dSBkaXJlY2Np824gIiwiaW5kZXgiOjF9LCJjaXR5X2lkIjoxLCJjb3VudHJ5IjoiQ08iLCJ6aXBfY29kZSI6IjExMDEyMSIsInpvbmUiOnsiaWQiOjIzNCwibmFtZSI6IkNvdW50cnkgQ2x1YiBCT0cxIn0sImNvdW50X29yZGVycyI6MSwibGFzdG9yZGVyIjowLCJzdWdnZXN0ZWRfYWRkcmVzcyI6ZmFsc2UsIm5lZWRfcmVmaW5lbWVudCI6ZmFsc2V9",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".rappi.com.co",
          "expirationDate": 1628645072,
          "hostOnly": false,
          "httpOnly": false,
          "name": "_gat_UA-64467188-26",
          "path": "/",
            
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "1",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": ".rappi.com.co",
          "expirationDate": 1660181013,
          "hostOnly": false,
          "httpOnly": false,
          "name": "amp_101be7",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "r-aepNHg1csyqFFW-qyLbR.Q09fMTgzMzIwNTU5..1fcpcbpv5.1fcpctdpa.l.0.l",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": "www.rappi.com.co",
          "expirationDate": 1628731427,
          "hostOnly": true,
          "httpOnly": false,
          "name": "_lr_hb_-ttasrx%2Frappi-webv",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "{%22heartbeat%22:1628645027840}",
          "origin": "https://www.rappi.com.co"
        },
        {
          "domain": "www.rappi.com.co",
          "expirationDate": 1628731431,
          "hostOnly": true,
          "httpOnly": false,
          "name": "_lr_tabs_-ttasrx%2Frappi-webv",
          "path": "/",
           
          "secure": false,
          "session": false,
          "storeId": "0",
          "value": "{%22sessionID%22:0%2C%22recordingID%22:%224-c8740048-2535-47dc-ac37-8be6ea9296c5%22%2C%22lastActivity%22:1628645031291}",
          "origin": "https://www.rappi.com.co"
        }
      ]
      
      await page.setCookie(...cookies)
    
    
    await page.evaluate(() => {
        const data = {
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
        Object.keys(data).forEach(item=>{
            localStorage.setItem(item,data[item])
        })
        
      });
      await page.goto('https://www.rappi.com.co/restaurantes/900093900',{
        // waitUntil: 'networkidle0',
      });
      const shops = [{
        id:"149564072",
        name:"Carrera 85A ### 14"
      },{
          id:"149564121",
          name:"Centro Comercial Ga"
      },{
          id:"149564198",
          name:"Productos de"
      }]

    //   await page.waitForFunction(
    //     `document.querySelector("body").innerText.includes("${shops[0].name}")`
    //   );
    //   const element = await page.$('rappi-mf-address');
    //   await element.click()
    page.on('console', msg => {
        for (let i = 0; i < msg.args.length; ++i)
          console.log(`HELLO${i}: ${msg.args[i]}`);
      });
    await page.evaluate(async()=>{
        // const response = await fetch("https://services.grability.rappi.com/api/ms/users-address/addresses")
        console.log("NAVEGADORRR")
    })

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


})()
const checkRestaurants = async  (page:Puppeteer.Page, shop:{
    name:string,
    id: string
},nextShopId:string)=>{
   
}
