<script>
    import { Button } from "flowbite-svelte"
    import Drawer from "./Drawer.svelte"
    export let activeApp
    let hideDrawer = true
</script>

<Drawer bind:hideDrawer bind:activeApp/>

<div class="flex items-center">
    <Button on:click={() => hideDrawer = false} pill outline class="!p-2 border-none hover:bg-indigo-100 dark:hover:bg-indigo-700 active:bg-indigo-300 dark:active:bg-indigo-800 focus:ring-indigo-300 dark:focus:ring-indigo-900">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path class="dark:stroke-indigo-500 stroke-indigo-900 stroke-2" d="M3 7H21"/>
            <path class="dark:stroke-indigo-500 stroke-indigo-900 stroke-2" d="M3 12H21"/>
            <path class="dark:stroke-indigo-500 stroke-indigo-900 stroke-2" d="M3 17H21"/>
        </svg>
    </Button>
</div>