#!/bin/bash

# Path to impact.js and your game's main .js
IMPACT_LIBRARY=public/js/lib/impact/impact.js
GAME=public/js/game/main.js

# Output file
OUTPUT_FILE=game.min.js


# Change CWD to Impact's base dir and bake!
cd ..
php tools/bake.php $IMPACT_LIBRARY $GAME $OUTPUT_FILE