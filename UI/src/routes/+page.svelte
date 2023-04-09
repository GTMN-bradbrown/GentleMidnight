<script>
    import { Header } from '@/coms/Header'
    import AppSelect from '../coms/AppSelect/AppSelect.svelte';
</script>

<AppSelect/>
<Header/>

<!-- <script>
    let apps = ['TRADE', 'MINE', 'STATS', 'HOLD', 'DUST', 'STAKE', 'CLAIM']
</script>

<div>
    {#each apps as app}
        <button>{app}</button>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 4px;
        gap: 4px;
    }
    button {
        display: block;
        width: 80px;
        height: 40px;
        background-color: transparent;
        color: #3F00FF;
        border: none;
        cursor: pointer;
        transition: all 0.125s ease;
        border-radius: 15px;
        font-family: 'Montserrat', sans-serif;
        font-size: large;
        border: 2px solid #3F00FF;
    }
    button:hover {
        border-radius: 10px;
    }
    button:active {
        border-radius: 5px;
    }
    @media (prefers-color-scheme: dark) {
        button {
            color: #F6F1D5;
            border: 2px solid #F6F1D5;
        }
    }
</style> -->