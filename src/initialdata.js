const initialData = {
    tasks: {
        "task-1": {
            "id":"task-1",
            "content":"SnapChat"
        },
        "task-2": {
            "id":"task-2",
            "content":"Nintendo"
        },
        "task-3": {
            "id":"task-3",
            "content":"Sony"
        },
        "task-4": {
            "id":"task-4",
            "content":"Amazon"
        },
        "task-5": {
            "id":"task-5",
            "content":"Robinhood"
        },
        "task-6": { 
            "5id":"task-6",
            "content":"Airbnb"
        },
        "task-7": {
            "id":"task-7",
            "content":"Google"
        },
        "task-8": {
            "id":"task-8",
            "content":"Meta"
        },
        "task-9": {
            "id":"task-9",
            "content":"Stripe"
        },
        "task-10": {
            "id":"task-10",
            "content":"ModernTreasury"
        },
        "task-11": {
            "id":"task-11",
            "content":"Apple"
        },
        "task-12": {
            "id":"task-12",
            "content":"GoDaddy"
        },
        "task-13": {
            "id":"task-13",
            "content":"CollegeVine"
        },
        "task-14": {
            "id":"task-14",
            "content":"Visa"
        },
        "task-15": {
            "id":"task-15",
            "content":"Salesforce"
        },
        "task-16": {
            "id":"task-16",
            "content":"DoorDash"
        }
    },
    columns: {
        "column-1": {
            "id":"column-1",
            "title":"Wishlist",
            "taskIds":["task-1","task-2","task-3","task-4"]
        },
        "column-2": {
            "id":"column-2",
            "title":"Applied",
            "taskIds":["task-5","task-6","task-7","task-8"]
        },
        "column-3": {
            "id":"column-3",
            "title":"Interview",
            "taskIds":["task-9","task-10","task-11","task-12"]
        },
        "column-4": {
            "id":"column-4",
            "title":"Accepted",
            "taskIds":["task-13","task-14","task-15","task-16"]
            }
    },
    columnOrder:  ["column-1","column-2","column-3","column-4"]
}

export default initialData;