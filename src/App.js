import logo from './logo.svg';
import React,{useState,useEffect} from 'react'
import './App.css';
import { ExpenseItem } from './components/ExpenseItem/ExpenseItem';
import Table from './components/Table/Table';
import { Receipt } from './components/Receipt/Receipt';
import OnePassword from './components/OnePassword/OnePassword';
import NewExpense from './components/NewExpense/NewExpense';
import {ExpenseFilter }from './components/ExpenseFilter/ExpenseFilter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chart from './components/Chart/Chart';

const expense=[
  {
    id:'e1',
    title:'Toilet Paper',
    amount:94.12,
    date:new Date(2020,7,14)
  },
  {
    id:'e2',
    title:'New TV',
    amount:799.92,
    date:new Date(2021,2,12)
  },
  {
    id:'e3',
    title:'Car Insurance',
    amount:204.67,
    date:new Date(2021,2,28)
  },
  {
    id:'e4',
    title:'New Desk Wooden',
    amount:450,
    date:new Date(2024,5,26)
  }
]

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function App() {


  const [data,setData] =useState(expense)
  const changeExpense = (expenses) => {
    setData((prevExpense) => {
      return[expenses,...prevExpense];
    })
    console.log(data)
    // const expenseData={
    //   ...expenses,
    //   id:Math.random().toString()
    // }
    // console.log(expenseData)
  }

  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangedHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(filteredYear)
  }

  const filteredExpense= data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  useEffect(() => {
    if (filteredExpense.length === 0) {
      toast.dark('No expense data available');
    }
  }, [filteredExpense.length, filteredYear]);

  const chartData = monthNames.map((month, index) => ({ month, count: 0 }));

  filteredExpense.forEach((expense) => {
    const month = expense.date.getMonth();
    chartData[month].count += 1;
  });

  return (
    <div>
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <OnePassword /> */}
      {/* <Receipt /> */}
      {/* <Table /> */}
     <NewExpense onChangeExpanse={changeExpense}/>
     <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangedHandler} />
     <Chart  data={chartData} />
     {filteredExpense.map((expenses,index)=> (<ExpenseItem 
      key={index}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      />
      
     ))
      }
     {/* <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
     <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
     <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
     <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} /> */}
    </div>
  );
}

export default App;
