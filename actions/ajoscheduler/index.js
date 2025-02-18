/*
* <license header>
*/

/**
 * This is a sample action showcasing how to access an external API
 *
 * Note:
 * You might want to disable authentication and authorization checks against Adobe Identity Management System for a generic action. In that case:
 *   - Remove the require-adobe-auth annotation for this action in the manifest.yml of your application
 *   - Remove the Authorization header from the array passed in checkMissingRequestInputs
 *   - The two steps above imply that every client knowing the URL to this deployed action will be able to invoke it without any authentication and authorization checks against Adobe Identity Management System
 *   - Make sure to validate these changes against your security requirements before deploying the action
 */

 const { Core, Events } = require('@adobe/aio-sdk')
 const { Client } = require('pg');
 const alert = require('./alertSender');
 const axios = require('axios');
 const profileCounts = require('./getProfileEntrance')
 const fs = require('fs');
 const file=require('./config.json')
 const { DateTime } = require('luxon');
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

// main function that will be executed by Adobe I/O Runtime
async function main(params) {
  // create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {


   // const data = fs.readFileSync('./config.json', 'utf8');
  const storedTimeStr = file;
  // Step 1: Get the current time
  const now = DateTime.now();
  
  var utc = DateTime.fromISO(now, { zone: 'utc' });
  minframe=utc.minus({ hours: 2 })
  maxframe=utc.minus({hours:1})
  const estmin = minframe.setZone('America/New_York').toLocaleString(DateTime.TIME_24_SIMPLE);
  const estmax = maxframe.setZone('America/New_York').toLocaleString(DateTime.TIME_24_SIMPLE);
  console.log(estmin,estmax)
  
  const jourarr=[]
    for (i = 0; i < storedTimeStr.length; i++) {
      if (storedTimeStr[i].time >= estmin && storedTimeStr[i].time <= estmax) {
       
        jourarr.push(storedTimeStr[i].name)
        
      }
    }
  
  console.log(jourarr.length)
  
  //checks is there any available journey within timeframe
  if(jourarr.length>0){
    profileCounts.getCounts(jourarr).then((res) => {
      console.log(res);
      for(i=0;i<=res.length;i++)
      {
        if (res[i].last24_hrs_profile_entrances == '0') {
          const alertObj = {
            "journeyName": res[i].JourneyName,
            "journeyId": res[i].JourneyId,
            "journeyDate" : res[i].timestamp
          }
          alert.alert(alertObj).then((res) => {
            console.log(res)
    
          })
        }
        else {
          const alertObj = {
            "journeyName": res[0].JourneyName,
            "journeyId": res[0].JourneyId
    
          }
          // alert.alert(alertObj).then((res) => {
          //   console.log(res)
    
          // })
        }
      }
      
  
    })
  
  }

    const response = {
      statusCode: 200,
      body: "success"
    }
    return response

  } catch (error) {
    // log any server errors
    logger.error(error)
    // return with 500
    return errorResponse(500, 'server error', logger)
  }
}

exports.main = main
