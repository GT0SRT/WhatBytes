import CanvasJSReact from '@canvasjs/react-charts';
import { useSelector } from 'react-redux';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function DonutChart() {
  const score = useSelector((state) => state.update_redux_slice.score);   
  const options = {
    animationEnabled: true,
    subtitles: [{
      text: `${score}/15`,
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      radius: "80%",
      dataPoints: [
        { name: "Obtained Marks", y: score, color: "#3B82F6" },
        { name: "Remaining Marks", y: 15-score, color: "#93C5FD" },
      ]
    }]
  };
  return(
    <CanvasJSChart options = {options} />
  );
};
