<script>
    import { P } from 'flowbite-svelte'
    import Logo from './Logo.svelte'
    import Hamburger from './Hamburger.svelte'
    export let activeApp
</script>

<div class="grid grid-cols-3 py-1 px-2">
    <Hamburger bind:activeApp/>
    <div class="w-full h-[38px] col-start-2">
        <Logo/>
    </div>
    <P class="px-2 lowercase flex flex-row-reverse items-center !font-bold !text-2xl text-indigo-900 dark:text-indigo-500">
        {activeApp}
    </P>
</div>