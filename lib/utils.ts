import R from 'ramda';

export const getMarkdownFilename = (filename) => filename.replace(/\.md$/, '');

export const sortByDate = R.sortBy(R.prop('date'));
