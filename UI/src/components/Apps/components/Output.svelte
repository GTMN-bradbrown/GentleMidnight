<script>
    import Squeezy from './Squeezy.svelte'
    export let subreq
    let value = subreq.output
    $: subreq.output = value, 
        subreq.valid = !Object.values(subreq).includes(undefined)
</script>

<Squeezy label="Output" bind:value/>