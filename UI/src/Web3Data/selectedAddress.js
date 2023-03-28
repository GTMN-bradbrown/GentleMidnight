export default {
    triggers: ['init', 'accountsChanged'],
    dependencies: ['ethereum'],
    func: function() { return this.ethereum.selectedAddress }
}