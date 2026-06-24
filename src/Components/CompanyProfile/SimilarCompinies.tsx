
import { similar } from "../../Data/Company"
import TalentCard from "../FindTalent/TalentCard"
import CompanyCard from "./CompanyCard"

const SimilarCompinies = () => {
  return (
    <div className="w-full">
        <div className="text-xl font-semibold mb-5">Similar Companies</div>
        <div className="flex flex-col flex-wrap gap-5 ">
            {
               similar.map((company,index)=><CompanyCard key={index} {...company}/>)
            }
        </div>
    </div>
  )
}

export default SimilarCompinies