$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Ouvre la lettre lorsque l'on clique sur l'enveloppe ou sur le bouton "Open"
  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  // Ferme la lettre avec le bouton "Close"
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    // Ajoute une classe au body pour déplacer les boutons
    $("body").addClass("letter-open");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    $("body").removeClass("letter-open");
  }
});
