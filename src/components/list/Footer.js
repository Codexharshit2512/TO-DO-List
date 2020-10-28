import React from 'react'
import FilterButton from './FilterButton'
import { VISIBILITY_TYPES } from '../../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterButton filter={VISIBILITY_TYPES.ALL}>All</FilterButton>
    <FilterButton filter={VISIBILITY_TYPES.CURRENT}>Current</FilterButton>
    <FilterButton filter={VISIBILITY_TYPES.COMPLETED}>Completed</FilterButton>
  </div>
)

export default Footer