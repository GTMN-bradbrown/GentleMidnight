<script>
    import AlertCircleOutline
        from 'svelte-material-icons/AlertCircleOutline.svelte'
    import Delete from 'svelte-material-icons/Delete.svelte'
    import { Web3 } from '../../../stores/Web3.js'
    import chains from '../../../json/chains.js'
    export let subreqs
    export let subreq
    let chainIdToName = Object.fromEntries(
        chains.map(obj => [[obj.value], [obj.name]])
    )
    $: source = $Web3.chainId ? chainIdToName[BigInt($Web3.chainId)]
        : undefined
    $: dest = chainIdToName[subreq.dest]
    function metric(n) {
        let foo = `${n}`.length - 18
        if (n === 0n) return '0 '
        let bar = 
            (foo <= 0 ? foo - (3 - -(foo % 3)) : (foo - 1) - (foo - 1) % 3)
            / 3 + 10
        let baz = foo <= 0 ? (3 - -(foo % 3)) : (foo - 1) % 3 + 1
        let boo = bar === 0 ? '' : 'qryzafpnμm kMGTPEZYRQ'[bar]
        let faz = `${n}`.substring(0, baz)
        return `${faz} ${boo}`
    }
    function onDelete() {
        let index = $subreqs.indexOf(subreq)
        subreqs.set(
            [...$subreqs.slice(0, index), ...$subreqs.slice(index + 1)]
        )
    }
</script>

<button
    on:click|stopPropagation={onDelete}
    class={`rounded-full focus:ring-4 focus:ring-indigo-500
        hover:bg-indigo-300 active:bg-indigo-400 dark:hover:bg-indigo-700
        dark:active:bg-indigo-600`}
>
    <Delete size=24/>
</button>
{#if subreq.valid === false || source === undefined}
    <AlertCircleOutline size=24 color="#F44336"/>
{:else}
    <span class="font-mono text-xs">
        {`${metric(subreq.input)}${source} > ${metric(subreq.output)}${dest}`}
    </span>
{/if}