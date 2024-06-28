import React from 'react'
import classes from './receipt.module.css'

export const Receipt = () => {
  return (
    <div className={classes.topNotes}>
        <div className={classes.topNote}>
            <h4 className={classes.titleNote}>The Redeemed Christain Church<br /> National Secretariat</h4>
            <p className={classes.receipt}>OFFICIAL RECEIPT</p>
        </div>
        <div className={classes.dateSub}>
            <div>
                Date: <input type='date' className={classes.dateInput} />
            </div>
            <div>No: 948407984</div>
        </div>
        <div className={classes.received}>
            <div className={classes.subReceived}>
                <h4 className={classes.receivedf}>Received From</h4><div className={classes.subText3}><div className={classes.business}>RCCG CRM BUSINESS </div> ____________________________________________________________________________</div>
            </div>
            <div className={classes.amount}>
                Amount <p className={classes.amountNumber}>#39,010.00</p>
            </div>
        </div>
        <div className={classes.amtInWord}>
            <p className={classes.amountP}>Amount in Words</p>
            <div className={classes.wordsA}>
                <p className={classes.thirtyN}>Thirty Nine Thousand and Ten Naira</p>
            </div>
            <div>
                <h4 className={classes.payment}>For Payment of</h4>
                <p className={classes.thirtyN2}>STAFF DEDUCTION - JUNE 2024</p>
            </div>
            <div className={classes.tellerNote}>
                <div className={classes.rd}>
                    <h4>Received by <p className={classes.bks}>Brookes</p> </h4>
                </div>
                <div className={classes.noC}>
                    <h4>Teller/Cheque No </h4><div className={classes.acc}>ACC 3294</div>
                </div>
            </div>
            
        </div>
       
    </div>
  )
}
