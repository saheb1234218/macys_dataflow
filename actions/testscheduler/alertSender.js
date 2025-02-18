const token = require('./generateToken');
const axios = require('axios');
async function alert(params){

 return token.generate().then((tok)=>{
    
    let tokens = tok.replace(/"/g, '');
    var datetime = new Date(params.journeyDate);
   
    let data = JSON.stringify({
        "requestId": "355a6800-6485-11ef-b121-73cd1caa9829",
        "campaignId": "f1599f10-34eb-4297-9b76-3543d31851d4",
        "recipients": [
          {
            "type": "aep",
            "userId": "epsadobesolutions@gmail.com",
            "namespace": "genaiAdminId",
            "channelData": {
              "emailAddress": "krishanu.banerjee@macys.com"
            },
            "context": {
              "journeyDate": datetime.toISOString().slice(0,10),
              "journeyId": params.journeyId,
              "journeyName": params.journeyName
            }
          },
          {
            "type": "aep",
            "userId": "epsadobesolutions1@gmail.com",
            "namespace": "genaiAdminId",
            "channelData": {
              "emailAddress": "apurba.kumar.ganguly@macys.com"
            },
            "context": {
              "journeyDate": datetime.toISOString().slice(0,10),
              "journeyId": params.journeyId,
              "journeyName": params.journeyName
            }
          }
        ]
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://platform.adobe.io/ajo/im/executions/unitary',
        headers: { 
          'x-gw-ims-org-id': 'D1D7123F524450A60A490D45@AdobeOrg', 
          'x-api-key': '10a18b8e8b354c03a7fdc504fdd152f4', 
          'x-sandbox-name': 'genai-soln', 
          'Authorization': 'Bearer '+tokens, 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
     return axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
          
    })



}

exports.alert=alert;