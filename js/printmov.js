function connectApi(key) {
  console.log("Requesting PRINTmov-"+key+" API.")
  $.ajax({
    type: "POST",
    url: "https://printto-diff-svc-register.onrender.com/visit/" + key,
    success: function(result) {
      console.log("Received PRINTmov-"+key+" API.");
    },
    error: function(result) {
      console.log("Error PRINTmov-"+key+" API.");
    }
  });
}
