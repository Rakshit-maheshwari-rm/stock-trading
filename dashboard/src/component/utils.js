import axios from "axios";

export const calculateTotals = (holdings=[]) => {
  const totals = holdings.reduce(
    (total, stock) => {
      const investment = stock.avg * stock.qty;
      const currentValue = stock.price * stock.qty;
      const dayPL = (parseFloat(stock.day) / 100) * currentValue;

      total.totalInvestment += investment;
      total.totalCurrentValue += currentValue;
      total.totalProfit += currentValue - investment;
      total.totalDayPL += dayPL;

      return total;
    },
    {
      totalInvestment: 0,
      totalCurrentValue: 0,
      totalProfit: 0,
      totalDayPL: 0,
    }
  );

  const weightedNetPercent = (totals.totalProfit / totals.totalInvestment) * 100;
  const weightedDayPercent = (totals.totalDayPL / totals.totalInvestment) * 100;

  return {
    ...totals,
    weightedNetPercent,
    weightedDayPercent,
  };
};

export const downloadTable = (tableId, fileName) => {
  const table = document.getElementById(tableId);
  if (!table) return;

  let csv = [];

  for (let row of table.rows) {
    let rowData = [];
    for (let cell of row.cells) {
      rowData.push(cell.innerText.replace(/,/g, ""));
    }
    csv.push(rowData.join(","));
  }

  const csvString = csv.join("\n");

  const blob = new Blob([csvString], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const formatCompactNumber = (value) => {
  const num = Number(value);

  if (!Number.isFinite(num)) return "0.00";

  if (Math.abs(num) >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + "B";
  }
  if (Math.abs(num) >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + "M";
  }
  if (Math.abs(num) >= 1_000) {
    return (num / 1_000).toFixed(2) + "k";
  }

  return num.toFixed(2);
};


export const fetchOrders = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders/get-order`);
    return res.data;
  } catch (err) {
    console.error("Error fetching orders:", err);
    return [];
  }
};