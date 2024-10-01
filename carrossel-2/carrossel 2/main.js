var imagem = 0;
document.getElementById('value').textContent = imagem;

function apaga() {
  
  document.getElementById('img'+imagem).style.display = 'none';
  
}

function anterior() {
    
    imagem--;
    
    if (imagem < 1) {
      
      imagem = 3;
      
    }
    
    if (imagem == 3) {
      document.getElementById('img1').style.display = 'none';
    }
    
    if (imagem == 2) {
      document.getElementById('img3').style.display = 'none';
    }
    
    if (imagem == 1) {
      document.getElementById('img2').style.display = 'none';
    }
    
    
    document.getElementById('img'+imagem).style.display = 'block';
    
   
    document.getElementById('value').textContent = imagem;
};

function proximo() {
  imagem++;
  
  if (imagem > 3) {
  
    imagem = 1;
  
  }
  
  if (imagem == 1) {
    document.getElementById('img3').style.display = 'none';
  }
  
  if (imagem == 2) {
    document.getElementById('img1').style.display = 'none';
  }
  
  if (imagem == 3) {
    document.getElementById('img2').style.display = 'none';
  }
  
  
  document.getElementById('img' + imagem).style.display = 'block';
  
  
  document.getElementById('value').textContent = imagem;
}
