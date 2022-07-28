const ethers = require('ethers');
const fs = require('fs-extra');

async function main() {
  // http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
  const wallet = new ethers.Wallet('2a016b54e69c7d252ac34d2ac5cf26c379a433f50d0d916570a085eec6c72e38', provider);
  const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8');
  const binary = fs.readFileSync('SimpleStorage_sol_SimpleStorage.bin', 'utf-8');

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log('Deploying please wait ........!');

  const contract = await contractFactory.deploy();
  //   console.log(contract);
    const transactionReceipt = await contract.deployTransaction.wait(1);
  //   console.log('here is the deployment transaction :', contract.deployTransaction);

  //   console.log('here is the transaction receipt :', transactionReceipt);

  //   const tx = {
  //     nonce: await wallet.getTransactionCount(),
  //     gasPrice: 20000000000,
  //     gasLimit: 1000000,
  //     to: null,
  //     value: 0,
  //     data: '0x608060405234801561001057600080fd5b50610777806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80636057361d1461005c5780636f760f41146100785780639e7a13ad14610094578063b05784b8146100c5578063b2ac62ef146100e3575b600080fd5b61007660048036038101906100719190610473565b610113565b005b610092600480360381019061008d9190610417565b61011d565b005b6100ae60048036038101906100a99190610473565b6101b3565b6040516100bc92919061054b565b60405180910390f35b6100cd61026f565b6040516100da9190610530565b60405180910390f35b6100fd60048036038101906100f891906103ce565b610278565b60405161010a9190610530565b60405180910390f35b8060008190555050565b6000604051806040016040528083815260200184815250905060018190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190805190602001906101889291906102a6565b5050508160028460405161019c9190610519565b908152602001604051809103902081905550505050565b600181815481106101c357600080fd5b90600052602060002090600202016000915090508060000154908060010180546101ec90610644565b80601f016020809104026020016040519081016040528092919081815260200182805461021890610644565b80156102655780601f1061023a57610100808354040283529160200191610265565b820191906000526020600020905b81548152906001019060200180831161024857829003601f168201915b5050505050905082565b60008054905090565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b8280546102b290610644565b90600052602060002090601f0160209004810192826102d4576000855561031b565b82601f106102ed57805160ff191683800117855561031b565b8280016001018555821561031b579182015b8281111561031a5782518255916020019190600101906102ff565b5b509050610328919061032c565b5090565b5b8082111561034557600081600090555060010161032d565b5090565b600061035c610357846105a0565b61057b565b9050828152602081018484840111156103785761037761070a565b5b610383848285610602565b509392505050565b600082601f8301126103a05761039f610705565b5b81356103b0848260208601610349565b91505092915050565b6000813590506103c88161072a565b92915050565b6000602082840312156103e4576103e3610714565b5b600082013567ffffffffffffffff8111156104025761040161070f565b5b61040e8482850161038b565b91505092915050565b6000806040838503121561042e5761042d610714565b5b600083013567ffffffffffffffff81111561044c5761044b61070f565b5b6104588582860161038b565b9250506020610469858286016103b9565b9150509250929050565b60006020828403121561048957610488610714565b5b6000610497848285016103b9565b91505092915050565b60006104ab826105d1565b6104b581856105dc565b93506104c5818560208601610611565b6104ce81610719565b840191505092915050565b60006104e4826105d1565b6104ee81856105ed565b93506104fe818560208601610611565b80840191505092915050565b610513816105f8565b82525050565b600061052582846104d9565b915081905092915050565b6000602082019050610545600083018461050a565b92915050565b6000604082019050610560600083018561050a565b818103602083015261057281846104a0565b90509392505050565b6000610585610596565b90506105918282610676565b919050565b6000604051905090565b600067ffffffffffffffff8211156105bb576105ba6106d6565b5b6105c482610719565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b8381101561062f578082015181840152602081019050610614565b8381111561063e576000848401525b50505050565b6000600282049050600182168061065c57607f821691505b602082108114156106705761066f6106a7565b5b50919050565b61067f82610719565b810181811067ffffffffffffffff8211171561069e5761069d6106d6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b610733816105f8565b811461073e57600080fd5b5056fea26469706673582212201af4896a1779f254643a10336210eeecc5e74a1707403251bd234ec5f55661f264736f6c63430008070033',
  //     chainId: 1337,
  //   };

  //   const signedTxResponse = await wallet.sendTransaction(tx);
  //   await signedTxResponse.wait(1);
  //   console.log('this is signed transaction:', signedTxResponse);

  const currentFavouriteNumber = await contract.retreive();

  console.log(currentFavouriteNumber);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
