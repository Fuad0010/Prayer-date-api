const submit = document.getElementById('submit');
const dateNamaz = document.getElementById('dateNamaz');



submit.onclick=function() {
    let splitedDate = dateNamaz.value.split("-");
    
let month = splitedDate[1]
let year = splitedDate[0]
let day = splitedDate[2]
    console.log(month);


    axios.get(`http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=${day}&month=${month}&year=${year}`)
  .then(function (response) {

    console.log(response.data.data[day - 1].timings.Asr);
  })
  .catch(function (error) {
    
    console.log(error);
  })
}


  
