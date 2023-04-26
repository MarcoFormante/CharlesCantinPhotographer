export default async function T() {
    const request = await fetch("https://trueappwork.000webhostapp.com/phDataGallerie.php")
    const response = await request.json();

    return response
}