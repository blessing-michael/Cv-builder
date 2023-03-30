import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Education() {
const [education, setEducation]= useState({university: "", major:"", start:"", end:""})




  return (
    <div>
        <h2>Education</h2>
        <form action="" >
            <input type="text" placeholder='university' name='uni' id='uni' value={education.university}/>
            <input type="text" placeholder='major' name='major' id='major' value={education.major}/>
            <input type="date" name="start" id="start" placeholder='start' value={education.start} />
            <input type="date" name="end" id="end" placeholder='end' value={education.end} />

            <div className='edubtn-Container'>
            <button type="submit" id="eduAddbtn"><span className='addbtn'><FontAwesomeIcon icon="fa-solid fa-plus" /></span>  add</button>
            <button type="submit"  id='eduDelbtn'><span className='delbtn'><FontAwesomeIcon icon="fa-solid fa-trash-can-arrow-up del" /></span> delete</button>

            </div>

            <div className="linethrough"></div>
            



        </form>
    </div>
  )
}

export default Education