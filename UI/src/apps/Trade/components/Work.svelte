<script>
    import Peezy from './Peezy.svelte'
    export let subreq
    let value = subreq.work
    $: subreq.work = value, 
        subreq.valid = !Object.values(subreq).includes(undefined)
</script>

<Peezy bind:value label="Work"/>