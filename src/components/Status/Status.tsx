type StatusProps = {
    status:"loading"| "success"| "error",
}
function Status(props: StatusProps) {
    return(
        <div>
            {props.status==="loading" && <h2>Loading...</h2>}
            {props.status==="success" && <h2>Data fetched successfully!</h2>}
            {props.status==="error" && <h2>Error fetching data!</h2>}
        </div>
    )
}

export default Status;