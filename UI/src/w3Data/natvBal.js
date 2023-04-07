export default {
    id: 'natvBal',
    trips: ['init', 'accountsChanged', 'chainChanged', 'block'],
    needs: ['provider', 'selectedAddress'],
    fn: async function() {
        let { web3 } = this
        return await web3.provider.getBalance(web3.selectedAddress)
    }
}