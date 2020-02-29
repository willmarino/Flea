import * as TagUtil from '../util/tag_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_SUGGESTED_IDS = "RECEIVE_SUGGESTED_IDS";
export const RECEIVE_SEARCH_TAG_IDS = "RECEIVE_SEARCH_TAG_IDS";

export const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags
});

const receiveSuggestedIds = (ids) => ({
  type: RECEIVE_SUGGESTED_IDS,
  ids
});

export const receiveSearchTagIds = (ids) => ({
  type: RECEIVE_SEARCH_TAG_IDS,
  ids
})

// this is what I am using for the suggested subheader component in user index. returns tags
export const fetchSuggestedTags = () => dispatch => (
  TagUtil.fetchSuggestedTags()
    .then(res => {
      dispatch(receiveTags(res.tags));
      dispatch(receiveSuggestedIds(res.tags.map((tag) => tag.id)));
    })
)