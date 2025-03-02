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
 //const { Client } = require('pg');
 const alert = require('./alertSender');
 //const axios = require('axios');
 //const profileCounts = require('./getProfileEntrance')
 //const fs = require('fs');
 //const file=require('./config.json')
// const { DateTime } = require('luxon');
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')
//const {helper} = require('./helper');

// main function that will be executed by Adobe I/O Runtime
async function main(params) {
  // create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {

    const al = alert();

    const response = {
      statusCode: 200,
      body: al
    }
    return response

  } catch (error) {
    // log any server errors
    logger.error(error)
    // return with 500
    return errorResponse(500, 'server error', logger)
  }
}
main()
exports.main = main
