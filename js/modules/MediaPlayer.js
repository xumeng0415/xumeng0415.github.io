/**
 * 媒体播放器类
 * 负责管理视频播放列表、播放控制和界面交互
 */
class MediaPlayer {
    /**
     * 构造函数
     * @param {Array} playlist - 视频播放列表数组，每个元素包含title和url属性
     */
    constructor(playlist) {
        this.playlist = playlist;
        this.currentIndex = 0;
        this.isPlaying = true;
        this.playerOpen = false;

        // 缓存常用DOM元素
        this.elements = {
            playerPanel: document.getElementById('playerPanel'),
            ballIcon: document.getElementById('ballIcon'),
            videoPlayer: document.getElementById('videoPlayer'),
            playlist: document.getElementById('playlist'),
            playPauseBtn: document.getElementById('playPauseBtn'),
            floatingBall: document.getElementById('floatingBall')
        };

        this.init();
    }

    /**
     * 初始化播放器
     */
    init() {
        this.renderPlaylist();
        this.loadVideo(0);
        this.bindEvents();
    }

    /**
     * 根据BV号生成B站播放器URL
     * @param {string} bvid - B站视频BV号
     * @returns {string} 完整的播放器URL
     */
    generateBilibiliPlayerUrl(bvid) {
        return `https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=1&muted=0`;
    }
    
    /**
     * 绑定事件监听器
     */
    bindEvents() {
        this.elements.floatingBall.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.togglePlayer();
        });
    }

    /**
     * 渲染播放列表
     */
    renderPlaylist() {
        this.elements.playlist.innerHTML = '';

        this.playlist.forEach((video, index) => {
            const item = document.createElement('div');
            item.className = `playlist-item ${index === this.currentIndex ? 'active' : ''}`;
            item.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="text-sm">${video.title}</span>
                    <iconify-icon icon="mdi:play" width="16" height="16"></iconify-icon>
                </div>
            `;
            item.onclick = () => this.loadVideo(index);
            this.elements.playlist.appendChild(item);
        });
    }

    /**
     * 加载指定索引的视频
     * @param {Number} index - 要加载的视频索引
     */
    loadVideo(index) {
        this.currentIndex = index;
        const video = this.playlist[index];
        const videoUrl = this.generateBilibiliPlayerUrl(video.bvid);
        this.elements.videoPlayer.src = videoUrl;
        this.renderPlaylist();
    }

    /**
     * 切换播放器面板显示状态
     */
    togglePlayer() {
        this.playerOpen = !this.playerOpen;

        if (this.playerOpen) {
            this.elements.playerPanel.classList.add('active');
            this.elements.ballIcon.setAttribute('icon', 'mdi:music-note');
        } else {
            this.elements.playerPanel.classList.remove('active');
            this.elements.ballIcon.setAttribute('icon', 'mdi:play');
        }
    }

    /**
     * 关闭播放器面板
     */
    closePlayer() {
        this.playerOpen = false;
        this.elements.playerPanel.classList.remove('active');
        this.elements.ballIcon.setAttribute('icon', 'mdi:play');
    }

    /**
     * 切换播放/暂停状态
     */
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;

        if (this.isPlaying) {
            this.elements.playPauseBtn.innerHTML = '<iconify-icon icon="mdi:pause" width="20" height="20"></iconify-icon>';
            const currentBvid = this.playlist[this.currentIndex].bvid;
            const currentUrl = this.generateBilibiliPlayerUrl(currentBvid);
            this.elements.videoPlayer.src = currentUrl;
        } else {
            this.elements.playPauseBtn.innerHTML = '<iconify-icon icon="mdi:play" width="20" height="20"></iconify-icon>';
            this.elements.videoPlayer.src = '';
        }
    }

    /**
     * 播放上一个视频
     */
    playPrevious() {
        const newIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.playlist.length - 1;
        this.loadVideo(newIndex);
    }

    /**
     * 播放下一个视频
     */
    playNext() {
        const newIndex = this.currentIndex < this.playlist.length - 1 ? this.currentIndex + 1 : 0;
        this.loadVideo(newIndex);
    }
}

// 页面加载完成后初始化播放器
document.addEventListener('DOMContentLoaded', function() {
    window.mediaPlayer = new MediaPlayer(VIDEO_PLAYLIST);
});
