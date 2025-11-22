/**
 * GalleryItem 类用于创建和渲染项目画廊项
 * 每个项目包含封面图片、标题和描述，并支持点击事件
 */
class GalleryItem {
    /**
     * 构造函数，初始化 GalleryItem 实例
     * @param {Object} project - 项目对象，包含项目的所有信息
     * @param {string} project.coverImage - 项目封面图片的URL
     * @param {string} project.title - 项目标题
     * @param {string} project.description - 项目描述
     * @param {string|number} project.id - 项目唯一标识符
     * @param {Function} onClickHandler - 点击项目时触发的回调函数
     */
    constructor(project, onClickHandler) {
        this.project = project;
        this.onClick = onClickHandler;
    }

    /**
     * 渲染画廊项元素
     * 创建一个包含项目封面图片、标题和描述的DOM元素
     * @returns {HTMLElement} 返回渲染好的DOM元素
     */
    render() {
        // 创建容器元素
        const element = document.createElement('div');
        element.className = 'gallery-item rounded-lg overflow-hidden bg-black';

        // 绑定点击事件处理函数
        element.onclick = () => this.onClick(this.project.id);

        // 设置元素内部HTML内容
        element.innerHTML = `
            <img src="${this.project.coverImage}" alt="${this.project.title}" class="w-full h-80 object-cover">
            <div class="p-5">
                <h3 class="text-xl font-light text-white mb-1">${this.project.title}</h3>
                <p class="text-sm text-gray-500">${this.project.description.split('\n')[0]}</p>
            </div>
        `;

        return element;
    }
}
