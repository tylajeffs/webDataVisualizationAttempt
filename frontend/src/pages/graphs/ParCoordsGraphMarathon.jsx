import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import React from "react";

export default function ParCoordsGraph2012(props) {
    const data = props.data;

    return (
        <ResponsiveParallelCoordinates
        data={data}
        variables={[
            {
                key: 'age',
                type: 'linear',
                min: 0,
                max: 'auto',
                legend: 'age',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                key: 'gender',
                type: 'point',
                padding: 1,
                values: [
                    'F',
                    'M',
                ],
                legend: 'gender',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'hours',
                type: 'linear',
                min: 0,
                max: 'auto',
                legend: 'hours',
                legendPosition: 'start',
                legendOffset: -20
            },
        ]}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    />

    )
}


