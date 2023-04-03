export default {
    id: 'selectedAddress',
    trips: ['init', 'accountsChanged'],
    needs: ['ethereum'],
    fn: function() {
        let { web3 } = this
        return web3.ethereum.selectedAddress
    }
}