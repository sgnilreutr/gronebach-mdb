import React from 'react'
import './SearchButton.scss'
import { FiSearch } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

export default function Searchbutton() {
  const history = useHistory()
  const openSearch = () => {
    history.push(`/search`)
  }

  return (
    <div className="search" onClick={openSearch}>
      <FiSearch size={24} />
      <p className="search-label">Zoeken</p>
    </div>
  )
}
