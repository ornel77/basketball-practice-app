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
        type: "line",
        smooth: true,
        connectNulls: true,
        itemStyle: { color: color },
        lineStyle: {
          color: color,
          width: 2,
        },
        // areaStyle: {},
        data: stats.map((d) => [d.workoutDate, d[valueKey]]),
      },
    ],
  }), [valueKey, color, stats])

  return (
    <div className="bg-white rounded-xl p-4 shadow-xl">
      <h2 className=" w-fit px-3 rounded-sm font-semibold py-1 mb-3 bg-blue-100 text-blue-800 text-xs">
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
