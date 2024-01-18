type StatusProps = {
    status:"loading"| "success"| "error",
}
function Status(prop: StatusProps) {
    return(
        <div>
            {prop.status==="loading" && <h2>Loading...</h2>}
            {prop.status==="success" && <h2>Data fetched successfully!</h2>}
            {prop.status==="error" && <h2>Error fetching data!</h2>}
        </div>
    )
}

export default Status;