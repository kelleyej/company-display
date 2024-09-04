<script>
    export let data;
    import Card from "$lib/Card.svelte";
    import { goto } from "$app/navigation";
    let companyData = data.companyData;
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    const companyName = writable();
    $: companyName.set(data.companyData);
    setContext("company", companyName);
</script>

<!-- company name, catchphrase, number of employees -->
<h1 class="text-center">Companies</h1>
<section class="grid grid-cols-3 gap-5">
    {#each companyData as company (company.id)}
        <div class="text-center border-2">
            <h2 on:click={() => goto(`/employees/${company.company.name}`)}>
                Company: {company.company.name}
            </h2>
            <p>{company.company.catchPhrase}</p>
        </div>
    {/each}
</section>
<Card {companyData} />
