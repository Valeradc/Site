@echo off
title Запуск сайта INDUSTRIAL CREATOR
echo ========================================================
echo   Запуск сайта INDUSTRIAL CREATOR на вашем компьютере
echo ========================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ОШИБКА] Node.js не найден на вашем компьютере!
    echo Пожалуйста, установите Node.js с официального сайта: https://nodejs.org
    echo После установки перезапустите этот файл.
    echo.
    pause
    exit /b
)

if not exist node_modules (
    echo [1/2] Установка необходимых библиотек (npm install)...
    call npm install
    echo.
)

echo [2/2] Запуск локального сервера разработки...
echo.
echo Сайт откроется по адресу: http://localhost:3000
echo Для остановки нажмите Ctrl + C в этом окне.
echo.
start http://localhost:3000
call npm run dev
pause
