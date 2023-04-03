<script>
    export let activeApp
    let activeAppComponent
    $: (async () => activeAppComponent =
        (await import(`./Apps/${activeApp}.svelte`)).default)()
</script>

<div class="p-2 flex flex-col items-center">
    <svelte:component this={activeAppComponent}/>
</div>