import React from 'react';
import { connect } from 'react-redux';
import { Chart } from "react-google-charts";
import './chart.css';

function modifyData (props) {
    const { data } = props;
    let finalData = data && data.length> 0 && data.map((item) => {
        return [item['incomeSource'], item['expenditure'], item['proportion']]
    })
    finalData.unshift(["From", "To", "Weight"]);
    return finalData;
}

const ChartComponent = (props) => {
    const data = modifyData(props);
    const options = {};
    return (
        <div className="app-chart">
            <Chart
                chartType="Sankey"
                width="70%"
                height="300px"
                data={data}
                options={options}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    data: state
})


export default connect(
    mapStateToProps,
    null
)(ChartComponent);