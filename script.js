function signIn() {
    var inputs = document.querySelectorAll("input");
    console.log(inputs);
    var userInfo = {
    username: inputs[0].value,
    password: inputs[1].value,
    };
    console.log(userInfo);
    var users = [
        {username: "merc", password: "password"},
        {username: "antonella", password: "grantChirpus"},
        {username: "syntax", password: "food"}
    ]

}
