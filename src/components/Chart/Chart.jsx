import ChartBar from './ChartBar';
import { ContainerChart } from './StyleChart.js';

const Chart = props => {
    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value );
    const totalMax = Math.max( ...dataPointValues );

    return (
        <ContainerChart>
            { props.dataPoints.map( dataPoint => {
                return (
                    <ChartBar 
                        key={ dataPoint.label }
                        value={ dataPoint.value } 
                        maxValue={ totalMax }
                        label={ dataPoint.label }
                    />
                );
            }) }
        </ContainerChart>
    );
};

export default Chart;