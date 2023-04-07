<script>
    import { Card, Dropdown, DropdownItem, Chevron, Button, Checkbox }
        from 'flowbite-svelte'
    import * as chains from '@/data/chains'
    let value
    $: console.log(value)
</script>

<Card class="!w-full">
    <Button
        class={`bg-indigo-800 dark:bg-indigo-500 focus:ring-indigo-700
            focus:dark:ring-indigo-600 hover:bg-indigo-900
            dark:hover:bg-indigo-400`}
    >
        <Chevron>Mine Chains</Chevron>
    </Button>
    <Dropdown bind:value class="w-36 p-3 space-y-1 text-sm">
        {#each Object.values(chains) as chain, i (i)}
            <DropdownItem>
                <Checkbox>{chain.name}</Checkbox>
            </DropdownItem>
        {/each}
    </Dropdown>
</Card>