"use client";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function LineChart() {
    const options = {
        animationEnabled: true,
        axisX: {
            minimum: 0,
            maximum: 100,
            valueFormatString: "#,##0%",
            labelFormatter: function(e) {
                if(e.value==0) return `${e.value}%`;
                else if(e.value==20) return `${e.value}%`;
                else if(e.value==40) return `${e.value}%`;
                else if(e.value==60) return `${e.value}%`;
                else if(e.value==80) return `${e.value}%`;
                else if(e.value==100) return `${e.value}%`;
                else return ``;
            }
        },
        axisY: {
            labelFormatter: function () { return ""; },
            gridThickness: 0,
            tickThickness: 0,
            lineThickness: 0,
        },
        data: [{
            type: "spline",
            lineThickness:1,
            dataPoints: [
                { x: 0, y: 3 },
                { x: 10, y: 5 },
                { x: 20, y: 7 },
                { x: 25, y: 12 },
                { x: 25, y: 10 },
                { x: 25, y: 15 },
                { x: 36, y: 25 },
                { x: 45, y: 30 },
                { x: 50, y: 32 },
                { x: 55, y: 40 },
                { x: 65, y: 36 },
                { x: 75, y: 18 },
                { x: 80, y: 8 },
                { x: 85, y: 6 },
                { x: 90, y: 10 },
                { x: 95, y: 5 },
                { x: 100, y: 3 },
            ]
        }]
    };
    return(
        <CanvasJSChart options = {options} />
    );
};
