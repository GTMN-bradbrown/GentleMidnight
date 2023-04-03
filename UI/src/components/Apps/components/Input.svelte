<script>
    import Squeezy from './Squeezy.svelte'
    export let subreq
    let value = subreq.input
    $: subreq.input = value, 
        subreq.valid = !Object.values(subreq).includes(undefined)
</script>

<Squeezy label="Input" bind:value/>