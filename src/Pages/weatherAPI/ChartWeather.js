import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react';

const ChartWeather = ({ data }) => {
    const [options, setOptions] = useState(null);
    const [series, setSeries] = useState(null);
    const [tmpdata, settmpdata] = useState([])
    useEffect(() => {
        const tempValues = data.map((weather) => weather.temp_c + "°");
        const tempTimes = data.map((weather) => weather.time.substring(10));

        setOptions({
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false,
                colors: ['#F44336', '#E91E63', '#9C27B0']
            },
            stroke: {
                curve: 'straight'
            },

            title: {
                text: 'Temperature Today',
                align: 'center'
            },
            labels: tempTimes,
            xaxis: {
                type: 'string',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'center'
            }
        });
        settmpdata(tempValues)
        console.log(tempValues)
        setSeries([{
            name: "temp ",
            data: tmpdata
        }]);

    }, [])

    return (
        <div>
            <div className="chart__content mt-4">
                {series && options && <div id="chart">
                    <Chart options={options} series={series} type="area" className="mychart" height={350} />
                </div>}
            </div>
        </div>
    )
}
export default ChartWeather;