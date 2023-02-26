import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import ParallelCoordinatesGraph from './ParCoordsGraph2019';




const ParallelCoordinates = () => {
    //create a state to send a request to the database
    const [cis2019students, setcis2019students] = useState([])

    useEffect(() => {
        //create a function to call the database
        const fetchAllcis2019students = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/parallel/2019") 
                setcis2019students(res.data);
            } catch(err){
                console.log(err)
            }
        }

        //run the function to get the data
        fetchAllcis2019students()

    },[])

    //function to set the data for the graph
    function chooseGraph() {
        return (
            <ParallelCoordinatesGraph
            data={cis2019students} >
            </ParallelCoordinatesGraph>
        );
    }




    return ( 
        
        <div>
            <div>Parallel Coordinates 2019</div>

            <div className="graph" style={{height: 800}}>{chooseGraph()}</div>


            <button><Link to="/parallel/2012">Switch to CIS 2012 data set</Link></button>
            <button><Link to="/parallel/marathon">Switch to marathon data set</Link></button>
        </div>
    )
}

export default ParallelCoordinates

