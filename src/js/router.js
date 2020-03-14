// import crossroads from 'crossroads'
import homeController from "./controllers/homeController";
import peopleController from "./controllers/peopleController";
import savedController from "./controllers/savedController";
import contactController from "./controllers/contactController";

// En cada cambio del # va a verificar las rutas
$(window).on("hashchange", locationHashChanged);

function locationHashChanged() {
  switch (location.hash) {
    case "#/":
      $(".main").load("/partials/_home.html", homeController);
      break;
    case "#/contact":
      $(".main").load("/partials/_contact.html", contactController);
      break;
    case "#/saved":
      $(".main").load("/partials/_saved.html", savedController);
      break;
    case "#/people":
      $(".main").load("/partials/_people.html", peopleController);
      break;
    default:
      break;
  }
}
