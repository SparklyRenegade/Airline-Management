// import { data } from "autoprefixer";
import { useState } from "react";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonial() {
  let data=[
    {
      'img':'/testimonial1.jpeg',
      'review':'Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu In tellus interdum vel ac massa interdum viverra elementum auctor. Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu In tellus interdum vel ac massa interdum viverra elementum auctor. Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu In tellus interdum vel ac massa interdum viverra elementum auctor.',
      'name':'Mr John Deo',
      'des':'Ceo At Fly Now'
    },
    {
      'img':'/testimonial3.jpeg',
      'review':'Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu In tellus interdum vel ac massa interdum viverra elementum auctor.',
      'name':'Mr John Deo',
      'des':'Ceo At Fly Now'
    },
    {
      'img':'/testimonial2.jpeg',
      'review':'Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu In tellus interdum vel ac massa interdum viverra elementum auctor.',
      'name':'Mr John Deo',
      'des':'Ceo At Fly Now'
    },
    {
      'img':'/testimonial4.jpeg',
      'review':'Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu In tellus interdum vel ac massa interdum viverra elementum auctor.',
      'name':'Mr John Deo',
      'des':'Ceo At Fly Now'
    }
  ]
  
  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide=()=>{
    if(currIndex===0){
        setCurrIndex(data.length-1);
    }
    else{
        setCurrIndex(currIndex-1);
    }
  }

  const nextSlide=()=>{
    if(currIndex===data.length-1){
        setCurrIndex(0);
    }
    else{
        setCurrIndex(currIndex+1);
    }
  }

  return (
    <div className="bg-slate-200 sm:p-[5rem]">
      <div className="bg-white rounded-3xl">
        <div className="flex flex-col lg:flex-row p-[1rem] xs:p-[3rem] lg:p-[8rem] lg:space-x-[8rem]">
          <div className="flex-1 lg:pr-[6rem]">
            <h2 className="text-blue-600 text-[1.5rem] mb-[1rem]">Testimonials</h2>
            <p className="text-[2rem] sm:text-[3rem] font-semibold lg:text-[4rem] lg:leading-[5rem]">What our clients think about us?</p>
          </div>

          <div className="bg-slate-200 rounded-3xl p-[2rem] space-y-[2rem]">
            <div className="flex justify-between">
              <img
                className=" h-[5rem]"
                src={data[currIndex].img}
                alt={data[currIndex].review} // Truncate for brevity
              />
              <div className="flex items-center space-x-5">
                <button onClick={prevSlide}>
                    <FontAwesomeIcon className="h-[2rem]" icon={faArrowLeft}/>
                </button>
                <button onClick={nextSlide}>
                <FontAwesomeIcon className="h-[2rem]" icon={faArrowRight}/>
                </button>
              </div>
              
            </div>
            <div className="space-y-[1rem]">
              <p>{data[currIndex].review}</p>
              <p className="font-medium text-[1.5rem]">{data[currIndex].name}</p>
              <p className="font-medium text-[1.5rem]">{data[currIndex].des}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;