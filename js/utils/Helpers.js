/**
 * 工具函数集合
 */
const Utils = {
    /**
     * 复制文本到剪贴板
     * @param {string} text - 需要复制的文本
     * @param {HTMLElement} element - 触发复制操作的DOM元素
     */
    copyToClipboard(text, element) {
        navigator.clipboard.writeText(text).then(() => {
            // 获取复制图标
            const copyIcon = element.querySelector('iconify-icon:last-child');

            // 显示复制成功图标
            copyIcon.style.opacity = '1';

            // 添加临时文本提示
            const originalText = element.childNodes[2].textContent;
            element.childNodes[2].textContent = ' 已复制!';

            // 2秒后恢复原状
            setTimeout(() => {
                copyIcon.style.opacity = '0';
                element.childNodes[2].textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('复制失败: ', err);
        });
    },

    /**
     * 格式化描述文本，将换行符替换为HTML换行标签
     * @param {string} description - 原始描述文本
     * @returns {string} 格式化后的HTML文本
     */
    formatDescription(description) {
        return description.replace(/\n/g, '<br><br>');
    }
};

// 页面加载完成后绑定事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 为所有联系项添加点击事件监听器
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('click', function() {
            // 获取要复制的文本
            const text = this.getAttribute('data-text');
            // 调用复制函数
            Utils.copyToClipboard(text, this);
        });
    });
});
