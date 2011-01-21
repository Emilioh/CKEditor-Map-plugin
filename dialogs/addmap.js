CKEDITOR.dialog.add("addmap",function(e){	
	return{
		title:e.lang.addmap.title,
		resizable : CKEDITOR.DIALOG_RESIZE_BOTH,
		minWidth:380,
		minHeight:60,
		onShow:function(){ 
		},
		onLoad:function(){ 
				dialog = this; 
				this.setupContent();
		},
		onOk:function(){
			var sInsert='<img src="http://maps.google.com/maps/api/staticmap?center=' + this.getValueOf('info','insertcode_area') + '&zoom=14&size='+this.getValueOf('info','select_size')+'&maptype=roadmap&sensor=false"/>';
			if ( sInsert.length > 0 ){e.insertHtml(sInsert);} 
		},
		contents:[
			{	id:"info",
				name:'info',
				label:e.lang.addmap.commonTab,
				elements:[{
				 type:'vbox',
				 padding:0,
				 children:[
				  {type:'html',
				  html:'<span>'+e.lang.addmap.HelpInfo+'</span>'
				  },
				  { type:'text',
				    id:'insertcode_area'
				  },
				  {type:'html',
				  html:'<br/><span>Select image size</span><br/><br/>'
				  },				  
				  { type:'radio',
				    id:'select_size',
					'default':'256x256',
					items :[['64x64'],['256x256'],['512x512']]
				  }
				  ]
				}]
			}
		]
	};});