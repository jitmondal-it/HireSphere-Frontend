import { Divider } from '@mantine/core'
import Jobs from '../Components/FindJobs/Jobs'
import SearchBar from '../Components/FindJobs/SearchBar'


const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-['popins'] ">
      <SearchBar/>
      <Divider mr="md" size="xs"/>
      <Jobs/>
    </div>
  )
}

export default FindJobs