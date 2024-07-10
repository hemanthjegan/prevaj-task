class Model {
    constructor() {
        this.data = [];
    }

    async fetchData() {
        const response = await fetch('assets/data.json');
        this.data = await response.json();
    }

    getPaginatedData(page, rowsPerPage, sortColumn, sortDirection) {
        const sortedData = this.sortData(this.data, sortColumn, sortDirection);
        const start = (page - 1) * rowsPerPage;
        return sortedData.slice(start, start + rowsPerPage);
    }

    sortData(data, column, direction) {
        return data.sort((a, b) => {
            if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    getTotalPages(rowsPerPage) {
        return Math.ceil(this.data.length / rowsPerPage);
    }
}

export default Model;
