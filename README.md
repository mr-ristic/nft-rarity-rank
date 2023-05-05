# NFT RARITY EXCERSISE

## Install

```bash
npm i
```

Create .env file, you can copy test credentials from the .env.example

## Run

```bash
npm run start
```

### Requirements of the task

### Requirements

1. Your NFT collection should be a “sub-collection” of [Bored Ape NFT collection](https://opensea.io/collection/boredapeyachtclub)
    1. You should fetch the Bored Apes Yacht Club collection (BAYC) in an array
    2. Then filter it, to keep only the items having their index a multiple of 100 to form your collection (so you should end up with only 100 items, all indexes ending with '00’.)
    3. Clean the array from anything you won’t need for this exercise (metadata, etc..) 
    4. At this stage you only need, for each item, an identifier, and its rarity traits
2. Create an algorithm to rank your collection by rarity considering that :
    1. You can’t use any existing rarity ranking dataset, you need to write your own logic with what you have here.
    2. each rarity traits brings a certain value, and the more rare this trait is amongst the collection, the more value it brings. Figure out a way to give values to this, and appreciate each items value/rarity. Try to achieve this appreciation in the most logic way.
3. You can only use js (node.js) or php. 
4. For the data handling, you can use native arrays and json format.
5. The algorithm should then be able to accept any well formatted similar array of a collection, no matter the number or items.