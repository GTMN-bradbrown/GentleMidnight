<script>
    export let decimals = 18, max = 2000000000000000000n
    let value, textValue, rangeValue
    $: console.log(value)
    function onTextInput() {
        if (textValue.match(/[^\d\.]|\..*\.|^\.?$/))
            return value = rangeValue = undefined
        let tmp = textValue
        let index = tmp.match(/\./)?.index ?? tmp.length - 1
        let fracs = tmp.length - 1 - index
        let zeros = Array(Math.max(decimals - fracs, 0)).fill('0').join('')
        if (fracs > decimals) tmp = tmp.slice(0, decimals - fracs)
        tmp = tmp.replace(/\./, '')
        value = BigInt(`${tmp}${zeros}`)
        rangeValue = value * 100n / max
    }
    function onRangeInput() {
        value = BigInt(rangeValue) * max / 100n
        let tmp = `${value}`.padStart(decimals, '0')
        if (tmp.length == decimals) tmp = `0.${tmp}`
        else tmp = `${tmp.slice(0, tmp.length - decimals)}.${
            tmp.slice(tmp.length - decimals)}`
        tmp = tmp.replace(/\.?0*$/, '')
        textValue = tmp
    }
</script>

<input bind:value={textValue} on:input={onTextInput} type="text">
<input bind:value={rangeValue} on:input={onRangeInput} type="range">

<style>
    input {
        height: 9mm;
        font-size: x-large;
    }
    input[type="text"] {
        background: transparent;
        border: none;
        border-bottom: 2px solid #F6F1D5;
        caret-color: #F6F1D5;
        color: #F6F1D5;
        font-family: monospace;
    }
    input[type="range"] {
        accent-color: #F6F1D5;
    }
</style>