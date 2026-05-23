# Bayflix

Кросплатформено настолно приложение за стрийминг и сваляне на филми, сериали и аниме. Без реклами. Без проследяване.

## Възможности

- **Стрийминг** на филми, сериали и аниме от целия свят
- **Сваляне** за гледане офлайн
- **Субтитри** — сваляне и управление
- **Библиотека** — следене на гледано, запазено и изтегляния
- **Персонализация** на интерфейса и поведението
- **Без реклами и проследяване** — завинаги

## Изисквания

- Безплатен TMDB API Read Access Token — [как да го получите](tmdb-tutorial.md)
- За сваляне: [vid-dl-cli-only](https://github.com/codeobfuscation/vid-dl-cli-only/releases/latest) и [ffmpeg](https://ffmpeg.org/download.html)

## Инсталация

Свалете последната версия от [Releases](https://github.com/codeobfuscation/bayflix-desktop-app/releases/latest).

При първо стартиране ще бъдете подканени да въведете вашия TMDB API ключ. Запазва се локално, прави се само веднъж.

### Windows

Стартирайте `Bayflix Setup *.exe`.

### Linux

```bash
# Debian / Ubuntu
sudo dpkg -i bayflix_*.deb

# Arch Linux
sudo pacman -U bayflix-*.pacman

# AppImage
chmod +x Bayflix-x64.AppImage && ./Bayflix-x64.AppImage
```

### macOS

Отворете `.dmg` файла и плъзнете Bayflix в `Applications`.

## Компилиране от изходен код

Изисква [Node.js](https://nodejs.org/) ≥22.12.0.

```bash
npm install
npm run dist:win        # Windows installer (.exe)
npm run dist:linux      # Linux (.deb + .AppImage + .pacman)
npm run dist:mac        # macOS (.dmg)
```

## Лиценз

GPL-3.0
