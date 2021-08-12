import axios, { AxiosInstance } from 'axios'
import {baseURL} from './constants'
import { checkInBrowser } from './puppeteer'

let instance: AxiosInstance|null =null

const Http = ():AxiosInstance=>{
    if(!instance){
        instance = axios.create({
            baseURL,
            headers:{
                "Content-Type":"application/json",
                deviceid:"2579136f-5aa7-4ba1-831a-03c5c9761f15",
                ignoretoken:"true",
                origin:"https://www.rappi.com.co",
                referer:"https://www.rappi.com.co/",
                authorization:"Bearer ft.gAAAAABhEyR5D9ajBr_YEx8Jw8_h4BaPmrD4wFcbGaRXMeVN2FoMwlrxsZvoN3JkSJzKyQ9d5XninusTIHFp-SgGmjXZG5kVbMmncgDv4T3Iom9iS3KH1EURjBzHARuC34iRFFrRSrcIrc9VzGvYvAWfCiv3aAm2cQGtHqohprii5GQb8krnVzjPwksXidsHxhm8vZZ2DTfWVZgHbuDu2koE09sj6UT8VLIRtdcZVTDIOZMoydXg8mQ_5QGEh8AY0a8NJ_4O_ZovD9Kr_3xxOqR2KB_JLSp60vFgxUaGUd7M6uObI3SJNq2tz01Ii2Q1qXgN04-iVn9l4d73WzJ03px0Wz1QDeZtfiVAe-XkgP8T0lx-O1318Bc="
            }
        })
    }
    return instance
}

export const setNewAdderss = async ():Promise<boolean>=>{
    try{
        const response = await Http().get('api/ms/users-address/addresses')
    
    const foodologyAddresses = response.data.addresses.filter((address)=>{
        if(address.description ==="Foodology1"){
            return address
        }
    })
    for(const index in foodologyAddresses){
        await setActiveAddress(foodologyAddresses[index])
        console.log("ADDRESSS",foodologyAddresses[index])
        await checkInBrowser({
            shopAddress:foodologyAddresses[index].address
        })
    }
    // foodologyAddresses.forEach(async(address)=> {
       
    
    // })
   
    return true
    }
    catch(error){
        console.log("Error",error)
        return false
    }
}
export const setActiveAddress = async(address):Promise<boolean>=>{
    try{
        const response  = await Http().put('api/ms/users-address/address',{
            ...address,
            active:true
        })
        console.log("Setting Address",response.data.address)
    }catch(error){
        console.log("Error",error)
        return false
    }
}