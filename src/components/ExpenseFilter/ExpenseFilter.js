import React from 'react'
import classes from './ExpenseFilter.module.css'

export const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onchangeFilter(event.target.value);
    }
    
  return (
    <div className={classes.topFilter}>
        <div className={classes.subFilter}>
            <label className={classes.filterY}>Filter by year</label>
            <select value={props.selected} onChange={dropdownChangeHandler} className={classes.selectFit}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
    
            </select>
         </div>
    </div>
  )
}
