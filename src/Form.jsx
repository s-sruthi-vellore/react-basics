function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form() {
    let styles = { cursor: 'pointer', borderRadius: 10, width: "80px", height: "45px", fontWeight: "bold", fontSize: "15px"}
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
            <form onSubmit={handleFormSubmit}>
                <input placeholder="write something" style={{ height: "40px", borderRadius: "10px" }} />
                <br></br>
                <br></br>
                <button style={styles}>Submit</button>
            </form>
        </div>
    );
}