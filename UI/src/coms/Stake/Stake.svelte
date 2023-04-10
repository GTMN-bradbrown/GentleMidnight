<script>
    import { Web3Input } from '@/coms/common'
    import { onMount, onDestroy } from 'svelte'
    import { medium } from '@/medium'
    onMount(() => {
        // ethereum.on('chainChanged', chainId => {
        //     medium.unwatch({ app: 'stake', chainId})
        // })
        medium.watch({ app: 'stake', chainId: ethereum.chainId })
    })
    onDestroy(() => medium.unwatch({ app: 'stake', chainId: ethereum.chainId }))
    let value
    $: console.log(value)
</script>

<Web3Input bind:value decimals={6} max={100000000000n}/>