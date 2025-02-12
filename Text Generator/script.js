function result() {
    let number = parseInt(document.getElementById("number").value)
    let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, modi fugiat vitae alias, quas labore dolorem in id facere debitis reprehenderit, voluptate officia pariatur? Quis ducimus provident culpa sunt, sint quos dolores quibusdam, ad vel voluptate excepturi distinctio nam repellendus natus eaque deserunt nobis sapiente aspernatur reiciendis numquam? Odio similique, aliquam illum voluptatibus rem nulla laborum vitae. Quos, iusto. Voluptates animi hic error laborum nam soluta ratione tempora accusamus autem qui modi placeat recusandae esse, enim unde beatae nemo odit, expedita quasi repellat? Minus obcaecati corporis sit reprehenderit culpa debitis nemo repudiandae consectetur iure voluptate. Delectus non dicta excepturi odio!";
    if(number<1||number>100)
        document.getElementById("result").innerHTML="Please Enter Value Between 1 To 100"
    else{
        let text = para.split(" ");
        let text2= text.slice(0,number);
        document.getElementById("result").innerHTML=text2.join(" ");
    }
}
