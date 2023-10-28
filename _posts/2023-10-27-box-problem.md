---
layout: post
title:  "Spin Shot on Dji OSMO Mobile 6"
date:   2023-10-25 00:12:00 +0630
categories: howto
---

```js
function calculateOptimalBoxSize(productDimensions) {
  // Calculate the total dimensions of the products
  const totalWidth = productDimensions.reduce((acc, product) => acc + product.width, 0);
  const totalLength = Math.max(...productDimensions.map(product => product.length));
  const totalHeight = Math.max(...productDimensions.map(product => product.height));

  // Choose the optimal box size
  const optimalBoxSize = {
    width: totalWidth,
    length: totalLength,
    height: totalHeight,
  };

  return optimalBoxSize;
}

// Define the dimensions of your products
const products = [
  { width: 10, height: 5, length: 4 },
  { width: 5, height: 4, length: 10 },
  { width: 4, height: 10, length: 5 },
];

// Calculate the optimal box size
const optimalBox = calculateOptimalBoxSize(products);

// Print the optimal box size
console.log("Optimal Box Size:", optimalBox);

```



Certainly! Here's a list of common box sizes with their dimensions in centimeters (cm). Keep in mind that box sizes can vary by delivery service provider, so it's essential to check with your specific provider for their available box sizes.

1. Small Box:
   - Width: 15 cm
   - Height: 10 cm
   - Length: 20 cm

2. Medium Box:
   - Width: 30 cm
   - Height: 20 cm
   - Length: 30 cm

3. Large Box:
   - Width: 40 cm
   - Height: 30 cm
   - Length: 40 cm

4. Extra-Large Box:
   - Width: 50 cm
   - Height: 40 cm
   - Length: 50 cm

5. Wardrobe Box:
   - Width: 50 cm
   - Height: 100 cm
   - Length: 60 cm

6. Flat Rate Envelope (Padded):
   - Width: 25 cm
   - Height: 30 cm
   - Length: Variable (usually about 5 cm)

7. Legal Flat Rate Envelope:
   - Width: 38 cm
   - Height: 30 cm
   - Length: Variable (usually about 5 cm)

8. Small Flat Rate Box:
   - Width: 22 cm
   - Height: 15 cm
   - Length: 10 cm

9. Medium Flat Rate Box:
   - Width: 28 cm
   - Height: 17 cm
   - Length: 17 cm

10. Large Flat Rate Box:
    - Width: 30 cm
    - Height: 30 cm
    - Length: 40 cm

Please note that these are approximate dimensions and can vary depending on the delivery service provider or country. If you need specific box sizes for a particular courier or service, it's best to check their official website or contact their customer support for the most accurate information.

product 1  w : 10cm, h : 5cm, l : 4cm
product 2 w :  5cm, h : 4cm, l : 10cm
product 3  w : 4cm, h : 10cm, l : 5cm



It should be 10, 5 , 12


Product 1:
* Width: 10 cm
* Height: 5 cm
* Length: 4 cm
Product 2:
* Width: 5 cm
* Height: 4 cm
* Length: 10 cm
Product 3:
* Width: 4 cm
* Height: 10 cm
* Length: 5 cm





