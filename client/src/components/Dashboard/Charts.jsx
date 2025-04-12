import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Charts = ({ analytics }) => {
    const timelineData = {
        labels: Object.keys(analytics.timeline),
        datasets: [
            {
                label: 'Clicks Over Time',
                data: Object.values(analytics.timeline),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const deviceData = {
        labels: Object.keys(analytics.devices),
        datasets: [
            {
                data: Object.values(analytics.devices),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0'
                ]
            }
        ]
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-4">Clicks Over Time</h3>
                <Line data={timelineData} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-4">Device Distribution</h3>
                <Pie data={deviceData} />
            </div>
        </div>
    );
};

export default Charts;