import Model from './model.js';
import View from './view.js';

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this);
        this.currentPage = 1;
        this.rowsPerPage = 5;
        this.sortColumn = 'name';
        this.sortDirection = 'asc';
        this.init();
    }

    async init() {
        await this.model.fetchData();
        this.updateView();
    }

    updateView() {
        const paginatedData = this.model.getPaginatedData(this.currentPage, this.rowsPerPage, this.sortColumn, this.sortDirection);
        this.view.renderTable(paginatedData);
        this.view.renderPagination(this.model.getTotalPages(this.rowsPerPage));
    }

    handleSort(column) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }
        this.updateView();
    }

    handlePageChange(page) {
        this.currentPage = page;
        this.updateView();
    }
}

window.addEventListener('DOMContentLoaded', () => new Controller());
