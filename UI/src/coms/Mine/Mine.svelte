<script>
    import gtmn from '@/data/gtmn.js'
    let chains = Object.values(gtmn).sort()
    let value = []
    $: console.log(value)
</script>

<select multiple bind:value size=3>
    {#each chains as chain}
        <option value={chain.name}>{chain.name}</option>
    {/each}
</select>

<style>
    option {
        font-size: 125%;
        padding: 2.5mm 1rem;
        font-family: monospace;
    }
</style>