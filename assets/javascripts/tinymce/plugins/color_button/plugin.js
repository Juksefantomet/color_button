tinymce.PluginManager.add('color_button', function(editor, url) {
  // Add a button that allows for color marking of selected text in x-editable field

  editor.addButton('red_color_button', {
    text: 'Mark tekst RED',
    icon: false,
    onclick: function() {
      //editor.insertContent(editor.selection.getContent(), editor.execCommand("ForeColor", false, "red"));
      editor.insertContent(editor.selection, editor.execCommand("ForeColor", false, "red"));
    }
  });

  editor.addButton('blue_color_button', {
    text: 'Mark tekst BLUE',
    icon: false,
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
