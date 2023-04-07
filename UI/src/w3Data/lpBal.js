export default {
    id: 'lpBal',
    trips: ['init', 'accountsChanged', 'chainChanged', 'block'],
    needs: ['lp', 'selectedAddress'],
    fn: async function() {
        let { web3 } = this
        return await web3.lp.balanceOf(web3.selectedAddress)
    }
}