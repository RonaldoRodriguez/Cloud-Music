import {
  CHANGE_HOME_TAB,
  SET_SEARCH_KEYWORD,
  SET_CURRENT_SONG_INFO,
  SET_AUDIO_TIME,
  SET_PLAYING_STATUS,
  CHANGE_LOOP_STATUS,
  SET_CURRENT_SONG_ID,
  SET_CURRENT_PLAY_LIST,
  SET_CURRENT_VIDEO_INFO
} from './mutations-type.js';
export default {
  // 改变主页tab栏
  [CHANGE_HOME_TAB](state, index) {
    state.homeTabCurrentIndex = index;
  },
  // 设置搜索关键字
  [SET_SEARCH_KEYWORD](state, keyword) {
    state.searchKeywords = keyword;
  },
  [SET_CURRENT_SONG_INFO](state, songInfo) {
    state.currentSongInfo = Object.assign({}, songInfo);
  },
  [SET_AUDIO_TIME](state, time) {
    state.audioCurrentTime = time;
  },
  [SET_PLAYING_STATUS](state, boolean) {
    state.isPlaying = boolean;
  },
  [CHANGE_LOOP_STATUS](state, loopStatus) {
    state.loopStatus = loopStatus;
  },
  [SET_CURRENT_SONG_ID](state, songId) {
    state.currentSongId = songId;
  },
  [SET_CURRENT_PLAY_LIST](state, playLists) {
    state.currentPlayLists = [...playLists];
  },
  [SET_CURRENT_VIDEO_INFO](state, videoInfo) {
    state.currentVideoInfo = Object.assign({}, videoInfo);
  }
};