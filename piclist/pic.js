document.writeln('<div id="galleria" style=""></div>');
document.writeln('<script type="text/javascript" src="/piclist/galleria.js"></script>');
document.writeln("<script type='text/javascript'>");
document.writeln("	Galleria.loadTheme('/piclist/galleria.lightbox.js');");
document.writeln("	$('#galleria').galleria({");
	document.writeln("	   data_source: '.anli',");
	document.writeln("	   thumbnails: false,");
	document.writeln("	   extend: function() {");
	document.writeln("			this.bind(Galleria.LOADFINISH, function(e) {");
	document.writeln("				$(e.imageTarget).click(this.proxy(function(e) {");
	document.writeln("					e.preventDefault();");
	document.writeln("					this.next();");
	document.writeln("				}))");
	document.writeln("			})");
	document.writeln("		},");
	document.writeln("	   keep_source: true");
	document.writeln("	});");
document.writeln("</script>");
	// document.writeln("<style> #subCon .left .con #galleria div{clear:none;} #subCon .left .con img{float:left;max-width:200px;max-height:150px;margin:10px 20px 22px 20px;border:4px solid #cdcdcd;cursor:pointer;}</style>");
	// document.writeln("<style> .main_arc_l .arc_con .content #galleria div{clear:none;} .main_arc_l .arc_con .content img{float:left;max-width:200px;max-height:150px;margin:10px 10px 22px 0px;border:4px solid #cdcdcd;cursor:pointer;}</style>");
	// document.writeln("<style> .list_fr_conent .zw  #galleria div{clear:none;} .list_fr_conent .zw img{float:left;max-width:200px;max-height:150px;margin:10px 2px 22px 0px;border:4px solid #cdcdcd;cursor:pointer;}</style>");
	// document.writeln("<style> .main_r .main_r_con_2  #galleria div{clear:none;} .main_r .main_r_con_2 img{float:left;max-width:200px;max-height:150px;margin:10px 8px 22px 8px;border:4px solid #cdcdcd;cursor:pointer;}</style>");
	// document.writeln("<style>.art_box p{ text-indent:2em;clear:both;} .art_box  #galleria div{clear:none;} .list_cent .box img{ float:left;max-width:150px;max-height:113px;margin:10px 10px 22px 10px;border:4px solid #cdcdcd;cursor:pointer;}</style>");



