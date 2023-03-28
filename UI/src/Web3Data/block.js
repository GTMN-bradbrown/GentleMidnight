export default {
    triggers: ['init', 'block'],
    dependencies: ['provider'],
    func: async function(block) {
        return block ?? await this.provider.getBlockNumber()
    }
}