import {ChevronUpIcon} from '@heroicons/react/24/solid'

export function Footer()
{
    return (
        <div className="flex flex-col pt-20 font-josefin">
             <span className="flex self-end me-5 justify-center rounded-full bg-teal-400 w-10 h-10" >
                <ChevronUpIcon className=' text-white w-6' />
             </span>

            <div className="flex flex-row justify-between mt-5 px-8">
                <div className="flex self-center  bg-teal-400 mt-3 w-24 h-8  rounded-sm items-center justify-center ">
                        <p className='text-4xl font-medium'>o o</p> 
                </div>
                <p className='basis-1/2 inline text-sm'>We are digital designer living in Addis Ababa. Apart from eating burger </p>
            </div>

            <div className=" flex justify-between font-normal text-xs  px-8 mt-6">
                
                <p className='basis-4/12 text-xs font-normal'> Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the is the magna aliquyam.</p>

               <div className="flex flex-col gap-y-1">
                    <h4 className=" font-normal text-sm text-teal-300"> Sent Mail </h4>
                    <p className='  w-32 h-4  inline  overflow-y-clip'>info@portfolio.com career.portfolio.com </p>
               </div>
               
               
               <div className="flex flex-col  gap-y-1">
                    <h4 className=" font-normal text-sm text-teal-300"> Make Call </h4>
                    <p className='  w-32 h-4  inline  overflow-y-clip'> +251 9 468484  </p>
                    <p className='  w-32 h-4  inline  overflow-y-clip'>+251 9 468484</p>
               </div>
               
               <div className="flex flex-col    gap-y-1">
                    <h4 className=" font-normal text-sm text-teal-300"> Get In Touch </h4>
                    <p className='  w-32 h-4  inline  overflow-y-clip'>123/A, Hamburger City New York, USA </p>
               </div>

            </div>

            <hr className='mt-8 h-0.5 bg-teal-300' />
            <p className=' self-center mt-3 text-xs mb-16'> 2022 All Rights Reserved  </p>
           

        </div>
    );
}