let name = "Lars"
text = ""

function changeName(replaceName) {
    name = replaceName
    let number = 5
    console.log("In function" + number)
}

// console.log(name)
// changeName("Arasto")
// console.log(name)


function greeting(age) {
    return "Hej " + name + ", du är: " + age + " år gammal"
}

text = greeting(33)
console.log(text)

