// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14001400080709070909070907090907090709070907090601130d0d0d0d0d0d0d0d100d0d0d0d0d0d0d0d0c01140d11100d0d0d0d0d0d0d0d0d0d0f0d0d0d0c010d0d10120d0d0d0d0d0d0d0f1111110d0d0d050a0d0d0d0d0d0d12100d0d0d110d0d0d0d0d0d0c010d0f0d110d0d0d0d0d10100d0d0f0d0d0d0e05010d0d0d0d0d0e0d0d0d0d0d100d0d0d0d0f0d0c0a0d0e0d0f0d0d110d100d0d0d0d0d120d111105010d0d0f0f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c010d0d0d0d0d10110d11110d0f0d0d0d0e0d0d050a0f0d0f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c010d0d0d100d0d0d110d0d0d0d0d0f0d0d0d100c010f0d0d0d0d0f0d0d0d0f110d0d0d0d0d0d0d05010d0d100d0d0d0d0d110d110d0d0d0e0d0d0d0c010d0d0d0d0d110d100d0d0d0d0d0d0d0d0f0d05010d0d0d0e0d110d0d0d100d0f0d0d0d110d0d0c0a0d0f0d0d0d0d0d120d0d110d0e0d0d0d110d05010d0d0d0d0d0d0d0d110d0d0d0d110d0d110d0c010d0d100d0d100d0e110d0d0d0d0d0d0d0d1105020b0b0b0b03030b0b0b0b03030b030b0b0b0304`, img`
22222222222222222222
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.swamp.swampTile3,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
