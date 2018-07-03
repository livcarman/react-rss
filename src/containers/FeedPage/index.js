/**
 * The landing page for authenticated users. It displays their feed and the
 * tools that let them change their feed subscriptions.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FeedList from '../../components/FeedList';
import StoryList from '../../components/StoryList';
import { feedActions } from '../../actions';
import { getFeedList } from '../../reducers';

import './FeedPage.css';

const FeedPage = ({ createFeed, deleteFeed, feeds, refreshFeed }) => (
  <div className="FeedPage">
    <FeedList
      createFeed={createFeed}
      deleteFeed={deleteFeed}
      feeds={feeds}
      refreshFeed={refreshFeed}
    />
    <StoryList feeds={feeds} />
  </div>
);

FeedPage.propTypes = {
  createFeed: PropTypes.func.isRequired,
  deleteFeed: PropTypes.func.isRequired,
  feeds: PropTypes.instanceOf(List),
  refreshFeed: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  feeds: getFeedList(state)
});

const mapDispatchToProps = {
  createFeed: feedActions.createFeed,
  deleteFeed: feedActions.deleteFeed,
  refreshFeed: feedActions.refreshFeed,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FeedPage)
);
