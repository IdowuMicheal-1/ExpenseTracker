import React from 'react'
import classes from './Note.module.css'

const Note = () => {

    return (
        <div className={classes.topNote}>
            <div className={classes.topNote1}>
                <div className={classes.date}>June 25, 2024</div>
                <h4 className={classes.manager}>The Manager,</h4>
                <div>Access Bank Plc</div>
                <div>Km 46, Lagos/Ibadan Express-way,</div>
                <div>Redemption Camp.</div>
            </div>
                <div>Dear Sir,</div>
                <h4 className={classes.transfer}>FUND TRANSFER</h4>
                <div className={classes.subject}>The above subject matter refers,</div>
            

            <p className={classes.tnote}>Kindly credit each individuals in the attached schedule and debit our current Account number 0031540056 with the sum of
                (NGN) 42,537,700.00</p>
            
            <div className={classes.lforward}>Looking forward to your quick response.</div>
            <div>Yours faithfully</div>
            <div>
                <h4 className={classes.tre}>Pastor J.A. Adeyokunnu</h4><br />
                <h4 className={classes.tre1}>Treasurer</h4>
            </div>
        </div>
    )
}

export default Note;