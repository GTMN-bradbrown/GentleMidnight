export default {
    id: 'chainId',
    trips: ['init', 'chainChanged'],
    needs: ['ethereum'],
    fn: function() {
        let { web3 } = this
        return web3.ethereum.chainId
    }
}