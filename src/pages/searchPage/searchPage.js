import React from 'react';
import axios from 'axios';
import GifComponent from '../../components/gifComponent/gifComponent';
import { useState } from 'react';
import SearchComponent from '../../components/searchComponent/searchComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../reduxSlice/slice';
//reduxOldWay
//  import { setQuery } from "../../reduxOldWay/action.js";


// class Search extends React.Component {
//     state = {
//         data: [], //buat nampung data get giphy
//         text: "" //buat ngambil input search
//     };
//     apiKey = process.env.REACT_APP_GIPHY_KEY;

//     searchGif = async () => {
//         const gifs = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${this.apiKey}&limit=12`)
//             .then((res) => res)
//             .catch((err) => err);
//         this.setState({ data: gifs.data.data })
//         console.log(gifs);
//     }

//     handleOnChange = (e) => {
//         this.setState({
//             text: e.target.value
//         })
//     }

//     render() {
//         const { data } = this.state;

//         return (
//             <div>
//                 <div className="search">
//                     <input placeholder="Search" onChange={this.handleOnChange}></input>
//                     <button type="submit" onClick={this.searchGif}>Search</button>
//                     <Result passData={data} />
//                 </div>
//             </div>
//         );
//     }
// }

const SearchPage = () => {
    const [gifs, setGifs] = useState([]);
    const currentQuery = useSelector((state) => state.keywords.value);
    const dispatch = useDispatch();

    const handleInput = e => {
        dispatch(setQuery(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(gifs);
        getGifs();
    }

    const getGifs = async () => {
        const apiKey = process.env.REACT_APP_GIPHY_KEY;
        const gifs = await axios 
        .get(`https://api.giphy.com/v1/gifs/search?q=${currentQuery}&api_key=${apiKey}&limit=12`)
            .catch((err) => err);
        setGifs(gifs.data.data)
        console.log(gifs);
    }

    return (
        <div>
            {/* <SearchComponent keyword={query} handleInput={handleInput} handleSubmit={handleSubmit} /> */}
            <SearchComponent handleSubmit={handleSubmit} handleInput={handleInput} query={currentQuery} />
            {gifs.length > 0 && (
                <GifComponent gifs={gifs} />
            )}
        </div>
    );
}


/* <div>
    <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)}></input>
    <button onClick={handleSubmit}>Search</button>
</div>
{
    gifs.length > 0 && (
        <>
            <div>GIF List</div>
            <GifResult gif={gifs} />
        </>
    )
} */

// const data = {'',oihBWrazaIIj1aIT64nrGA2teHBl8jVA}

// const search = () => {
//     return (
//         <div>
//             <div className="search">        
//                 <input placeholder="Search"></input>
//                 <button type="submit">Search</button>
//             </div>
//         </div>
//     );
// };

export default SearchPage;