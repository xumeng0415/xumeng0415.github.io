/**
 * 模态框管理器类
 * 负责管理项目详情模态框的显示和交互
 */
class ModalManager {
    /**
     * 构造函数
     * @param {Array} projectData - 项目数据数组
     */
    constructor(projectData) {
        this.projectData = projectData;
        this.elements = {};
        this.init();
    }

    /**
     * 初始化方法
     * 缓存常用DOM元素并绑定事件监听
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.renderProjects();
    }

    /**
     * 缓存常用的DOM元素
     */
    cacheElements() {
        this.elements.container = document.getElementById('projects-container');
        this.elements.modal = document.getElementById('detailModal');
        this.elements.modalTitle = document.getElementById('modalTitle');
        this.elements.modalDescription = document.getElementById('modalDescription');
        this.elements.modalGallery = document.getElementById('modalGallery');
    }

    /**
     * 绑定全局事件监听器
     */
    bindEvents() {
        // 假设你有关闭按钮和点击外部关闭功能
        document.querySelector('.modal-close')?.addEventListener('click', () => this.closeModal());
        this.elements.modal?.addEventListener('click', (e) => this.closeModalOnClickOutside(e));
    }

    /**
     * 渲染项目列表
     * 创建 GalleryItem 实例并添加到容器中
     */
    renderProjects() {
        this.elements.container.innerHTML = '';

        this.projectData.forEach(project => {
            const galleryItem = new GalleryItem(project, (id) => this.openModal(id));
            this.elements.container.appendChild(galleryItem.render());
        });
    }

    /**
     * 打开项目详情模态框
     * @param {string} id - 项目ID
     */
    openModal(id) {
        const project = this.projectData.find(p => p.id === id);
        if (!project) return;

        this.setModalContent(project);
        this.showModal();
    }

    /**
     * 设置模态框内容
     * @param {Object} project - 当前项目的详细信息
     */
    setModalContent(project) {
        this.elements.modalTitle.textContent = project.title;
        this.elements.modalDescription.innerHTML = Utils.formatDescription(project.description);

        this.elements.modalGallery.innerHTML = '';

        if (project.imageGroups) {
            this.renderImageGroups(project.imageGroups);
        } else {
            this.renderLegacyImages(project.images, project.title);
        }
    }

    /**
     * 渲染带分组的新版图片结构
     * @param {Array} groups - 图片分组数组
     */
    renderImageGroups(groups) {
        groups.forEach(group => {
            const groupContainer = document.createElement('div');
            groupContainer.className = 'mb-8';

            const titleDiv = document.createElement('div');
            titleDiv.className = 'mb-4 p-4 bg-gray-900 rounded-lg border border-gray-700';
            titleDiv.innerHTML = `<h4 class="text-xl font-medium gradient-text">${group.title}</h4>`;
            groupContainer.appendChild(titleDiv);

            const imagesContainer = document.createElement('div');
            imagesContainer.className = 'space-y-4';

            group.images.forEach(imgUrl => {
                const imgWrapper = this.createImageElement(imgUrl, group.title);
                imagesContainer.appendChild(imgWrapper);
            });

            groupContainer.appendChild(imagesContainer);
            this.elements.modalGallery.appendChild(groupContainer);
        });
    }

    /**
     * 渲染旧版本无分组图片结构
     * @param {Array} images - 图片URL数组
     * @param {string} title - 项目标题
     */
    renderLegacyImages(images, title) {
        images.forEach((imgUrl, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'mb-6';

            const titleDiv = document.createElement('div');
            titleDiv.className = 'mb-3 p-3 bg-gray-900 rounded-lg';
            titleDiv.innerHTML = `<h4 class="text-lg font-medium gradient-text">图片 ${index + 1}</h4>`;
            imgContainer.appendChild(titleDiv);

            const imgWrapper = this.createImageElement(imgUrl, `${title} - 图片 ${index + 1}`);
            imgContainer.appendChild(imgWrapper);

            this.elements.modalGallery.appendChild(imgContainer);
        });
    }

    /**
     * 创建单个图片包装元素
     * @param {string} src - 图片路径
     * @param {string} alt - 替代文本
     * @returns {HTMLElement}
     */
    createImageElement(src, alt) {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex justify-center';
        wrapper.innerHTML = `
            <div class="inline-block rounded-lg overflow-hidden border border-gray-900">
                <img src="${src}" alt="${alt}" class="max-w-2xl h-auto">
            </div>
        `;
        return wrapper;
    }

    /**
     * 显示模态框并禁用背景滚动
     */
    showModal() {
        this.elements.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    /**
     * 关闭模态框并恢复背景滚动
     */
    closeModal() {
        this.elements.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    /**
     * 点击模态框外部区域关闭模态框
     * @param {Event} event - 点击事件对象
     */
    closeModalOnClickOutside(event) {
        if (event.target === this.elements.modal) {
            this.closeModal();
        }
    }
}

// DOM加载完成后初始化模态框管理器
document.addEventListener('DOMContentLoaded', function () {
    window.modalManager = new ModalManager(PROJECTS_DATA);
});
