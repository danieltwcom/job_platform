define(['jquery'],function($){
    $(document).ready(function(){
        let side_menu_btn = $("#side_menu_btn");
        let side_menu = $("#side_menu");
        let side_close_btn = $("#side_close_btn");
        let logout_btn = $("#logout_btn");
        
        // side menu toggle
        side_menu_btn.on("click",function(){
            openSideMenu();
        })
        side_close_btn.on("click",function(){
            closeSideMenu();
        })

        window.addEventListener("click",function(e){
            if(!document.getElementById("side_menu").contains(e.target) && !document.getElementById("side_menu_btn").contains(e.target)){
                closeSideMenu();
            }
        })


        function openSideMenu(){
            side_menu.css("width","250px");
        }

        function closeSideMenu(){
            side_menu.css("width","0px");
        }

    });
})