var is_product_color = isProductColorArrayUpdate();
var beforeSelect = $('.is_product_color')[$('.is_product_color').val == 1] ;
console.log(beforeSelect);
// {is_product_color0 : 0}
var color_list = [];
isProductColor() 
function isProductColor() {
    $('.is_product_color').each((index,item) =>{
        if($(item).find(':selected').val() == '1') {
            $(`.color_list${item.dataset.is_product_color}`).addClass('color_list_ok')
            if(beforeSelect != undefined && item != beforeSelect) {
                $(beforeSelect).val(0)
            }
            beforeSelect = $(item);
        } else {
            beforeSelect = $('.is_product_color')[$('.is_product_color').val == 1];
            $(`.color_list${item.dataset.is_product_color}`).removeClass('color_list_ok')
        }
    })
    isProductColorArrayUpdate()
}

function isProductColorArrayUpdate() {
    is_product_color = []
    $('.is_product_color').each((index,item) =>{
        is_product_color.push({is_product_color:item.dataset.is_product_color ,val:$(item).find(':selected').val()})
    })
   
    colorListUpdate()
    return is_product_color
}


function colorListUpdate() {
    index_is_product_color = is_product_color.findIndex((obj => obj.val == 1)); 
   // console.log(index_is_product_color);
    color_list = []
    if($(`.color_list_ok`).length) {
        let i = 0;
        $(`.color_list_ok`).find(":selected").each(function(index, item){
            color_list.push({id:i , val:item.innerHTML})    
            i++
        })
        productColorUpdate()
    }

   // console.log(color_list)
}

function productColorUpdate() {
   if(color_list != [])  {
        $('.product_color').empty();
        color_list.forEach((item , index)=>{
          
                $('.product_color').append(`<option value="${item.id}">${item.val}</option>`)
          
            
        })
        
   }
}

