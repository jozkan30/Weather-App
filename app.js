let url= "https://api.openweathermap.org/data/2.5/weather?q=new+york&appid=f1a17735b0b7dad7e6648e6d088587f0&units=imperial"

let weather={
"apiKey":"f1a17735b0b7dad7e6648e6d088587f0",}


fetch(url).then((res) => res.json())
.then((data)=> console.log("Nice!", data.main))

.catch((e)=> console.log("Oh no!", e))

function show(){
fetch(url).then(res =>{
   console.log("nice", res)
   return res.json()
})
.then((data)=> {
document.querySelector('#temp').innerHTML=data.main.temp})

}
show()


function humid(){
fetch(url).then(res =>{
    console.log("nice", res)
    return res.json()
    
.then((data)=> {
        document.querySelector('.humidity').innerHTML=data.main.humidity})
        }

 )}
 humid()