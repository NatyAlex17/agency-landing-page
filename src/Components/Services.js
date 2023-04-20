import desktop from '../Resources/1237114.svg'
import arrow from '../Resources/arrow-1.svg'
import brush from '../Resources/Page-1.svg'
import {ArrowRightIcon} from '@heroicons/react/24/solid'



export function Services()
{
    return (
        <div className="flex flex-col pt-20 font-josefin">
                <h4 className="mt-8 self-center text-lg font-semibold text-teal-400"> My Services </h4>
                <h2 className="mt-2 self-center text-3xl font-extrabold">Our Provided Features & Expertise </h2>
                <div className="flex  py-8 justify-center items-center gap-x-8 md:gap-x-32 ">
                        <div className="py-8 px-8 basis-5/12 md:basis-3/12 rounded-sm  flex flex-col shadow-xl">
                           <span className="flex items-center justify-center w-20 h-20 border-2 border-teal-300 rounded-full">
                                 <img className="w-10 h-10 fill-slate-100" src={desktop} alt="deskto design" />
                           </span>
                           <h4 className=" relative mt-5 font-medium text-2xl "> Web Design </h4>
                             <div className='flex gap-x-2 mt-2'> 
                                    <div className= 'rounded-sm w-5 h-1 bg-teal-300' />
                                    <div className= 'rounded-sm w-5 h-1 bg-teal-300' />
                                    <div className= 'rounded-sm w-5 h-1 bg-teal-300' />
                             </div>

                            <p className='mt-6 text-xs'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam nobis sint odio, id ex.  
                            </p>

                            <button className='flex justify-around items-center border rounded-sm bg-teal-300
                            px-3 py-1 text-xs w-6/12 text-white font-normal mt-5'> Know More 
                               <ArrowRightIcon className=' h-4' />
                             </button>
                            
                        </div>

                        <div className="border py-5 px-8 basis-5/12 md:basis-3/12 flex flex-col shadow-xl">
                           <p className='text-2xl font-bold'> 95% </p>
                           <span className='mt-2 inline-block bg-teal-100 h-1  rounded-sm'>
                                <span className=' block bg-teal-300 w-11/12 h-full' />    
                            </span>
                           <h4 className=" relative m-0 mt-3  text-xl font-semibold "> Web Design </h4>
                             <div className='flex gap-x-2 mt-1'> 
                                    <p className='text-xs font-medium text-gray-400 '> HTML, CSS, jQuery</p>
                             </div>
                        </div>
                </div>
                
                <div className="flex  py-8 justify-center items-center gap-x-8 md:gap-x-32">
                       
                    <div className="border py-5 px-8 basis-5/12 md:basis-3/12  flex flex-col shadow-xl">
                              <p className='text-2xl font-bold'> 85% </p>
                              <span className='mt-2 inline-block bg-teal-100 h-1  rounded-sm'>
                                    <span className=' block bg-teal-300 w-9/12 h-full' />    
                                </span>
                              <h4 className=" relative m-0 mt-3 font-semibold text-xl "> Graphic Design </h4>
                                <div className='flex gap-x-2 mt-1'> 
                                        <p className='text-xs font-medium text-gray-400'> Photoshop, Illustrator</p>
                                </div>
                            </div>

                        <div className="py-8 px-8 basis-5/12 md:basis-3/12 bg-teal-300 text-white flex flex-col shadow-xl">
                           <span className="flex items-center justify-center w-20 h-20 border-2 border-white rounded-full">
                                 <img className="w-10 h-10 " src={brush}  style={{color:'red' }} alt="deskto design" />
                                
                           </span>
                           <h4 className=" relative mt-5 font-medium text-2xl "> Graphic Design </h4>
                             <div className='flex gap-x-2 mt-2'> 
                                    <div className= 'rounded-sm w-5 h-1 bg-white' />
                                    <div className= 'rounded-sm w-5 h-1 bg-white' />
                                    <div className= 'rounded-sm w-5 h-1 bg-white' />
                             </div>

                            <p className='mt-6 text-xs'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam nobis sint odio, id ex.  
                            </p>

                            <button className='flex justify-around  rounded-sm text-gray-600  bg-white
                            px-3 py-1 text-xs font-semibold w-6/12 mt-5'> Know More 

                              
                              <ArrowRightIcon className=' h-4' />
                            </button>
                            
                        </div>

                       
                </div>
                
                <div className="flex  py-8 justify-center items-center gap-x-8 md:gap-x-32 ">
                        <div className="py-8 px-8 basis-5/12 md:basis-3/12 flex flex-col shadow-xl">
                           <span className="flex items-center justify-center w-20 h-20 border-2 border-teal-400 rounded-full">
                                 <img className="w-10 h-10" src={desktop} alt="deskto design" />
                           </span>
                           <h4 className=" relative mt-5  text-2xl font-semibold "> Web Development </h4>
                             <div className='flex gap-x-2 mt-2'> 
                                    <div className= 'rounded-sm w-5 h-1 bg-teal-300' />
                                    <div className= 'rounded-sm w-5 h-1 bg-teal-300' />
                                    <div className= 'rounded-sm w-5 h-1 bg-teal-300' />
                             </div>

                            <p className='mt-6 text-xs'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam nobis sint odio, id ex.  
                            </p>

                            <button className='flex  justify-around items-center rounded-sm text-white bg-teal-300
                            px-3 py-1 text-xs font-normal w-6/12 mt-5 -ms-5'> Know More 
                               <ArrowRightIcon className=' h-4' />
                             </button>
                            
                        </div>

                        <div className="border py-5 px-8 basis-5/12 md:basis-3/12 flex flex-col shadow-xl">
                           <p className='text-2xl font-bold'> 70% </p>
                           <span className='mt-2 inline-block bg-teal-100 h-1  rounded-sm'>
                                <span className=' block bg-teal-300 w-8/12 h-full' />    
                            </span>
                           <h4 className=" relative m-0 mt-3  text-xl font-semibold "> Web Development </h4>
                             <div className='flex gap-x-2 mt-1'> 
                                    <p className='text-xs font-medium text-gray-400'> HTML, CSS, jQuery</p>
                             </div>
                        </div>


                </div>

                <button className='w-max py-2 font-normal text-xs self-center rounded-sm bg-teal-300 text-white px-5'> View More </button>
       
        </div>
    );
}