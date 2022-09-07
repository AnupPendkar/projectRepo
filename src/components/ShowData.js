function ShowData({index, item}) {
    return (
        <div className="showData">
        <div className="container">
            <p className="name">{index+1} Age</p>
            <div className="counter">
                <div className="value-container">
                    <p className="counter">{item.textContent}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ShowData;