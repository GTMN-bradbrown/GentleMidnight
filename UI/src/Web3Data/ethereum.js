export default {
    id: 'ethereum',
    trips: ['init'],
    needs: [],
    fn: function() {
        let { foo } = this
        let { ethereum } = window
        ethereum.on('accountsChanged', () => foo.emit('trip', 'accountsChanged'))
        ethereum.on('chainChanged', () => foo.emit('trip', 'chainChanged'))
        return ethereum
    }
}