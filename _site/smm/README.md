### TDL

Multi Axis


Chart.js သုံးပြီး Chart တွေနဲ့ ပြမယ်။
နောက် ဘယ် method ထဲကို ဒီ data တွေ ထည့်ပြီး ဘယ်လို output လိုသလဲ ကြည့်မယ်။

Method နှစ်ခု ရှိမယ်
- PLSR (partial least squares regression)
- BP-ANN (back propagation-artificial neural network)


partial least squares regression (PLSR) 
https://www.freecodecamp.org/news/the-least-squares-regression-method-explained/
https://github.com/daspinola/least-squares-regression


The formula
Y = a + bX
The formula, for those unfamiliar with it, probably looks underwhelming – even more so given the fact that we already have the values for Y and X in our example.

Having said that, and now that we're not scared by the formula, we just need to figure out the a and b values.

To give some context as to what they mean:

a is the intercept, in other words the value that we expect, on average, from a student that practices for one hour. One hour is the least amount of time we're going to accept into our example data set.
b is the slope or coefficient, in other words the number of topics solved in a specific hour (X). As we increase in hours (X) spent studying, b increases more and more.


```js
document.addEventListener('DOMContentLoaded', init, false);

function init() {
  const currentData = {
    pairs: [],
    slope: 0,
    coeficient: 0,
    line: [],
  };
  const btnUpdateGraph = document.querySelector('.btn-update-graph');
  const tablePairs = document.querySelector('.table-pairs');
  const spanFormula = document.querySelector('.span-formula');

  const inputX = document.querySelector('.input-x');
  const inputY = document.querySelector('.input-y');

  const chart = initChart();

  btnUpdateGraph.addEventListener('click', () => {
    const x = parseFloat(inputX.value);
    const y = parseFloat(inputY.value);

    updateTable(x, y);
    updateFormula(x, y);

    updateChart();

    clearInputs();
  });

  function updateChart() {
    chart.data.datasets[0].data = currentData.pairs;
    chart.data.datasets[1].data = currentData.line;

    chart.update();
  }

  function updateFormula(x, y) {
    currentData.pairs.push({ x, y });
    const pairsAmount = currentData.pairs.length;

    const sum = currentData.pairs.reduce((acc, pair) => ({
      x: acc.x + pair.x,
      y: acc.y + pair.y,
    }), { x: 0, y: 0 });

    const average = {
      x: sum.x / pairsAmount,
      y: sum.y / pairsAmount,
    };

    const slopeDividend = currentData.pairs
      .reduce((acc, pair) => parseFloat(acc + ((pair.x - average.x) * (pair.y - average.y))), 0);
    const slopeDivisor = currentData.pairs
      .reduce((acc, pair) => parseFloat(acc + (pair.x - average.x) ** 2), 0);

    const slope = slopeDivisor !== 0
      ? parseFloat((slopeDividend / slopeDivisor).toFixed(2))
      : 0;

    const coeficient = parseFloat(
      (-(slope * average.x) + average.y).toFixed(2),
    );

    currentData.line = currentData.pairs
      .map((pair) => ({
        x: pair.x,
        y: parseFloat((coeficient + (slope * pair.x)).toFixed(2)),
      }));

    spanFormula.innerHTML = `Formula: Y = ${coeficient} + ${slope} * X`;
  }

  function updateTable(x, y) {
    const tr = document.createElement('tr');
    const tdX = document.createElement('td');
    const tdY = document.createElement('td');

    tdX.innerHTML = x;
    tdY.innerHTML = y;

    tr.appendChild(tdX);
    tr.appendChild(tdY);

    tablePairs.querySelector('tbody').appendChild(tr);
  }

  function clearInputs() {
    inputX.value = '';
    inputY.value = '';
  }

  function initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');

    return new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          backgroundColor: 'rgb(125,67,120)',
          data: [],
        }, {
          label: 'Line Dataset',
          fill: false,
          data: [],
          type: 'line',
        }],
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            display: true,
            scaleLabel: {
              display: true,
              labelString: '(X)',
            },
          }],
          yAxes: [{
            type: 'linear',
            position: 'bottom',
            display: true,
            scaleLabel: {
              display: true,
              labelString: '(Y)',
            },
          }],
        },
      },
    });
  }
}
```

### back propagation-artificial neural network (BP-ANN)

https://github.com/rafinskipg/neural-network-js

### Model Building
In this study, partial least squares regression (PLSR) implemented in 
the Unscrambler X 10.4 software (CAMO Software AS, Oslo, Norway) 
was used to obtain prediction models. A three-layer structure (input, 
hidden, and output layer) back propagation-artificial neural network 
(BP-ANN) implemented in MATLAB R2019a (The MathWorks Inc., 
Natick, MA, USA) was also used for calculation to obtain a prediction 
model with higher accuracy. Based on the method of model construction 
described by Q. Sun, Zhang, and Yang (2019), the hidden neurons of the 
model were set as 10 (optimized from practical training based on the 
best model performance). The algorithm of LM (Levenberg-Marquardt) 
and gradient descent momentum learning function were employed for 
model training. The transfer function of the hidden layer adopted S-type 
logarithm function and the transfer function of the output layer was pure 
linear function. 
2.8. Figures of merit

### Figures of Merits
The performance of PLSR and BP-ANN prediction models was 
estimated through coefficients of determination of calibration, crossvalidation and prediction (R2
C, R2
CV, and R2
P; root-mean-square errors 
of calibration, cross-validation and prediction (RMSEC, RMSECV and 
RMSEP) and the residual predictive deviation (RPD) value of the 
models. The values of limits of detection (LOD) and quantification 
(LOQ) were calculated according to the method of (Schonbichler, ¨ Bittner, Weiss, Griesser, Pallua, & Huck, 2013) to access the usefulness of 
the constructed models. 


