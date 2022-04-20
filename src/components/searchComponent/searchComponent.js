import '../../App.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';
import { orange } from '@mui/material/colors';

// const SearchComponent = ({ handleSubmit, handleInput, keyword }) => {
//     return (
//         <form onSubmit={handleSubmit} className="search-wrapper">
//             <input id="search" type="text" value={keyword} onChange={handleInput} required/>
//             <button>Search</button>
//         </form>
//     )
// }

//edit

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    borderColor: '#ccc',
    color: 'white',
    '&:hover': {
      backgroundColor: orange[700],
      borderColor: '#030302',
      color: '#030302',
    },
  }));

const SearchComponent = ({ handleSubmit, query, handleInput }) => {
    return (
        <form data-testid="searchBarForm" onSubmit={handleSubmit}>
            {/* <div className="search-wrapper"> */}
            <label form='search'>Search</label><br/>
            <input id="search" type="text" value={query} onChange={handleInput} required/>
            <ColorButton variant="outlined" size="small" onClick={handleSubmit}>Search</ColorButton>
            {/* </div> */}
        </form>
    )
}

export default SearchComponent;

