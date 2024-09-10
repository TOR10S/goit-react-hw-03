export default function SearchBox( {value, onSearch} ) {
    return (
    <div>
        <p>
            find contacts by name
        </p>
        <input type="text" value={value} onChange={(event) =>{
            onSearch(event.target.value)
        }}/>
    </div>
    )
}