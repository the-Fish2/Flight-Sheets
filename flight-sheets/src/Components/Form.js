const Form = () => {
    return (
        <div>
            
            <table>
                <thead>
                <tr> <h3> Weather </h3> </tr>
                <tr>
                    <td> Temperature </td>
                    <td> <input/> </td>
                </tr>
                <tr>
                    <td> Humidity </td>
                    <td> <input/> </td>
                </tr>
                <tr>
                    <td> Wind Direction </td>
                    <td> <input/> </td>
                </tr>
                <tr>
                    <td> Wind Speed </td>
                    <td> <input/> </td>
                </tr>
                </thead>
            </table>

            <table>
                <thead>
                <tr> <h3> Mass </h3> </tr>
                <tr>
                    <td> Egg </td>
                    <td> <input/> </td>
                </tr>
                <tr>
                    <td> Egg Carrier</td>
                    <td> <input/> </td>
                </tr>
                <tr>
                    <td> Added </td>
                    <td> <input/> </td>
                </tr>
                </thead>
            </table>

            <button type="submit" onClick={() => console.log("hi")}> Submit </button>

        </div>
        
    )
}

export default Form
