import './Input.css';
const Input = (prop) => {
    return (
        <>
            <input type="number" className="num" />
            <br />
            <br />
            <button className="btn btn-success btn-lg" onClick={prop.ChangeHandler}>Add</button>
            <br />
            <br />
            <button className="btn btn-danger btn-lg">Subtract</button>
        </>
    );
};

export default Input;