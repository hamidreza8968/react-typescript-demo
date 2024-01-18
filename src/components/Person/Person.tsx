type PersonProps = {
    name:{
        first:string,
        last:string,
    }
}
function Person(prop: PersonProps) {
    return(
        <div>{prop.name.first} {prop.name.last}</div>
    )
}
export default Person;