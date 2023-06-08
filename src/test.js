const RenderList = props => {
    const cars =["BMW", "Audi", "Mercedes"]

    return (
        <ul>
            {cars.map(car =>(
                <li>{car}</li>
            ))}
        </ul>
    )
}