<script>
    import { companyStore } from "../../../store.js";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    const { company } = $page.params;
    let employees = [];
    let filteredEmployees = [];
    $: {
        employees = $companyStore.filter(
            (companyData) => companyData.company.name === company,
        );
    }
    $: {
        filteredEmployees = $companyStore
            .filter((companyData) => companyData.company.name === company)
            .map((employee) => employee.name)
            .sort((a, b) => {
                const lastNameA = a.split(" ")[1];
                const lastNameB = b.split(" ")[1];
                return lastNameA.localeCompare(lastNameB);
            });
    }
</script>

<button
    class="border-2 cursor-pointer bg-blue-100 border-slate-500 rounded-full w-20 hover:bg-pink-200 mt-5 ml-10"
    on:click={() => goto("/")}>Go Back</button
>
<h1 class="text-5xl text-center mt-10 mb-20">
    {company} Employee List
</h1>
<section class="grid md:grid-cols-2 sm:grid-cols-1 gap-1 ml-10 mr-10">
    {#each employees as employee}
        <div class="border-2 bg-green-100 shadow-md pb-2 pt-2">
            <h2 class="text-3xl text-center font-bold">{employee.name}</h2>
            <p class="text-1xl pl-2">
                📞 Phone Number/Extension: {employee.phone}
            </p>
            <p class="text-1xl pl-2">💻 Website: {employee.website}</p>
            <p class="text-1xl pl-2">📧 Email: {employee.email}</p>
        </div>
    {/each}
</section>
