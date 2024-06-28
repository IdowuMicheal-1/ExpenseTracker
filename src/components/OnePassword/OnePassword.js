import classes from './OnePassword.module.css'

const OnePassword = () =>{
    return(
        <div className={classes.topTop}>
            <div className={classes.topTop1}>
            <div>
                <div className={classes.topProvince}>
                    <p className={classes.topYouth}>RCCG YOUTH PROVINCE 4</p>
                    <h5 className={classes.topBalance}>Trial Balance for the Month of August, 2023</h5>
                </div>
                <h4 className={classes.IncomeStat}>Income Statement</h4>
            <p className={classes.company}>Enter Your Company name here</p>
            <p className={classes.company}>Income Statement</p>
            <p className={classes.company}>June 27, 2024</p>
            </div>
            <table className={classes.tablesa}>
                <thead>
                    <tr className={classes.tableTRt}>
                        <th className={classes.topTbale1}></th>
                        <th className={classes.topTbale}>Current Period<br />[Start Date] to [End Date]</th>
                        <th className={classes.topTbale}>Prior Period<br />[Start Date] to [End Date]</th>
                        <th className={classes.topTbale}>Increase(Decrease)<br />[Start Date] to [End Date]</th>
                    </tr>
                </thead>
                <tbody className={classes.tableth2}>
                    <tr>
                        <th className={classes.revenueTable1}>REVENUES</th>
                        <th className={classes.revenueTable}></th>
                        <th className={classes.revenueTable}></th>
                        <th className={classes.revenueTable}></th>
                    </tr>
                    <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Product/Service 1 …</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Product/Service 2 …</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Product/Service 3 …</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Other Revenue</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr>
                            <th className={classes.revenueTable1}>TOTAL REVENUE</th>
                            <th className={classes.revenueTable}></th>
                            <th className={classes.revenueTable}></th>
                            <th className={classes.revenueTable}></th>
                            {/* <th className={classes.revenueTable}></th> */}
                        </tr>
                        <tr>
                            <th className={classes.revenueTable1}>COST OF GOODS SOLD</th>
                            <th className={classes.revenueTable}></th>
                            <th className={classes.revenueTable}></th>
                            <th className={classes.revenueTable}></th>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Product/Service 1 …</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Product/Service 2 …</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Product/Service 3 …</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Salaries-Direct</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Payroll Taxes and Benefits-Direct</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Depreciation-Direct</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Supplies</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                        </tr>
                        <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Other Direct Costs</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                        <tr className={classes.tableTRt}>
                            <th className={classes.revenueTable1}>TOTAL COST OF GOODS SOLD</th>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>

                            <tr className={classes.bodytrx} >
                  <th > GROSS PROFIT (LOSS)</th>
                  <th > </th>
                  <th > </th>
                  <th > </th>
                </tr>
                        <tr className={classes.tableTRt}>
                            <th className={classes.revenueTable1}>OPERATING EXPENSES</th>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>

                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Advertising and Promotion …</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Automobile/Transportation</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Bad Debts/Losses and Thefts</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Bank Service Charges</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Business Licenses and Permits</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Charitable Contributions</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Computer and Internet</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Continuing Education</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Depreciation-Indirect</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Dues and Subscriptions</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Insurances</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Meals and Entertainment</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Merchant Account Fees</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Miscellaneous Expense</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Office Supplies</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Payroll Processing</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Postage and Deliverys</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Printing and Reproduction</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Professional Services - Legal, Accountings</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Occupancy</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
    
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Rental Payments</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
    
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Salaries-Indirect</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
    
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Payroll Taxes and Benefits-Indirect</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Subcontractor</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Telephone</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Travel</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Utilities</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Website Development</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                           
                            <tr className={classes.tableTRt}>
                            <th className={classes.revenueTable1}>TOTAL OPERATING EXPENSES</th>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>

                            <tr className={classes.bodytrx} >
                  <th > OPERATING PROFIT (LOSS)</th>
                  <th ></th>
                  <th ></th>
                  <th ></th>
                </tr>
    
                        <tr className={classes.tableTRt}>
                            <th className={classes.revenueTable1}>INTEREST (INCOME), EXPENSE & TAXES</th>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Interest Income</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Interest Expenses</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <td className={classes.revenueTable}>Income Tax Expense</td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                            <tr className={classes.tableTRt}>
                            <th className={classes.revenueTable1}>TOTAL INTEREST (INCOME), EXPENSE & TAXES</th>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                    
                            <tr className={classes.tableTRt}>
                            <th className={classes.revenueTable1}>NET INCOME (LOSS)</th>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            <td className={classes.revenueTable}></td>
                            </tr>
                    
                </tbody>
            </table>
            </div>
           
        </div>
    )
}

export default OnePassword;