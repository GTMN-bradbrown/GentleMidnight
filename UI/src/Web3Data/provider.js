export default {
    triggers: ['init', 'accountsChanged', 'chainChanged'],
    dependencies: ['ethereum'],
    func: function() { return new BrowserProvider(this.ethereum) }
}