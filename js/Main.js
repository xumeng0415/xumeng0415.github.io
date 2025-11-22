/**
 * 模态框管理器类
 * 负责处理项目展示和模态框的打开/关闭功能
 */
class ModalManager {
    /**
     * 构造函数
     * @param {Array} projectData - 项目数据数组
     */
    constructor(projectData) {
        this.projectData = projectData;
        this.cachedElements = {};
        this.init();
    }

    /**
     * 初始化方法
     * 绑定项目卡片点击事件并渲染项目
     */
    init() {
        // 缓存常用DOM元素
        this.cacheDOMElements();

        // 绑定事件监听器
        this.bindEvents();

        // 渲染项目列表
        this.renderProjects();
    }

    /**
     * 缓存常用的DOM元素
     */
    cacheDOMElements() {
        this.cachedElements = {
            projectsContainer: document.getElementById('projects-container'),
            detailModal: document.getElementById('detailModal'),
            modalTitle: document.getElementById('modalTitle'),
            modalDescription: document.getElementById('modalDescription'),
            modalGallery: document.getElementById('modalGallery')
        };
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 绑定模态框关闭事件
        document.querySelector('.close-modal')?.addEventListener('click', () => this.closeModal());

        // 绑定模态框外部点击关闭事件
        this.cachedElements.detailModal?.addEventListener('click', (e) => this.closeModalOnClickOutside(e));

        // 绑定ESC键关闭模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    /**
     * 渲染项目列表
     * 创建 GalleryItem 实例并添加到容器中
     */
    renderProjects() {
        const container = this.cachedElements.projectsContainer;
        if (!container) return;

        container.innerHTML = '';

        this.projectData.forEach(project => {
            const galleryItem = new GalleryItem(project, (id) => this.openModal(id));
            container.appendChild(galleryItem.render());
        });
    }

    /**
     * 打开模态框
     * @param {string} id - 项目ID
     */
    openModal(id) {
        const project = this.projectData.find(p => p.id === id);
        if (!project) return;

        // 设置模态框内容
        this.setModalContent(project);

        // 显示模态框并禁用页面滚动
        this.showModal();
    }

    /**
     * 设置模态框内容
     * @param {Object} project - 项目数据
     */
    setModalContent(project) {
        // 设置模态框标题
        if (this.cachedElements.modalTitle) {
            this.cachedElements.modalTitle.textContent = project.title;
        }

        // 设置模态框描述（支持HTML格式）
        if (this.cachedElements.modalDescription) {
            this.cachedElements.modalDescription.innerHTML = Utils.formatDescription(project.description);
        }

        // 渲染图片画廊
        this.renderGallery(project);
    }

    /**
     * 渲染图片画廊
     * @param {Object} project - 项目数据
     */
    renderGallery(project) {
        const galleryContainer = this.cachedElements.modalGallery;
        if (!galleryContainer) return;

        galleryContainer.innerHTML = '';

        // 如果项目使用新的 imageGroups 结构
        if (project.imageGroups) {
            project.imageGroups.forEach(group => {
                const groupContainer = document.createElement('div');
                groupContainer.className = 'mb-8';

                // 添加组标题
                const titleDiv = document.createElement('div');
                titleDiv.className = 'mb-4 p-4 bg-gray-900 rounded-lg border border-gray-700';
                titleDiv.innerHTML = `<h4 class="text-xl font-medium gradient-text">${Utils.escapeHtml(group.title)}</h4>`;
                groupContainer.appendChild(titleDiv);

                // 添加图片容器
                const imagesContainer = document.createElement('div');
                imagesContainer.className = 'space-y-4';

                group.images.forEach(imgUrl => {
                    const imgDiv = document.createElement('div');
                    imgDiv.className = 'flex justify-center';
                    imgDiv.innerHTML = `
                    <div class="inline-block rounded-lg overflow-hidden border border-gray-900">
                        <img src="${Utils.escapeHtml(imgUrl)}" alt="${Utils.escapeHtml(group.title)}" class="max-w-2xl h-auto" loading="lazy">
                    </div>
                `;
                    imagesContainer.appendChild(imgDiv);
                });

                groupContainer.appendChild(imagesContainer);
                galleryContainer.appendChild(groupContainer);
            });
        } else if (project.images) {
            // 兼容旧的数据结构
            project.images.forEach((imgUrl, index) => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'mb-6';
                imgContainer.innerHTML = `
                <div class="mb-3 p-3 bg-gray-900 rounded-lg">
                    <h4 class="text-lg font-medium gradient-text">图片 ${index + 1}</h4>
                </div>
                <div class="flex justify-center">
                    <div class="inline-block rounded-lg overflow-hidden border border-gray-900">
                        <img src="${Utils.escapeHtml(imgUrl)}" alt="${Utils.escapeHtml(project.title)} - 图片 ${index + 1}" class="max-w-2xl h-auto" loading="lazy">
                    </div>
                </div>
            `;
                galleryContainer.appendChild(imgContainer);
            });
        }
    }

    /**
     * 显示模态框
     */
    showModal() {
        if (this.cachedElements.detailModal) {
            this.cachedElements.detailModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * 关闭模态框
     */
    closeModal() {
        if (this.cachedElements.detailModal) {
            this.cachedElements.detailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    /**
     * 点击模态框外部区域关闭模态框
     * @param {Event} event - 点击事件对象
     */
    closeModalOnClickOutside(event) {
        if (event.target === this.cachedElements.detailModal) {
            this.closeModal();
        }
    }
}

/**
 * 工具函数类
 */
class Utils {
    /**
     * 格式化描述文本
     * @param {string} description - 描述文本
     * @returns {string} 格式化后的HTML
     */
    static formatDescription(description) {
        // 这里保留原来的实现
        return description || '';
    }

    /**
     * 转义HTML特殊字符
     * @param {string} text - 需要转义的文本
     * @returns {string} 转义后的文本
     */
    static escapeHtml(text) {
        if (!text) return '';
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

/**
 * DOM加载完成后初始化模态框管理器
 */
document.addEventListener('DOMContentLoaded', function() {
    window.modalManager = new ModalManager(PROJECTS_DATA);
});
