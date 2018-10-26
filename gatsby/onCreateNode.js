const { createRemoteFileNode } = require('gatsby-source-filesystem');

module.exports = async ({ node, actions, store, cache, createNodeId }) => {
  const { createNodeField, createNode, touchNode } = actions;
  // console.log({node, actions, rest});
  if (node.__type !== 'Craft_Asset') return;

  let fileNodeId;

  const fileCacheKey = `craft-file-${node.id}`;
  const cachedFileNode = await cache.get(fileCacheKey);

  // Check cache for unmodified version of this file
  if (cachedFileNode && node.modified === cachedFileNode.modified) {
    fileNodeId = cachedFileNode.fileNodeId;
    touchNode({ nodeId: cachedFileNode.fileNodeId });
  }

  if (!fileNodeId) {
    try {
      const fileNode = await createRemoteFileNode({
        url: node.source_url,
        store,
        cache,
        createNode,
        createNodeId,
      });

      if (fileNode) {
        fileNodeId = fileNode.id;

        await cache.set(fileCacheKey, {
          fileNodeId,
          modified: node.modified,
        });
      }
    } catch (e) {
      /* Ignore */
    }
  }

  // add a localFile field to the original craft asset
  if (fileNodeId) {
    createNodeField({
      node,
      name: 'localFile___NODE',
      value: fileNodeId,
    });
  }
};
