import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

const Dashboard = ({ data }) => {
  const { tasksCompleted, totalTasks, latestTasks } = data;
  const chartData = [["Completed", "Count"]];

  useEffect(() => {
    let completed = ["Completed", tasksCompleted];
    let total = ["Total", totalTasks];
    chartData.push(completed);
    chartData.push(total);
  }, [tasksCompleted, totalTasks]);

  return (
    <div className="container mb-2 mt-3">
      <div className="d-none d-md-flex custom-row">
        <div className="card ">
          <div className="card-body">
            {totalTasks && (
              <>
                <h5>Tasks Completed</h5>
                <span>
                  <span className="complete">{tasksCompleted}</span>
                  <span className="total">/{totalTasks}</span>
                </span>
              </>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            {latestTasks && (
              <>
                <h5>Latest Created Task</h5>
                <ul>
                  {latestTasks.map((item) => {
                    return (
                      <li className={item.completed ? "task-completed" : ""}>
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            {chartData.length > 0 && (
              <>
                <h5>Chart</h5>
                <Chart
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={chartData}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="d-md-none">
        <div className="card mb-2">
          <div className="card-body">
            {totalTasks && (
              <>
                <h5>Tasks Completed</h5>
                <span>
                  <span className="complete">{tasksCompleted}</span>
                  <span className="total">/{totalTasks}</span>
                </span>
              </>
            )}
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            {latestTasks && (
              <>
                <h5>Latest Created Task</h5>
                <ul>
                  {latestTasks.map((item) => {
                    return (
                      <li className={item.completed ? "task-completed" : ""}>
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            {chartData.length > 0 && (
              <>
                <h5>Chart</h5>
                <Chart
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={chartData}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
