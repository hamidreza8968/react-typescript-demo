

type GreetingProps = {
    name: string,
    messageNum ?: number,
    isLoggedIn: boolean,
}

function Greeting(props: GreetingProps) {
    const {messageNum = 0} = props;
    return (
        <div>
            <h2>Welcome {props.isLoggedIn ? `${props.name}! You have ${props.messageNum} unread messages.` : "guest!"}</h2>
        </div>
    )
}
export default Greeting;