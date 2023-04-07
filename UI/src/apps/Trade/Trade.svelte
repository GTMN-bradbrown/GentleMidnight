<script>
    import { Card, Accordion, AccordionItem, Button, P, Toast, A }
        from 'flowbite-svelte'
    import Plus from 'svelte-material-icons/Plus.svelte'
    import Destination from '../../components/Destination.svelte'
    import { Input, Output, Gas, Work, Summary }
        from '../../components/TradeForm.js'
    import { writable } from 'svelte/store'
    import { Web3 } from '../../../../stores/Web3'
    import explorers from '../../../json/explorers.json'
    import chains from '../../../../json/chains.js'
    let chainIdToName = Object.fromEntries(
        chains.map(obj => [[obj.value], [obj.name]])
    )
    let subreqs = writable([{ valid: false }])
    function onCreate() {
        subreqs.set([...$subreqs, { valid: false }])
    }
    let chainId = $Web3.chainId
    $: chainId = $Web3.chainId
    $: chainId, onChainChange()
    function onChainChange() {
        $subreqs.forEach(subreq => {
            if (subreq.dest !== $Web3.chainId) return
            subreq.dest = undefined
            subreq.valid = !Object.values(subreq).includes(undefined)
            subreq = subreq
        })
    }
    let toasts = []
    async function onTrade() {
        let _subreqs = []
        $subreqs.forEach(subreq => {
            let { valid, ...data } = subreq
            _subreqs.push(data)
        })
        let txRes = await $Web3.s_gtmn.trade($subreqs, { value: natvCost })
        let hash = txRes.hash
        let link = `${explorers[$Web3.chainId]}/tx/${hash}`
        hash = `${hash.substring(0, 5)}...`
        let toast = { link, hash }
        toasts = [...toasts, toast]
    }
    $: gtmnCost = $subreqs
        .map(subreq => subreq.gas)
        .filter(gas => gas !== undefined)
        .reduce((p, c) => p + c, 0n)
    $: natvCost = $subreqs
        .map(subreq => subreq.input)
        .filter(input => input !== undefined)
        .reduce((p, c) => p + c, 0n)
    $: gtmnSufficient = $Web3.gtmnBal >= gtmnCost
    $: natvSufficient = $Web3.natvBal >= natvCost
    $: tradeButtonText = !gtmnSufficient ? 'Insufficient GTMN'
        : (!natvSufficient
            ? `Insufficient ${chainIdToName[BigInt($Web3.chainId)]}`
            : 'Trade') 
</script>

{#each toasts as toast, i (i)}
    <Toast position="bottom-left" class="!max-w-[225px] !p-2 !font-mono">
        <A href={toast.link} target="_blank">
            {`Explorer: ${toast.hash}`}
        </A>
    </Toast>
{/each}

<Card class="!w-full">
    {#if $Web3.s_gtmn !== null}
        {#if $subreqs.length !== 0}
            <Accordion class="rounded-xl mb-4">
                {#each $subreqs as subreq, i (i)}
                    <AccordionItem
                        class={`!ring-0
                        ${$subreqs.length == 1 ? '!rounded-xl' : ''}`}
                    >
                        <Summary bind:subreqs bind:subreq slot="header"/>
                        <Destination bind:subreq/>
                        <Input bind:subreq/>
                        <Output bind:subreq/>
                        <Gas bind:subreq/>
                        <Work bind:subreq/>
                    </AccordionItem>
                {/each}
            </Accordion>
        {/if}
        <div class="flex justify-center">
            <button
                on:click={onCreate}
                class={`rounded-full focus:ring-4 mb-4 focus:ring-indigo-500
                    hover:bg-indigo-300 active:bg-indigo-400
                    dark:hover:bg-indigo-700 dark:active:bg-indigo-600`}
            >
                <Plus size=32/>
            </button>
        </div>
        <Button
            class={`bg-indigo-800 dark:bg-indigo-500 focus:ring-indigo-700
                focus:dark:ring-indigo-600 hover:bg-indigo-900
                dark:hover:bg-indigo-400`}
            on:click={onTrade}
            disabled={$subreqs.length === 0
                || $subreqs.map(subreq => !subreq.valid)
                    .reduce((p, c) => p || c)
                || natvSufficient === false
                || gtmnSufficient === false}
        >
            {tradeButtonText}
        </Button>
    {:else if $Web3.p_gtmn === null}
        <P>
            {`The Trade app cannot be used on this chain (${$Web3.chainId}).`}
        </P>
    {:else if $Web3.signer === null}
        <P class="mb-4">
            {`The Trade app cannot be used without connecting a Metamask wallet.`}
        </P>
        <Button
            class={`bg-indigo-800 dark:bg-indigo-500 focus:ring-indigo-700
                focus:dark:ring-indigo-600 hover:bg-indigo-900
                dark:hover:bg-indigo-400`}
                on:click={() => $Web3.provider.getSigner()}
        >
            Connect
        </Button>
    {:else}
        <P>
            Something odd happened. Try refreshing the page.
        </P>
    {/if}
</Card>