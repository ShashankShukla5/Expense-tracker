import React from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function ExpenseChart() {
  let data = useSelector((state) => state.expenses.expenseStore) || [];
  if (data.length === 0) {
    return <h1>No Expense Data Available</h1>; // Prevent crash
  }
  let total = data.reduce((acc, curr)=>{
      if(!acc[curr.category]){
        acc[curr.category] = 0
      }
      acc[curr.category] += Number(curr.amount)
      return acc
  }, {})

  // console.log(total)

  return (
    <div className="flex justify-center items-center w-screen h-screen p-16">
      <Pie
        data={{
          labels: Object.keys(total),
          datasets: [
            {
              label: "Expense Distribution",
              data: Object.values(total),
            },
          ],
        }}
      />
    </div>
  );
}

export default ExpenseChart;
