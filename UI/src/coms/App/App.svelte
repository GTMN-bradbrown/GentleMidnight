<script>
    import { current } from '@/stores/AppSelect.js'
    let app
    $: $current, _()
    async function _() {
        app = (await import(`@/coms/${$current}/index.js`)).app
    }
</script>

<div>
    <svelte:component this={app}/>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 5mm;
        padding: 0 1rem;
    }
</style>