const userName = document.getElementById("username");
const email = document.getElementById("email");

const users = [
    {
    name: "Mrhasan",
    email: "Mrhasan@gmail.com",
    },

    {
    name: "hasan",
    email: "hasan@gmail.com",
    }
]

const printUsers = () => {
    console.log(users);
}


const addInfo = () => {
    const userName = document.getElementById("username");
    const email = document.getElementById("email");

    let userValid = false;
    let mailValid = false;

    users.filter((user) => {
        if(user.name === userName.value) {
            userValid = true
            return;
        }
        if (user.email === email.value) {
            mailValid = true
            return;
        }
    })

    if(userValid) {
        window.alert('UserName already exists')
        return;
    }

    if(mailValid) {
        window.alert('Email already exists')
        return;
    }
    
}

printUsers()