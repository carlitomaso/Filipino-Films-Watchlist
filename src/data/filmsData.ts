export const getFilmsCSV = async () => {
    const response = await fetch('films.csv');
    const csvText = await response.text();
    return csvText;
};

export const filmsCSV = await getFilmsCSV();
