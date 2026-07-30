import { showPlaylist, showSong as displayShowSong } from './modules/display.js';
import { songs } from './modules/songs.js';
// import { play, pause, stop, showSong as playerShowSong } from './player.js';
import * as player from './modules/player.js';
import './style/theme.js';

console.log("🎶 Добро пожаловать в музыкальный плеер!");
 
// Показываем весь плейлист
showPlaylist(songs)
 
// Включаем первую песню
displayShowSong(songs[0])
player.showSong(songs[0])
player.play()
 
// Пауза
player.pause()
 
// Включаем вторую песню
displayShowSong(songs[1])
player.showSong(songs[1])
player.play()
 
// Останавливаем
player.stop()