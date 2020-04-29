import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getCardTheme } from 'global/theme';

import {
  EventCard,
  FinanceCard,
  HistoryCard,
  NewsCard,
  QuestionAnswerCard,
  VoteCard,
} from 'components';

import { NewsfeedItemProps } from 'components/molecules/NewsfeedItem/NewsfeedItem';

interface NewsfeedProps {
  newsfeedItems?: NewsfeedItemProps[];
}

function getComponent(newsfeedItemProps: any) {
  const { type } = newsfeedItemProps;

  switch (type) {
    case 'event':
      return <EventCard {...newsfeedItemProps} />;
    case 'contribution':
      return <FinanceCard {...newsfeedItemProps} />;
    case 'history':
      return <HistoryCard {...newsfeedItemProps} />;
    case 'news':
      return <NewsCard {...newsfeedItemProps} />;
    case 'question':
      return <QuestionAnswerCard {...newsfeedItemProps} />;
    case 'vote':
      return <VoteCard {...newsfeedItemProps} />;
    default:
      return <div>Card Error... Type: {type}</div>;
  }
}

export default function NewsFeed(props: NewsfeedProps) {
  const { newsfeedItems } = props;

  return (
    <>
      {newsfeedItems?.map(item => {
        const { key, type } = item;

        const nestedTheme = (currentTheme: Object) => ({
          ...currentTheme,
          ...getCardTheme(type),
        });

        return (
          <ThemeProvider theme={nestedTheme} key={key}>
            {getComponent(item)}
          </ThemeProvider>
        );
      })}
    </>
  );
}
