<script>
    import { Heading, CloseButton, Button } from 'flowbite-svelte'
    import { fade, fly } from "svelte/transition"
    import appNames from '../json/appNames.json'
    export let hideDrawer
    export let activeApp
    let maskFadeParams = { duration: 250 }
    let drawerFlyParams = { x: -300, duration: 250 }
    function onClick(appName) {
        activeApp = appName
        setTimeout(() => hideDrawer = true)
    }
</script>

{#if !hideDrawer}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
        in:fade={maskFadeParams}
        class="fixed top-0 left-0 z-50 w-full h-full bg-gray-900/75"
        on:click={() => hideDrawer = true}
    />
    <div in:fly={drawerFlyParams} class="bg-yellow-50 overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800 w-32 fixed inset-y-0 left-0" tabindex="-1">
        <div class="mb-3 flex items-center">
            <Heading tag="h5" class="flex items-center text-gray-900 dark:text-yellow-50">
                Apps
            </Heading>
            <CloseButton on:click={() => hideDrawer = true}/>
        </div>
        <div class="flex flex-col items-center">
            {#each appNames as name (name)}
                <Button on:click={() => onClick(name)} outline class="mt-3 border-0 hover:bg-indigo-100 dark:hover:bg-indigo-800 active:bg-indigo-300 dark:active:bg-indigo-900 focus:ring-indigo-300 dark:focus:ring-indigo-900">
                    <span class="text-lg text-indigo-900 dark:text-indigo-500">
                        {name}
                    </span>
                </Button>
            {/each}
        </div>
    </div>
{/if}