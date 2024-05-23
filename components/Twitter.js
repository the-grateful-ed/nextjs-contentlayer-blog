import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Twitter = ({ id }) => (
  <TwitterTweetEmbed tweetId={id} />
);

export default Twitter;
  
