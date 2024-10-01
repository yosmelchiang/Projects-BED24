We are going to create a web based game based on the riddle of The Farmer, The Goose, The Fox and the Corn

*Prototypes*
- 1. HTML Dom inline script
- 2. Maybe spice it up with some bootstrap

*Entities*
- Farmer
- Fox
- Goose
- Corn

*States*
- The farmer and his resources are standing on one side of a river.
- Each side of the river will be named South Shore and North Shore
- Entities can be moved in either direction

*Rules*
- The farmer can only take with him one of the resources
- The fox and the goose cannot be left alone on the same shore
- The goose and the corn cannot be left alone on the same shore

*Operations*
- Move the farmer and 1 resource
- Move the farmer alone
- Check if what is left in the shore we moved from is allowed according to the rules.

*Conditions*
- The game is won when all entities are moved from South Shore to North Shore
- The game is lost if two entities that are not allowed together are in one of the shores without the farmer

*Methods*
- Two arrays from where we can move items in between
- Function that moves the resources and the farmer by himself
- Function that checks the rules after every move
- Function that checks if we win
- Function that checks if we make a mistake
- Check where the farmer is so we cant move animals without him

*Pseudo code*

```js
init north shore []
init south shore ['Farmer', 'Fox', 'Goose', 'Rice']

function move (resource) {
    if farmer is on south shore
        resource is on south shore
            move resource to north shore
            move farmer to north shore
            check the rules to see if whats left behind is allowed
                check if game is won
                check if game is lost
}
```

