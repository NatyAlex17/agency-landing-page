
import person from "../Resources/2905211.svg";

export function Home()
{
   return (
        <div className="h-full flex flex-row  items-center  justify-around md:justify-center font-josefin blob ">
               <div className="basis-1/2 md:basis-2/5  flex flex-col -mt-16 ">
                    <div className="w-max px-3 py-6 flex flex-col gap-y-4 ">
                            <h3 className=" text-4xl font-medium ">
                                Sharing Vitality 
                            </h3>
                            <span className="text-5xl font-bold ">
                                    Through Designing
                            </span>
                        </div>
                        <p className=" text-neutral-600 font-medium text-lg px-3 " >clean design and advanced digital solutions</p>
                        <div className='mt-5 ms-3 flex text-xs items-end '>
                        
                                <button className=" font-medium bg-teal-400 rounded-xl py-1.5 px-3" > Explore More</button>
                                <button className=" font-bold rounded py-1 px-3" > See Live Demo </button>
                        
                        </div>
               </div>

            <img className="w-56 h-56 -mt-16  " src={person} alt="person" />  
          
                
        </div>   
   );
}