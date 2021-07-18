$ErrorActionPreference = "Stop"
Push-Location ../DailyAndMeme
flutter build web --web-renderer html
cp -r -Force .\build\web\* ..\mw3155.github.io\
Pop-Location
