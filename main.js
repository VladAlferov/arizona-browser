const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html'); // Загружаем локальный файл index.html

    // Проверка обновлений при запуске приложения
    autoUpdater.checkForUpdatesAndNotify();
});

// Логирование событий автообновления
autoUpdater.on('update-available', () => {
    console.log('Доступно обновление. Загрузка...');
});

autoUpdater.on('update-downloaded', () => {
    console.log('Обновление загружено. Перезапуск...');
    autoUpdater.quitAndInstall();
});

autoUpdater.on('error', (error) => {
    console.log(`Ошибка обновления: ${error}`);
});
