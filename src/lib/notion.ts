import Axios from 'axios';

const API_ENDPOINT = 'https://www.notion.so/api/v3';

export default async function rpc(fnName: string, body: any) {
  try {
    const res = await Axios.post(`${API_ENDPOINT}/${fnName}`, body);
    return res.data;
  } catch (e) {
    return `Notion API error (${e.response.status}) \n
        ${JSON.stringify(e.response.headers?.raw?.())}\n 
        ${e.response.body}`;
  }
}

export function getCollectionSchemaNameIndex(collectionSchema: Record<string, { name: string }>) {
  const names = {} as any;
  for (const id in collectionSchema) {
    const nameKey = collectionSchema[id].name;
    if (nameKey in names) {
      console.warn(
        `duplicate key "${nameKey}" in schema index – make sure column names are unique`,
      );
    }
    names[nameKey] = id;
  }
  return names;
}

export function loadPageChunk(body: any) {
  return rpc('loadPageChunk', body);
}

export function queryCollection(body: any) {
  return rpc('queryCollection', body);
}


