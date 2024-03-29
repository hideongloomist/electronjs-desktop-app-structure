let currentPage = '';
const homeScripts = [];
const userScripts = ['./event/security_users.event.js'];
function loadScript(scriptUrl) {
  // Tạo một thẻ script mới và thiết lập src
  var scriptElement = document.createElement('script');
  scriptElement.src = scriptUrl;
  document.body.appendChild(scriptElement);
}
function removeScript(scriptUrl) {
  var scriptElement = document.querySelector('script[src="' + scriptUrl + '"]');
  if (scriptElement) {
    scriptElement.parentNode.removeChild(scriptElement);
  }
}
function removeCurrentPageScript() {
  switch (currentPage) {
    case 'home.html':
      homeScripts.forEach(function (element) {
        removeScript(element);
      });
      break;
    case 'product':
      // Mã được thực thi nếu expression == value2
      break;
    default:
      // Sử dụng jQuery load() để tải nội dung từ một trang HTML
      $('#content').load(page);
      currentPage = page;
  }
}
function loadPage(page) {
  if (page === currentPage) return;
  switch (page) {
    case 'user':
      // Remove script of current page
      removeCurrentPageScript();
      // Load new page
      $('#content').load(page);
      currentPage = page;
      // Load JS
      userScripts.forEach(function (element) {
        loadScript(element);
      });
      break;
    case 'product':
      // Mã được thực thi nếu expression == value2
      break;
    default:
      $('#content').load(page);
      currentPage = page;
      break;
  }
}
function loadRightBar(page) {
  $('#right-bar').load(page);
}
