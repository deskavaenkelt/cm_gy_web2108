function VarsInMem()
{
    let name = { name: "Lars" }
    let clone = name
    clone.name = "Mr Lars"
    name.name += "!"
    console.log(name)
    console.log(clone)
}

function VarsInMem2()
{
    let name =  "Lars" 
    let clone = name
    clone = "Mr Lars"
    name += "!"
    console.log(name)
    console.log(clone)
}


VarsInMem()
VarsInMem2();