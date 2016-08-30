window.template1 = `/**
  * Hello.^
  * I'm Marius.^
  * And I'm hoping you'll like what you'll see.^^ 
  * I'm gonna create my bio website^^
  * Let's start by coloring the body */^
   @body {
    font-family: 'Open Sans', sans-serif;
    background: #e2e1e0;
    color: rgba(0,0,0,0.87);
    padding: 100px;
   }|^

  // Let's add a container.^
  $var element = document.createElement('div');
  element.classList.add('container');
  document.body.appendChild(element);|^

  // Let's style it:^
  @.container {
    background: #fff;
    border-radius: 2px;
    min-height: 300px;
    margin: 0 auto;
    width: 700px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }|^^
  
  // Let's put my face on it:^
  $var image = document.createElement('img');
  image.src= 'mio.jpg';
  image.id = 'mug';
  document.querySelector('.container').appendChild(image);|^
  
  // Okay..^ Let's make it prettier :3^
  @#mug {
    width: 175px;
    border-radius: 2px;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
    margin-top: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }|
  
  // Here's my name:^
  $var title = document.createElement('h2');
  title.classList.add('title');  
  title.textContent = 'Marius Ionescu';
  document.querySelector('.container').appendChild(title);|

  //And I'm a:^
  @.title {
    text-align: center;
  }|
  @.title:after {
    content: 'Frontend Developer';
    display: block;
    font-size: 15px;
    text-decoration: underline;
  }|^^
  // That seems to be ok^
  // Look to your top right^
  `;

window.template2 = `// AAAAAAAAAAAAAAAAAAAAAAAND 
  $var description = document.createElement('div');
  var cvDownload = document.createElement('a');
  description.classList.add('description');
  description.innerHTML = \`Hello! I'm Marius and I'm from Romania. I've been working as a frontend developer for a while now and am keen on doing that for the foreseeable future. <br>Basically I do what I love and I love what I do :3.<br><br><strong>Checkout my CV bellow &darr; or get in touch at ionescu.m&#64;outlook.com</strong>\`;
  cvDownload.classList.add('btn');
  cvDownload.textContent = 'Download CV';
  cvDownload.href = 'cv-mio.pdf';
  cvDownload.target = '_blank';
  cvDownload.addEventListener('click', function () {

  });
  description.appendChild(cvDownload);
  document.querySelector('.container').appendChild(description);|^
  @.description {
    padding: 20px 50px;
    text-align: center;
  }|^
  @.btn {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 5px 30px;
    background-color: #2196f3;
    color: white;
    font-weight: bold;
    text-decoration: none;
    width: 150px;
    display: block;
    margin: 50px auto;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }|

  @.btn:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }|



  // IT'S DONE. ^^
  `;
 window.template3 = `
  // This will disappear in:
  // 5^
  // 4^
  // 3^
  // 2^
  // 1^
  // 0^
  // ...^^
  // Nah.. just kidding^^
  // Have a lovely day!`;