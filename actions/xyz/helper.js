const axios = require('axios');
const { toLower } = require('ramda');
const { DateTime } = require('luxon');


async function helper(){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://platform.adobe.io/data/foundation/flowservice/flows?property=inheritedAttributes.targetConnections[].connectionSpec.id==c604ff05-7f1a-43c0-8e18-33bf874cb11c&state=enabled',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE3Mzk2ODY0MzM4NDRfNzBhYzY3NGEtZmE2ZC00YTA2LWFlNTQtYWQ1MGNjM2M2MzdlX3V3MiIsIm9yZyI6IjhEMDg2N0MyNTI0NUFFNjUwQTQ5MEQ0Q0BBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI1YjQ2MjQyMzBmOTk0ZjNmYmVhZjA4N2ZkMzk2YWI1MCIsInVzZXJfaWQiOiI4Qjg2MUU3MjY3NjZGNjAyMEE0OTVFMkVAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI4Qjg2MUU3MjY3NjZGNjAyMEE0OTVFMkVAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiI2NTRmZDlkZSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoicmVhZF9wYy5kbWFfdGFydGFuLG9wZW5pZCxzZXNzaW9uLEFkb2JlSUQsdGFyZ2V0X3NkayxyZWFkX29yZ2FuaXphdGlvbnMscmVhZF9wYy5hY3AsYWRkaXRpb25hbF9pbmZvLmpvYl9mdW5jdGlvbixhZGRpdGlvbmFsX2luZm8sdXNlcl9tYW5hZ2VtZW50X3Nkayxjam0uc3VwcHJlc3Npb25fc2VydmljZS5jbGllbnQuZGVsZXRlLHJlYWRfcGMsYWRkaXRpb25hbF9pbmZvLnJvbGVzLGNqbS5zdXBwcmVzc2lvbl9zZXJ2aWNlLmNsaWVudC5hbGwsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0LGV2ZW50X3JlY2VpdmVyX2FwaSIsImNyZWF0ZWRfYXQiOiIxNzM5Njg2NDMzODQ0In0.YGnEGBLWX0FSSlUszHjMmE6FS3niWMYcwDT1CZ6Kgfhis60mjbsBWk82AxMrCDYuBy5hs3H9WnOzzkoOWdWkdu4zBDOduK3MYnscAvsfMAREXWfcCP_g_26QdvgRZE-5h4huDDhnseRBM2bvtdbzTBRv5KlSXNnRoKhfddIdo2HWdjuLt4k9bfizFauKO2Z3XJNeZDHSl9L79ejvMQuzKcFKPyUXl30MBvtZld_geP3sczNnMoQXEJFScQK-3DrE6_3YdP_wpnPZ4fkiQR4e42U7L8A8A-c7Tps5kSNdAWunhk6CAdysUFHudVtQFC8VZAN-zk-wbqaJuP4DQ2mHHA',
            'x-api-key': '5b4624230f994f3fbeaf087fd396ab50',
            'x-gw-ims-org-id': '8D0867C25245AE650A490D4C@AdobeOrg',
            'x-sandbox-name': 'prod'
        }
    };
    
    const fetchdata = (config) => {
        return axios.request(config)
        .then((response) => {
            
            //console.log(JSON.stringify(response.data));
            //console.log(length(response.data.items))
            var x = response.data.items;
            var final_arr = []
            var failed = 0;
            var completed = 0;
            var exceuting = 0;
            var notstarted = 0;
            const now = DateTime.now();
    var utc = DateTime.fromISO(now, { zone: 'utc' });
      minframe=utc.minus({ hours: 10 })
      currframe=utc.minus({hours:0})
      const estmin = minframe.setZone('America/New_York').toLocaleString(DateTime.DATETIME_MED);
      const estcurrent = currframe.setZone('America/New_York').toLocaleString(DateTime.DATETIME_MED);
      console.log(estmin,estcurrent)
            x.map((y) => {
               
    
                if (toLower(y.name).includes('delta') && y.state == 'enabled') {
                    
                    var startedAtUTC = y.lastRunDetails.startedAtUTC;
    
                    // Convert the timestamp to a DateTime object in UTC
                    var startedAtDateTime = DateTime.fromMillis(startedAtUTC, { zone: 'utc' });
                    
                    // Convert the DateTime object to EST and format it
                    const startedAtEST = startedAtDateTime.setZone('America/New_York').toLocaleString(DateTime.DATETIME_MED);
                    
                  //  console.log("Started At (EST):", startedAtEST);
    
                    // Create a new Date object using the UTC timestamp
                
    
    
                    var completedAtUTC = y.lastRunDetails.completedAtUTC;
    
                    // Convert the timestamp to a DateTime object in UTC
                    var completedAtDateTime = DateTime.fromMillis(completedAtUTC, { zone: 'utc' });
                    
                    // Convert the DateTime object to EST and format it
                    const completedAtEST = completedAtDateTime.setZone('America/New_York').toLocaleString(DateTime.DATETIME_MED);
                    
                   // console.log("Started At (EST):", completedAtEST);
    
                    
    
                    
  //  console.log(y.name)
  //  console.log("-------------------------------------");
                    // const date = new Date();
                    // date.getTime();
                    // const currDate = convertToEST(date)
                    //console.log(estDate.toString()); 
                    // console.log(currDate.toString());
                    const obj = {
                        "name": "",
                        "status": ""
                    }
                    obj.name = y.name
                    if (startedAtEST > estmin) {
                        console.log("true")
                        if (completedAtEST < estcurrent && y.lastRunDetails.state == 'success') {
                            obj.status = "completed"
                            completed++;
                            // console.log("already ran")
    
                        }
                        else if (completedAtEST > estcurrent) {
                            obj.status = "executing"
                            exceuting++;
                        }
                        else {
                            obj.status = "failed"
                            failed++;
                            obj.error = `https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/${y.id}/activity/${y.lastRunDetails.id}`
                        }
                    }
                    else {
                        console.log("false")
                        obj.status = "not started"
                        notstarted++;
                        //console.log("not started")
                    }
    
    
    
                    final_arr.push(obj)
                }
                if ((toLower(y.name).includes(toLower('Dataflow - cust_attitud_segmntn')) ||
                    toLower(y.name).includes(toLower('Dataflow - rankedCategory_model')) ||
                    toLower(y.name).includes(toLower('Dataflow - rankedbrand_model')) ||
                    toLower(y.name).includes(toLower('Dataflow - purchasechannel_model')) ||
                    toLower(y.name).includes(toLower('Dataflow - marketable_contact'))) && y.state == 'enabled') {
                        var startedAtUTC = y.lastRunDetails.startedAtUTC;
    
                    // Convert the timestamp to a DateTime object in UTC
                    var startedAtDateTime = DateTime.fromMillis(startedAtUTC, { zone: 'utc' });
                    
                    // Convert the DateTime object to EST and format it
                    const startedAtEST = startedAtDateTime.setZone('America/New_York').toLocaleString(DateTime.DATETIME_MED);
                    
                  //  console.log("Started At (EST):", startedAtEST);
    
                    // Create a new Date object using the UTC timestamp
                
    
    
                    var completedAtUTC = y.lastRunDetails.completedAtUTC;
    
                    // Convert the timestamp to a DateTime object in UTC
                    var completedAtDateTime = DateTime.fromMillis(completedAtUTC, { zone: 'utc' });
                    
                    // Convert the DateTime object to EST and format it
                    const completedAtEST = completedAtDateTime.setZone('America/New_York').toLocaleString(DateTime.DATETIME_MED);
                    
                   // console.log("Started At (EST):", completedAtEST);
    
                    
    
                    
   // console.log(y.name)
   // console.log("-------------------------------------");
                    // const date = new Date();
                    // date.getTime();
                    // const currDate = convertToEST(date)
                    //console.log(estDate.toString()); 
                    // console.log(currDate.toString());
                    const obj = {
                        "name": "",
                        "status": ""
                    }
                    obj.name = y.name
                    if (startedAtEST > estmin) {
                        console.log("true")
                        if (completedAtEST < estcurrent && y.lastRunDetails.state == 'success') {
                            obj.status = "completed"
                            completed++;
                            // console.log("already ran")
    
                        }
                        else if (completedAtEST > estcurrent) {
                            obj.status = "executing"
                            exceuting++;
                        }
                        else {
                            obj.status = "failed"
                            failed++;
                            obj.error = `https://experience.adobe.com/#/@macyscominc/sname:prod/platform/source/dataflows/${y.id}/activity/${y.lastRunDetails.id}`
                    
                        }
                    }
                    else {
                        console.log("false")
                        obj.status = "not started"
                        //console.log("not started")
                    }
    
    
    
                    final_arr.push(obj)
                }
    
    
    
            })
    
    
            console.log(final_arr)
            console.log(final_arr.length)
            console.log("failed ="+failed + "\ncompleted ="+completed + "\nexecuting = "+exceuting + "\nnot started = "+notstarted )
            return final_arr
    
        })
        .catch((error) => {
            throw error;
            console.log(error);
        });
    }
    
    const processData = (config) => {
        fetchdata(config)
            .then((data) => {
                
                console.log('Data received:', data);
                return data;
                // You can now use the data as needed
            })
            .catch((error) => {
                
                console.error('Error processing data:', error);
                throw error;
            });
    };
    
    // Example config object
   
    
    // Call the processData function with the config
    console.log(processData(config));
    return processData(config);
}
exports.helper = helper;




