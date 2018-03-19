(() => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  const tabsWrap = document.querySelector('.tabs-titles-wrap');
  const activeClassContent = 'tab-content_active';
  const activeClassTab = 'tab_active';

  tabsWrap.addEventListener('click', e => {
    if (e.target.classList.contains('tab')) {
      [...tabs].forEach((tab, tabIndex, tabArray) => {
        tab.classList.remove(activeClassTab);
        contents[tabIndex].classList.remove(activeClassContent);
        if (e.target === tab) {
          tab.classList.add(activeClassTab);
          contents[tabIndex].classList.add(activeClassContent);
          $('.block-content-friends').jScrollPane();  
          $('.block_position_right').jScrollPane();
        }
      });
    }
  });
})();
