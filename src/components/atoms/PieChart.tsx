import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Chart } from "react-chartjs-2";
import Gird from "@mui/material/Unstable_Grid2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const options = {
    responsive: true,
    maintainAspactRatio: false,
    plugins: {
        legend: {
            display: true,
            text: "Chart.js Pie Chart"
        },
        title: {
            display: true,
            text: "react-chartjs-2 Pie Chart",
            font: {
                size: 30
            }
        }
    }
};

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    labels: labels,
    datasets: [
        {
            labels: "test",
            data: [12, 11, 14, 52, 14, 32, 36],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
        }
    ]
}

export const PieGraph = () => {
    return (
        <Gird container spacing={2}>
            <Gird xs={8} alignItems="center">
                <Chart type="pie" options={options} data={data} width={100} height={100} />
            </Gird>

        </Gird>
    );
}