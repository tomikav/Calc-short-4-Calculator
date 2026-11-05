@echo off
REM Abre la app con un servidor local (necesario para instalarla y usarla sin internet).
cd /d "%~dp0"
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8080"
where py >nul 2>nul && (py -m http.server 8080 & goto :eof)
where python >nul 2>nul && (python -m http.server 8080 & goto :eof)
npx --yes serve -l 8080 .
