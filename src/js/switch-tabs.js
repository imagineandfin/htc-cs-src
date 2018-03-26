(() => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  const tabsWrap = document.querySelector('.tabs-titles-wrap');
  const activeClassContent = 'tab-content_active';
  const activeClassTab = 'tab_active';

  //switch tabs
  tabsWrap.addEventListener('click', e => {
    if (e.target.classList.contains('tab')) {
      [...tabs].forEach((tab, tabIndex, tabArray) => { 
        tab.classList.remove(activeClassTab); //remove active classes for elements
        contents[tabIndex].classList.remove(activeClassContent);
        if (e.target === tab) { //add active classes for selected item and relevant container content
          tab.classList.add(activeClassTab);
          contents[tabIndex].classList.add(activeClassContent);
          $('.block-content-friends').jScrollPane(); //check if you need scrollbars
          $('.block_position_right').jScrollPane();
        }
      });
    }
  });
})();
