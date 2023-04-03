<script>
    import { Select, Label } from 'flowbite-svelte'
    import chains from '../../../json/chains.js'
    import { Web3 } from '../../../stores/Web3';
    export let subreq
    let foo = subreq.dest
    $: otherChains = chains
        .filter(chain => chain.value !== BigInt($Web3.chainId))
    $: foo, onChange()
    $: chainId = $Web3.chainId
    $: chainId, onChainChange()
    function onChainChange() { foo = subreq.dest ?? '' }
    function onChange() {
        if (foo === '') { subreq.dest = undefined; return }
        subreq.dest = foo
        subreq = subreq
    }
    $: subreq.valid = !Object.values(subreq).includes(undefined)
</script>

<Label color={!foo ? 'red' : ''}>Destination</Label>
<Select
    class={`!ring-0 border-0 border-b-2 rounded-none bg-white dark:bg-gray-800
        text-slate-600 dark:text-slate-400 ${!foo ? '!border-red-500' : ''}`}
    items="{otherChains}"
    placeholder="Select a chain"
    bind:value={foo}
/>