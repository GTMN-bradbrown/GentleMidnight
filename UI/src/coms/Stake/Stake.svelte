<script>
    import { Web3Input } from '@/coms/common'
    let value
    $: console.log(value)
</script>

<Web3Input bind:value decimals={6} max={100000000000n}/>