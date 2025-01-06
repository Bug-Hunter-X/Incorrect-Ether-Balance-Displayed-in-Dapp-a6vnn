function getBalance() {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
  return balanceEther;
}
//The above function retrieves the balance in Wei and converts it to Ether before returning it.