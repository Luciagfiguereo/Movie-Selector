const container = document.querySelector('.container');
const seats = document.querySelectorAll(' .row .seat:not(occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;




//UPDATE OF COUNT AND TOTAL
function updateselectedcount() {
     
    const selectedSeats = document.querySelectorAll('.row .seat.selected' )
           const seatIndex = [...selectedSeats].map(function(seat)
      { return [...seats].indexOf(seat)
                                      });

localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

console.log(seatIndex);
    ;
    const selectedseadscount = selectedSeats.length;

    count.innerText = selectedseadscount;
    total.innerText = selectedseadscount * ticketPrice;
};


function populateUI(){


}


// Movie select event

movieSelect.addEventListener('click', (e) =>{

    ticketPrice = +e.target.value;
    updateselectedcount();
});



//seat click event
container.addEventListener('click', (e) =>{
    if(e.target.classList.contains('seat')&&
     !e.target.classList.contains('occupied')) 
 
    e.target.classList.toggle('selected')
    updateselectedcount();
});


const num = [1, 2, 3, 4, 5, 6, 7];
const m = num.map (function(item){
 return item * 2
});
console.log(m)