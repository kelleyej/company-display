<script>
    import { companyStore } from "../store.js";
    import { goto } from "$app/navigation";
    let companies = [];
    let uniqueCompanies = [];
    $: {
        companies = $companyStore.map((company) => ({
            companyName: company.company.name,
            catchPhrase: company.company.catchPhrase,
            numOfEmployees: $companyStore.filter(
                (c) => c.company.name === company.company.name,
            ).length,
        }));
        uniqueCompanies = [...new Set(companies)];
    }
</script>

<h1 class="text-5xl text-center mb-10 mt-10">Companies</h1>
{#if uniqueCompanies.length > 0}
    <section
        class="md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 grid gap-5 mr-10 ml-10"
    >
        {#each uniqueCompanies as company}
            <div
                on:click={() => goto(`/employees/${company.companyName}`)}
                class="text-center hover:scale-105 bg-blue-200 border-2 cursor-pointer shadow-md"
            >
                <h2 class="text-3xl">{company.companyName}</h2>
                <h3 class="italic">{company.catchPhrase}</h3>
                <p>Number of Employees: {company.numOfEmployees}</p>
            </div>
        {/each}
    </section>
{:else}
    <p class="text-center text-3xl">Loading companies...</p>
{/if}
