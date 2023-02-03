$(document).ready(function() {
  $(".nav-toggler").each(function(_,navToggler){
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function (){
      $(target).animate({ 
      height: "toggle",
      })
    })
  })
})


const today = new Date();
const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()

function getData(){ 
    const pin = parseInt(document.getElementById('pinCode').value)
    console.log('Thanks for visiting my site ... ');
    

    url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date='+date+'';
    fetch(url).then((res) => {
    return res.json();
    }).then((data) => {
    var temp = '';
    for( var i =0 ; i < data.sessions.length ; i++){
        temp += '<tr>';
        temp += '<td class=" border-b-1 border-gray-200  px-4 py-3">'+data.sessions[i].name+'</td>';
        temp += '<td class=" border-b-1 border-gray-200 px-4 py-3">'+data.sessions[i].state_name+'</td>';
        temp += '<td class=" border-b-1 border-gray-200 px-4 py-3">'+data.sessions[i].district_name+'</td>';
    }
    
    document.querySelector('#content').innerHTML = temp ;
        

    })
}