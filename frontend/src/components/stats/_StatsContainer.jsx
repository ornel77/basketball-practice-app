/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { STATS } from "../../utils/data";

const allKeys = {
  fieldGoal: { name: "Field Goal", color: "#4f46e5" },
  threePoint: { name: "3 Points", color: "#22c55e" },
  layupRight: { name: "Layup Droit", color: "#f97316" },
  layupLeft: { name: "Layup Gauche", color: "#e11d48" },
  freeThrow: { name: "Lancers Francs", color: "#0ea5e9" },
};

const StatsContainer = () => {
  const [chartType, setChartType] = useState("line");
  const [visibleKeys, setVisibleKeys] = useState(Object.keys(allKeys));

  const toggleKey = (key) => {
    setVisibleKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const data = [...STATS]
    .sort((a, b) => new Date(a.sessionDate) - new Date(b.sessionDate))
    .map((item) => ({
      date: item.sessionDate,
      fieldGoal: item.fieldAvg,
      threePoint: item.threeAvg,
      layupLeft: item.ll,
      layupRight: item.lr,
      freeThrow: item.ft,
      comment: item.comment,
    }));

  const ChartComponent = chartType === "line" ? LineChart : BarChart;
  const ShapeComponent = chartType === "line" ? Line : Bar;

  return (
    <div className="p-4 bg-rose-50 rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Statistiques</h2>

      {/* Boutons & checkboxes */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        <button
          onClick={() => setChartType("line")}
          disabled={chartType === "line"}
          className={`px-4 py-2 rounded-md text-white ${
            chartType === "line"
              ? "bg-indigo-500 cursor-not-allowed opacity-70"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          📈 Ligne
        </button>
        <button
          onClick={() => setChartType("bar")}
          disabled={chartType === "bar"}
          className={`px-4 py-2 rounded-md text-white ${
            chartType === "bar"
              ? "bg-blue-500 cursor-not-allowed opacity-70"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          📊 Barres
        </button>

        {Object.entries(allKeys).map(([key, { name }]) => (
          <label key={key} className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={visibleKeys.includes(key)}
              onChange={() => toggleKey(key)}
              className="mr-2"
            />
            {name}
          </label>
        ))}
      </div>

      {/* Conteneur graphique */}
      <div className="relative w-full overflow-hidden bg-rose-50 rounded-md">
        <div className="flex h-[400px]">
          {/* Axe Y complet et fixe */}
          <div className="z-10 bg-rose-50 sticky left-0 flex-shrink-0 border-r border-gray-200">
            <ResponsiveContainer width={70} height="100%">
              <LineChart data={data}>
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  stroke="#555"
                  axisLine={{ stroke: "#ccc" }}
                  tick={{ fill: "#333", fontSize: 12 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Graphique scrollable horizontalement */}
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide w-full">
            <div className="min-w-[900px] h-full">
              <ResponsiveContainer width="100%" height="100%">
                <ChartComponent
                  data={data}
                  margin={{ top: 20, right: 20, left: 0, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" stroke="#555" />
                  <YAxis hide />
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value}%`,
                      allKeys[props.dataKey]?.name,
                    ]}
                    labelFormatter={(label, payload) => {
                      const comment = payload?.[0]?.payload?.comment;
                      return comment ? `${label} — ${comment}` : label;
                    }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={40}
                    wrapperStyle={{ backgroundColor: "transparent" }}
                  />
                  {visibleKeys.map((key) => (
                    <ShapeComponent
                      key={key}
                      type="monotone"
                      dataKey={key}
                      name={allKeys[key].name}
                      stroke={allKeys[key].color}
                      fill={allKeys[key].color}
                    />
                  ))}
                </ChartComponent>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
