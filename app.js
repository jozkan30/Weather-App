let url= "https://api.openweathermap.org/data/2.5/weather?q=new+york&appid=f1a17735b0b7dad7e6648e6d088587f0&units=imperial"

let weather={
"apiKey":"f1a17735b0b7dad7e6648e6d088587f0",}


fetch(url).then((res) => res.json())
.then((data)=> console.log("yayy!", data))

.catch((e)=> console.log("oh shit", e))
