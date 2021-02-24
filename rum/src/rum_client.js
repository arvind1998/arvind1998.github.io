
let _data = {
    url: document.URL
  }
  
console.log(_data)
fetch('https://7xhi0dukih.execute-api.us-east-2.amazonaws.com/test/rum',{
method:"POST",
body: JSON.stringify(_data),
headers: {"Content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin":"*", "Access-Control-Allow-Headers":"*"}
});
