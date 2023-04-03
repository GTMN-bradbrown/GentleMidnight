export default {
    id: 'block',
    trips: ['init', 'chainChanged'],
    needs: ['provider'],
    fn: async function(block) {
        let { web3 } = this
        return block ?? await web3.provider.getBlockNumber()
    }
}