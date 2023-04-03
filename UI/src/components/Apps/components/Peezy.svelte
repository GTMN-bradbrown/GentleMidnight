<script>
    import { FloatingLabelInput } from 'flowbite-svelte'
    export let label
    export let value
    let display = value !== undefined ? `${value}` : '1000000000'
    $: display, onInput()
    function onInput() {
        if (display === undefined || display.match(/\s/) || display === ''
        || isNaN(display) || display.match(/-/) || display.match(/\./)
        || (label === 'Work' && BigInt(display) === 0n))
            { value = undefined; return }
        value = BigInt(display)
    }
</script>

<FloatingLabelInput
    bind:value={display}
    color={value === undefined ? 'red' : ''}
    class="font-mono mt-4"
    bind:label
/>