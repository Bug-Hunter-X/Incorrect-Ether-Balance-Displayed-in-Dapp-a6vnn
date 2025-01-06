function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//Error:  The above function will return the balance in Wei, not in Ether. 