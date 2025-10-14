const tabItems = document.querySelectorAll('.tab-item');
const tabPanels = document.querySelectorAll('.tab-panel');

tabItems.forEach(tab => {
    tab.addEventListener('click', function(){
        tabItems.forEach(item => item.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        this.classList.add('active');

        const target = this.dataset.tab;

        const targetPanel = document.getElementById(target);
        if(targetPanel) {
            targetPanel.classList.add('active');
        }
    })
})