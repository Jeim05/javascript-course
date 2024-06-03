export default class Tabs {
  constructor(idElemento) {
    this.tabs = document.getElementById(idElemento);
    this.nav = this.tabs.querySelector('.tabs');

    this.nav.addEventListener('click', (e)=>{
      // Comprobamos que el elemento que clickeamos tenga la clase de tabs__link
      if ([...e.target.classList].includes('tabs__button') ) {
        // Obtenemos la tab que queremos mostrar
        const tab = e.target.dataset.tab;
        
        // Hacemos el condicional para acceder a la clase activa y despues eliminarla
        if (this.tabs.querySelector('.tab--active')) {
          this.tabs.querySelector('.tab--active').classList.remove('tab--active')
        }

        // Quitamos la clase activa de la tab anterior 
        if (this.tabs.querySelector('.tabs__button--active')) {
          this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active')
        }

        // Buscamos cual de los elementos tiene la tabs que queremos buscar
        // Y agregamos la clase activa al tab
        this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

        // Agregamos la clase activa al boton
        e.target.classList.add('tabs__button--active');
      }
    } )
  }
}
