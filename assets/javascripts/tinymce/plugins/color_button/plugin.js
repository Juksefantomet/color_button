tinymce.PluginManager.add('color_button', function(editor, url) {
  // Add a button that allows for color marking of selected text in x-editable field

  editor.addButton('red_color_button', {
    //icon: 'false',
    image: 'http://p.yusukekamiyamane.com/icons/search/fugue/icons/edit-color.png',
    tooltip: 'Mark text RED',
    onclick: function() {
      //editor.insertContent(editor.selection.getContent(), editor.execCommand("ForeColor", false, "red"));
      editor.insertContent(editor.selection, editor.execCommand("ForeColor", false, "red"));
    }
  });

  editor.addButton('blue_color_button', {
    //icon: 'false',
    image: 'http://p.yusukekamiyamane.com/icons/search/fugue/icons/globe.png',
    tooltip: 'Mark text BLUE',
    onclick: function() {
      //editor.insertContent(editor.selection.getContent(), editor.execCommand("ForeColor", false, "red"));
      editor.insertContent(editor.selection, editor.execCommand("ForeColor", false, "blue"));
    }
  });

  return {
    getMetadata: function () {
      return  {
        name: "color_button plugin",
        url: "https://github.com/Juksefantomet/color_button"
      };
    }
  };
});
