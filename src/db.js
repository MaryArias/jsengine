// CRUD

// Create
// Read
// Update
// Delete

mockData = [{
        id: 22,
        data: {
            name: 'gym tete'
        }
    },
    {
        id: 24,
        data: {
            name: 'gym kse'
        }
    }
]

class DB {
    tablas
    status
    id
    constructor(tablas, status, id, ) {
        this.tablas = tablas;
        this.status = status;
        this.id = id;
    }

    /**
     * 
     * @param {*} id 
     * @returns {id: number, data: {name: string}}
     */
    getTable = id => this.tablas.find(e => e.id === id)

    /**
     * 
     * @param {*} id 
     * @returns 
     */
    // TODO 
    getTableDataById = id => {return {}} 

    /**
     * get a table object and add it into the table array
     * e.i. {id : number, data: { name : string }}
     * 
     * @param {*} table 
     */
    createTable(table) {
        this.tablas.push(table)
    }

    /**
     * 
     * @param {*} id number
     * @param {*} data {name: String}
     */
    updateData(id, data) {
        //  {id : number, data: { name : string }}
        const table = this.getTable(id)

        if (table) {
            table.data = data
        } else {
            console.log('there is no trable id match')
        }
        console.log(this.tablas)
    }

    deleteTable(id) {
        // find the table
        const table = this.getTable(id)
        if (table) {
            // find table index
            const index = this.tablas.findIndex(e => e.id === id)

            //remove table
            this.tablas.splice(index, 1)

            console.log('*************')
            console.log(`the Table with id ${id} was DELETED`)
            console.log(table)
            console.log('*************')

        } else {

            console.log('there is no trable id match')
        }
        console.log(this.tablas)
    }
}




module.exports = {
    mockData,
    DB
}