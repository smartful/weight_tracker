import { LineChart } from "@mui/x-charts/LineChart";
import "./chart.css";

export const Chart = ({ data }) => {
  console.log("data : ", data);
  const labels = data.map((item, index) => index + 1);
  console.log("labels : ", labels);

  return (
    <div className="chart">
      <LineChart
        xAxis={[{ data: labels }]}
        series={[
          {
            data: data,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default Chart;
