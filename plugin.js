CKEDITOR.plugins.add('addmap',   
  {    
    requires: ['dialog'],
	lang : ['en'], 
    init:function(a) { 
	var b="addmap";
	var c=a.addCommand(b,new CKEDITOR.dialogCommand(b));
		c.modes={wysiwyg:1,source:0};
		c.canUndo=false;
	a.ui.addButton("addmap",{
					label:a.lang.addmap.title,
					command:b,
					icon:this.path+"map.gif"
	});
	CKEDITOR.dialog.add(b,this.path+"dialogs/addmap.js")}
});