@echo off
REM Lanzador portable del "Manual de Urgencias in HELL".
REM Arranca el servidor estatico (PowerShell + .NET de Windows, sin instalar nada)
REM y abre la app en el navegador por defecto.
cd /d "%~dp0"
start "" http://localhost:8765/
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Port 8765
