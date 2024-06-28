import React, { useState } from 'react'
import classes from './ExpenseItem.module.css'
import ExpenseDate from './ExpenseDate/ExpenseDate'
import { ExpenseFilter } from '../ExpenseFilter/ExpenseFilter'

export const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  // const clickHandle= () =>{
  //  setTitle('Updated');
  // }
 
  return (
    
    <div className={classes.topExpenseItem}>
      
      
      <div>
        
        <div className={classes.expenseTop}>
          <div className={classes.date}>
            <ExpenseDate date={props.date} />

          </div>
          <div className={classes.expenseInfo}>
            <h2 className={classes.expenseTitle}>{props.title}</h2>
            <div className={classes.expensePrice}>${props.amount}</div>
          </div>

        </div>
      </div>


    </div>
  )
}
