
import { talents } from "../../Data/TalentData"
import TalentCard from "../FindTalent/TalentCard"

const CompanyEmployees = () => {
  return (
    <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">

        {
          talents.map((talent,index)=> index <6 &&<TalentCard key={index} {...talent}/>)
        }
      </div>
  )
}

export default CompanyEmployees