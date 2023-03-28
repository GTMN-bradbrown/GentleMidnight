export default {
    triggers: ['init', 'accountsChanged', 'chainChanged'],
    dependencies: ['provider', 'selectedAddress'],
    func: async function() {
        if (this.selectedAddress) return await provider.getSigner()
    }
}