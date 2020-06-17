import React from 'react';
import SearchTagContainer from './search_tag_container';

const SearchTags = (props) => {
  let { tags } = props;
  let tagsList = Object.values(tags).slice(0, 6).map((tag) => {
    return <SearchTagContainer tag={tag}/>
  })
  return(
    <ul className='search-result-tags-container'>
      {tagsList}
    </ul>
  )
}

export default SearchTags;