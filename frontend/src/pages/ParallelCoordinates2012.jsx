import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import React from "react";
import ParallelCoordinates from "./ParallelCoordinates";

export default function MyParallelCoords2012(props) {
    const data = props.data;

    return (
        <ResponsiveParallelCoordinates
        data={data}
        variables={[
            {
                key: 'GPA',
                type: 'linear',
                min: 'auto',
                max: 'auto',
                ticksPosition: 'before',
                legend: 'gpa',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                key: 'credits_attempted',
                type: 'linear',
                min: 0,
                max: 'auto',
                ticksPosition: 'before',
                legend: 'credits attempted',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                key: 'credits_passed',
                type: 'linear',
                min: 0,
                max: 'auto',
                ticksPosition: 'before',
                legend: 'credits passed',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'current_credits',
                type: 'linear',
                min: 0,
                max: 'auto',
                ticksPosition: 'before',
                legend: 'current credits',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'age',
                type: 'linear',
                min: 0,
                max: 'auto',
                legend: 'age',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'gender',
                type: 'point',
                padding: 1,
                values: [
                    'Female',
                    'Male',
                ],
                legend: 'gender',
                legendPosition: 'start',
                legendOffset: -20
            }
        ]}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    />

    )
}


