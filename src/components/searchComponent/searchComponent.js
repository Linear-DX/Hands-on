import '../../App.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

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
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[500],
    borderColor: '#ccc',
    '&:hover': {
      backgroundColor: cyan[700],
      borderColor: '#030302',
      color: '#030302',
    },
  }));

const SearchComponent = ({ handleSubmit, query, handleInput }) => {
    return (
        <form onSubmit={handleSubmit}>
            {/* <div className="search-wrapper"> */}
            <input id="search" type="text" value={query} onChange={handleInput} required/>
            <ColorButton variant="outlined" size="small" onClick={handleSubmit}>Search</ColorButton>
            {/* </div> */}
        </form>
    )
}

export default SearchComponent;

