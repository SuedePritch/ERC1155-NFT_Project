const { accounts, contract } = require('@openzeppelin/test-environment');

// Use the different accounts, which are unlocked and funded with Ether
const [ admin, deployer, user ] = accounts;

// Create a contract object from a compilation artifact
const MyContract = contract.fromArtifact('MyContract');

module.exports = async function main (callback) {
    try {
    // Retrieve accounts from the local node
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts)


    // Set up a Truffle contract, representing our deployed Box instance
    const Box = artifacts.require('Box');
    const box = await Box.deployed();

    // Call the retrieve() function of the deployed Box contract
    // const value = await box.retrieve();
    // console.log('Box value is', value.toString());

    // Send a transaction to store() a new value in the Box
    await box.store(23);

    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());


        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
  };