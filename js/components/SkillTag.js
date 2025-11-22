/**
 * SkillTag 类用于创建技能标签元素
 * 每个技能标签是一个圆形的span元素，显示技能名称
 */
class SkillTag {
    /**
     * 构造函数初始化技能标签
     * @param {string} skillName - 技能名称
     */
    constructor(skillName) {
        this.skillName = skillName;
    }

    /**
     * 渲染技能标签为DOM元素
     * @returns {HTMLElement} 返回创建的span元素
     */
    render() {
        const element = document.createElement('span');
        element.className = 'skill-tag rounded-full';
        element.textContent = this.skillName;

        return element;
    }
}

// DOM加载完成后执行技能标签渲染
document.addEventListener('DOMContentLoaded', function() {
    // 定义技能数组，只包含技能名称
    const skills = [
        'Blender',
        'Maya',
        '3ds Max',
        'ZBrush',
        'Substance Painter',
        'Substance Designer',
        'Unreal Engine 5',
        'Unity',
        'Photoshop',
        'Marvelous Designer',
        'Houdini'
    ];

    const container = document.getElementById('skills-tags');

    skills.forEach(skill => {
        const skillTag = new SkillTag(skill);
        container.appendChild(skillTag.render());
    });
});
