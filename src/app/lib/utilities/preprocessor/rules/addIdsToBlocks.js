import uuid from 'uuid';
import compose from 'ramda/src/compose';
import pathOr from 'ramda/src/pathOr';

let mapIdsToBlocks;

const getJsonContent = jsonRaw => pathOr(null, ['content'], jsonRaw);

const getBlocks = block => pathOr(null, ['model', 'blocks'], block);

const addIdsToBlock = block => {
  const blockWithId = { ...block, id: uuid() };
  const nestedBlocks = getBlocks(blockWithId);

  if (!nestedBlocks) {
    return blockWithId;
  }

  return {
    ...blockWithId,
    model: {
      ...blockWithId.model,
      blocks: mapIdsToBlocks(nestedBlocks),
    },
  };
};

mapIdsToBlocks = blocks => blocks.map(addIdsToBlock);

const mergeJsonRawWithBlocks = blocksWithIds => jsonRaw => ({
  ...jsonRaw,
  content: {
    ...jsonRaw.content,
    model: {
      ...jsonRaw.content.model,
      blocks: blocksWithIds,
    },
  },
});

export default jsonRaw => {
  const addIdsToBlocks = compose(
    mergeJsonRawWithBlocks,
    mapIdsToBlocks,
    getBlocks,
    getJsonContent,
  )(jsonRaw);

  return addIdsToBlocks(jsonRaw);
};
