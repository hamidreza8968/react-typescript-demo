type InputProps = {
    value: string,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
}
function Input(props: InputProps) {
    return(
        <input type="text" value={props.value} onChange={(e) => props.handleChange(e)}/>
    )
}
export default Input;