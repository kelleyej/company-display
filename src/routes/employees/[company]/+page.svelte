<script>
    import { page } from "$app/stores";
    const { company } = $page.params;
    export let data;
    import { getContext } from "svelte";
    const companyName = getContext("companyName");
</script>

<h1>{company}</h1>
