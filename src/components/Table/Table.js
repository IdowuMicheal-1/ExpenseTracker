import React from 'react'
import classes from './Table.module.css'
import Note from '../Note/Note';


const Table = () => {
   
    return (
       
        <div>
             <Note />
            <div className={classes.topTitle}>
                <h4 className={classes.topbank}>UNITED BANK FOR AFRICA PLC</h4>
                <p className={classes.topTns}>TRANSFER SCHEDULE</p>
            </div>
          <div className={classes.batchNumber}>Batch Number:24/06/24/UBA-2</div>

           <table className={classes.topTable}>
            <thead className={classes.tableHead}>
                <tr className={classes.headTr}>
                    <th className={classes.trTh}>S/N</th>
                    <th className={classes.trTh}>Date</th>
                    <th className={classes.trTh}>Bank</th>
                    <th className={classes.trTh}>Acct No</th>
                    <th className={classes.trTh}>Name of Beneficiary</th>
                    <th className={classes.trTh}>Amount(NGN)</th>
                    <th className={classes.trTh}>Description of Payment</th>
                </tr>
            </thead>
            <tbody className={classes.tableBody}>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>57</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>ZENITH BANK</th>
                    <th className={classes.bodytd}>1015116661</th>
                    <th className={classes.bodytd}>NATIONBEST CLEANING SERVICES</th>
                    <th className={classes.bodytdA}>215,000.00</th>
                    <th className={classes.bodytd}>CLEANING SERVICE TO RCCG CAMP MANGT 4 JUNE 2024</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>58</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>ACCESS</th>
                    <th className={classes.bodytd}>0031687379</th>
                    <th className={classes.bodytd}>RCCG NATIONAL SECRETARIES</th>
                    <th className={classes.bodytdA}>1,964,600.00</th>
                    <th className={classes.bodytd}>MONITORING REPORTS MEETING A D MONTH OF JUNE</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>59</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>ACCESS</th>
                    <th className={classes.bodytd}>0031695224</th>
                    <th className={classes.bodytd}>INTERNATIONAL GUEST HOUSE</th>
                    <th className={classes.bodytdA}>320,000.00</th>
                    <th className={classes.bodytd}>ENTERTAINMENT OF ELDERS- JUN 24 DOCTRINAL</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>60</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>ZENITH BANK</th>
                    <th className={classes.bodytd}>1012871765</th>
                    <th className={classes.bodytd}>RCCG BOOKING OFFICE CONTRACT</th>
                    <th className={classes.bodytdA}>243,350.00</th>
                    <th className={classes.bodytd}>RENOVATION OF PLUMBING WORK @ WHITE HOUSE</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>61</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>UNITED</th>
                    <th className={classes.bodytd}>2016401064</th>
                    <th className={classes.bodytd}>AREMU JIMOH JAMIU</th>
                    <th className={classes.bodytdA}>100,000.00</th>
                    <th className={classes.bodytd}>FEEDING FOR MOBILEE POLICE OFFICER FOR JUNE 2024</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>62</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>ACCESS</th>
                    <th className={classes.bodytd}>0037422543</th>
                    <th className={classes.bodytd}>AGIDA ADOKA</th>
                    <th className={classes.bodytdA}>100,000.00</th>
                    <th className={classes.bodytd}>FEEDING FOR MOBILEE POLICE OFFICER FOR JUNE 2024</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>63</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>PREMIUM</th>
                    <th className={classes.bodytd}>0100545285</th>
                    <th className={classes.bodytd}>SOTUNDE OLUWATOBI ADEWALE</th>
                    <th className={classes.bodytdA}>100,000.00</th>
                    <th className={classes.bodytd}>FEEDING FOR MOBILEE POLICE OFFICER FOR JUNE 2024</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>64</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>FIRST BANK</th>
                    <th className={classes.bodytd}>3038975346</th>
                    <th className={classes.bodytd}>SALIU TAJUDEEN</th>
                    <th className={classes.bodytdA}>100,000.00</th>
                    <th className={classes.bodytd}>FEEDING FOR MOBILEE POLICE OFFICER FOR JUNE 2024</th>
                </tr>
                <tr className={classes.bodytr}>
                    <th className={classes.bodytd}>65</th>
                    <th className={classes.bodytd}>24/05/2024</th>
                    <th className={classes.bodytd}>ACCESS</th>
                    <th className={classes.bodytd}>0349251391</th>
                    <th className={classes.bodytd}>MUSTAPHA ISMAILA</th>
                    <th className={classes.bodytdA}>100,000.00</th>
                    <th className={classes.bodytd}>FEEDING FOR MOBILEE POLICE OFFICER FOR JUNE 2024</th>
                </tr>
                <tr className={classes.bodytrx} >
                  <th colspan={7}> Total: 18,366,682.57</th>
                </tr>
            
            </tbody>
           </table>
           <div className={classes.btnTable}>
            <div className={classes.subBtn}><div>_______________________________</div>Prepared By:Adeniyi Toba</div>
            <div className={classes.subBtn}><div>_______________________________</div>Checked By</div>
           </div>

           <div className={classes.btnTable2}>
            <div className={classes.subBtn2}><div>_______________________________</div>Approved By</div>
           </div>
        </div>
    )
}

export default Table;