//si jamais dans le navigator il y a une serviceWorker 
//lance tout les directive qui sont enrigistrer dans le serviceWorker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceWorker.js");
  }