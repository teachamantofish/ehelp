1. go here: https://script.google.com/u/1/home/projects/1JAv1Ip-KQphOISPxabRAsrUvT0UDLvxAC1_LDuXjASiQ12V-wjqv9_oP/edit
2. Click make a copy. 
3. Where does it go????????????????
4.  Update line 12 and 13 to be this

```js
var spreadSheetId = "13LQr8VhjsZWSyQSQXvRDrnZd2PbBUzViLKCc06au3FY"; //CHANGE
var dataRange = "eHelp Glossary!A2:C"; //CHANGE
```

3. go to Javascript.html -> replace the current code of "columns" to this

```js
columns: [{ title: "Term" }, { title: "Category" }, { title: "Definition" }];
```

4. V. Imp. -> Press Save
5. Deploy your script
6. Create a new deployment
7. A google script will be generated, open that script.

   - If it gives an error to open the file, then simply copy the URl and update it
     from this : https://script.google.com/macros/u/1/s/AKf
     TO THIS: https://script.google.com/macros/s/AKf

8. I removed the `u/1/` in the url and it works.
