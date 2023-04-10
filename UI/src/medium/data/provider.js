import gtmn from '@/data/gtmn.js'
import { JsonRpcProvider } from 'ethers'

export default {
    id: 'provider',
    trips: ['newWatch'],
    apps: ['stake'],
    needs: [],
    fn: function() {
        let { chain, medium } = this
        let { id, poll, data } = chain
        let provider = new JsonRpcProvider(gtmn[id].rpc)
        if (poll) clearInterval(poll)
        chain.poll = setInterval(async () => {
            console.log('poll')
            let block = await provider.getBlockNumber().catch(() => {})
            if (block === undefined) return
            if (block > data[block] || data[block] === undefined)
                medium.trip({ trip: 'block', chain, block })
        }, 5000);
        return provider
    }
}