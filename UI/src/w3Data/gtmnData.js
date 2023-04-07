import gtmnData from '../json/gtmnData.json'

export default {
    id: 'gtmnData',
    trips: ['init', 'chainChanged'],
    needs: ['chainId'],
    fn: function() {
        let { web3 } = this
        return gtmnData[web3.chainId] ?? null
    }
}