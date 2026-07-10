import React from "react";


const vehicles=[

{
name:"BMW 5 Series",
type:"Luxury Sedan",
price:"₹5000/day",
rating:"4.9",
fuel:"Petrol",
seat:"5 Seats",
img:"https://images.unsplash.com/photo-1555215695-3004980ad54e"
},

{
name:"Royal Enfield",
type:"Premium Bike",
price:"₹800/day",
rating:"4.8",
fuel:"Petrol",
seat:"2 Seats",
img:"https://images.unsplash.com/photo-1558981806-ec527fa84c39"
},

{
name:"Range Rover",
type:"Luxury SUV",
price:"₹7000/day",
rating:"5.0",
fuel:"Diesel",
seat:"7 Seats",
img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"
}


]


function Vehicles(){


return(

<section className="vehicles">


<h1>
Find Your Perfect Ride 🚘
</h1>


<p className="subtitle">
Choose from our premium collection of vehicles
</p>



<div className="vehicle-container">


{
vehicles.map((v,index)=>(


<div className="vehicle-card" key={index}>


<div className="vehicle-image">


<img src={v.img} alt={v.name}/>


<div className="tag">
{v.type}
</div>


<div className="rating">
⭐ {v.rating}
</div>


</div>



<div className="vehicle-info">


<h2>
{v.name}
</h2>



<div className="details">


<span>
⛽ {v.fuel}
</span>


<span>
👥 {v.seat}
</span>


</div>



<div className="price">


{v.price}


</div>



<button>
Book Vehicle
</button>


</div>



</div>


))

}



</div>


</section>


)

}


export default Vehicles;
