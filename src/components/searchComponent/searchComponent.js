import '../../App.css';

// const SearchComponent = ({ handleSubmit, handleInput, keyword }) => {
//     return (
//         <form onSubmit={handleSubmit} className="search-wrapper">
//             <input id="search" type="text" value={keyword} onChange={handleInput} required/>
//             <button>Search</button>
//         </form>
//     )
// }

//edit
const SearchComponent = ({ handleSubmit, query, handleInput }) => {
    return (
        <form onSubmit={handleSubmit} className="search-wrapper">
            <input id="search" type="text" value={query} onChange={handleInput} required/>
            <button>Search</button>
        </form>
    )
}

export default SearchComponent;

