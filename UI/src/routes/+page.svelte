<script>
    import Header from '../components/Header.svelte'
    import Body from '../components/Body.svelte'
    import appNames from '../json/appNames.json'
    let activeApp = appNames[0]
</script>

<Header bind:activeApp/>
<Body bind:activeApp/>