type HeadingProps = {
    children:string,
}
function Heading(prop:HeadingProps) {
    return(
        <h2>{prop.children}</h2>
    )
}
export default Heading;