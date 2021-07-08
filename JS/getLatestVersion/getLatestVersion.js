/*
I: app name (string); array of strings representing each log entry 
O: version of given app name currently running (string)
C: if latest version listed as "__rollback__", version reverts by 1

Example log file: ["Apr-3-2020-10:15 app1 version1",
                   "Apr-3-2020-16:45 app1 version2",
                   "May-10-2020-08:45 app2 version1",
                   "May-16-2020-14:00 app1 __rollback__",
                   "Jun-5-2020-10:16 app3 version1",
                   "Jun-10-2020-12:16 app3 version2"
                  ]
*/

const getLatestVersion = (appName, logFile) => {
  // store most recent versions
  const latest = {};

  for (let log of logFile) {
    let appInfo = log.split(" ");
    let name = appInfo[1];
    let version = appInfo[2];
    
    if (version === "__rollback__") {
      latest[name] = latest[name] - 1;
      console.log("skipping for rollback");
      continue;
    }
    // only save the number of the version (last character)
    latest[name] = version[version.length - 1];
    console.log(latest);
  }

  return `version${latest[appName]}`;
}

// Testing
const appName1 = "app1";
const appName3 = "app3";

const logFile = ["Apr-3-2020-10:15 app1 version1", 
                 "Apr-3-2020-16:45 app1 version2",
                 "May-10-2020-08:45 app2 version1",
                 "May-16-2020-14:00 app1 __rollback__",
                 "Jun-5-2020-10:16 app3 version1",
                 "Jun-10-2020-12:16 app3 version2"];

console.log(getLatestVersion(appName1, logFile));  //expected: 'version1'
console.log(getLatestVersion(appName3, logFile));  //expected: 'version2'
