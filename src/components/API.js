export default async function getCurrency() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
