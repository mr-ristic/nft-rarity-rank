const sdk = require('api')('@reservoirprotocol/v3.0#2l6fslh5fu4vc');
const API_KEY = '669140fd-f9cb-5e2a-8c37-ab75edbaab17'
const COLLECTION_ID = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'

async function fetchTokens(offset = 0) {
  try {
    sdk.auth(API_KEY)
    const response = await sdk.getTokensV6({
      collection: COLLECTION_ID, 
      limit: '100',
      includeAttributes: 'true',
      offset, 
      accept: '*/*'})
    return await response.data
  } catch (error) {
    console.error(error)
  }  
}

const traitFrequency = {};

(async () => {
  
  const collection = await fetchTokens()
  
  const cleanedArray = collection.tokens.map(token => {
    const { tokenId, attributes } = token.token;
    return {
      tokenId,
      traits: attributes.map(attr => ({ key: attr.key, value: attr.value })),
    };
  });

  cleanedArray.forEach(item => {
    item.traits.forEach(trait => {
      const key = `${trait.key}:${trait.value}`;
      traitFrequency[key] = (traitFrequency[key] || 0) + 1;
    });
  });

  const calculateRarityScore = (traits) => {
    let rarityScore = 0;
    traits.forEach(trait => {
      const key = `${trait.key}:${trait.value}`;
      const frequency = traitFrequency[key];
      rarityScore += (1 / frequency);
    });
    return rarityScore;
  };

  const rankedCollection = cleanedArray.map(item => ({
    tokenId: item.tokenId,
    traits: item.traits,
    rarityScore: calculateRarityScore(item.traits),
  })).sort((a, b) => b.rarityScore - a.rarityScore);

  console.log(rankedCollection);
  

})()

