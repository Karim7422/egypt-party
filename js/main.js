/// <reference types="../@types/jquery" />
$(".menu").hide();
$(".open-icon ").on("click", () => {
  $("aside").animate({ width: "250px", padding: "1rem 0.75rem" }, 200);
  $(".menu").show(200);
});
$(".fa-xmark").on("click", () => {
  $("aside").animate({ width: "0", padding: "0" }, 200);
  $(".menu").hide(200);
});

$(".accordion-body").hide();
$(".accordion-title").on("click", function () {
  $(this).next(".accordion-body").slideToggle();
});

//!Count Down
countDown("01 feb 1996 12:00:00");

function countDown(counter) {
  let futureDate = new Date(counter);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".dayes").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".mins").html(`${mins} m`);
  $(".sec").html(`${secs} s`);

  setInterval(function () {
    countDown(counter);
  }, 1000);
}
var maxLength = 100;
$("textarea").on("keyup", function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");

  } else {
    $("#chars").text(AmountLeft);
  }
});
