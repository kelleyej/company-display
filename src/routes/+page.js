export const load = async (loadEvent) => {
    const { fetch } = loadEvent;
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const companyData = await response.json()

    return {
        companyData
    }
}