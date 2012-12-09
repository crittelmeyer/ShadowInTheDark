@echo off

:: Path to impact.js and your game's main .js
SET IMPACT_LIBRARY=public/js/lib/impact/impact.js
SET GAME=public/js/game/main.js

:: Output file
SET OUTPUT_FILE=game.min.js


:: Change CWD to base dir and bake!
cd ../
php tools/bake.php %IMPACT_LIBRARY% %GAME% %OUTPUT_FILE%


:: If you dont have the php.exe in your PATH uncomment the
:: following line and point it to your php.exe

::c:/php/php.exe bake.php %IMPACT_LIBRARY% %GAME% %OUTPUT_FILE%

pause