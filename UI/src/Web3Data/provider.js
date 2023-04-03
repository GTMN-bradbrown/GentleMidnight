import { BrowserProvider } from 'ethers'
import { get } from 'svelte/store'

export default {
    id: 'provider',
    trips: ['init', 'accountsChanged', 'chainChanged'],
    needs: ['ethereum'],
    fn: function() {
        let { Web3, web3, foo } = this
        let provider = new BrowserProvider(web3.ethereum)
        if (foo.poll) clearInterval(foo.poll)
        foo.poll = setInterval(async () => {
            let block = await provider.getBlockNumber()
            if (block === get(Web3).block) return
            foo.emit('trip', 'block', block)
        }, 5000)
        return provider
    }
}