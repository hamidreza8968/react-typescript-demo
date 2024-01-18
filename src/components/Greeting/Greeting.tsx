

type GreetingProps = {
    name: string,
    messageNum: number,
    isLoggedIn: boolean,
}

function Greeting(prop: GreetingProps) {
    return (
        <div>
            <h2>Welcome {prop.isLoggedIn ? `${prop.name}! You have ${prop.messageNum} unread messages.` : "guest!"}</h2>
        </div>
    )
}
export default Greeting;