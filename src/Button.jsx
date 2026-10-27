function doSomething() {
    console.log("Button is clicked");
}

export default function Button() {
    let styles = {backgroundColor: "yellow", cursor: 'pointer', borderRadius: 10}
    return (
        <>
            <div>
                <button onClick={doSomething} style={styles}>Click me!</button>
            </div>
        </>
    );
}