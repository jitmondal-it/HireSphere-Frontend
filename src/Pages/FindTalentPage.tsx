import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../Components/FindTalent/SearchBar'
import Talents from '../Components/FindTalent/Talents'

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-['popins'] ">
    <SearchBar/>
    <Divider mr="md" size="xs"/>
    <Talents/>

    </div>
  )
}

export default FindTalentPage