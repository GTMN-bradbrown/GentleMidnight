import lpAbi from '../json/gtmnAbi.json'
import lpData from '../json/gtmnData.json'

export default {
    triggers: ['init', 'accountsChanged', 'chainChanged'],
    dependencies: ['provider'],
    func: function() {
        return new Contract(gtmnData.addr, gtmnAbi
            , this.signer ?? this.provider)
    }
}