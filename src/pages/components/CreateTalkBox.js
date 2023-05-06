import React from 'react'
import styles from '../../styles/CreateTalkBox.module.css'
import { AddIcon } from '@chakra-ui/icons';
import { InputGroup } from 'react-bootstrap';
import Link from 'next/link';

function CreateTalkBox() {
  return (
    <div className={styles.talkBoxMain}>
        <Link href={'/'} className={styles.backBtn}>Back</Link>
        <hr />
        <div className={styles.talkBox1}>
            <h1 className={styles.title}>ToolBox Talk</h1>
            <div className={styles.textBox1}>
                <label className={styles.label1}>Admin</label>
                <p>Created Sat, March, 02:00 AM (GMT+2)</p>
            </div>
        </div>
        <img src='/images/upload.png'  className={styles.img1}/>
    
        <input type='file' className={styles.fileInput} />
        <div className={styles.dateBox}>
            <label className={styles.label1}>Date and Duration</label>
            <input type='date' className={styles.input1}/>
        </div>
        <div className={styles.topicBox}>
            <label className={styles.label1}>Toolbox Topic</label>
            <input type='text' className={styles.input1} placeholder='Accident on Highway 16 north bay'/>
        </div>
        <div className={styles.summaryBox}>
            <label className={styles.label1}>Topic Summary</label>
            <input type='text' className={styles.input1} placeholder='Take Caution'/>
        </div>
        <div>
            <div className={styles.headBox1}>
                {/* <label className={styles.label2}>...</label> */}
                <label className={styles.label2}>Discussion Topic</label>
                <label className={styles.label2} >Actions To Be taken</label>
                <label className={styles.label2}>By</label>
            </div>
            <div className={styles.data2}>
                {/* <label className={styles.label3}>...</label> */}
                <label className={styles.label3}>Discussion Topic</label>
                <label className={styles.label3}>Actions To Be taken</label>
                <label className={styles.label3}>All Drivers</label>
            </div>
            <button className={styles.addBtn}>+</button>
        
            <h1 className={styles.heading1}>Addressed To</h1>
            <div className={styles.headBox2}>
                {/* <label className={styles.label2}>...</label> */}
                <label className={styles.label2}>Name</label>
                <label className={styles.label2}>Company</label>
                <label className={styles.label2}>signature</label>
                <label className={styles.label2}>Date</label>
                <label className={styles.label2}>Time</label>
                <label className={styles.label2}>Location</label>
            </div>
            <div className={styles.data2}>
                {/* <label className={styles.label3}>...</label> */}
                <label className={styles.label3}>Zayne Malik</label>
                <label className={styles.label3}>Canada Express Logistics</label>
                <label className={styles.label3}>&*!@#$$</label>
                <label className={styles.label3}>25/03/2023</label>
                <label className={styles.label3}>2:00 PM</label>
                <label className={styles.label3}>Montreal</label>
            </div>
            <div className={styles.data2}>
                {/* <label className={styles.label3}>...</label> */}
                <label className={styles.label3}>Zayne Malik</label>
                <label className={styles.label3}>Canada Express Logistics</label>
                <label className={styles.label3}>&*!@#$$</label>
                <label className={styles.label3}>25/03/2023</label>
                <label className={styles.label3}>2:00 PM</label>
                <label className={styles.label3}>Montreal</label>
            </div>
            <button className={styles.addBtn}>+</button>
            <div>
                <h1 className={styles.heading1}>Body (Description)</h1>
                <input className={styles.description} type='textarea' placeholder='
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum 
                    ultricies aliquet magna amet, quam gravida ullamcorper sit. Eros vel.
                    '/>
                <button className={styles.pubBtn}>Publish</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTalkBox;