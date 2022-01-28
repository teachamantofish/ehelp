.. |onlineglossary| raw:: html

   <a href="https://script.google.com/macros/s/AKfycbx7TffZgCTmnLTNwrsggzLlkBD2A7KQGUwLZwI18FHU6vjP_wHeGngFeXvToJMYa5JYtw/exec" target="_blank">View the Standalone page with search</a>

************************************************
Glossary
************************************************


Three options: 

* `Edit the source <https://docs.google.com/spreadsheets/d/13LQr8VhjsZWSyQSQXvRDrnZd2PbBUzViLKCc06au3FY/edit?usp=sharing>`_
* |onlineglossary|
* Sort and view the table below:

.. raw:: html

   <!-- Table sorter -->
   <link href="tablesorter/theme.default.css" rel="stylesheet">
   <script src="tablesorter/jquery.tablesorter.min.js"></script>
   <script src="tablesorter/jquery.tablesorter.widgets.min.js"></script>
      <table class="table tablesorter">
         <thead id="table-head"></thead>
         <tbody id="table-body"></tbody>
      </table>
   <!-- Table -->

   <!-- MDB ESSENTIAL -->
   <script type="text/javascript" src="js/mdb.min.js"></script>
   <!-- Google API -->
   <script src="https://apis.google.com/js/api.js"></script>
   <!-- easyData -->
   <script type="text/javascript" src="js/easyData-google-sheets.js"></script>

   <!-- easyData - Creating table -->
   <script>
   {
      {
         const API_KEY = "AIzaSyDhOS3VJZ66Utl0lnHbSK8gH0BXz-wxRoU";
   

         function displayResult2(response) {
         let tableHead = "";
         let tableBody = "";

         response.result.values.forEach((row, index) => {
            if (index === 0) {
               tableHead += "<tr>";
               row.forEach((val) => (tableHead += "<th>" + val + "</th>"));
               tableHead += "</tr>";
            } else {
               tableBody += "<tr>";
               row.forEach((val) => (tableBody += "<td>" + val + "</td>"));
               tableBody += "</tr>";
            }
         });

         document.getElementById("table-head").innerHTML = tableHead;
         document.getElementById("table-body").innerHTML = tableBody;

         $('table').tablesorter({
                  widgets        : ['zebra', 'columns'],
                  usNumberFormat : false,
                  sortReset      : true,
                  sortRestart    : true
         });
         }

         function loadData() {
         // Spreadsheet ID
         // from https://docs.google.com/spreadsheets/d/13LQr8VhjsZWSyQSQXvRDrnZd2PbBUzViLKCc06au3FY/edit#gid=0
         const spreadsheetId = "13LQr8VhjsZWSyQSQXvRDrnZd2PbBUzViLKCc06au3FY";
         const range = "!A:C";
         getPublicValues({ spreadsheetId, range }, displayResult2);
         }

         window.addEventListener("load", (e) => {
         initOAuthClient({ apiKey: API_KEY });
         });

         document.addEventListener("gapi-loaded", (e) => {
         loadData();
         });
      }
   }
   </script>