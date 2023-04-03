export default {
    id: 'signer',
    trips: ['init', 'accountsChanged', 'chainChanged'],
    needs: ['provider', 'selectedAddress'],
    fn: async function() {
        let { web3 } = this
        return web3.selectedAddress ? await web3.provider.getSigner() : null
    }
}