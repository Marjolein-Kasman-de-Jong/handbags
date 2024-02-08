function Button({children, disabled}) {

    function handleClick(e) {
        console.log(e.target.textContent);
    }

    return (
        <>
            <button
                type='button'
                onClick={handleClick}
                disabled={disabled}
            >
                {`${children}`}
            </button>
        </>
    )
}

export default Button;