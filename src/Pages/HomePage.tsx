import Companies from "../Components/LandingPage/Companies"
import DreamJobs from "../Components/LandingPage/DreamJobs"
import JobCategory from "../Components/LandingPage/JobCategory"
import Subscribe from "../Components/LandingPage/Subscribe"
import Testimonials from "../Components/LandingPage/Testimonials"
import Working from "../Components/LandingPage/Working"


const HomePage =() =>{
    return(

        <div className="min-h-[100vh] bg-mine-shaft-900 font-['poppins']">
            
            <DreamJobs/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
            

        </div>
       
    )
}
export default HomePage