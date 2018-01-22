/**
 * Created by Win10 on 20.01.2018.
 */

console.log($('.showpage'));
$('.showpage').each(function () {
    var random = 15+Math.random()*25;
   $(this).css('margin-top',random+'px');
});