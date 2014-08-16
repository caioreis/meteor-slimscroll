Package.describe({
  summary: "jQuery slimcroll library"
});

Package.on_test(function (api) {
  api.use('jquery', 'client');
  api.add_files('jquery-slimscroll.js', 'client');
});