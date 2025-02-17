const { Client } = require('pg');

async function getCounts(jourName){

  const client = new Client({
    user: '8D0867C25245AE650A490D4C@AdobeOrg',
    host: 'macyscominc.platform-query.adobe.io',
    database: 'prod:all',
    password: 'B5C91E5766C301A90A495C0C:efa3dfa4f00a430bbc350950276134ff',
    port: 5432,
    ssl: true // default PostgreSQL port
  });
     
      try {

        
    let jourNames=`'${jourName[0]}'`
    for(i=1;i<jourName.length;i++)
    {
        jourNames+=`,'${jourName[i]}'`
    }
    console.log(jourNames)
    // Connect to the database
    await client.connect();
    console.log('Connected to PostgreSQL server.');

    // Execute a simple query
    const res = await client.query(`SELECT _experience.journeyOrchestration.stepEvents.journeyVersionName AS JourneyName,_experience.journeyOrchestration.stepEvents.journeyVersionID as JourneyId,date(timestamp),count(distinct _experience.journeyOrchestration.stepEvents.profileID) AS last24_hrs_profile_entrances FROM journey_step_events WHERE _experience.journeyOrchestration.stepEvents.journeyVersionName IN (${jourNames}) AND _experience.journeyOrchestration.stepEvents.nodetype='start' AND DATE(timestamp) > (now() - interval '1' day) group by _experience.journeyOrchestration.stepEvents.journeyVersionName,JourneyId,date(TIMESTAMP)`);
   // console.log('Query output :\n', res);
    await client.end();
        return res.rows
    // Disconnect from the database
   
  } catch (err) {
    console.error('Error connecting to the database:', err.stack);
    await client.end();
    return err.stack
  }

}

exports.getCounts=getCounts