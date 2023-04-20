import person from '../Resources/freelancer-bearded-man-taking-notes-laptop_85574-3146.png'


export function AboutUs()
{
    return (
        <div className=" flex flex-col font-josefin">
            <div className="flex gap-x-6 h-2/5 w-full mt-20">

                    <div className="relative flex justify-end basis-7/12  ">
                        <span className=' absolute block -top-1 right-52 rounded-full  w-16 h-16 border-8 z-10 border-teal-400' />
                        <img className=" absolute top-5 right-8 w-56 h-56" src={person} alt="mountain" />
                        <span className='w-24 h-24 bg-shapes' />
                    </div>
                    <div className=" basis-2/5 flex flex-col">
                            <h3 className="text-xs text-teal-400 "> About Me </h3>
                            <p className="mt-4 text-xl leading-6  w-4/5">  Why hire us for your next project? </p>
                            <p className="mt-4 text-xs font-normal"> We are Creative Director and UI/UX Designer from New York, working in web development and print media. We enjoy turning complex problems into simple, beautiful and intuitive designs.  </p>
                            <p className="mt-4 text-xs font-normal"> Our job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>
                              <button className="mt-10 w-max rounded
                              -sm bg-teal-400 py-1.5 px-6 text-white text-xs " > Download CV </button>
                        
                    </div>
             </div>
             <div className="flex justify-around mt-16 px-8  font-josefin text-xs font-medium  ">
                        
                        <div className="w-36 h-36 shadow-2xl shadow-slate-500   my-2 rounded-full flex flex-col justify-center items-center">
                            <div className="rotate-45 w-32 h-32 my-2 border-4  border-t-teal-500 border-e-teal-500   border-transparent rounded-full flex flex-col justify-center items-center">
                                    <span className="-rotate-45 h-full w-full flex flex-col justify-center items-center rounded-full border-2 border-teal-200">
                                        <p className="mt-3 text-4xl font-semibold "> 50%</p>
                                        <p> Web Design</p>
                                    </span>
                            </div>
                        </div>

                        <div className="w-36 h-36 shadow-2xl shadow-slate-500  my-2 rounded-full flex flex-col justify-center items-center">
                            <div className="rotate-45 w-32 h-32 my-2 border-4  border-t-teal-500 border-e-teal-500  border-b-teal-500  border-transparent rounded-full flex flex-col justify-center items-center">
                                    <span className="-rotate-45 h-full w-full flex flex-col justify-center items-center rounded-full border-2 border-teal-200 ">
                                        <p className="mt-3 text-4xl font-semibold "> 75%</p>
                                        <p> Development</p>
                                    </span>
                            </div>
                        </div>

                        <div className="w-36 h-36 shadow-2xl shadow-slate-500  my-2 rounded-full flex flex-col justify-center items-center">
                            <div className="rotate-45 w-32 h-32 my-2 border-4  border-t-teal-500   border-transparent rounded-full flex flex-col justify-center items-center">
                                    <span className=" -rotate-45 h-full w-full flex flex-col justify-center items-center rounded-full border-2 border-teal-200 ">
                                        <p className="mt-3 text-4xl font-semibold "> 20%</p>
                                        <p> Web Design</p>
                                    </span>
                            </div>
                        </div>

                        <div className="w-36 h-36 shadow-2xl shadow-slate-500  my-2 rounded-full flex flex-col justify-center items-center">
                            <div className="rotate-45 w-32 h-32 my-2 border-4  border-t-teal-500 border-e-teal-500   border-transparent rounded-full flex flex-col justify-center items-center">
                                    <span className="-rotate-45 h-full w-full flex flex-col justify-center items-center rounded-full border-2 border-s-teal-200 border-b-teal-200 border-transparent ">
                                        <p className="mt-3 text-4xl font-semibold "> 50%</p>
                                        <p> User Experiance </p>
                                    </span>
                            </div>
                        </div>

                        
            </div>
        </div>
    );
}