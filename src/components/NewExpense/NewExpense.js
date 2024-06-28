import React,{useState} from 'react'
import classes from './NewExpense.module.css'

const NewExpense = (props) => {
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')

    const inputClick= (event) => {
        setTitle(event.target.value)
    }
    const amountClick= (event) => {
        setAmount(event.target.value)
    }
    const dateClick= (event) => {
        setDate(event.target.value)
    }
    const submitHandler= (event) => {
        event.preventDefault()

        const expenseData={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        props.onChangeExpanse(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
  return (
    <div>
        <form onSubmit={submitHandler} className={classes.formExpense}>
            <div className={classes.divExpense}>
            <div className={classes.divSub}>
                <label className={classes.labelExpense}>Title</label>
                <input type='text' value={title} onChange={inputClick} className={classes.inputTitle}/>
            </div>
            <div className={classes.divSub}>
                <label className={classes.labelExpense}>Amount</label>
                <input type='number' min="0.01" step="0.02" value={amount} onChange={amountClick} className={classes.inputAmount}/>
            </div>
            <div className={classes.divSub}>
                <label className={classes.labelExpense}>Date</label>
                <input type='date' min="2019-10-01" max="2024-12-31"  value={date} onChange={dateClick} className={classes.inputDate}/>
            </div>
            </div>
            <button type='submit' className={classes.btnExpense}>Add Expense</button>
        </form>
    </div>
  )
}

export default NewExpense