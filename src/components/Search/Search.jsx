import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Data from '../../users.json'
import './styles.css'

const Search = () => {
    const [filter, setFilter] = useState(false)
    const [sort, setSort] = useState(false)
    const [sortData, setSortData] = useState(false)
    const [filterName, setFilterName] = useState('')
    const [exp, setExp] = useState([])
  
    
    
    function sortFunction() {Data.sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
       }).map(res => {return <div>{res.name}</div> })
    setSort(!sort)}
    

    
  return (
    <div className='searchContainer'>
        <div className="searchWrapper">
            <input type="text"
        onChange={(e) => setFilterName(e.target.value)}
        value={filterName} className='searchField' placeholder='Search our architects'/>
            <div className='searchFieldAction'>
                <div onClick={() => setSort(!sort)}>Sort</div>
            <div onClick={() => setFilter(!filter)}>Filter</div>
            
            </div>
        </div>
        {sort && <div className="filterOptions">
                <div className='filterBy'><hr/>Sort By<hr/></div>
                <button onClick={sortFunction} className='sortButton'> Sort Alphabetically</button>
            </div>}
        {filter && <div className="filterOptions">
                <div className='filterBy'><hr/>Filter by<hr/></div>
                <div className="city">
                    <div className='filterTitle'>City</div>
                    <select >
                        <option value="Sarajevo">Sarajevo</option>
                        <option value="Banja Luka">Banja Luka</option>
                    </select>
                </div>
                <div className="skills">
                    <div className='filterTitle'>Skills</div>
                    <div></div>
                </div>
                <div className="experience">
                    <div className='filterTitle'>Experience</div>
                </div>
                <div className="type">
                    <div className='filterTitle'>
                        <div className='filterTitle'>Type</div>
                    </div>
                </div>
            </div>}
        <Card users={Data} sortedUsers={sortFunction} sortData={sortData} filterName={filterName} />
        
    </div>
  )
}

export default Search