var custom_btn = document.getElementById('custom_button');
var btn_preview = document.getElementById('preview');
var btn_code = document.getElementById( 'code');

var btn_html = null,
alignment = "left",
text_color = "#ffffff",
bg_color="#000000",
font_family="'Open Sans', Arial, sans-serif",
padding="9px 10px",
border_radius="3px",
btn_text="Let's Go!!!",
btn_url = "example.com",
btn_width = "",
font_size = "18",
font_weight =  "bold",
target = "",
fallback_error = "",
number_error = "",
text_error = "";

var serifs = {
    "Arial": "sans-serif", 
    "Arial Black": "sans-serif", 
    "Helvetica": "sans-serif", 
    "Verdana": "sans-serif", 
    "Trebuchet": "sans-serif", 
    "Times New Roman": "serif",
    "Courier": "serif",
    "Courier New": "serif",
}


function show_preview () {   
   
    btn_html = '<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="color:'+ text_color +';" width="100%">' + "\n";
    btn_html += "\t" + '<tr>' + "\n";
    btn_html += "\t" + "\t" + '<td align="center" width="100%">'+ "\n";
    btn_html += "\t" + "\t" + "\t" + '<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;" width="100%">' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "<tr>" +"\n" 
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + '<td align="' + alignment  +'" width="100%">' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + '<table border="0" cellpadding="0" cellspacing="0" role="presentation" '+ btn_width +' style="border-collapse:collapse; ">' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + '<tr>'+ "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + '<td bgcolor="'+ bg_color +'" style="border-radius: '+ border_radius +'px; background-color:'+ bg_color +'; text-align: ' + alignment  +';">' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + '<a '+ target +' href="'+ btn_url +'" style="color:'+ text_color +';text-decoration:none; font-size:' + font_size  +'px; font-family:' + font_family  +'; font-weight:'+ font_weight +';text-align: center; display: block; background-color: '+ bg_color +'; border: 1px solid '+ bg_color +'; padding:'+ padding +'; border-radius: '+ border_radius +'px;-moz-border-radius: '+ border_radius +'px; -webkit-border-radius: '+ border_radius +'px;">'+ btn_text +'</a>' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "</td>" + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + '</tr>' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + "\t" + '</table>' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + "\t" + '</td>' + "\n";
    btn_html += "\t" + "\t" + "\t" + "\t" + '</tr>' + "\n";
    btn_html += "\t" + "\t" + "\t" + '</table>' + "\n";
    btn_html += "\t" + "\t" +'</td>' + "\n";
    btn_html += "\t" + '</tr>' + "\n";
    btn_html += '</table>';

    btn_preview.innerHTML = btn_html;

    btn_preview.style.height = "auto";
    
    btn_code.innerHTML = btn_html.replace(/&/g, '&amp;').replace(/</g, '&lt;');

    btn_code.parentElement.style.height = "auto";

}

function get_choices () {

    var form_valid = true;

    // Google fonts
    var selected_font = '';
    // if no custom font is set, fetch the active font (FontPicker.js)
    if (document.getElementById( 'font_input').value == '') {

        selected_font_object = fontPicker.getActiveFont();
        selected_font = selected_font_object.family;

    } else {

        selected_font = escapeHtml(document.getElementById( 'font_input').value);
    
    };

    // System fonts fallbacks and serif family
    var font_serif = "sans-serif";
    // check if fallback is selected
    if( document.getElementById( 'font_fallback' ).validity.valid ){
        document.querySelector('#font_fallback + p.error').style.display = "none";
        for( var serif in serifs ) {
            if(document.getElementById( 'font_fallback' ).value == serif) {
                font_serif = serifs[ serif ];
            };
        };
    } else {
         document.querySelector('#font_fallback + p.error').style.display = "block";
         form_valid = false;
         
    }


    alignment_selections =  document.getElementsByName( 'btn_alignment' );

    for (var i = 0; i < alignment_selections.length; i++ ) {
        if(alignment_selections[i].checked) {
            alignment = alignment_selections[i].value;
            break
        };
    };

    button_widths =  document.getElementsByName( 'btn_width' );

    for (var i = 0; i < button_widths.length; i++ ) {       
        if(button_widths[i].checked && button_widths[i].value == 'full' ) {            
            btn_width = 'width="100%"';
            break
        } else {
            btn_width = '';
        }
    };

    font_weights =  document.getElementsByName( 'font_weight' );

    for (var i = 0; i < font_weights.length; i++ ) {
        if(font_weights[i].checked) {
            font_weight = font_weights[i].value;
            break       
        };
    };

    if(document.getElementById('target').checked ) {
        target = 'target="_blank"';
    };

    if (document.getElementById( 'font_size' ).validity.valid ) {
        document.querySelector('#font_size + p.error').style.display = "none";
        font_size = escapeHtml(document.getElementById( 'font_size' ).value); 
    } else {
        document.querySelector('#font_size + p.error').style.display = "block";
        form_valid = false;
    }
     

    text_color = document.getElementById( 'txtcolor' ).value;   

    bg_color = document.getElementById( 'bgcolor' ).value;

    font_family = "'" + selected_font + "', " + document.getElementById( 'font_fallback').value + " , " + font_serif;

    if (document.getElementById( 'padding_tb' ).validity.valid && document.getElementById( 'padding_lr' ).validity.valid) {
        document.querySelector('#padding > p.error').style.display = "none";
        padding = document.getElementById ( 'padding_tb' ).value + "px " + document.getElementById ( 'padding_lr' ).value + "px" ;
    } else {
        document.querySelector('#padding > p.error').style.display = "block";
        form_valid = false;
    }

    if (document.getElementById( 'border_radius' ).validity.valid ) {
        document.querySelector('#border_radius + p.error').style.display = "none";
        border_radius = document.getElementById( 'border_radius' ).value;
    } else {
        document.querySelector('#border_radius + p.error').style.display = "block";
        form_valid = false;
    }
    
    if( document.getElementById( 'btn_text' ).validity.valid) {
        document.querySelector('#btn_text + p.error').style.display = "none";
        btn_text =  escapeHtml(document.getElementById ( 'btn_text' ).value);
    } else {
        document.querySelector('#btn_text + p.error').style.display = "block";
        form_valid = false;
       
    }
    
    if ( document.getElementById( 'btn_url' ).validity.valid) {
        document.querySelector('#btn_url + p.error').style.display = "none";
        btn_url =  escapeHtml(document.getElementById ( 'btn_url' ).value);
    } else {
        document.querySelector('#btn_url + p.error').style.display = "block";
        form_valid = false;
    }
    
    if (form_valid) {
        show_preview();
    }
    

}

// custom fonts dropdown
function show_custom_font_option() {

    var dropdown_btn = document.getElementsByClassName( 'dropdown')[0];

    if (dropdown_btn.style.display == "none") {
        dropdown_btn.style.display = "block";
    } else {
        dropdown_btn.style.display = "none";
    }

}


// escaping html function for text input fields

function escapeHtml(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }