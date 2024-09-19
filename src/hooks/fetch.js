

async function getData(currency) {
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
    //   console.log(typeof response)c
    // console.log("Response", response)
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data[currency];
    } 
    catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  // Example usage:
  getData("usd")
  .then(currency => {
    console.log('Currency:', currency);
  });
  