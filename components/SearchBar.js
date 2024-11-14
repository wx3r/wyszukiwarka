import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
    const [title, setTitle] = useState('');

const handleSearch = () => {
    if(title.trim()){
        onSearch(title);
    }
};

return (
    <div className='search-bar'>
        <input type="text"
        placeholder='Enter movie title: ' 
        value={title} 
        onChange={(e)=> setTitle(e.target.value)}
        />
    </div>
);
};

export default SearchBar;