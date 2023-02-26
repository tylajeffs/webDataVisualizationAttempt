import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import ParallelCoordinatesGraph from './ParCoordsGraphMarathon';




const ParallelCoordinates = () => {
    //create a state to send a request to the database
    const [marathonRunners, setmarathonRunners] = useState([])

    useEffect(() => {
        //create a function to call the database
        const fetchAllmarathonRunners = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/parallel/marathon") 
                setmarathonRunners(res.data);
            } catch(err){
                console.log(err)
            }
        }

        //run the function to get the data
        fetchAllmarathonRunners()

    },[])


    function chooseGraph() {
        return (
            <ParallelCoordinatesGraph
            data={marathonRunners} >
            </ParallelCoordinatesGraph>
        );
    }




    return ( 

        
        <div>
            <div>Parallel Coordinates Marathon Runners</div>
            <div className="graph" style={{height: 800}}>{chooseGraph()}</div>
            <button><Link to="/parallel/2019">Switch to CIS 2019 data set</Link></button>
            <button><Link to="/parallel/2012">Switch to CIS 2012 data set</Link></button>


        </div>
    )
}

export default ParallelCoordinates

