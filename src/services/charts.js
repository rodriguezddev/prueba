const ourPlansStartChart = {
  fill: {
    colors: ["#42AFE7"]
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "75%"
      },
      track: {
        background: "#C3E6F8",
        margin: 0
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: 30,
          show: true,
          color: "#123291",
          fontSize: "13px"
        },
        value: {
          color: "#123291",
          fontSize: "50px",
          offsetY: -10,
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: "round"
  },
  labels: ["DE PROTECCIÓN"]
};

const ourPlansSelectedChart = {
  fill: {
    colors: ["#58C347"]
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "75%"
      },
      track: {
        background: "#BCE19E",
        margin: 0
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: 30,
          show: true,
          color: "#123291",
          fontSize: "13px"
        },
        value: {
          color: "#123291",
          fontSize: "50px",
          offsetY: -10,
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: "round"
  },
  labels: ["DE PROTECCIÓN"]
};

export default {
  ourPlansStartChart,
  ourPlansSelectedChart
};
