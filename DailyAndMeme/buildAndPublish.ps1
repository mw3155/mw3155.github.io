$ErrorActionPreference = "Stop"
flutter build web --web-renderer html
cp -r -Force .\build\web\* ..
Pop-Location
