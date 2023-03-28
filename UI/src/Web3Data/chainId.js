export default {
    triggers: ['init', 'chainChanged'],
    dependencies: ['ethereum'],
    func: function() { return this.ethereum.chainId }
}