# Incorrect Ether Balance Display in Dapp

This repository demonstrates a common bug in Dapps where the balance is incorrectly displayed due to unit conversion issues. The `getBalance()` function retrieves the balance in Wei, which needs to be converted to Ether for proper display. 

## Bug
The `getBalanceBug.js` file contains a function that retrieves the balance using web3.js. However, it fails to convert the balance from Wei to Ether, resulting in an incorrect display. 

## Solution
The `getBalanceSolution.js` file provides the corrected function. It converts the balance from Wei to Ether before returning it. This ensures that the balance is displayed correctly in the Dapp. 