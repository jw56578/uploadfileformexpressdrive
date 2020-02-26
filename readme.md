# Setup
Follow the quick start to setup api and credentials. Make sure you are logged into the account you want files uploaded to.

https://developers.google.com/drive/api/v3/quickstart/nodejs

* npm install
* Create a new project in google dev console which represents this project
* https://console.developers.google.com/projectcreate
* Enable APIs and Services for google drive api
* Create the client credentials, OAuth client id
* https://console.developers.google.com/apis/credentials
* Download the credentials file and put it in the project folder as credentials.json
* If env variables should be used instead of files, the code will need to be changed
* Modify the scopes if needed
* npm start
* A message in the terminal will ask you to go to a url and grant access to get the token. Then you will have to copy and paste this value into the console prompt
* A token.json file should be generated
* When token.json exists the web server will start as normal
* Go to http://localhost:4001/ and drag a file into the browser
* The file will be uploaded to the root directory of drive



Not sure how the token is still working after it expires. Might need to implement this.
https://stackoverflow.com/questions/19766912/how-do-i-authorise-an-app-web-or-installed-without-user-intervention

