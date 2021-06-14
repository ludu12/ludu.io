import { Book } from './types';
import {
  getCollectionSchemaNameIndex,
  loadPageChunk,
  queryCollection,
} from './notion';
import { bookCover, flattenAndGetDistinctValues } from './utils';

const booksPageId = '5208296b-f00d-455f-b3a0-84c4a772648e';

interface BookColumns {
  Name: string;
  URL: string;
  Media: string;
  Topic: string;
  Notes: string;
  Added: string;
}

function toPlainText(val) {
  // Notion API returns an array of arrays, just use first value from array and join inner with comma
  return (
    val?.[0]
      ?.map((v) => {
        if (typeof v === 'string') {
          return v;
        } else if (Array.isArray(v)) {
          // if it's bold or a link or something else
          return v[1];
        }
      })
      ?.join(' ')
      ?.trim() || null
  );
}

export async function getNotionBooks(): Promise<Book[]> {
  const {
    recordMap: { collection, collection_view },
  } = await loadPageChunk({
    pageId: booksPageId,
    chunkNumber: 0,
    limit: 50,
    verticalColumns: false,
    cursor: { stack: [[{ table: 'block', id: booksPageId, index: 0 }]] },
  });
  const [collectionId] = Object.keys(collection);
  const [collectionViewId] = Object.keys(collection_view);
  const bookColumns = getCollectionSchemaNameIndex(
    collection[collectionId].value.schema
  ) as BookColumns;

  const { result, recordMap } = await queryCollection({
    collectionId,
    collectionViewId,
    query: {
      aggregations: [{ property: 'title', aggregator: 'count' }],
    },
    loader: {
      type: 'table',
      limit: 1000,
      searchQuery: '',
      userTimeZone: 'America/Chicago',
      userLocale: 'en',
      loadContentCover: false,
    },
  });

  return result.blockIds.map((blockId) => {
    const blockData = recordMap.block[blockId];

    if (blockData) {
      const properties = blockData.value.properties;
      const url = toPlainText(properties[bookColumns.URL]);

      return {
        name: toPlainText(properties[bookColumns.Name]),
        url,
        added: null,
        topic: toPlainText(properties[bookColumns.Topic]),
        media: toPlainText(properties[bookColumns.Media]),
        cover: bookCover(url),
      };
    } else {
      console.warn(`Missing block data for "${blockId}"`);
      return null;
    }
  });
}

export async function getNotionBookTopics(): Promise<string[]> {
  const allBooks = await getNotionBooks();

  return flattenAndGetDistinctValues(allBooks.map((b) => b.topic.split(',')));
}

export async function getNotionBooksByTopic(topic: string): Promise<Book[]> {
  const allBooks = await getNotionBooks();
  return allBooks.filter((b) => {
    const topics = b.topic.split(',');
    return topics.some((t) => t === topic);
  });
}
