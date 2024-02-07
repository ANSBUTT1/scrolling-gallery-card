import React from "react"
import "./App.css"
import image1 from "./assets/images/Awais.jpg"
import image2 from "./assets/images/Dawood.jpg"
import image3 from "./assets/images/Gulshan.jpg"






export default function App() {

  const cardData = [
    {
      id: 1, title: "Awais", image: image1
    },
    {
      id: 2, title: "Dawood", image: image2
    },
    {
      id: 3, title: "Gulshan", image: image3
    },
    {
      id: 4, title: "Awais", image: image1
    },
    {
      id: 5, title: "Dawood", image: image2
    },
    {
      id: 6, title: "Gulshan", image: image3
    },
  ]



  return (
    <>
      <div className="flex justify-center items-center ">
        {/* <img src={back} className="w-[50px] cursor-pointer m-[40px] " id="backBtn"/> */}
        <div className="gallery w-[950px] flex overflow-x-scroll  hide-scrollbar">
          {cardData && cardData.map(card => (
            <div key={card.id} className="grid grid-flow-row flex-none gap-[20px] p-[10px] " >
              <div className="cardImage w-[300px] h-[300px] grayscale-[100%] hover:grayscale-0  bg-cover bg-no-repeat " style={{ backgroundImage: `url(${card.image})` }}>
                <div className="justify-center w-[240px] pl-[2.5rem] pr-[2rem] py-[15rem] 2xl:w-[80%] 2xl:pl-[17%] 2xl:py-[70%]">
                  <div className="bg-slate-400 bg-opacity-30 flex flex-col text-center rounded-md p-2">
                    <h1 className="text-white font-bold">Gulshan Aslam</h1>
                    <h2 className="text-white md:text-90 mb-2">
                      Regional It Manager
                    </h2>
                  </div>
                </div>
              </div>
            </div>))}
        </div>
        {/* <img src={next} className="w-[50px] cursor-pointer m-[40px] " id="nextBtn"/> */}
      </div>
    </>
  )
}
