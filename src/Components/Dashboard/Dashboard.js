import React from 'react';
import './Dashboard.css'
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div>
            <h2 className='dashboard-header'>Hi !!! Dashboard people here</h2>
            <div className="dashboard-body">
                <div className="linechart-dashboard">
                    <LineChart width={400} height={300} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment"></YAxis>

                    </LineChart>
                </div>
                <div className="barchart-dashboard">
                    <BarChart width={400} height={400} data={data}>
                        <Bar dataKey="investment" fill="#8884d8" />
                        <XAxis dataKey="month" />
                    </BarChart>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;