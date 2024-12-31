type car ={
    manufacture: string
    model:string
    [key: string]:any
}
function createcar(manufacture:string, model: string, opttanal: Record <string,any>):car{
    return{
        manufacture,
        model,
        ...opttanal
    }
}
const mycar: car = createcar("toyota","corolla",{color:"silver:",yeas:"2024"})
console.log(mycar)