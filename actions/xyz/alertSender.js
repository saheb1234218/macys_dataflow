const token = require('./generateToken');
const axios = require('axios');
const {helper} = require('./helper');


async function alert(params){

 return token.generate().then((tok)=>{
    
    let tokens = tok.replace(/"/g, '');
    var datetime = new Date(params.journeyDate);
    let helperdata = helper();
   let datapay = [
    
  {
    name: 'Dataflow (delta) - push_engment new schedule',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/3f499332-e661-4e47-a5bc-6c10ccaa1478/activity/fa378fd1-63db-4b72-add9-cbd61639f4b9'
  },
  { name: 'Dataflow - cust_attitud_segmntn', status: 'completed' },
  {
    name: 'Dataflow - cja_rps_transactions (delta)',
    status: 'completed'
  },
  { name: 'Dataflow - cja_transactions (Delta)', status: 'completed' },
  {
    name: 'Dataflow - channel_kpi_nonorganic_uninstalls(delta)',
    status: 'completed'
  },
  {
    name: 'Dataflow (delta) - sms_engment',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/c7c86848-b9f0-435c-bc07-51fe6c5c595b/activity/269a6bac-bb18-4183-82e6-78b305cfb38a'
  },
  {
    name: 'Dataflow - product_lookup (Delta)',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/5373b24a-5b3b-4e6a-a81f-8bf658a53f37/activity/347832ae-e67b-43f7-bc21-7a7227b30bb7'
  },
  {
    name: 'Dataflow - channel_kpi_nonorganic_installs (Delta)',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/53f37f57-1ec2-4b6a-b062-0555dff54125/activity/7a0cac81-79ae-4988-83c8-d57ddc7e75d1'
  },
  {
    name: 'Dataflow - channel_kpi_organic_installs (Delta)',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/39f80bf4-56e7-4eb1-9dbd-3ac57a0ec7de/activity/ad760f91-b93c-4ea3-8831-99e9c022c29f'
  },
  {
    name: 'Dataflow - channel_kpi_nonorganic_installs(delta)',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/1ea853f2-5b44-4ab5-ba21-c3c223b7953a/activity/2c312189-cf0f-4f3c-90f0-d70725fb5407'
  },
  {
    name: 'Dataflow - behavioral_kpi_loyalty(delta)',
    status: 'completed'
  },
  {
    name: 'Dataflow - channel_kpi_organic_uninstalls(delta)',
    status: 'completed'
  },
  {
    name: 'Dataflow - vop_model (Delta)',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/8ff45a3b-362d-4aad-b148-21d535ed272a/activity/6c99757c-1873-48df-a05f-86ea50917994'
  },
  {
    name: 'Dataflow - clv_model (Delta)',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/aeb8c433-52c0-4416-8f00-5384fe6c8132/activity/ef72125a-db4a-4c6d-8ffc-d6255687ca29'
  },
  {
    name: 'Dataflow (delta) - promo_presentment',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/fd47d930-7a05-415c-ac70-d6c69b9ea5ed/activity/5b14654c-5e18-43b9-ab66-01c3727f5a2d'
  },
  {
    name: 'Dataflow - behavioural_kpis_predicted_sales(delta)',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/aba81d8a-e210-47ac-82d0-24f812d1cedc/activity/7c1af868-423d-434d-820a-14bff6ab393c'
  },
  { name: 'Dataflow (delta) - email_engment', status: 'completed' },
  { name: 'Dataflow - pp_model (Delta)', status: 'completed' },
  { name: 'Dataflow (delta) - promo_redemption', status: 'completed' },
  {
    name: 'Dataflow (delta) - additional_aggregations',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/20de7da2-4018-44d1-95e6-5ef7b2fe4954/activity/411a2e40-d88f-4afc-8fe2-39064a60260c'
  },
  {
    name: 'Dataflow (delta) - aggregations new schedule',
    status: 'failed',
    error: 'https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/49dbe195-8107-4919-9a5c-8c30c6f3b4e9/activity/b8ab1a46-ccd6-4017-85e3-a977c877afdb'
  },
  { name: 'Dataflow - purchasechannel_model', status: 'completed' },
  { name: 'Dataflow - rankedCategory_model', status: 'completed' },
  { name: 'Dataflow - rankedbrand_model', status: 'completed' },
  { name: 'Dataflow (delta) - c360_cohort', status: 'completed' },
  { name: 'Dataflow - transactions (Delta)', status: 'completed' },
  { name: 'Dataflow - credit_preference (Delta)', status: 'completed' },
  { name: 'Dataflow - marketable_contact', status: 'completed' },
  { name: 'Dataflow - credit_account (Delta)', status: 'completed' },
  { name: 'Dataflow - c360_golden (Delta)', status: 'completed' },
  {
    name: 'Dataflow - loyalty_preferences (Delta)',
  },
  { name: 'Dataflow - site_preference (Delta)', status: 'completed' },
  {
    name: 'Dataflow - customer_preference (Delta)',
    status: 'completed'
  },
  { name: 'Dataflow - loyal_account (Delta)', status: 'completed' },
    ,  { name: 'Dataflow - spf_account (Delta)', status: 'completed' }
   ]

   
    let data = JSON.stringify({
      "requestId": "be175650-eb56-11ef-9385-fd2e9b89715d",
        "campaignId": "ad59526d-cef9-4aef-89fe-2984a0fd264e",
      "recipients": [
        {
          "type": "aep",
          "userId": "epsadobesolutions@gmail.com",
          "namespace": "genaiAdminId",
          "channelData": {
            "emailAddress": "apurba.kumar.ganguly@macys.com"
          },
          "context": {
            "dataflow": helperdata
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
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE3Mzk2ODc0NzM3MjNfZTVhOGE0NzctNDBiYi00MzM4LTk4MDUtOWU0YzRmODdmMzZlX3V3MiIsIm9yZyI6IkQxRDcxMjNGNTI0NDUwQTYwQTQ5MEQ0NUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiIxMGExOGI4ZThiMzU0YzAzYTdmZGM1MDRmZGQxNTJmNCIsInVzZXJfaWQiOiI0NTVGMUQ2MDY2QkVGOTc2MEE0OTVGQkJAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI0NTVGMUQ2MDY2QkVGOTc2MEE0OTVGQkJAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiI4OTM2OWI1YSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsImNyZWF0ZWRfYXQiOiIxNzM5Njg3NDczNzIzIiwic2NvcGUiOiJvcGVuaWQsc2Vzc2lvbixBZG9iZUlELHJlYWRfb3JnYW5pemF0aW9ucyxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQifQ.YwhDWRk6z46QwmMn2WBi2N8m__zTZ9InaM6dQkV2DaMLJjP5d21lwIO5wDLXX9K-YQqDtMm3DjRrLUQKT2_fsu83bYut0xghdG6LkEZC9o4zcugIj7Qa0_AdxbNEbxO_gXyejfGz8dhv5fQUE3KZhFfzyKyczAp3iWG6NlmE2EK1O9ZbaW89YclsANTYeZDBgwPgougGJNh7sTpjPEOPyTEGX0KZysVJiSDiInWxdTHpher_lkJ22Y1fgdYy9fSemTnXZJFA4gUEGmdp3x0xVSN_VZMhrWHj5qM8-PQfErU2xthKk9Whw_U2sl6dsfaxpzpAE1pJF14h8o3x-53mxw', 
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