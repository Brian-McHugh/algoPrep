"""
Input: app name (string); array of strings representing each log entry 
Output: version of given app name currently running (string)
Consideration: latest version may be listed as "__rollback__" (previous version)
"""

"""Example log file:
Apr-3-2020-10:15 app1 version1
Apr-3-2020-16:45 app1 version2
May-10-2020-08:45 app2 version1
May-16-2020-14:00 app1 __rollback__
Jun-5-2020-10:16 app3 version1
Jun-10-2020-12:16 app3 version2
"""

def get_version(app_name, log_file):
  """
  Given an app name and log file, return the version of the app that is running
  """
  version = None
  versions = []

  # iterate over log file to find latest version
  for entry in log_file:
    if (entry.split(' ')[1] == app_name and entry.split(' ')[2] != '__rollback__'):
      versions.append(entry.split(' ')[2])
    if (entry.split(' ')[1] == app_name and entry.split(' ')[2] == '__rollback__'):
      versions.pop()
  
  return versions[-1]

# Helper function provided, which isn't needed as
# long as log provided is in chronological order
def toepoch(str):
  """
  - Converts datetime to seconds since 1 Jan 1970
  - Assume this function is already provided if needed
  """

# Testing
app_name1 = 'app1' 
app_name3 = 'app3' 

log_file = ['Apr-3-2020-10:15 app1 version1', 
            'Apr-3-2020-16:45 app1 version2',
            'May-10-2020-08:45 app2 version1',
            'May-16-2020-14:00 app1 __rollback__',
            'Jun-5-2020-10:16 app3 version1',
            'Jun-10-2020-12:16 app3 version2']

print(get_version(app_name1, log_file))  #expected: 'version1'
print(get_version(app_name3, log_file))  #expected: 'version2'
