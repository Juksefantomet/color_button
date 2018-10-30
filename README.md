# color_button

A tinymce plugin for rails ment to be used with x-editable-rails + tinymce.

Where editables have onblur cancel,submit colorpicker dropdown fails to function properly
these buttons will have the same feature but hardcoded for colors


Placed into:
` /assets/javascripts/tinymce/plugins/color_button/plugin.js + plugin.min.js `


Append the following lines to the tinymce init script, plugin & toolbar content
'textcolor color_button' & red/blue_color_button

textcolor is vital as color_button relies on this just as colorpicker does

```
plugins: ["autoresize", "paste", "textcolor", "color_button"]


toolbar: "undo redo | red_color_button blue_color_button"

```


Render your editable with tinymce, select text and click the button.
