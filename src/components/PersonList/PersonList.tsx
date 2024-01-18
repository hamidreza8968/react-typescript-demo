type PersonListProps= {
    names:{
        first:string,
        last:string,
    }[]
}
function PersonList(prop:PersonListProps) {
    return(
        <div>
            {prop.names.map((name , index) => <h2 key={index}>{name.first} {name.last}</h2>)}
        </div>
    )
}
export default PersonList;