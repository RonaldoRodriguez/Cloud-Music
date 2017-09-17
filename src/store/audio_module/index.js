// 音频模块
export default {
  state: {
    // 当前播放音频的DOM元素
    audioElement: null,
    // 当前音频的播放状态
    isPlaying: false,
    // 当前音频播放的URL地址
    audioUrl: null,
    // 当前音频的播放时间
    audioCurrentTime: 0,
    // 音频的循环方式,0默认是列表循环
    loopStatus: 0
  },
  mutations: {
    // 设置当前播放时间
    SET_AUDIO_TIME(state, time) {
      state.audioCurrentTime = time;
    },
    // 设置当前播放状态
    SET_PLAYING_STATUS(state, boolean) {
      state.isPlaying = boolean;
    },
    // 改变循环方式
    CHANGE_LOOP_STATUS(state, loopStatus) {
      state.loopStatus = loopStatus;
    },
    // 设置当前播放URL地址
    SET_AUDIO_URL(state, url) {
      state.audioUrl = url;
    },
    // 设置当前播放DOM元素
    SET_AUDIO_ELEMENT(state, domElem) {
      state.audioElement = domElem;
    }
  }
};
