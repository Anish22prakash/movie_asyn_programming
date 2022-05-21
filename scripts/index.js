arr=["https://previews.123rf.com/images/tamara1k/tamara1k1907/tamara1k190700095/126274637-gran-canaria-canary-islands-la-isleta-peninsula-cluster-of-small-houses-of-barrio-las-coloradas.jpg"
,"https://previews.123rf.com/images/tamara1k/tamara1k1905/tamara1k190500624/122983073-gran-canaria-pilancones-natural-park-reforested-slopes-canary-pine.jpg"
,"https://previews.123rf.com/images/snukiz/snukiz2004/snukiz200400008/143823152-beautiful-same-size-spruce-christmas-trees-spotted-in-natural-lithuanian-forest-near-siauliai-cold-c.jpg",
"https://previews.123rf.com/images/shahin55/shahin551905/shahin55190500047/123821933-fresh-berries-such-as-red-currant-blackberry-raspberry-strawberry-and-blueberry-in-transparent-recta.jpg"]

var i=0;
var id;
function start(){
    let cont=document.getElementById("slideshow")
        cont.innerHTML=null
       var image=arr[i]
       let im2g=document.createElement("img")
        im2g.src=image
       im2g.setAttribute("id","img2id")
     
     

     cont.append(im2g)
      
     i++;
   
   id=setInterval(function(){

        if(i==arr.length){
            i=0
        }
        let container=document.getElementById("slideshow")
        container.innerHTML=null
       var image=arr[i]
       let img=document.createElement("img")
        img.src=image
       img.setAttribute("id","imgid")
     
     

     container.append(img)
      
     i++;
    },1000)
}
start()

function Pasue(){
    clearInterval(id)
}


data=[{name:"Bhul Bhulaiya",img:"https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",date:"02 jul 2022",idm:4},
{name:"Dhakaad",img:"https://assetscdn1.paytm.com/images/cinema/Dhaakad-705x750-e84ea150-d37e-11ec-8679-ab26124c1c6e.png",date:"02 jul 2022",idm:6},
{name:"Mavaerick",img:"https://assetscdn1.paytm.com/images/cinema/Top-Gun--Maverick-705x750-027fac70-cc7e-11ec-9110-77d6e3ad5005.jpg",date:"02 jul 2022",idm:7},
{name:"Jurassic world",img:"https://assetscdn1.paytm.com/images/cinema/Jurassic-World--Dominion-705x750-b554ee90-cd51-11ec-8d22-2363945d80ef.jpg",date:"02 jul 2022",idm:5},
{name:"Bhul Bhulaiya 1",img:"https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",date:"02 jul 2022",idm:2},
{name:"Bhul Bhulaiya 2",img:"https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",date:"02 jul 2022",idm:7},
{name:"Bhul Bhulaiya 3",img:"https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",date:"02 jul 2022",idm:8},
{name:"Bhul Bhulaiya 4",img:"https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",date:"02 jul 2022",idm:10},
{name:"Bhul Bhulaiya 5",img:"https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",date:"02 jul 2022",idm:4},
]

function asdc(){
var selected =document.querySelector("#fill").value;

if(selected=="asc"){
data.sort(function(a,b){
if(a.idm>b.idm){
return 1
}
if(a.idm<b.idm){
return -1
}
return 0
})
display(data)
}
if(selected=="dec"){
data.sort(function(a,b){
if(a.idm>b.idm){
return -1
}
if(a.idm<b.idm){
return 1
}
return 0
})
display(data)
}
}

display(data)

function display(data){

document.querySelector("#movies").innerHTML="";
   data.forEach(function(ele){
       var chota=document.createElement("div")
       chota.setAttribute("id","a6ns")

       var image=document.createElement("img")
       image.src=ele.img
       image.setAttribute("id","imgmovie")

       var name=document.createElement("h3")
       name.setAttribute("class","margintake")
       
       name.innerText=ele.name

       var date=document.createElement("p")
       date.setAttribute("class","margintake")
       date.innerText=ele.date

       var rating=document.createElement("p")
       rating.innerText=ele.idm
       
       rating.setAttribute("class","margintake")

       chota.append(image,name,date,rating)
       document.querySelector("#movies").append(chota)
   })
}
display(data)