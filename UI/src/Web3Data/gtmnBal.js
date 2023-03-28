export default {
    triggers: ['init', 'accountsChanged', 'chainChanged', 'block'],
    dependencies: ['gtmn', 'selectedAddress'],
    func: async function() {
        return await this.gtmn.balanceOf(this.selectedAddress)
    }
}