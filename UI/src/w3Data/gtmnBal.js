export default {
    id: 'gtmnBal',
    trips: ['init', 'accountsChanged', 'chainChanged', 'block'],
    needs: ['s_gtmn', 'selectedAddress'],
    fn: async function() {
        let { web3 } = this
        return await web3.s_gtmn.balanceOf(web3.selectedAddress)
    }
}