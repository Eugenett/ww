function Slider(width_li,margin_right_li,col_view_img){
            var step=width_li+margin_right_li,
                slider_box_with=col_view_img*step-margin_right_li,
                $col_img=$("#mini-slider>ul>li").length,
                col_main_left=0,
                max_col_main_left=$col_img*step;
            $("#mini-slider").width(slider_box_with);
            $("#mini-slider>ul>li").width(width_li).css("margin-right",margin_right_li);
            $("#left_nav").click(function(){
                if(-col_main_left==max_col_main_left-col_view_img*step){
                    col_main_left=0;
                } else{
                    col_main_left=col_main_left-step;
                }
                $("#mini-slider>ul").css("margin-left",col_main_left+"px");
            });
            $("#right_nav").click(function(){
                if(col_main_left==0){
                    col_main_left=-max_col_main_left+col_view_img*step;
                } else{
                    col_main_left=col_main_left+step;
                }
                $("#mini-slider>ul").css("margin-left",col_main_left+"px");
            });
        }
$(Slider(200,25,3));
