var images = ["https://clipartspub.com/images/freeware-clipart-fathers-day-5.jpg","https://sep.yimg.com/ay/scrapyourtrip/vintage-tattoos-mom-laser-die-cut-57.jpg","https://clipground.com/images/big-sister-png-1.png"];
var names = ["Nitesh Shah","Shweta Shah","Jiya Shah"];
var i = 0;
function update()
{
    
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}
