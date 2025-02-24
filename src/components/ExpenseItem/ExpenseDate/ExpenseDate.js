import React from 'react'
import classes from './ExpenseDate.module.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-us', { month: 'long' })
    const day = props.date.toLocaleString('en-us', { day: '2-digit' })
    const year = props.date.getFullYear()
    return (
        <div className={classes.expenseDate}>
            <div className={classes.monthDate}>{month}</div>
            <div className={classes.monthYear}>{year}</div>
            <div className={classes.monthDay}>{day}</div>
        </div>
    )
}

export default ExpenseDate