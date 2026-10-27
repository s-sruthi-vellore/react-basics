// Handling click events
function doSomething() {
    console.log("Button is clicked")
}

// Handling non-click events
function handleHover() {
    console.log("Hover");
}

export default function Button() {
    let styles = { backgroundColor: "yellow", cursor: 'pointer', borderRadius: 10, width: "200px", height: "100px", fontWeight: "bold", fontSize: "30px"}
    return (
        <>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <button onClick={doSomething} style={styles} onMouseOver={handleHover}>Click me!</button>
            </div>
        </>
    );
}