<script>
    import { Card, Dropdown, Chevron, Button, Checkbox }
        from 'flowbite-svelte'
    import chains from '../../json/chains'
</script>

<Card class="!w-full">
    <Button
        class={`bg-indigo-800 dark:bg-indigo-500 focus:ring-indigo-700
            focus:dark:ring-indigo-600 hover:bg-indigo-900
            dark:hover:bg-indigo-400`}
    >
        <Chevron>Mine Chains</Chevron>
    </Button>
    <Dropdown class="w-36 p-3 space-y-1 text-sm">
        {#each chains as chain, i (i)}
            <li><Checkbox>{chain.name}</Checkbox></li>
        {/each}
    </Dropdown>
</Card>