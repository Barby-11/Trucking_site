import React from 'react'
import styles from '../../styles/CreateTalKBox.module.css'

function CreateTalkBox() {
  return (
    <div className={styles.talkBoxMain}>
        <div className={styles.talkBox1}>
            <h1 className={styles.title}>ToolBox Talk</h1>
            <div className={styles.textBox1}>
                <label className={styles.label1}>Admin</label>
                <p>Created Sat, March, 02:00 AM (GMT+2)</p>
            </div>
        </div>
        <img src='/images/truck7.jpg'  className={styles.img1}/>
        <input type='file' className={styles.fileInput} />
        <i className={styles.fileArea}>📂</i>
        <div className={styles.dateBox}>
            <label className={styles.label1}>Date and Duration</label>
            <input type='date' />
        </div>
        <div className={styles.topicBox}>
            <label className={styles.label1}>Toolbox Topic</label>
            <input type='text' placeholder='Accident on Highway 16 north bay'/>
        </div>
        <div className={styles.summaryBox}>
            <label className={styles.label1}>Topic Summary</label>
            <input type='text'  placeholder='Take Caution'/>
        </div>
        <div>
            <div className={styles.headBox1}>
                <label className='ml-5'>...</label>
                <label className='m-5'>Discussion Topic</label>
                <label className='mr-5' >Actions To Be taken</label>
                <label className=''>By</label>
            </div>
            <div>
                <label>...</label>
                <label>Discussion Topic</label>
                <label>Actions To Be taken</label>
                <label>All Drivers</label>
            </div>
            <button>+</button>
            <h1 className={styles.heading1}>Addressed To</h1>
            <div className={styles.headBox2}>
                <label>...</label>
                <label>Name</label>
                <label>Company</label>
                <label>signature</label>
                <label>Date</label>
                <label>Time</label>
                <label>Location</label>
            </div>
            <div>
                <label>...</label>
                <label>Zayne Malik</label>
                <label>Canada Express Logistics</label>
                <label>&*!@#$$</label>
                <label>25/03/2023</label>
                <label>2:00 PM</label>
                <label>Montreal</label>
            </div>
            <div>
                <label>...</label>
                <label>Zayne Malik</label>
                <label>Canada Express Logistics</label>
                <label>&*!@#$$</label>
                <label>25/03/2023</label>
                <label>2:00 PM</label>
                <label>Montreal</label>
            </div>
            <button>+</button>
            <h1 className={styles.heading1}>Body (Dscription)</h1>
            <input type='textarea' />
        </div>
    </div>
  )
}

export default CreateTalkBox;