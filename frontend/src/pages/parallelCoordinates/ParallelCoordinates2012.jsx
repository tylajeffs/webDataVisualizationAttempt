import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import ParallelCoordinatesGraph from '../graphs/ParCoordsGraph2012';




const ParallelCoordinates = () => {
    //create a state to send a request to the database
    const [cis2012students, setcis2012students] = useState([])

    useEffect(() => {
        //create a function to call the database
        const fetchAllcis2012students = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/parallel/2012") 
                setcis2012students(res.data);
            } catch(err){
                console.log(err)
            }
        }

        //run the function to get the data
        fetchAllcis2012students()

    },[])


    function chooseGraph() {
        return (
            <ParallelCoordinatesGraph
            data={cis2012students} >
            </ParallelCoordinatesGraph>
        );
    }




    return ( 

        
        <div>
            <div>Parallel Coordinates 2012</div>
            <div className="graph" style={{height: 800}}>{chooseGraph()}</div>

            <button><Link to="/parallel/2019">Switch to CIS 2019 data set</Link></button>
            <button><Link to="/parallel/marathon">Switch to marathon data set</Link></button>

            <div className="cis2012students">
                {cis2012students.map(cis2012student=>(
                    <div className="cis2012student" key={cis2012student.id}>
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

