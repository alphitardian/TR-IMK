$(document).ready(function () {
  $("#notification-button").click(function () {
    $(".notification-panel").toggle(1000);
  });
  $("#chat-button").click(function () {
    $(".chat-panel").toggle(1000);
  });

  $(window).scroll(function () {
    var navbarClass = $(".navbar"),
      scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 50) navbarClass.addClass("navbar-fixed-position");
    else navbarClass.removeClass("navbar-fixed-position");
  });
});

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "# of Health",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
