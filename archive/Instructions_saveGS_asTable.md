1. go here: https://script.google.com/u/1/home/projects/1JAv1Ip-KQphOISPxabRAsrUvT0UDLvxAC1_LDuXjASiQ12V-wjqv9_oP/edit
2. Click make a copy. Saves to google Drive
get the API key: https://console.cloud.google.com/apis/credentials?project=ehelp-glossary
APIs and Services > Credentials 
Click the Copy icon under KEY. 

Get the spreadsheet ID: https://developers.google.com/sheets/api/guides/concepts

4.  Update line 12 and 13 to be this

```js
var spreadSheetId = "13LQr8VhjsZWSyQSQXvRDrnZd2PbBUzViLKCc06au3FY"; //CHANGE
var dataRange = "eHelp Glossary!A2:C"; //CHANGE
```

3. go to Javascript.html -> replace the current code of "columns" to this

```js
columns: [{ title: "Term" }, { title: "Category" }, { title: "Definition" }];
```

4. V. Imp. -> Press Save or Ctrl S. 
5. Deploy your script: Choose New Deployment
6: Configure fields. 
7. Click Deploy. 
8. Choose Authorize Access.
9. Log in if asked to. 
7. A google script will be generated, open that script.

   - If it gives an error to open the file, then simply copy the URl and update it
     from this : https://script.google.com/macros/u/1/s/AKf
     TO THIS: https://script.google.com/macros/s/AKf

8. I removed the `u/1/` in the url and it works.



=====================

this just displays the sheet as an html table. It does not give youi html in the web page. 
https://medium.com/@stvhwrd/embedding-a-google-sheet-as-an-html-table-365306d2ec2c


<iframe src="https://docs.google.com/spreadsheets/d/13LQr8VhjsZWSyQSQXvRDrnZd2PbBUzViLKCc06au3FY/gviz/tq?tqx=out:html&tq&gid=0" width="100%" height="800px" frameBorder="no" style="font-size:9px;"></iframe>

=========

Another way I couldn't get to work: https://mdbootstrap.com/snippets/jquery/ascensus/453950#js-tab-view

;===============

to investigate: 

https://www.smatbot.com/blog/google-sheets-as-a-database

https://dev.to/chr15m/how-to-use-a-google-sheet-as-a-database-for-your-web-app-4ajm

https://stackoverflow.com/questions/69007518/how-do-i-use-google-sheets-as-a-database-for-my-html-file

https://www.smatbot.com/blog/google-sheets-as-a-database