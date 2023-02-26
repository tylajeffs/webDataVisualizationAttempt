import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import React from "react";

export default function ParCoordsGraph2019(props) {
    const data = props.data;

    return (
        <ResponsiveParallelCoordinates
        data={data}
        variables={[
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
                key: 'agegroup',
                type: 'point',
                padding: 1,
                values: [
                    '18-21',
                    '22-24',
                    '25-29',
                    '30-34',
                    '35-64',
                ],
                legend: 'age group',
                legendPosition: 'start',
                legendOffset: -20
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
                key: 'gpa',
                type: 'linear',
                min: 2,
                max: 'auto',
                legend: 'gpa',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'gradyear',
                type: 'linear',
                min: 2005,
                max: 'auto',
                legend: 'graduation year',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'home',
                type: 'point',
                padding: 1,
                values: [
                    'Asia',
                    'Pacific',
                    'US Mainland',
                    'Other International',
                    'Hawaii',
                ],
                legend: 'home',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'major',
                type: 'point',
                padding: 1,
                values: [
                    'Information Technology',
                    'Computer Science',
                    'Information Systems',
                    'Computer Science ',
                ],
                legend: 'major',
                legendPosition: 'start',
                legendOffset: -20
            },
            
        ]}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    />

    )
}


