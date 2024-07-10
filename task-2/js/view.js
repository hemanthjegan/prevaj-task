class View {
    constructor(controller) {
        this.controller = controller;
        this.tableBody = document.getElementById('tableBody');
        this.pagination = document.querySelector('.pagination');
        this.headers = document.querySelectorAll('th');

        this.headers.forEach(header => {
            header.addEventListener('click', () => {
                const column = header.getAttribute('data-column');
                this.controller.handleSort(column);
            });
        });

        this.pagination.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const page = parseInt(event.target.textContent, 10);
                this.controller.handlePageChange(page);
            }
        });
    }

    renderTable(data) {
        this.tableBody.innerHTML = data.map(row => `
            <tr>
                <td>${row.name}</td>
                <td>${row.age}</td>
                <td>${row.country}</td>
            </tr>
        `).join('');
    }

    renderPagination(totalPages) {
        this.pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            this.pagination.appendChild(button);
        }
    }
}

export default View;
