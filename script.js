function openApp(id){
    const app = document.getElementById(id);
    app.classList.remove('hidden');
}
function closeAllApps() {
    const apps = document.querySelectorAll('.general-app');
    apps.forEach(app => app.classList.add('hidden'));
  }
