var is_product_color = isProductColor();
var color_list = [];

function isProductColor() {
    is_product_color = $('#is_product_color').find(":selected").val();
    if(is_product_color == 1) {
        $('.form-control').addClass('color_list')
       update()
    } else {
        $('.form-control').removeClass('color_list')
        update()
    }
    return is_product_color
}


function update() {
    color_list = []
    if($('#color_list').length) {
        let i = 0;
        $('.color_list').find(":selected").each(function(index, item){
            color_list.push({id:i , val:item.innerHTML})    
            i++
        })
        productColorUpdate()
    }
}

function productColorUpdate() {
   if(color_list != [])  {
        $('.product_color').empty();
        color_list.forEach((item , index )=>{
            console.log(item.val);
            if(item.val == '') {
                $('.product_color').append(`<option value="${item.id}">${item.val}</option>`)
            }
            
        })
        
   }
}

