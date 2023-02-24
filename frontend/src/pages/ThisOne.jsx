// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/parallel-coordinates
import { ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const myData = [
    {
      "GPA": 2.7,
      "credits_attempted": 138.5,
      "credits_passed": 138.5,
      "current_credits": 7,
      "age": 25.74,
      "gender": "M"
    },
    {
      "GPA": 3.57,
      "credits_attempted": 146,
      "credits_passed": 78,
      "current_credits": 9,
      "age": 22.09,
      "gender": "F"
    },
    {
      "GPA": 3.63,
      "credits_attempted": 131,
      "credits_passed": 131,
      "current_credits": 14,
      "age": 23.21,
      "gender": "M"
    },
    {
      "GPA": 3.86,
      "credits_attempted": 152,
      "credits_passed": 119,
      "current_credits": 14,
      "age": 26.56,
      "gender": "M"
    },
    {
      "GPA": 3.03,
      "credits_attempted": 115.5,
      "credits_passed": 115.5,
      "current_credits": 15,
      "age": 26.3,
      "gender": "M"
    },
    {
      "GPA": 2.25,
      "credits_attempted": 39,
      "credits_passed": 39,
      "current_credits": 16,
      "age": 23.8,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 48,
      "credits_passed": 0,
      "current_credits": 14,
      "age": 22.45,
      "gender": "M"
    },
    {
      "GPA": 3.02,
      "credits_attempted": 63.5,
      "credits_passed": 51.5,
      "current_credits": 14.5,
      "age": 25.4,
      "gender": "M"
    },
    {
      "GPA": 3.14,
      "credits_attempted": 40,
      "credits_passed": 40,
      "current_credits": 14,
      "age": 32.93,
      "gender": "M"
    },
    {
      "GPA": 2.73,
      "credits_attempted": 62,
      "credits_passed": 62,
      "current_credits": 14,
      "age": 21.35,
      "gender": "M"
    },
    {
      "GPA": 3.39,
      "credits_attempted": 144,
      "credits_passed": 81,
      "current_credits": 17,
      "age": 24.32,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 14,
      "age": 18.35,
      "gender": "M"
    },
    {
      "GPA": 3.34,
      "credits_attempted": 135,
      "credits_passed": 135,
      "current_credits": 15,
      "age": 25.08,
      "gender": "M"
    },
    {
      "GPA": 3.16,
      "credits_attempted": 153,
      "credits_passed": 104,
      "current_credits": 6,
      "age": 26.7,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 33,
      "credits_passed": 0,
      "current_credits": 15,
      "age": 34.48,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 13,
      "age": 21.84,
      "gender": "M"
    },
    {
      "GPA": 1.99,
      "credits_attempted": 26,
      "credits_passed": 26,
      "current_credits": 14,
      "age": 35.12,
      "gender": "M"
    },
    {
      "GPA": 2.81,
      "credits_attempted": 81,
      "credits_passed": 51,
      "current_credits": 14,
      "age": 23.51,
      "gender": "F"
    },
    {
      "GPA": 3.2,
      "credits_attempted": 79,
      "credits_passed": 79,
      "current_credits": 6,
      "age": 38.03,
      "gender": "M"
    },
    {
      "GPA": 2.89,
      "credits_attempted": 97.5,
      "credits_passed": 97.5,
      "current_credits": 18,
      "age": 23.77,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 17,
      "age": 17.98,
      "gender": "M"
    },
    {
      "GPA": 2.82,
      "credits_attempted": 123,
      "credits_passed": 123,
      "current_credits": 15,
      "age": 25.97,
      "gender": "M"
    },
    {
      "GPA": 3.22,
      "credits_attempted": 141,
      "credits_passed": 138,
      "current_credits": 12,
      "age": 25.29,
      "gender": "M"
    },
    {
      "GPA": 3.38,
      "credits_attempted": 43,
      "credits_passed": 37,
      "current_credits": 16,
      "age": 21.9,
      "gender": "M"
    },
    {
      "GPA": 2.83,
      "credits_attempted": 151,
      "credits_passed": 108,
      "current_credits": 18,
      "age": 25.71,
      "gender": "M"
    },
    {
      "GPA": 3.58,
      "credits_attempted": 162,
      "credits_passed": 162,
      "current_credits": 4,
      "age": 27.95,
      "gender": "M"
    },
    {
      "GPA": 3.99,
      "credits_attempted": 125,
      "credits_passed": 67,
      "current_credits": 14,
      "age": 25.75,
      "gender": "F"
    },
    {
      "GPA": 3.75,
      "credits_attempted": 128.29,
      "credits_passed": 68,
      "current_credits": 14,
      "age": 27.69,
      "gender": "M"
    },
    {
      "GPA": 3.53,
      "credits_attempted": 141,
      "credits_passed": 121,
      "current_credits": 16,
      "age": 24.15,
      "gender": "M"
    },
    {
      "GPA": 2.45,
      "credits_attempted": 46,
      "credits_passed": 46,
      "current_credits": 14,
      "age": 25.28,
      "gender": "F"
    },
    {
      "GPA": 3.24,
      "credits_attempted": 120,
      "credits_passed": 93,
      "current_credits": 17,
      "age": 21.56,
      "gender": "F"
    },
    {
      "GPA": 2.89,
      "credits_attempted": 100,
      "credits_passed": 100,
      "current_credits": 15,
      "age": 21.07,
      "gender": "F"
    },
    {
      "GPA": 2.87,
      "credits_attempted": 40,
      "credits_passed": 40,
      "current_credits": 14,
      "age": 24.37,
      "gender": "M"
    },
    {
      "GPA": 3.73,
      "credits_attempted": 29,
      "credits_passed": 29,
      "current_credits": 14,
      "age": 26.99,
      "gender": "M"
    },
    {
      "GPA": 3.53,
      "credits_attempted": 143,
      "credits_passed": 143,
      "current_credits": 18,
      "age": 27.13,
      "gender": "M"
    },
    {
      "GPA": 3.64,
      "credits_attempted": 28,
      "credits_passed": 28,
      "current_credits": 16,
      "age": 20.24,
      "gender": "M"
    },
    {
      "GPA": 2.69,
      "credits_attempted": 117,
      "credits_passed": 40,
      "current_credits": 14,
      "age": 23.6,
      "gender": "M"
    },
    {
      "GPA": 1.35,
      "credits_attempted": 10,
      "credits_passed": 10,
      "current_credits": 12.5,
      "age": 23.32,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 15,
      "age": 24.33,
      "gender": "F"
    },
    {
      "GPA": 2.93,
      "credits_attempted": 119,
      "credits_passed": 68,
      "current_credits": 18,
      "age": 26.06,
      "gender": "F"
    },
    {
      "GPA": 3.96,
      "credits_attempted": 53,
      "credits_passed": 53,
      "current_credits": 18,
      "age": 23.86,
      "gender": "F"
    },
    {
      "GPA": 2.69,
      "credits_attempted": 138,
      "credits_passed": 119,
      "current_credits": 12,
      "age": 25.17,
      "gender": "M"
    },
    {
      "GPA": 2.51,
      "credits_attempted": 73,
      "credits_passed": 73,
      "current_credits": 19,
      "age": 25.61,
      "gender": "M"
    },
    {
      "GPA": 3.3,
      "credits_attempted": 113,
      "credits_passed": 40,
      "current_credits": 15,
      "age": 24.49,
      "gender": "M"
    },
    {
      "GPA": 3.36,
      "credits_attempted": 82,
      "credits_passed": 46,
      "current_credits": 14,
      "age": 25.77,
      "gender": "M"
    },
    {
      "GPA": 3.66,
      "credits_attempted": 154,
      "credits_passed": 154,
      "current_credits": 16,
      "age": 25.96,
      "gender": "M"
    },
    {
      "GPA": 3.85,
      "credits_attempted": 109,
      "credits_passed": 79,
      "current_credits": 18,
      "age": 25.5,
      "gender": "M"
    },
    {
      "GPA": 3.21,
      "credits_attempted": 39.5,
      "credits_passed": 39.5,
      "current_credits": 14.5,
      "age": 25.79,
      "gender": "M"
    },
    {
      "GPA": 3.15,
      "credits_attempted": 57,
      "credits_passed": 57,
      "current_credits": 17,
      "age": 22.84,
      "gender": "M"
    },
    {
      "GPA": 3.72,
      "credits_attempted": 62,
      "credits_passed": 26,
      "current_credits": 14,
      "age": 19.91,
      "gender": "F"
    },
    {
      "GPA": 3.49,
      "credits_attempted": 67,
      "credits_passed": 58,
      "current_credits": 14,
      "age": 23.55,
      "gender": "M"
    },
    {
      "GPA": 3.64,
      "credits_attempted": 42,
      "credits_passed": 13,
      "current_credits": 14,
      "age": 20.81,
      "gender": "M"
    },
    {
      "GPA": 2.5,
      "credits_attempted": 28,
      "credits_passed": 28,
      "current_credits": 14,
      "age": 24.25,
      "gender": "M"
    },
    {
      "GPA": 3.86,
      "credits_attempted": 103,
      "credits_passed": 103,
      "current_credits": 17,
      "age": 30.79,
      "gender": "M"
    },
    {
      "GPA": 2.11,
      "credits_attempted": 47.5,
      "credits_passed": 27.5,
      "current_credits": 14,
      "age": 22.73,
      "gender": "M"
    },
    {
      "GPA": 3.94,
      "credits_attempted": 15,
      "credits_passed": 15,
      "current_credits": 15,
      "age": 19.34,
      "gender": "M"
    },
    {
      "GPA": 3.41,
      "credits_attempted": 61,
      "credits_passed": 61,
      "current_credits": 17,
      "age": 25.62,
      "gender": "M"
    },
    {
      "GPA": 3.91,
      "credits_attempted": 77,
      "credits_passed": 56,
      "current_credits": 21,
      "age": 23.69,
      "gender": "M"
    },
    {
      "GPA": 3.34,
      "credits_attempted": 25,
      "credits_passed": 25,
      "current_credits": 14,
      "age": 31.8,
      "gender": "M"
    },
    {
      "GPA": 3.05,
      "credits_attempted": 100,
      "credits_passed": 100,
      "current_credits": 14,
      "age": 26.02,
      "gender": "M"
    },
    {
      "GPA": 3.26,
      "credits_attempted": 44,
      "credits_passed": 44,
      "current_credits": 14,
      "age": 27.93,
      "gender": "M"
    },
    {
      "GPA": 3.75,
      "credits_attempted": 135,
      "credits_passed": 83,
      "current_credits": 14,
      "age": 30.63,
      "gender": "M"
    },
    {
      "GPA": 3.04,
      "credits_attempted": 80,
      "credits_passed": 80,
      "current_credits": 15,
      "age": 24.43,
      "gender": "M"
    },
    {
      "GPA": 3.36,
      "credits_attempted": 132,
      "credits_passed": 132,
      "current_credits": 14,
      "age": 28.1,
      "gender": "M"
    },
    {
      "GPA": 3.33,
      "credits_attempted": 107,
      "credits_passed": 107,
      "current_credits": 14,
      "age": 29.47,
      "gender": "M"
    },
    {
      "GPA": 4,
      "credits_attempted": 75,
      "credits_passed": 66,
      "current_credits": 14,
      "age": 19.83,
      "gender": "M"
    },
    {
      "GPA": 3.77,
      "credits_attempted": 32.5,
      "credits_passed": 32.5,
      "current_credits": 17.5,
      "age": 23.26,
      "gender": "M"
    },
    {
      "GPA": 3.42,
      "credits_attempted": 84,
      "credits_passed": 72,
      "current_credits": 3,
      "age": 46.11,
      "gender": "F"
    },
    {
      "GPA": 3.56,
      "credits_attempted": 118,
      "credits_passed": 118,
      "current_credits": 15,
      "age": 25.8,
      "gender": "M"
    },
    {
      "GPA": 3.17,
      "credits_attempted": 106,
      "credits_passed": 106,
      "current_credits": 6,
      "age": 50.09,
      "gender": "M"
    },
    {
      "GPA": 2.62,
      "credits_attempted": 51,
      "credits_passed": 51,
      "current_credits": 12,
      "age": 23.15,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 16,
      "age": 23.72,
      "gender": "M"
    },
    {
      "GPA": 3.93,
      "credits_attempted": 24,
      "credits_passed": 12,
      "current_credits": 14,
      "age": 22.06,
      "gender": "M"
    },
    {
      "GPA": 3,
      "credits_attempted": 124,
      "credits_passed": 94,
      "current_credits": 14,
      "age": 25.37,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 15,
      "age": 19.57,
      "gender": "M"
    },
    {
      "GPA": 3.7,
      "credits_attempted": 68,
      "credits_passed": 68,
      "current_credits": 15,
      "age": 22.74,
      "gender": "M"
    },
    {
      "GPA": 2.87,
      "credits_attempted": 76,
      "credits_passed": 76,
      "current_credits": 13,
      "age": 22.84,
      "gender": "M"
    },
    {
      "GPA": 3.65,
      "credits_attempted": 69,
      "credits_passed": 69,
      "current_credits": 17,
      "age": 22.11,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 13,
      "age": 18.43,
      "gender": "M"
    },
    {
      "GPA": 2.59,
      "credits_attempted": 40,
      "credits_passed": 40,
      "current_credits": 13,
      "age": 23.19,
      "gender": "F"
    },
    {
      "GPA": 3.33,
      "credits_attempted": 79.5,
      "credits_passed": 79.5,
      "current_credits": 14,
      "age": 26.19,
      "gender": "M"
    },
    {
      "GPA": 2.45,
      "credits_attempted": 76,
      "credits_passed": 49,
      "current_credits": 14,
      "age": 25.99,
      "gender": "M"
    },
    {
      "GPA": 3.15,
      "credits_attempted": 113,
      "credits_passed": 79,
      "current_credits": 15,
      "age": 26.81,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 6,
      "credits_passed": 0,
      "current_credits": 15,
      "age": 18.6,
      "gender": "M"
    },
    {
      "GPA": 2.67,
      "credits_attempted": 58,
      "credits_passed": 58,
      "current_credits": 14,
      "age": 24.52,
      "gender": "M"
    },
    {
      "GPA": 1.12,
      "credits_attempted": 35.5,
      "credits_passed": 8.5,
      "current_credits": 14,
      "age": 25.57,
      "gender": "M"
    },
    {
      "GPA": 3.26,
      "credits_attempted": 100,
      "credits_passed": 80,
      "current_credits": 14,
      "age": 23.52,
      "gender": "M"
    },
    {
      "GPA": 2.76,
      "credits_attempted": 148,
      "credits_passed": 140,
      "current_credits": 17,
      "age": 31.72,
      "gender": "M"
    },
    {
      "GPA": 3.85,
      "credits_attempted": 54,
      "credits_passed": 31,
      "current_credits": 17,
      "age": 23.83,
      "gender": "M"
    },
    {
      "GPA": 2.86,
      "credits_attempted": 105,
      "credits_passed": 87,
      "current_credits": 15,
      "age": 25.43,
      "gender": "M"
    },
    {
      "GPA": 3.04,
      "credits_attempted": 95,
      "credits_passed": 43,
      "current_credits": 22,
      "age": 24.67,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 14,
      "age": 28.57,
      "gender": "M"
    },
    {
      "GPA": 2.8,
      "credits_attempted": 100,
      "credits_passed": 100,
      "current_credits": 15,
      "age": 22.69,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 16,
      "age": 18.66,
      "gender": "F"
    },
    {
      "GPA": 2.7,
      "credits_attempted": 106,
      "credits_passed": 32,
      "current_credits": 15,
      "age": 21.21,
      "gender": "F"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 14,
      "age": 29.76,
      "gender": "M"
    },
    {
      "GPA": 3.42,
      "credits_attempted": 79,
      "credits_passed": 55,
      "current_credits": 14,
      "age": 25.31,
      "gender": "F"
    },
    {
      "GPA": 0,
      "credits_attempted": 32.66,
      "credits_passed": 0,
      "current_credits": 15,
      "age": 22.35,
      "gender": "M"
    },
    {
      "GPA": 3.59,
      "credits_attempted": 29,
      "credits_passed": 17,
      "current_credits": 6,
      "age": 21.65,
      "gender": "M"
    },
    {
      "GPA": 3.56,
      "credits_attempted": 61,
      "credits_passed": 27,
      "current_credits": 14,
      "age": 23.25,
      "gender": "M"
    },
    {
      "GPA": 2.69,
      "credits_attempted": 41.5,
      "credits_passed": 24.5,
      "current_credits": 17,
      "age": 31.87,
      "gender": "M"
    },
    {
      "GPA": 3.18,
      "credits_attempted": 92,
      "credits_passed": 52,
      "current_credits": 14,
      "age": 26.38,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 10,
      "age": 24.19,
      "gender": "M"
    },
    {
      "GPA": 3.4,
      "credits_attempted": 60,
      "credits_passed": 11,
      "current_credits": 12,
      "age": 25.99,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 14,
      "age": 17.71,
      "gender": "F"
    },
    {
      "GPA": 3.76,
      "credits_attempted": 97,
      "credits_passed": 97,
      "current_credits": 14,
      "age": 24.24,
      "gender": "M"
    },
    {
      "GPA": 3.37,
      "credits_attempted": 62,
      "credits_passed": 62,
      "current_credits": 15,
      "age": 23.48,
      "gender": "M"
    },
    {
      "GPA": 3.18,
      "credits_attempted": 27,
      "credits_passed": 27,
      "current_credits": 14.5,
      "age": 23.94,
      "gender": "M"
    },
    {
      "GPA": 3.55,
      "credits_attempted": 29,
      "credits_passed": 29,
      "current_credits": 14,
      "age": 19.08,
      "gender": "M"
    },
    {
      "GPA": 2.45,
      "credits_attempted": 29.5,
      "credits_passed": 29.5,
      "current_credits": 17.5,
      "age": 20.9,
      "gender": "M"
    },
    {
      "GPA": 3.5,
      "credits_attempted": 105,
      "credits_passed": 87,
      "current_credits": 12,
      "age": 22.09,
      "gender": "F"
    },
    {
      "GPA": 3.07,
      "credits_attempted": 87,
      "credits_passed": 87,
      "current_credits": 14,
      "age": 25.59,
      "gender": "M"
    },
    {
      "GPA": 0,
      "credits_attempted": 0,
      "credits_passed": 0,
      "current_credits": 15,
      "age": 17.74,
      "gender": "M"
    },
    {
      "GPA": 1.2,
      "credits_attempted": 8,
      "credits_passed": 8,
      "current_credits": 14,
      "age": 21.46,
      "gender": "M"
    },
    {
      "GPA": 3.82,
      "credits_attempted": 15,
      "credits_passed": 15,
      "current_credits": 15,
      "age": 17.99,
      "gender": "M"
    },
    {
      "GPA": 2.97,
      "credits_attempted": 108,
      "credits_passed": 108,
      "current_credits": 16,
      "age": 31.71,
      "gender": "M"
    }
   ];



const MyResponsiveParallelCoordinates = ({ data /* see data tab */ }) => (
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
                    'F',
                    'M',
                ],
                legend: 'gender',
                legendPosition: 'start',
                legendOffset: -20
            }
        ]}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    />
)


export default MyResponsiveParallelCoordinates