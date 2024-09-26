import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
function App() {
 

  return (
    <main className="space-y-11">
    
 <Nav/>

<div className="container mx-auto flex space-y-11 w-3/4">

<div className="carousel w-3/5">
  <div id="slide1" className="carousel-item relative w-full flex justify-between">
    <div >
      <h3 className="">Wooden minimlastic chair</h3>
      <p>sale up to</p>
      <h3>40% off</h3>
      <button>Shop Now</button>
    </div>
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-2/5" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>



</div>

<div className="card w-2/5 text-center" style={{marginTop:"1rem"}}>
  <div className="card-body" style={{paddingTop:"0"}}>
    <h2 className="text-center" style={{textAlign:"center !important"}}>Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <small>Starting from <span className="text-secondary">99,99$</span></small>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" width="200px"
      alt="Shoes" />
  </figure>
</div>
</div>
<div className="container mx-auto   w-3/4 ">
<h6>Top catigories of the month</h6>
<hr />
</div>
<div className="container mx-auto flex  w-3/4 justify-between flex-wrap gap-2">
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
</div>

    </main>
  )
}

export default App
