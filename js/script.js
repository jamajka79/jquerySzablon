(function () {

   function showUsers(users) {
    users.forEach(function(user, index) {
      console.log(user);

    });
}
  $.ajax({
    url: "https://api.github.com/users?since=178",
    success: function(x){ showUsers(x)  },

});
})();
