import "./navigation-bar.css";
import { logOut } from "../../helpers/log-out";
import { navigateTo } from "../../Router";
import "../navigation-bar/navigation-bar";

if (!customElements.get("navigation-bar")) {
  class NavigationBar extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const nav = document.createElement("nav");
      nav.classList.add("nav");

      nav.innerHTML = `
      <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    :host {
      display: flex;
      align-items: center;
    }
    
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%; /* Cambiado el ancho */
      height: 4rem; /* Reducido la altura */
      background: rgb(125, 53, 192);
      font-weight: 900;
      color: white;
      display: flex;
      justify-content: center; /* Centrado horizontal */
      padding: 1em;
    }
    
    .list {
      display: flex;
      flex-direction: row; /* Cambiado a fila */
      justify-content: space-between; /* Espaciado entre elementos */
      align-items: center; /* Centrado vertical */
      gap: 2em; /* Reducido el espacio entre elementos */
    }
    
    .list_item {
      list-style: none;
      text-align: center;
      color: inherit;
      text-decoration: none;
      transition: all ease 1s;
      border-radius: 10px;
    }
    
    .list_item:hover{
      background: grey;
    }
    
    .list_item--click{
      cursor: pointer;
    }
    
    .list_inside {
      list-style: none;
      display:flex;
    }

</style>
</head>
<body>
<div class="nav">
    <ul class="list">
        <li class="list_item nav_item" id="home"><a href="#" class="list_item">🏠 Home</a></li>
        <li class="list_item nav_item"><a href="#" class="list_item">🎮 Juegos</a></li>
        <li class="list_item nav_item"><a href="#" class="list_item">🏆 Ligas</a></li>
        <li class="list_item nav_item"><a href="#" class="list_item">🏅 Desafíos</a></li>
        <li class="list_item list_item--click">≡
            <ul>
                <li class="list_inside">
                    <nav>
                        <button id="logout">Logouts</button>
                        <br>
                        <button id="reports">Reportes</button>
                    </nav>
                </li>
            </ul>
        </li>
    </ul>
</div>
</body>
</html>
        `;
      shadow.appendChild(nav);
      //Logout
      const logOuts = shadow.getElementById("logout");
      logOuts.addEventListener("click", () => logOut());
      //Reports
      const reportsButton = shadow.getElementById("reports");
      reportsButton.addEventListener("click", () =>
        navigateTo("/dashboard/audit")
      );
      // Home
      let Home = shadow.getElementById("home");
      Home.addEventListener("click", () => navigateTo("/dashboard"));
    }
  }

  customElements.define("navigation-bar", NavigationBar);
}
