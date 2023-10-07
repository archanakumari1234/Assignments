/*      Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.     */



// Define the store's inventory as an object
const storeInventory = {
    item1: 10,   // Price in USD
    item2: 25,   // Price in USD
    item3: 5.5,  // Price in USD
  };
  
  // Define the exchange rate
  const usdToInrExchangeRate = 80;
  
  // Convert prices to Indian Rupees using the map function
  const inventoryInRupees = Object.keys(storeInventory).map((itemName) => {
    const priceInUSD = storeInventory[itemName];
    const priceInRupees = priceInUSD * usdToInrExchangeRate;
  
    return { [itemName]: priceInRupees };
  });
  
  // Convert the array of objects to a single object
  const inventoryInRupeesObject = Object.assign({}, ...inventoryInRupees);
  
  // Output the converted inventory
  console.log("Store Inventory in Indian Rupees:");
  console.log(inventoryInRupeesObject);
  