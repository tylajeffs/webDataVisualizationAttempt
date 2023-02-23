import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const ParallelCoordinates = () => {
    //create a state to send a request to the database
    const [cis2012students, setcis2012students] = useState([])

    useEffect(() => {
        //create a function to call the database
        const fetchAllcis2012students = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/parallel") 
                setcis2012students(res.data);
            } catch(err){
                console.log(err)
            }
        }

        //run the function
        fetchAllcis2012students()

    },[])

    return ( 
        <div>
            <div>Parallel Coordinates</div>
            <div className="cis2012students">
                {cis2012students.map(cis2012student=>(
                    <div className="cis2012student">
                        <h2>{cis2012student.GPA}</h2>
                        <h2>{cis2012student.credits_attempted}</h2>
                        <h2>{cis2012student.credits_passed}</h2>
                        <h2>{cis2012student.current_credits}</h2>
                        <h2>{cis2012student.age}</h2>
                        <h2>{cis2012student.gender}</h2>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ParallelCoordinates