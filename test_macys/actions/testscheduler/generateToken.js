const axios = require('axios');
const qs = require('qs');

async function generate(){

    let data = qs.stringify({
      'grant_type': 'client_credentials',
      'client_id': '10a18b8e8b354c03a7fdc504fdd152f4',
      'client_secret': 'p8e-0eqL3Afzrf2jwzGC3Y5PEZNQ0FNfTY6T',
      'scope': 'openid,AdobeID,read_organizations,additional_info.projectedProductContext,session' 
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ims-na1.adobelogin.com/ims/token/v3',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': 'ftrset=231; relay=21b4c517-ef86-46af-beff-078892189562; ftrset=231; relay=21b4c517-ef86-46af-beff-078892189562'
      },
      data : data
    };
    
   return axios.request(config)
    .then((response) => {
     // console.log(JSON.stringify(response.data.access_token));
      return JSON.stringify(response.data.access_token)
      
    })
    .catch((error) => {
      console.log(error);
     return error
    });
    
}

exports.generate=generate;

