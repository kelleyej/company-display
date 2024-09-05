<script>
    import "../app.css";
    import { onMount } from "svelte";
    import { companyStore } from "../store.js";

    onMount(async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                companyStore.set(data);
            })
            .catch((error) => {
                console.log(error);
                return [];
            });
    });
</script>

<slot></slot>
