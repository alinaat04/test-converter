export const getCourse = () => {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    return fetch(url)
    .then((response) => response.json());
}
