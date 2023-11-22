import CanvasJS from "@canvasjs/charts";

export default function chartRenderer(props) {
  const data = convertToChartData(props) || [];

  const options = {
    title: {
      text: "FizzBuzz Column Chart",
    },
    data: [
      {
        type: "column",
        dataPoints: data,
      },
    ],
  };
  const Chart = new CanvasJS.Chart("CanvasContainer", options);
  Chart.render();
}

function convertToChartData(fizzBuzzOutput) {
  if (fizzBuzzOutput && fizzBuzzOutput.length > 0) {
    return fizzBuzzOutput.reduce((acc, el) => {
      const index = acc.findIndex((findEl) => {
        if (isNaN(el)) {
          //text zuordnen
          return findEl.label && findEl.label == el ? true : false;
        } else {
          //zahl zuordnen
          return findEl.label && !isNaN(findEl.label) ? true : false;
        }
      });

      if (index != -1) {
        acc[index] = { label: el, y: acc[index].y + 1 };
        return acc;
      } else {
        return [...acc, { label: el, y: 1 }];
      }
    }, []);
  }
}
