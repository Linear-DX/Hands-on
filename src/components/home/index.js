import Gif from '../imgComponent/gifHome.js';
import Search from '../searchComponent/search.js'

const home = () => {
    return (
        <div>
            <Search />
            <img src={Gif.url} />
        </div>
    );
};

export default home;