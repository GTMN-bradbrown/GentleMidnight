import gtmnAbi from '../json/gtmnAbi.json'
import { Contract } from 'ethers'

export default {
    id: 'p_gtmn',
    trips: ['init', 'accountsChanged', 'chainChanged'],
    needs: ['provider', 'gtmnData'],
    fn: function() {
        let { web3 } = this
        return new Contract(web3.gtmnData.gtmn, gtmnAbi, web3.provider)
    }
}