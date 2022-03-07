import { Client, isNotionClientError } from '@notionhq/client';

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_CLIENT_TOKEN,
});

export function toPageProperties(page: any) {
  const properties = page.properties as Record<string, any>;

  return Object.entries(properties).reduce((acc, curr) => {
    const [key, value] = curr;

    switch (value.type) {
      case 'created_time':
        acc[key.toLowerCase()] = value.created_time;
        break;
      case 'url':
        acc[key.toLowerCase()] = value.url;
        break;
      case 'multi_select':
        acc[key.toLowerCase()] = value.multi_select.map((x: { name: string }) => x.name).join(',');
        break;
      case 'title':
        acc[key.toLowerCase()] = value.title.map((x: { plain_text: string }) => x.plain_text).join(',');
        break;
      default:
        break;
    }

    return acc;
  }, {} as Record<string, any>);
}

export async function query(id: string, options?: any) {
  try {
    return await notion.databases.query({ database_id: id, ...options });
  } catch (e: unknown) {
    if (isNotionClientError(e)) {
      console.error(`Error querying database ${id}:`, e.code);
    }
    throw e;
  }
}


//
// export async function rpc(fnName: string, body: any) {
//   try {
//     const res = await Axios.post(`${API_ENDPOINT}/${fnName}`, body);
//     return res.data;
//   } catch (e) {
//     return `Notion API error (${e.response.status}) \n
//         ${JSON.stringify(e.response.headers?.raw?.())}\n
//         ${e.response.body}`;
//   }
// }
//
// export function getCollectionSchemaNameIndex(collectionSchema: Record<string, { name: string }>) {
//   const names = {} as any;
//   for (const id in collectionSchema) {
//     const nameKey = collectionSchema[id].name;
//     if (nameKey in names) {
//       console.warn(
//         `duplicate key "${nameKey}" in schema index – make sure column names are unique`,
//       );
//     }
//     names[nameKey] = id;
//   }
//   return names;
// }
//
// export function loadPageChunk(body: any) {
//   return rpc('loadPageChunk', body);
// }
//
// export function queryCollection(body: any) {
//   return rpc('queryCollection', body);
// }
//

