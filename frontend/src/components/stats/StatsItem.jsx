/* eslint-disable react/prop-types */
import ReactChartsReact from "echarts-for-react";
import { useMemo } from "react";

const StatsItem = ({ title, valueKey, color, stats }) => {

  
  const option = useMemo(() => ({
    tooltip: {
      trigger: "axis",
    },

    legend: {
      bottom: 0,
      // type: "scroll",
    },

    grid: {
      left: 35,
      right: 20,
      top: 20,
      bottom: 50,
    },

    xAxis: {
      data: stats.map((d) => d.workoutDate),
    },

    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      axisLabel: {
        formatter: "{value} %",
      },
    },

    // 👆 zoom tactile + swipe
    // dataZoom: [
    //   {
    //     type: "inside",
    //     xAxisIndex: 0,
    //     zoomOnMouseWheel: true,
    //     moveOnMouseMove: true,
    //   },
    // ],

    series: [
      {
        type: "bar",
        smooth: false,
        connectNulls: true,
        itemStyle: { color: color },
        lineStyle: {
          color: color,
          width: 5,
        },
        data: stats.map((d) => [d.workoutDate, d[valueKey]]),
      },
    ],
  }), [valueKey, color, stats])

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <h2 className="text-white bg-green w-fit  px-5 rounded-xl shadow-md shadow-violet-100 mb-3">
        {title}
      </h2>
      <ReactChartsReact
        option={option}
        opts={{ renderer: "canvas" }}
        style={{ height: "154px", width: "100%" }}
        lazyUpdate={true}
      />
    </div>
  );
};
export default StatsItem;
