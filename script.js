let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(
        function f(data) {
            if (data.profession === "developer") {
                console.log(data);
            }
        }
    )
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(x => {
        if (x.profession === "developer") {
            console.log(x);
        }
    })
}

function addData() {
    //Write your code here, just console.log
    let ele = {
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"
    };
    arr.push(ele);
    console.log(arr);
}

function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(x => x.profession != "admin");
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [{
        id: 10,
        name: "Akash",
        age: "22",
        profession: "front end developer"
    },
    {
        id: 20,
        name: "Arbaz",
        age: "20",
        profession: "full stack developer"
    },
    {
        id: 30,
        name: "Anushka",
        age: "19",
        profession: "lead"
    },
    ];
    console.log(arr.concat(arr2));
}