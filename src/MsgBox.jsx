function MsgBox({ userName, textColor }) {
    return (
        <>
            <h3 style={{color: textColor}}> Hello {userName} </h3>
        </>
    );
}
export default MsgBox;