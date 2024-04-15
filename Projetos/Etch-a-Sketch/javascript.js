const containerg = document.querySelector(".containerGrid");
      addBlocks(16);
      
      function addBlocks(size) {
        for(let i = 0; i < size; i++) {
          const line = document.createElement("div");
          line.classList.add('line');
          containerg.appendChild(line);
          for (let j = 0; j < size; j++) {
              const block = document.createElement("div");
              block.classList.add("block");
              block.style.background = "rgba(0,"+((256/size*j)-1)+","+ ((256/size*i)-1) + "," + (0.5) + ")";
              block.addEventListener('mouseover', () => {
                // Muda a cor de fundo para azul quando o mouse passa por cima
                block.style.background = 'black';
              });
          
              // Adiciona um evento de mouseout para restaurar a cor de fundo original
              block.addEventListener('mouseout', () => {
                // Restaura a cor de fundo original quando o mouse sai de cima
                block.style.background = "rgba(0,"+((256/size*j)-1)+","+ ((256/size*i)-1) + "," + (0.5) + ")";
              });
              line.appendChild(block);
          }
        }
      }
      
      const button = document.querySelector("#btn");
      button.onclick = changeGridOnClick;
      function changeGridOnClick() {
        const userInput = prompt("Digite o número de linhas e colunas: ", 16);
        containerg.innerHTML = "";
        addBlocks(userInput);
      }
      /*const lines = document.querySelectorAll(".line");
      lines.forEach((line) => {
          for (let j = 0; j < 16; j++) {
              const block = document.createElement("div");
              block.classList.add("block");
              line.appendChild(block);
          }
      })*/