export class Table {
    constructor(data) {
        this.data = data;
    }

    renderTable() {
        let template = `<div class="table-wrap">
                          <table class="users-table">
                            <thead>
                              <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Time zone</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody id="users">`;
        this.data.map((user) => {
            template += `
              <tr>
                <th><img src="${user.picture}"></th>
                <th>${user.name}</th>
                <th>${user.location}</th>
                <th>${user.email}</th>
                <th>${user.phone}</th>
                <th>${user.timezone}</th>
                <th><button>Remove</button></th>
              </tr>`;
        });
        return template + `</tbody>
                          </table>
                         </div>`;
    }
}
