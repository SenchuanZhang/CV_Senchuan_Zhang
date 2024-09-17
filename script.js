function showLanguage(lang) {
    // 获取所有语言内容区域
    const languages = ['english', 'german', 'chinese'];

    // 隐藏所有语言内容
    languages.forEach(language => {
        document.getElementById(language).style.display = 'none';
    });

    // 显示选定的语言内容
    document.getElementById(lang).style.display = 'block';
}

// 添加过渡效果
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.transition = 'opacity 0.5s ease-in-out';
        section.style.opacity = '1';
    });
    
    showLanguage('english'); // 默认显示英文内容
});
