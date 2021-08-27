import React, {Component} from 'react';

import {Line} from 'react-chartjs-2';
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
} from "chart.js";


Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
);

const getChartData = (canvas) => {

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0,0,1000,0);
    gradient.addColorStop(0, 'rgba(250,174,50,0.6)');
    gradient.addColorStop(1, 'rgba(250,174,50,0)');

    return {
        labels: ['', 'February', 'March','April', 'May'],
        datasets: [
            {
                label: 'Apple',
                fill: true,
                lineTension: 0,
                backgroundColor: gradient,
                borderColor: 'rgba(153,255,51,1)',
                borderWidth: 0,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }
}

class LineCharts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateDropdown: false,
            dateValue: 'Please select date'
        }
    }

    render() {

        return(
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '43%' }}>
                    <Line
                        data={(canvas) => getChartData(canvas)}
                        options={{
                                plugins: {
                                    legend: {
                                        display: false
                                    }
                                },
                                annotation: {
                                    legend: {
                                        display: false
                                    },
                                    annotations: {
                                        legend: {
                                            display: false
                                        },
                                        myHorizontalLine: {
                                            type: "line",
                                            scaleID: "y",
                                            value: 25,
                                            borderColor: "black",
                                            borderWidth: 0,
                                            // label: {
                                            //     position: "left",
                                            //     yAdjust: -20,
                                            //     backgroundColor: "red",
                                            //     content: "This is a long test label",
                                            //     enabled: true
                                            // },
                                            click(context) {
                                                // The annotation is is bound to the `this` variable
                                                console.log("Annotation", context);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    />
                </div>
            </div>

        )
    }
}

export default LineCharts;