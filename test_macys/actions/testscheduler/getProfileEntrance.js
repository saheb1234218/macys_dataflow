const { Client } = require('pg');

async function getCounts(jourName){

  const client = new Client({
    user: '8D0867C25245AE650A490D4C@AdobeOrg',
    host: 'macyscominc.platform-query.adobe.io',
    database: 'macys-uat:all',
    password: 'eNqrVkrMSVeyUgoKNjI1U9JRqjAtBfIyc4vj8xINdbNTK3UTS3QN9ZJTi4CS2ZkpWCSBEpklJUCJxBKlWgC4CRff.eNplU9tu2zAM_Rc_24Eky7cCA5q1cdv1grTpgrUvBi3RqbrE8iy5lw3799ExWmCtHizqkDw-Iqk_gdHBQcAzIYuYS5Yzxqs4Y6oRvI50hiKSAjDKZaOjpsjzopHAdKKqJ0iVCMLAv3ZIDKAUOld5-xNbQtXWYOurPTm-qAq6jtDBYT9hJUsLvhAiTRZsvihTNpdFUpbJYSa4FqCyNK6LRCRIsErkDCkbHCWanYta4OMRJqrFPE6IKv2PasHjQyUxj9M0S6DmORaSwUgGepTnu-CAhUGzIYK7H-ubm_uv1-VymVyefj8vL6_Xd6fz-e31l_2iePdepZTxQsY8jivGs6yWWkRZ2lCV8iKPauQigjpWUKu8SJqiGp7HGu2sofQUdKIZlyPgLAEPKz2ciZV6OCmf0qtWPheNLVen3xYXtyfi5v5Xnh0fXfD78_WjHEV0NVDSJeoVqiu7WIcX9plM8uBLZ3p0lWkpIE7ZuEbVyk69qWc7aGGDIXXJDtQXtR2cx37WI-gQtDbe2Ba2RNDYj-fZo62rZmjViH1ydr19ROVRL3urB-WPbOvxxX-K6-0WXTjXtsazY_LSbuyMxqLHjXG-f33TsnfQvJgQBk1DpHDS3u8xRVHePCHdwA463HUupDu2Roe230wUXecmY_xUBENrfsOoxU1Qp972Gaju3dY7qDz0HtrQ0ShT_Dgo4_9QV-A_vpLg7z8JFAd9.eNoBAAH__nuenLt5Yw4XwTkzwdkmHV8QLEP9b3X0mIDOJ0bRvEfXhuykm_dTkF1ng7h2FJl0dUHRmncjh4WZlUptpNdqJPDTmhlUJ0VwZrdo9gh3iBvMiwnImVHlL1iWU9cpL0tjifHoRM0_uxrlodtxe310uNqbjnI6eNEx3Tu6sPUIIdoxRhcqqcfwD6ET6egE8uHKfQfK2BWlpUCfliq5K2Lo23M3FO6QesWiS74lu8gUW2Ywe7Ihgdb_Fs0Dy2usnXJA-ksQZGDQ_SQs46-JgGa3E5txMBNZbIvb8yvwH86qK435cJaxlcX6Pwz0FmK5ROwZPBlQc28zEYeHqQx6ZhYuvQ0AlX3D',
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