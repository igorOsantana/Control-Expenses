import { ContainerChartBar, FillChartBar, InnerChartBar, LabelChartBar } from './StyleChartBar.js';

const ChartBar = props => {
    let barFillHeight = '0%';

    if ( props.maxValue > 0 ) 
        barFillHeight = Math.round(( props.value / props.maxValue ) * 100 ) + '%';

    return (
        <ContainerChartBar>
            <InnerChartBar>
                <FillChartBar heightFill={ barFillHeight } />
            </InnerChartBar>
            <LabelChartBar>{ props.label }</LabelChartBar>
        </ContainerChartBar>
    );
}

export default ChartBar;