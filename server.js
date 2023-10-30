function doGet() {
    const html = HtmlService.createTemplateFromFile('index');
    //const html = HtmlService.createHtmlOutputFromFile('index')
    const output = html.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
   // return html;
   return output;
   
  }
  function include(fileName){
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
  }
  
  function getData(){
    const base = '1hrYDUmyzz-5MennkLmaj1IW510mS0LjSchgDuBJD0IM';
    const ss = SpreadsheetApp.openById(base);
    const sheet = ss.getSheetByName('0');
    const [headers, ...usersInfo] = sheet.getDataRange().getDisplayValues();
   // console.log({headers, userInfo});
    return{headers, usersInfo};
  }