const customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2018'},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
  { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
 ];

customers.forEach( customer => {
  customer.dateJoined = new Date(customer.dateJoined);
});


customers.sort((a, b)=> a.dateJoined - b.dateJoined);


const list = document.querySelector('#customers');
const form = document.querySelector('form')

 function createCustomer(name, date, vip){
  this.name = name
  this.dateJoined = date
  this.isVIP = vip
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const name = form.querySelector('[name="Name"]').value
  const inputDate = new Date(form.querySelector('[name="Date"]').value)
  const vip = form.querySelector("input[type=checkbox]").checked
  
  let newID = customers.reduce((accum, cur) => {
    if (cur.id > accum){
      accum = cur.id
      
    }
      return accum
}, customers[0].id)

  let newCustomer = {id: newID + 1, name: name, email: name + '@gmail', isVIP: vip, dateJoined: inputDate }
  customers.push(newCustomer)
 
  
  render()
})




const render = ()=> {
  let html = customers.map( customer => {
    const diff = new Date() - customer.dateJoined;
    const oneYear = 1000*60*60*24*365;
    return `
      <li class='${ customer.isVIP ? 'vip': ''}'>
        ${ customer.name } Joined On ${ customer.dateJoined.toLocaleDateString() }. Has been a customer for ${(diff/oneYear).toFixed(2)} years.
      </li>
    `;
  }).join('');
  list.innerHTML = html;

};


render();