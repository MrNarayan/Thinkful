/*
  When any of the following function's parameters reference `albums`, they are referencing an array full of objects with the following shape:
   {
     name: "My Favorite Things",
     priceInCents: 800,
     availableFormats: ["CD","Cassette","Vinyl"]
   }   
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndFormat(albums, name, format) {
  for (const album in albums) {
    if(album.name === name)
      {
        for (const avlblFormat in album.availableFormats) {
            if(avlblFormat === format)
              {
                  console.log(album);
              }
        }
      }
}

}

function calculateTotal(cart) {
 // TODO: Write your solution here
 // Hint: To loop through the properties of the `cart` object, you can use the for...in syntax
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 for (const item in cart) {
  let total = 0;
	for (const album in cart[item]) {
		total += album.priceInCents;
	}
	return printablePrice(total);
}

}

// TODO: Fix the function below so that it passes the tests.
function printReceipt(cart) {
  const total = calculateTotal(cart);
  if (!total) return null;

  let result = "";
  for (let name in cart) {
    const { quantity, priceInCents } = cart[name];
    const amount = printablePrice(priceInCents);
    result += `${quantity}x ${name} - ${amount}\n`;
  }

  return result + `Total:`;
}

module.exports = {
  chooseItemByNameAndFormat,
  calculateTotal,
  printReceipt,
};
