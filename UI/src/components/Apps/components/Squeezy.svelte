<script>
    import { FloatingLabelInput } from 'flowbite-svelte'
    export let label
    export let value
    let display = value === undefined ? undefined
        : `${`${value}`.padStart(19, '0').slice(0, -18)}.${`${value}`.padStart(19, '0').slice(-18)}`
            .replace(/\.?0*$/, '')
    $: display, onInput()
    function onInput() {
        if (display === undefined || display.match(/\s/) || display === ''
        || isNaN(display) || display.match(/-/)) { value = undefined; return }
        let decimal = display.match(/\./)
        let afterDecimal = decimal
            ? display
                .substring(decimal.index + 1)
                .padEnd(18, '0')
                .substring(0, 18)
            : undefined
        let beforeDecimal = decimal
            ? display.substring(0, decimal.index)
            : `${display}${''.padEnd(18, '0')}`
        value = BigInt(`${beforeDecimal}${afterDecimal ?? ''}`)
    }
</script>

<FloatingLabelInput
    bind:value={display}
    color={value === undefined ? 'red' : ''}
    class="font-mono mt-4"
    bind:label
/>