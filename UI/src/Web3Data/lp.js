import lpAbi from '../json/gtmnAbi.json'
import gtmnData from '../json/gtmnData.json'

export default {
    id: 'lp',
    trips: ['init', 'accountsChanged', 'chainChanged'],
    needs: ['provider'],
    fn: function() {
        let { web3 } = this
        return new Contract(gtmnData.addr, gtmnAbi,
            web3.signer ?? web3.provider)
    }
}