let form = document.forms.list;
let arr = [];
let body = document.querySelector('tbody');
body.innerHTML = '';
form.onsubmit = (e) => {
   e.preventDefault();
   let b = true;
   let obj = {}
   let fm = new FormData(form);
   obj.id = Math.random();
   fm.forEach((value, key) => {
      if (value.length > 0) {
         obj[key] = value
      } else {
         b = false;
      }
   })
   if (b) {
      arr.push(obj);
      let doc = document;
      let body = doc.querySelector('tbody');
      body.innerHTML = ''
      let n = 1;
      for (let data of arr) {
         let tr = doc.createElement('tr');
         for (let i = 0; i < 4; i++) {
            let td = doc.createElement('td');
            if (i === 0) {
               td.innerText = n;
            } else if (i === 1) {
               td.innerText = data.fullName;
            } else if (i === 2) {
               td.innerText = 2023 - data.age;
            } else if (i === 3) {
               let btnOne = doc.createElement('button');
               btnOne.id = 'data-modal'
               let btnTwo = doc.createElement('button');
               let spanOne = doc.createElement('span');
               spanOne.classList.add('material-icons');
               spanOne.innerHTML = 'edit'
               let spanTwo = doc.createElement('span');
               spanTwo.classList.add('material-icons');
               spanTwo.innerHTML = 'delete'
               btnOne.append(spanOne);
               btnTwo.append(spanTwo);
               td.append(btnOne, btnTwo);
               btnTwo.onclick = () => {
                  tr.remove()
                  arr = arr.filter(item => item.id !== data.id);
               }
            }
            tr.append(td);
         }
         
         body.append(tr);
         n++;
      }
      let modal = document.querySelector('.modal');
      let openBtns = document.querySelectorAll('#data-modal');
      let closeBtns = document.querySelectorAll('[data-close]');
      openBtns.forEach((btn) => {
         btn.onclick = () => {
            modal.classList.add('show', 'fade')
         }
      });
      closeBtns.forEach((btn) => {
         btn.onclick = () => {
            modal.classList.remove('show', 'fade')
         }
      });
   }
   obj = {};
}


