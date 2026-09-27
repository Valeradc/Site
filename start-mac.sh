#!/bin/bash
echo "========================================================"
echo "  Запуск сайта INDUSTRIAL CREATOR на вашем компьютере"
echo "========================================================"
echo ""

if ! command -v node &> /dev/null
then
    echo "[ОШИБКА] Node.js не найден на вашем компьютере!"
    echo "Пожалуйста, установите Node.js с официального сайта: https://nodejs.org"
    exit 1
fi

if [ ! -d "node_modules" ]; then
    echo "[1/2] Установка необходимых библиотек (npm install)..."
    npm install
    echo ""
fi

echo "[2/2] Запуск локального сервера разработки..."
echo ""
echo "Сайт откроется по адресу: http://localhost:3000"
echo "Для остановки нажмите Ctrl + C"
echo ""

if command -v open &> /dev/null; then
    open "http://localhost:3000"
elif command -v xdg-open &> /dev/null; then
    xdg-open "http://localhost:3000"
fi

npm run dev
