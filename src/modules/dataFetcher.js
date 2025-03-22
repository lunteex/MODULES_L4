async function fetchData(url) {
    let result = {
        data: [],
        isLoading: true,
        error: Error
    };

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Ошибка загрузки');
        result.data = await response.json();
        result.isLoading = false;
    } catch (err) {
        result.error = err.message;
        result.isLoading = false;
    }

    return result;
}

module.exports = { fetchData };