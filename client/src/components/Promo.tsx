import React from 'react'

function Promo() {
  return (
    <div className="w-full">
      <div className="overflow-hidden relative text-white col-span-12 md:col-span-6">
        <img
          alt=""
          src="https://media.istockphoto.com/id/1191693516/photo/so-many-texts-to-go-through-all-at-once.jpg?s=2048x2048&w=is&k=20&c=_UR4Kb8eG8fEoi9RwkMObwJ2vaxFsdiFT6djAjD47p4="
          className="w-full  h-[560px] object-cover object-center md:m-0 sm:m-0 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl pb-4">MEN</h1>
          <button className="bg-white text-black transition duration-100 hover:delay-20 py-2 px-6">
            Shop Now
          </button>
        </div>
        {/* <div className="absolute left-2 top-2 ">New Winter Collection</div> */}
      </div>
    </div>
  )
}

export default Promo
