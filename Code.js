    function myFunction() {
      var ss = SpreadsheetApp.getActiveSpreadsheet(); //get active spreadsheet
      var sheet = ss.getSheetByName('Sheet1'); //get sheet by name from active spreadsheet
      
      var apiKEY = 'YOUR_KEY_HERE';
      
      var weather = 'api.openweathermap.org/data/2.5/weather?q=Bangalore,IN&appid=' + apiKEY;
      
      var response = UrlFetchApp.fetch(weather); // get api endpoint
      var json = response.getContentText(); // get the response content as text
      var data = JSON.parse(json); //parse text into json
      
      Logger.log(data); //log data to logger to check
      
      var stats=[]; //create empty array to hold data points
      
      var date = new Date(); //create new date for timestamp
      
      //The following lines push the parsed json into empty stats array
        stats.push(data.name);//place
        stats.push(data.weather[0].description); //description
        stats.push((data.main.temp)-273.15); //temp
        stats.push(data.main.humidity); //humidity
        
      //append the stats array to the active sheet 
      sheet.appendRow(stats)
      
      var temp = parseFloat((data.main.temp)-273.15).toFixed(2);
      
      sendEmail("myroncj@gmail.com", "Todays Weather", "Place : " + data.name + "\nDescription : " + data.weather[0].description + "\nTemp : " + temp + "°C\nHumidity : " + data.main.humidity);
      
      sendEmail("ap.amritha@gmail.com", "Todays Weather", "Place : " + data.name + "\nDescription : " + data.weather[0].description + "\nTemp : " + temp + "°C\nHumidity : " + data.main.humidity);
      
      sendEmail("nehabharti1212@gmail.com", "Todays Weather", "Place : " + data.name + "\nDescription : " + data.weather[0].description + "\nTemp : " + temp + "°C\nHumidity : " + data.main.humidity);
      
    }

function sendEmail(to,subject,body) {

  MailApp.sendEmail(to,subject,body);
  log(to + ":" + subject + ":" + body);

}

function log(message) {

  Logger.log(message);
  console.log(message);
  
}