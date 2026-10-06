import { Avatar, Divider, TextInput } from "@mantine/core";
import {IconClockHour9, IconSearch, IconUsersPlus } from "@tabler/icons-react";
const DreamJobs = () =>{
    return(
        <div className="flex items-center px-20 bs-mx:px-10 md-mx:px-5 md-mx:flex-col
    md-mx:gap-10"> 
            <div className="flex flex-col w-[45%] gap-3  md-mx:w-full">
                <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-bold leading-tight text-mine-shaft-100">
                    The Future of Job
                    <br />
                    <span className="text-bright-sun-400">
                        Searching
                    </span>
                    <br />
                    Starts Here
                    </div>

                <div className="text-lg text-mine-shaft-300 leading-8 mt-3">
                     Discover verified jobs, connect with recruiters, and get hired faster.
                </div>
                <div className="flex gap-3 mt-5 sm-mx:flex-col">        
                    <TextInput className="bg-mine-shaft-950
                    rounded-lg
                    flex-1
                    p-1
                    px-2
                    text-mine-shaft-100
                    border
                    border-mine-shaft-800
                    shadow-md
                    hover:border-bright-sun-400
                    focus-within:border-bright-sun-400
                    focus-within:shadow-[0_0_15px_rgba(255,200,0,0.15)]
                    transition-all
                    duration-300
                    [&_input]:!text-mine-shaft-100" variant="unstyled" label ="Job Title" placeholder="Software Engineer"/>
                    <TextInput className="  bg-mine-shaft-950
                    rounded-lg
                    flex-1
                    p-1
                    px-2
                    text-mine-shaft-100
                    border
                    border-mine-shaft-800
                    shadow-md
                    hover:border-bright-sun-400
                    focus-within:border-bright-sun-400
                    focus-within:shadow-[0_0_15px_rgba(255,200,0,0.15)]
                    transition-all
                    duration-300
                    [&_input]:!text-mine-shaft-100"variant="unstyled" label ="Job Type" placeholder="Full Time"/>
                    
                    <div className="flex items-center justify-center
                    h-full w-20
                    bg-bright-sun-400
                    text-mine-shaft-900
                    p-2
                    rounded-xl
                    border border-bright-sun-300
                    shadow-lg shadow-bright-sun-400/20
                    cursor-pointer
                    transition-all duration-300
                    hover:bg-bright-sun-500
                    hover:shadow-[0_0_20px_rgba(255,200,0,0.45)]
                    hover:scale-105
                    active:scale-95
                    sm-mx:w-full
                    sm-mx:h-12">
                        <IconSearch className ="h-[85%] w-[85%] transition-transform duration-300 hover:rotate-12 " stroke={2}/>
   
                    </div>
                </div>

            </div> 
            <div className="w-[55%] flex items-center justify-center md-mx:w-full">
                <div className="w-[25rem] relative  bs-mx:w-[20rem] sm-mx:w-[16rem]">
                    <img src="/Pic-1.png" alt ="" className="w-full"/>
                    <div className="
                       absolute -right-10  w-fit top-[50%] md-mx:right-0
                        sm-mx:right-0
                        sm-mx:top-[30%]
                        xs-mx:scale-75
                        xs-mx:origin-right
                       border-bright-sun-300 border p-2 rounded-lg backdrop-blur-md ">
                        <div className="text-center text-mine-shaft-100 mb-1 text-sm">20k+ got jobs</div>
                        <Avatar.Group spacing="sm">
                       <Avatar src="im1.png" radius="xl"  className="!border-2 !border-bright-sun-400" />
                       <Avatar src="im2.png" radius="xl" className="!border-2 !border-bright-sun-400"/>
                       <Avatar src="im3.png" radius="xl" className="!border-2 !border-bright-sun-400"/>
                       <Avatar >+8k</Avatar>
                       </Avatar.Group>
                       
                    </div>
                    <div className="
                        absolute -left-20  w-fit top-[27%] md-mx:left-0
                        sm-mx:left-0
                        xs-mx:left-[-10px]
                        xsm-mx:left-0

                        sm-mx:top-[65%]

                        xs-mx:scale-75
                        xs-mx:origin-left

                        border-bright-sun-300
                        border
                        p-2
                        rounded-lg
                        backdrop-blur-md">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-800 rounded-lg">
                                <img src ="/google.png" alt = ""/>
                            </div>
                            <div className="text-mine-shaft-100 text-sm">
                                <div>Softwate Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">London</div>
                            </div>

                        </div>
                        <Divider size="xs" mt={6} color="gray.8" opacity={0.5} />
                        <div className="flex text-mine-shaft-100 gap-4 text-xs mt-1">
                            <span className="flex items-center gap-1"><IconClockHour9 size={14}/> 1 Day Ago</span>
                            <span className="flex items-center gap-1.5"> <IconUsersPlus size={14}/>120 Applicants</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default DreamJobs;
